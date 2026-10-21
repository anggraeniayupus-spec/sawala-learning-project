// Contoh metode array (.filter dan .map) dengan perulangan data

// Daftar barang belanja dengan nama, harga, dan kategori
const keranjangBelanja = [
  { nama: "Sepatu", harga: 200000, kategori: "Fashion" },
  { nama: "Kopi", harga: 15000, kategori: "Makanan" },
  { nama: "Roti", harga: 10000, kategori: "Makanan" },
  { nama: "Kaos", harga: 50000, kategori: "Fashion" }
];

// 1. Tampilkan cuma barang yang kategori-nya Makanan (pake .filter)
const makanan = keranjangBelanja.filter((item) => item.kategori === "Makanan");
console.log("Daftar Makanan:", makanan);

// 2. Bikin daftar nama barangnya aja (pake .map)
const namaBarang = keranjangBelanja.map((item) => item.nama);
console.log("Nama-nama Barang:", namaBarang);
