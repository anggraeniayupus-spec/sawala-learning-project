// Contoh Promise sederhana (analogi pesan makanan)

// Fungsi untuk memesan makanan, mengembalikan Promise
const pesanMakanan = (status) => {
  return new Promise((resolve, reject) => {
    console.log("Sedang menyiapkan makanan...");
    setTimeout(() => {
      if (status) {
        resolve("Yeay! Makanan berhasil diantar 🍔");
      } else {
        reject("Duh, abang ojolnya ban bocor 😭");
      }
    }, 2000);
  });
};

// Fungsi async untuk menjalankan pemesanan dengan async/await
async function jalankanPesenan() {
  try {
    const hasil = await pesanMakanan(true);
    console.log(hasil);
  } catch (error) {
    console.log(error);
  }
}

// Jalankan fungsinya
jalankanPesenan();
