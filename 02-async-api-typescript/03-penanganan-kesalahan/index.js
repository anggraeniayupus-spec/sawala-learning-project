// Contoh penanganan kesalahan (error handling) saat memanggil API

async function cekErrorAPI() {
  try {
    // Sengaja pakai URL salah biar error-nya bisa ditangkap
    const response = await fetch("https://api.salah-nih.com/data");
    
    // Kalau response tidak OK (bukan 2xx), lempar error
    if (!response.ok) {
      throw new Error(`Server bermasalah! Status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log(data);
    
  } catch (error) {
    // Tangkap error yang terjadi dan tampilkan pesannya
    console.log("⚠️ Ups, terjadi kesalahan:");
    console.log(error.message);
  }
}

// Jalankan fungsinya
cekErrorAPI();
