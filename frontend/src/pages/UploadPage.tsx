import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [batchLabel, setBatchLabel] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
      setMessage(''); // Clear previous messages
    } else {
      setFile(null);
    }
  };

  const handleBatchLabelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBatchLabel(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!file) {
      setMessage('Please select a file.');
      return;
    }
    if (!batchLabel.trim()) {
      setMessage('Please enter a batch label.');
      return;
    }

    setIsLoading(true);
    setMessage('Uploading...');

    const formData = new FormData();
    formData.append('file', file);

    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

    try {
      const response = await fetch(
        `${apiBaseUrl}/upload/ddpcr?batch=${encodeURIComponent(batchLabel.trim())}`,
        {
          method: 'POST',
          body: formData,
        }
      );

      const result = await response.json();

      if (response.ok) {
        navigate(`/batch/${encodeURIComponent(batchLabel.trim())}`);
      } else {
        setMessage(`Upload failed: ${result.message || response.statusText}`);
      }
    } catch (error) {
      setMessage(`Upload error: ${error instanceof Error ? error.message : String(error)}`);
    }
    setIsLoading(false);
  };

  return (
    <div className="p-6 space-y-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center">Upload ddPCR Data</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="batchLabel" className="block text-sm font-medium text-gray-700">
            Batch Label:
          </label>
          <input
            type="text"
            id="batchLabel"
            value={batchLabel}
            onChange={handleBatchLabelChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="fileUpload" className="block text-sm font-medium text-gray-700">
            CSV File:
          </label>
          <input
            type="file"
            id="fileUpload"
            accept=".csv"
            onChange={handleFileChange}
            required
            className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading || !file || !batchLabel.trim()}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-300"
        >
          {isLoading ? 'Uploading...' : 'Upload'}
        </button>
      </form>
      {message && (
        <p
          className={`mt-4 text-sm text-center ${message.startsWith('Successfully') ? 'text-green-600' : 'text-red-600'
            }`}
        >
          {message}
        </p>
      )}
    </div>
  );
} 