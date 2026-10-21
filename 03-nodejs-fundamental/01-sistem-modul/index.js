  // Panggil fungsinya dari file math.js
const math = require('./math'); //cirikhas commonJS

console.log("=== Latihan Sistem Modul (Function Biasa) ===");

// Cara manggilnya tinggal pake titik (.) diikuti nama fungsinya
console.log("Hasil 5 + 3 =", math.tambah(5, 3));
console.log("Hasil 10 - 4 =", math.kurang(10, 4));