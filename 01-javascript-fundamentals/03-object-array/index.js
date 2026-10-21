// Contoh array of objects (daftar barang dalam bentuk objek)

// Ini adalah keranjang belanja yang berisi daftar barang
const keranjang = [
  { nama: "Kopi", harga: 15000 },
  { nama: "Roti", harga: 10000 }
];

// Nambah barang baru ke keranjang dengan push
keranjang.push({ nama: "Susu", harga: 12000 });

console.log("Isi Keranjang:", keranjang);
console.log("Barang ke-2:", keranjang[1].nama);
