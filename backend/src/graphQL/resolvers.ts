import prisma from '../lib/prisma.js';
import { openai } from '../openai.js';

export const resolvers = {
  Query: {
    batch: (_: any, { id }: { id: string }) =>
      prisma.batch.findUnique({ where: { label: id }, include: { ddpcrRuns: true } }),

    batches: (_: any, { limit }: { limit: number }) =>
      prisma.batch.findMany({
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: { ddpcrRuns: true },
      }),
  },

  Mutation: {
    summariseBatch: async (_: any, { batchId }: { batchId: string }) => {
      const batch = await prisma.batch.findUnique({
        where: { id: batchId },
        include: { ddpcrRuns: true },
      });
      if (!batch) throw new Error('batch not found');

      const prompt = `
you are a qc auditor. summarise this ddpcr potency data.

batch label: ${batch.label}
runs:
${batch.ddpcrRuns
  .map(
    (r: any) =>
      `sample ${r.sampleLabel}, target ${r.target}, copies/µl ${r.copiesPerUl.toFixed(
        1,
      )}, pass ${r.pass}`,
  )
  .join('\n')}
`;
      const completion = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: prompt }],
      });

      const md = completion.choices[0].message.content ?? 'n/a';

      return prisma.batch.update({
        where: { id: batchId },
        data: {
          summaryMarkdown: md,
          summarisedAt: new Date().toISOString(),
        },
        include: { ddpcrRuns: true },
      });
    },
  },

  Batch: {
    ddpcrRuns: (parent: any) =>
      prisma.dDPCRRun.findMany({ where: { batchId: parent.id } }),
  },
};
