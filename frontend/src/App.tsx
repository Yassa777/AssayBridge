import './App.css'

import { BrowserRouter, Routes, Route, Navigate, useParams, Link } from 'react-router-dom';
import BatchView from './pages/BatchView';
import UploadPage from './pages/UploadPage';
import BatchListPage from './pages/BatchListPage';

export default function App() {
  return (
    <BrowserRouter>
      <nav className="p-4 bg-gray-100 shadow-md">
        <ul className="flex space-x-6 items-center max-w-4xl mx-auto">
          <li><Link to="/" className="text-lg font-semibold text-indigo-700 hover:text-indigo-900">All Batches</Link></li>
          <li><Link to="/upload" className="text-lg font-semibold text-indigo-700 hover:text-indigo-900">Upload Data</Link></li>
        </ul>
      </nav>
      <div className="p-4 max-w-4xl mx-auto">
        <Routes>
          <Route path="/batch/:id" element={<BatchRoute />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/" element={<BatchListPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function BatchRoute() {
  const { id } = useParams();
  return <BatchView batchId={id!} />;
}

