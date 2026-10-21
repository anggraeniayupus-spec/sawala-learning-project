// Komponen utama Dashboard Artikel

import { useState } from 'react';
import { Card } from './components/Card';
import { Button } from './components/Button';

export function App() {
  // State untuk menyimpan jumlah artikel, awalnya 5
  const [artikelCount, setArtikelCount] = useState<number>(5);

  // Fungsi untuk menambah jumlah artikel saat tombol diklik
  const tambahArtikel = () => {
    setArtikelCount(prev => prev + 1);
  };

  return (
    <div style={{ padding: '24px', fontFamily: 'sans-serif' }}>
      <h1>Dashboard Artikel</h1>
      
      {/* List Komponen Card */}
      <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
        <Card title="Total Artikel" value={artikelCount} description="Artikel terpublikasi" />
<Card title="Total Views" value="1,240" description="Pengunjung bulan ini" />
      </div>

      {/* Komponen Button */}
      <Button label="+ Tambah Artikel" onClick={tambahArtikel} variant="primary" />
    </div>
  );
}

export default App;
