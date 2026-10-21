// Tambahkan baris ini di paling atas agar file terisolasi (tidak bentrok variabel global)
export {};

// Deklarasi variabel dengan tipe data
let nama: string = "Belajar TypeScript";
let umur: number = 20;

// Fungsi sederhana dengan type annotation pada parameter dan return value
function sapaUser(namaUser: string): string {
  return `Halo, ${namaUser}! Semangat belajarnya ya.`;
}

// Panggil fungsi sapaUser
console.log(sapaUser(nama));