// src/pages/BatchView.tsx
import { useQuery, useMutation } from '@apollo/client';
import { GET_BATCH, SUMMARISE_BATCH } from '../graphql/ops.ts';
import { Table } from '@tanstack/react-table';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

interface Props { batchId: string }

export default function BatchView({ batchId }: Props) {
  const { data, loading } = useQuery(GET_BATCH, { variables: { id: batchId } });
  const [summarise, { loading: summarising }] = useMutation(SUMMARISE_BATCH, {
    variables: { id: batchId },
    refetchQueries: [GET_BATCH],
  });

  if (loading) return <p className="text-gray-500">loading…</p>;
  const batch = data.batch;

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">batch {batch.label}</h1>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          disabled={summarising}
          onClick={() => summarise()}
        >
          {summarising ? 'summarising…' : 'generate summary'}
        </button>
      </div>

      {/* table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-3 py-2 text-left">sample</th>
              <th className="px-3 py-2 text-left">target</th>
              <th className="px-3 py-2 text-right">copies/µl</th>
              <th className="px-3 py-2 text-center">pass?</th>
            </tr>
          </thead>
          <tbody>
            {batch.ddpcrRuns.map((r: any) => (
              <tr key={r.id} className="border-b">
                <td className="px-3 py-1">{r.sampleLabel}</td>
                <td className="px-3 py-1">{r.target}</td>
                <td className="px-3 py-1 text-right">{r.copiesPerUl.toFixed(1)}</td>
                <td className="px-3 py-1 text-center">
                  {r.pass ? '✅' : '❌'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* chart */}
      <div className="w-full h-64">
        <ResponsiveContainer>
          <BarChart data={batch.ddpcrRuns}>
            <XAxis dataKey="sampleLabel" hide />
            <YAxis />
            <Tooltip />
            <Bar dataKey="copiesPerUl" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* markdown summary */}
      {batch.summaryMarkdown && (
        <article className="prose max-w-none">
          <h2>summary</h2>
          <pre className="whitespace-pre-wrap">{batch.summaryMarkdown}</pre>
        </article>
      )}
    </div>
  );
}
