import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import App from './App';
import Upgrade from './pages/Upgrade';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import AuthCallback from './pages/AuthCallback';
import PublicDocument from './pages/PublicDocument';
import Layout from './components/Layout'; // ✅ Optional layout wrapper

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/upgrade" element={<Upgrade />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route path="/doc/:id" element={<PublicDocument />} />
        </Routes>

        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#1f2937',
              color: '#fff',
              borderRadius: '6px',
            },
          }}
        />
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
