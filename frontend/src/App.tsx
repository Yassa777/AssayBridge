import './App.css'

import { BrowserRouter, Routes, Route, Navigate, useParams, Link } from 'react-router-dom';
import BatchView from './pages/BatchView';
import UploadPage from './pages/UploadPage';
import BatchListPage from './pages/BatchListPage';

export default function App() {
  return (
    <BrowserRouter>
      <nav className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white p-4 shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity duration-150">
            AssayBridge
          </Link>
          <ul className="flex space-x-6">
            <li><Link to="/" className="text-gray-300 hover:text-white transition-colors duration-150">All Batches</Link></li>
            <li><Link to="/upload" className="text-gray-300 hover:text-white transition-colors duration-150">Upload Data</Link></li>
          </ul>
        </div>
      </nav>
      <main className="p-6 bg-gray-50 min-h-[calc(100vh-64px)]"> {/* 64px is approx height of a p-4 navbar */}
        <div className="max-w-6xl mx-auto">
          <Routes>
            <Route path="/batch/:id" element={<BatchRoute />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/" element={<BatchListPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

function BatchRoute() {
  const { id } = useParams();
  return <BatchView batchId={id!} />;
}

