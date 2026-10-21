// Komponen Tombol Aksi (Button).
// Digunakan untuk tombol interaktif seperti "+ Tambah Artikel" pada gambar referensi,
// diperluas dengan lebih banyak varian gaya (primary, secondary, outline) dan status disabled.
import React from 'react';

// Definisi tipe props yang diterima oleh komponen Button
interface ButtonProps {
  label: string;            // Teks yang ditampilkan pada tombol
  onClick?: () => void;     // Fungsi yang dipanggil saat tombol diklik (opsional)
  variant?: 'primary' | 'secondary' | 'outline'; // Gaya warna tombol
  disabled?: boolean;       // Apakah tombol dalam kondisi tidak aktif (disabled)
}

// Gaya dasar yang berlaku untuk semua varian tombol
const baseStyle = {
  padding: '10px 18px',
  borderRadius: '8px',      // Sudut membulat
  fontSize: '14px',
  fontWeight: '600',        // Teks tebal
  cursor: 'pointer',        // Kursor jari tangan
  border: 'none',           // Tanpa border bawaan browser
  transition: 'all 0.2s ease', // Animasi halus saat perubahan gaya
  fontFamily: 'inherit',    // Ikuti font induk
};

// Gaya spesifik untuk setiap varian
const variantStyles: Record<string, React.CSSProperties> = {
  primary:   { backgroundColor: '#2563eb', color: '#ffffff' },  // Biru tua, teks putih
  secondary: { backgroundColor: '#e5e7eb', color: '#111827' },  // Abu-abu muda, teks gelap
  outline:   { backgroundColor: 'transparent', color: '#2563eb', border: '1px solid #2563eb' }, // Garis tepi biru
};

// Komponen Button menerima label, onClick, variant, dan disabled.
export const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary', disabled }) => {
  // Gabungkan gaya dasar dengan gaya sesuai variant yang dipilih
  const style = { ...baseStyle, ...variantStyles[variant] };

  // Jika tombol disabled, kurangi opacity dan nonaktifkan kursor pointer
  if (disabled) {
    style.opacity = '0.5';
    style.cursor = 'not-allowed';
  }

  return (
    <button style={style} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};
