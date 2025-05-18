// src/routes/ddpcr.ts
import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import csv from 'csv-parser'
import prisma from '../lib/prisma'

const POTENCY_LIMIT = 100    // copies/µl

const ddpcrRoute: FastifyPluginAsync = async (app) => {
  app.register(require('@fastify/multipart'))

  app.post('/upload/ddpcr', async function (req, reply) {
    // expecting multipart/form-data with field "file"
    const data = await (req as any).file()
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
      const lambda = -Math.log(1 - positives / total)
      const copies = lambda / 0.000758               // 0.758 nL per droplet

      await prisma.ddpcrRun.create({
        data: {
          batchId: batch.id,
          sampleLabel: r.Sample,
          target: r.Target,
          kit: r.Kit,
          sampleType: r.Sample_Type?.toUpperCase(),   // assumes enum
          templateUsed: r.Template === '+',
          enzymeAdded: r.Enzyme === '+',
          spikeIn: r['Spike-In'],
          positives,
          negatives,
          totalDroplets: total,
          copiesPerUl: copies,
          pass: copies >= POTENCY_LIMIT,
          runAt: new Date(r.Date),
        },
      })
    }

    reply.send({ ok: true, imported: rows.length })
  })
}

export default fp(ddpcrRoute)
