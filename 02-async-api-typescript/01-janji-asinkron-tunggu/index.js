// contoh promise pemesanan kopi
const buatTehtarik = () =>{
return new Promise((resolve) => {
  setTimeout(() => {
    resolve("Teh tarik kamu sudah jadi");
  }, 2000);// nunggu 2 detik
});
};

// penggunaan async
const pesenTehtarik = async() =>{
  console.log("pesan Teh tarik dulu...");

// await bertugas untuk nungguin proses janji (promise) selesai
const hasil = await buatTehtarik();
console.log(hasil);
}

pesenTehtarik()
