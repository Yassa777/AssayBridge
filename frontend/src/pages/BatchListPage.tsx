import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { GET_BATCHES } from '../graphql/ops.ts';

interface BatchStub {
  id: string;
  label: string;
  createdAt: string; // Assuming string from GQL, adjust if it's a Date object
  status: string;
}

interface GetBatchesData {
  batches: BatchStub[];
}

export default function BatchListPage() {
  const { data, loading, error } = useQuery<GetBatchesData>(GET_BATCHES, {
    variables: { limit: 50 }, // Fetch up to 50 batches, adjust as needed
    fetchPolicy: 'cache-and-network', // Ensures fresh data
  });

  if (loading) return <p className="text-gray-500">Loading batches…</p>;
  if (error) return <p className="text-red-500">Error loading batches: {error.message}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Available Batches</h1>
      {data && data.batches.length > 0 ? (
        <ul className="space-y-3">
          {data.batches.map((batch) => (
            <li key={batch.id} className="bg-white shadow rounded-md p-4 hover:bg-gray-50">
              <Link to={`/batch/${batch.label}`} className="block">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-indigo-600 hover:text-indigo-800">
                    {batch.label}
                  </span>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${batch.status === 'PASS' ? 'bg-green-100 text-green-700' : batch.status === 'FAIL' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {batch.status}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Created: {new Date(batch.createdAt).toLocaleDateString()}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No batches found.</p>
      )}
    </div>
  );
} 