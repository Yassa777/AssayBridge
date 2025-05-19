import React, { useState, useMemo } from 'react';
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

const QC_STATUSES = ['ALL', 'PENDING', 'PASS', 'FAIL'];
const SORTABLE_FIELDS = [
  { value: 'label', label: 'Label' },
  { value: 'createdAt', label: 'Date Created' },
  { value: 'status', label: 'Status' },
];

export default function BatchListPage() {
  const { data, loading, error } = useQuery<GetBatchesData>(GET_BATCHES, {
    variables: { limit: 100 }, // Fetch a bit more if filtering/sorting client-side
    fetchPolicy: 'cache-and-network',
    onCompleted: (fetchedData) => {
      console.log('Fetched batches data:', fetchedData);
      if (fetchedData && fetchedData.batches) {
        fetchedData.batches.forEach(batch => {
          // Try parsing the timestamp string to a number
          const timestampNumber = parseInt(batch.createdAt, 10);
          console.log(`Batch: ${batch.label}, CreatedAt Raw: '${batch.createdAt}', Timestamp Number: ${timestampNumber}, Parsed Date: ${new Date(timestampNumber)}`);
        });
      }
    }
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('ALL');
  const [sortField, setSortField] = useState('createdAt');
  const [sortDirection, setSortDirection] = useState('desc');

  const processedBatches = useMemo(() => {
    if (!data?.batches) return [];

    let filtered = data.batches.slice(); // Create a copy to avoid mutating original data

    // Apply search term filter
    if (searchTerm) {
      filtered = filtered.filter(batch =>
        batch.label.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply status filter
    if (filterStatus !== 'ALL') {
      filtered = filtered.filter(batch => batch.status === filterStatus);
    }

    // Apply sorting
    filtered.sort((a, b) => {
      let valA = a[sortField as keyof BatchStub];
      let valB = b[sortField as keyof BatchStub];

      // Handle date sorting for createdAt
      if (sortField === 'createdAt') {
        valA = new Date(valA).getTime() as any;
        valB = new Date(valB).getTime() as any;
      }

      let comparison = 0;
      if (valA > valB) {
        comparison = 1;
      } else if (valA < valB) {
        comparison = -1;
      }
      return sortDirection === 'asc' ? comparison : comparison * -1;
    });

    return filtered;
  }, [data?.batches, searchTerm, filterStatus, sortField, sortDirection]);

  if (loading) return <p className="text-gray-500 text-center py-10">Loading batches…</p>;
  if (error) return <p className="text-red-500 text-center py-10">Error loading batches: {error.message}</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Available Batches</h1>
      
      {/* Filter and Sort Controls */}
      <div className="mb-6 p-4 bg-gray-100 rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
          <div>
            <label htmlFor="searchTerm" className="block text-sm font-medium text-gray-700 mb-1">Search by Label:</label>
            <input
              type="text"
              id="searchTerm"
              placeholder="Enter batch label..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="filterStatus" className="block text-sm font-medium text-gray-700 mb-1">Filter by Status:</label>
            <select
              id="filterStatus"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white"
            >
              {QC_STATUSES.map(status => (
                <option key={status} value={status}>{status === 'ALL' ? 'All Statuses' : status}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="sortField" className="block text-sm font-medium text-gray-700 mb-1">Sort by:</label>
            <select
              id="sortField"
              value={sortField}
              onChange={(e) => setSortField(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white"
            >
              {SORTABLE_FIELDS.map(field => (
                <option key={field.value} value={field.value}>{field.label}</option>
              ))}
            </select>
          </div>
          <div>
            <button
              onClick={() => setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc')}
              className="w-full px-3 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sort {sortDirection === 'asc' ? 'Descending' : 'Ascending'} (Currently {sortField === 'createdAt' ? 'Newest First' : sortDirection === 'asc' ? 'A-Z' : 'Z-A'})
            </button>
          </div>
        </div>
      </div>

      {processedBatches.length > 0 ? (
        <ul className="space-y-4">
          {processedBatches.map((batch) => (
            <li key={batch.id} className="bg-white shadow-lg rounded-lg p-5 hover:shadow-xl transition-shadow duration-150">
              <Link to={`/batch/${batch.label}`} className="block group">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xl font-semibold text-indigo-700 group-hover:text-indigo-800 transition-colors duration-150">
                    {batch.label}
                  </span>
                  <span className={`px-3 py-1 text-xs font-bold rounded-full shadow-sm ${batch.status === 'PASS' ? 'bg-green-100 text-green-800 border border-green-300' : batch.status === 'FAIL' ? 'bg-red-100 text-red-800 border border-red-300' : 'bg-yellow-100 text-yellow-800 border border-yellow-300'}`}>
                    {batch.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Created: {new Date(parseInt(batch.createdAt, 10)).toLocaleDateString()} {new Date(parseInt(batch.createdAt, 10)).toLocaleTimeString()}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 text-center py-10">No batches match your criteria.</p>
      )}
    </div>
  );
} 