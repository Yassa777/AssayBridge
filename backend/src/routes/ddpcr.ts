// src/routes/ddpcr.ts
import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import csv from 'csv-parser'
import prisma from '../lib/prisma'
import fastifyMultipart, { MultipartFile } from '@fastify/multipart'

const POTENCY_LIMIT = 100    // copies/µl

const ddpcrRoute: FastifyPluginAsync = async (app) => {
  await app.register(fastifyMultipart)

  app.post('/upload/ddpcr', async function (req, reply) {
    // expecting multipart/form-data with field "file"
    const data = await req.file()
    if (!data) return reply.code(400).send({ error: 'file missing' })

    const rows: any[] = []
    await new Promise((res, rej) =>
      data.file
        .pipe(
          csv(),
        )
        .on('data', (row: any) => rows.push(row))
        .on('end', res)
        .on('error', rej),
    )

    // assume every upload is for a single batch, passed as query ?batch=B24
    const batchLabel = (req.query as any).batch ?? 'UNLABELED'
    const batch = await prisma.batch.upsert({
      where: { label: batchLabel },
      update: {},
      create: { label: batchLabel, status: 'PENDING' },
    })

    // map rows → ddpcr_run records
    for (const r of rows) {
      const positives = parseInt(r.Positives, 10)
      const negatives = parseInt(r.Negatives, 10)
      const total = positives + negatives
      
      // Handle division by zero and avoid Infinity
      let copiesPerUl = 0;
      if (total > 0 && negatives > 0) {
        const lambda = -Math.log(1 - positives / total)
        copiesPerUl = lambda / 0.000758  // 0.758 nL per droplet
      } else if (total > 0 && negatives === 0) {
        // If all droplets are positive, use a very high but finite value
        copiesPerUl = 1000000  // A million copies/µl as an arbitrary high value
      }
      
      console.log(`Processing row: Sample=${r.Sample}, Target=${r.Target}, Positives=${positives}, Negatives=${negatives}, Total=${total}, CopiesPerUl=${copiesPerUl}`)

      // Validate sample type against known values in SampleType enum
      let sampleType = r.Sample_Type?.toUpperCase();
      if (sampleType !== 'SYNTHETIC' && sampleType !== 'PATIENT' && sampleType !== 'QC_CTRL') {
        console.log(`Warning: Unknown sample type "${sampleType}", defaulting to "SYNTHETIC"`);
        sampleType = 'SYNTHETIC';
      }

      await prisma.dDPCRRun.create({
        data: {
          sampleLabel: r.Sample,
          target: r.Target,
          kit: r.Kit,
          sampleType: sampleType,   // Using our validated sample type
          templateUsed: r.Template === '+',
          enzymeAdded: r.Enzyme === '+',
          spikeIn: r['Spike-In'],
          positives,
          negatives,
          totalDroplets: total,
          copiesPerUl: copiesPerUl,  // Using our safely calculated value
          pass: copiesPerUl >= POTENCY_LIMIT,
          runAt: new Date(r.Date),
          batch: {
            connect: {
              id: batch.id
            }
          }
        },
      })
    }

    reply.send({ ok: true, imported: rows.length })
  })
}

export default fp(ddpcrRoute)
