// Komponen Kartu Statistik (Stat Card).
// Digunakan untuk menampilkan satu metrik dalam bentuk kotak dengan judul, nilai utama, dan keterangan.
// Konsep ini merujuk pada kartu "Total Artikel" / "Total Views" pada gambar referensi,
// dikembangkan lebih lanjut dengan pilihan variasi warna (variant).
import React from 'react';

// Definisi tipe props yang diterima oleh komponen Card.
// TypeScript memastikan properti yang diterima sesuai, sehingga mencegah kesalahan tipe data saat digunakan.
interface CardProps {
  title: string;            // Judul metrik, contoh: "Total Artikel"
  value: string | number;   // Nilai utama yang ditampilkan (angka atau teks)
  description?: string;     // Keterangan tambahan (opsional, boleh tidak diisi)
  variant?: 'default' | 'success' | 'warning' | 'info'; // Variasi warna aksen pada kartu
}

// Pemetaan variant ke warna aksen (border atas kartu)
const variantColors: Record<string, string> = {
  default: '#2563eb',   // Biru
  success: '#16a34a',   // Hijau
  warning: '#d97706',   // Oranye
  info: '#0891b2',      // Biru muda
};

// Komponen Card menerima props title, value, description, dan variant.
export const Card: React.FC<CardProps> = ({ title, value, description, variant = 'default' }) => {
  // Ambil warna sesuai variant, fallbacks ke default jika variant tidak dikenali
  const accent = variantColors[variant] || variantColors.default;

  return (
    <div style={{
      backgroundColor: '#ffffff',     // Latar belakang kotak putih
      border: '1px solid #e5e7eb',    // Border abu-abu ringan
      borderRadius: '12px',           // Sudut membulat
      padding: '20px',                // Jarak di dalam kotak
      borderTop: `4px solid ${accent}`, // Aksen warna di bagian atas sesuai variant
      boxShadow: '0 1px 3px rgba(0,0,0,0.08)', // Bayangan lembut
    }}>
      {/* Judul metik huruf kecil semua, tebal, abu-abu */}
      <p style={{
        fontSize: '13px',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        color: '#6b7280',
        marginBottom: '12px',
      }}>{title}</p>

      {/* Nilai utama, font besar dan tebal */}
      <p style={{
        fontSize: '32px',
        fontWeight: '800',
        color: '#111827',
        marginBottom: '8px',
        lineHeight: '1',
      }}>{value}</p>

      {/* Keterangan tambahan, hanya ditampilkan jika description diisi */}
      {description && (
        <p style={{
          fontSize: '13px',
          color: '#9ca3af',  // Abu-abu muda
          margin: 0,
        }}>{description}</p>
      )}
    </div>
  );
};
