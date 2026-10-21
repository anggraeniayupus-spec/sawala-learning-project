// File index.js untuk mencari dan memfilter produk

import { produkList } from "./data";

// Fungsi untuk mencari produk berdasarkan kata kunci dan kategori
const cariProduk = (kataKunci = "", kategori = "semua") => {
  return produkList.filter((item) => {
    // Cek apakah nama produk mengandung kata kunci (case insensitive)
    const cocokNama = item.nama.toLowerCase().includes(kataKunci.toLowerCase());
    // Cek apakah kategori cocok, atau kalau kategori "semua" maka lolos semua
    const cocokKategori = kategori === "semua" || item.kategori === kategori;
    return cocokNama && cocokKategori;
  });
};

console.log("Cari produk 'mouse':", cariProduk("mouse"));
console.log("Filter kategori 'Pakaian':", cariProduk("", "Pakaian"));
