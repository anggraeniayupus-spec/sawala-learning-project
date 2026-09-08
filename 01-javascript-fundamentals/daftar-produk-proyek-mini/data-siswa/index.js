const dataSiswa = [
  { nama: "Budi", nilai: 85, lulus: true },
  { nama: "Siti", nilai: 60, lulus: false },
  { nama: "Andi", nilai: 90, lulus: true }
];

// Ambil yang lulusnya aj
const siswaLulus = dataSiswa
  .filter((siswa) => siswa.lulus)
  .map((siswa) => siswa.nama);

// Hitung rata-rata
const totalNilai = dataSiswa.reduce((acc, siswa) => acc + siswa.nilai, 0);
const rataRata = totalNilai / dataSiswa.length;

console.log("=== EXERCISE 2: DATA SISWA ===");
console.log("Siswa Lulus:", siswaLulus);
console.log("Rata-rata Nilai Kelas:", rataRata.toFixed(1));