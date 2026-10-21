// Contoh mengambil data dari API publik gratis dengan fetch

// Fungsi async untuk mengambil data user dari JSONPlaceholder
async function ambilDataUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await response.json();
    
    console.log("Data User Berhasil Didapat:");
    console.log(`Nama: ${data.name}`);
    console.log(`Email: ${data.email}`);
  } catch (error) {
    console.error("Gagal mengambil data:", error);
  }
}

// Jalankan fungsinya
ambilDataUser();
