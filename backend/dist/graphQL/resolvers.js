import prisma from '../lib/prisma.js';
import { openai } from '../openai.js';
export const resolvers = {
    Query: {
        batch: (_, { id }) => prisma.batch.findUnique({ where: { label: id }, include: { ddpcrRuns: true } }),
        batches: (_, { limit }) => prisma.batch.findMany({
            take: limit,
            orderBy: { createdAt: 'desc' },
            include: { ddpcrRuns: true },
        }),
    },
    Mutation: {
        summariseBatch: async (_, { batchId }) => {
            const batch = await prisma.batch.findUnique({
                where: { label: batchId },
                include: { ddpcrRuns: true },
            });
            if (!batch)
                throw new Error('batch not found');
            const prompt = `
you are a qc auditor. summarise this ddpcr potency data.

batch label: ${batch.label}
runs:
${batch.ddpcrRuns
                .map((r) => `sample ${r.sampleLabel}, target ${r.target}, copies/µl ${r.copiesPerUl.toFixed(1)}, pass ${r.pass}`)
                .join('\n')}
`;
            const completion = await openai.chat.completions.create({
                model: 'gpt-4o-mini',
                messages: [{ role: 'user', content: prompt }],
            });
            const md = completion.choices[0].message.content ?? 'n/a';
            return prisma.batch.update({
                where: { id: batch.id },
                data: {
                    summaryMarkdown: md,
                    summarisedAt: new Date().toISOString(),
                },
                include: { ddpcrRuns: true },
            });
        },
    },
    Batch: {
        ddpcrRuns: (parent) => prisma.dDPCRRun.findMany({ where: { batchId: parent.id } }),
    },
};
