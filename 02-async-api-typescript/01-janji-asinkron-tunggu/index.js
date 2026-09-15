// contoh promise pemesanan kopi
const buatKopi = () =>{
return new Promise((resolve) => {
  setTimeout(() => {
    resolve("Kopi kamu sudah jadi");
  }, 2000);// nunggu 2 detik
});
};

// penggunaan async
const pesenKopi = async() =>{
  console.log("pesan kopi dulu...");

// await bertugas untuk nungguin proses janji (promise) selesai
const hasil = await buatKopi();
console.log(hasil);
};

pesenKopi()
