// Komponen Utama Dashboard (App).
// Berisi tata letak lengkap: sidebar navigasi, header, grid kartu statistik, dan tabel aktivitas terbaru.
// Konsep ini merujuk pada dashboard artikel pada gambar referensi (kartu metrik + tombol tambah artikel),
// dikembangkan menjadi dashboard yang lebih kaya dan berbeda tampilannya.
import { useState } from 'react';
import { Card } from './Card';
import { Button } from './Button';

// Tipe data untuk satu baris aktivitas dalam tabel terbaru
interface Activity {
  id: number;
  judul: string;
  status: 'published' | 'draft';
  waktu: string;
}

// Data dummy (contoh) untuk menampilkan daftar aktivitas terbaru
const ACTIVITIES: Activity[] = [
  { id: 1, judul: 'Panduan Belajar React untuk Pemula', status: 'published', waktu: '2 jam yang lalu' },
  { id: 2, judul: 'Tips Optimasi Performa Aplikasi Web', status: 'published', waktu: '5 jam yang lalu' },
  { id: 3, judul: 'Cara Mengonfigurasi TypeScript di Vite', status: 'draft', waktu: '1 hari yang lalu' },
  { id: 4, judul: 'Pengantar Tailwind CSS', status: 'published', waktu: '2 hari yang lalu' },
];

// Fungsi komponen App adalah komponen utama yang akan dirender oleh React
export function App() {
  // useState adalah Hook React untuk menyimpan state (data yang dapat berubah).
  // Di sini menyimpan jumlah artikel, nilainya awalnya 12.
  const [artikelCount, setArtikelCount] = useState<number>(12);

  // Fungsi yang dipanggil saat tombol "+ Tambah Artikel" diklik.
  // Menggunakan updater function (prev => prev + 1) agar state baru selalu berdasarkan state terbaru.
  const handleTambahArtikel = () => {
    setArtikelCount(prev => prev + 1);
  };

  return (
    <div className="dashboard">
      {/* --- Sidebar Navigasi --- */}
      <aside className="sidebar">
        <h2>Dashboard</h2>
        <nav className="nav">
          <a href="#" className="active">Beranda</a>
          <a href="#">Artikel</a>
          <a href="#">Komentar</a>
          <a href="#">Pengaturan</a>
        </nav>
      </aside>

      {/* --- Konten Utama --- */}
      <main className="main-content">
        <header className="header">
          <div>
            <h1>Dashboard Artikel</h1>
            <p className="welcome">Selamat datang kembali, Admin</p>
          </div>
          {/* Tombol aksi untuk menambah artikel; saat diklik akan memanggil handleTambahArtikel */}
          <Button label="+ Tambah Artikel" variant="primary" onClick={handleTambahArtikel} />
        </header>

        {/* --- Grid Kartu Statistik --- */}
        <div className="stats-grid">
          {/* Setiap Card menampilkan satu metrik dengan variant warna yang berbeda-beda */}
          <Card title="Total Artikel" value={artikelCount} description="Artikel terpublikasi" variant="default" />
          <Card title="Total Views" value="1.240" description="Pengunjung bulan ini" variant="success" />
          <Card title="Komentar" value="342" description="Komentar baru ini minggu" variant="warning" />
          <Card title="Draft" value="6" description="Artikel yang belum dipublikasi" variant="info" />
        </div>

        {/* --- Section Aktivitas Terbaru --- */}
        <section className="activity-section">
          <h3>Aktivitas Terbaru</h3>
          <table className="activity-table">
            <thead>
              <tr>
                <th>Judul Artikel</th>
                <th>Status</th>
                <th>Waktu</th>
              </tr>
            </thead>
            <tbody>
              {/* Map array ACTIVITIES menjadi baris tabel; key digunakan React untuk identifikasi tiap baris */}
              {ACTIVITIES.map(activity => (
                <tr key={activity.id}>
                  <td>{activity.judul}</td>
                  <td>
                    {/* Badge status berwarna tergantung apakah artikel published atau draft */}
                    <span className={`status-badge ${activity.status === 'published' ? 'status-published' : 'status-draft'}`}>
                      {activity.status === 'published' ? 'Dipublikasi' : 'Draft'}
                    </span>
                  </td>
                  <td>{activity.waktu}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

// Export default App agar bisa diimpor di main.tsx sebagai komponen root
export default App;
