// fungsi cek stok
const cekKetersediaan = (namaBarang, stok) => {
  if (stok > 0) {
    return `Barang ${namaBarang} masih ada, sisa ${stok} pcs.`;
  } else {
    return `Maaf, ${namaBarang} udah habis!`;
  }
};

// Panggil fungsinya
console.log(cekKetersediaan("Sepatu", 5));
console.log(cekKetersediaan("Kaos", 0));