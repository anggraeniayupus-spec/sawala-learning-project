// Contoh manipulasi data siswa dengan .filter, .map, dan .reduce

// Daftar siswa dengan nama, nilai, dan status lulus
const dataSiswa = [
  { nama: "Budi", nilai: 85, lulus: true },
  { nama: "Siti", nilai: 60, lulus: false },
  { nama: "Andi", nilai: 90, lulus: true }
];

// Ambil hanya nama siswa yang lulus (pake .filter lalu .map)
const siswaLulus = dataSiswa
  .filter((siswa) => siswa.lulus)
  .map((siswa) => siswa.nama);

// Hitung total semua nilai dengan .reduce
const totalNilai = dataSiswa.reduce((acc, siswa) => acc + siswa.nilai, 0);

// Hitung rata-rata nilai kelas
const rataRata = totalNilai / dataSiswa.length;

console.log("=== EXERCISE 2: DATA SISWA ===");
console.log("Siswa Lulus:", siswaLulus);
console.log("Rata-rata Nilai Kelas:", rataRata.toFixed(1));
