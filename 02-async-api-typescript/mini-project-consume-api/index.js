//import api.ts
import {getUserData} from './api.ts';

//State awal
let state = {
    isLoading: false,
    error: null,
    data: null,
}

//fungsi untuk nampilin kondisi state
function render() {
    if (state.isLoading) {
        console.log("Status: SEDANG LOADING...");
    } else if (state.error) {
        console.log(`Status ERROR: ${state.error}`);
    } else if (state.data) {
        console.log("Status SUKSES!!! Data diterima:");
        console.log(`Nama: ${state.data.name}`);
        console.log(`Email: ${state.data.email}`);
    }
}

//fungsi utama
async function jalankanApp(id) {
    //pertama state LOADING aktif
    state = { isLoading: true, error: null, data: null };
    render();
    
    try {
        //ambil data lewat fungsi yang dari api.ts
        const user = await getUserData(id);
        //lalu state data (SUKSES)
        state = { isLoading: false, error: null, data: user };
        }
        catch (err) {
        //selanjutnya state ERROR (gagal)
        state = { isLoading: false, error: err.message, data: null };
        } 
        finally {
        //lalu tampilkan hasil akhirnya
        render();
    }
}

//--- Tes Jalankan ---
console.log("--- TES 1: DATA BERHASIL ---");
jalankanApp(1); // Ambil ID 1 (Sukses)

// Tes Jalur Error
setTimeout(() => {
  console.log("--- TES 2: DATA ERROR ---");
  jalankanApp(9999); //Ambil dari ID 9999 (pasti Error)
}, 2000);  // Dikasih jeda 2 detik 