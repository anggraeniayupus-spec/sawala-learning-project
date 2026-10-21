// Titik masuk (entry point) aplikasi React.
// File ini adalah tempat pertama kali dieksekusi saat aplikasi dimuat di browser.

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './components/index.css';

// Ambil elemen dengan id "root" dari index.html sebagai tempat React memasang (mount) aplikasi
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Elemen #root tidak ditemukan di index.html');
}

// ReactDOM.createRoot digunakan (React 18+) untuk membuat root rendering.
// React.StrictMode aktifkan pemeriksaan tambahan dalam mode development.
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
