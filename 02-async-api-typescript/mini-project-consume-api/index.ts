// Import fungsi dan interface User dari api.ts//
import { getUserData, User } from './api';

// Interface untuk bentuk State aplikasi
interface AppState {
  isLoading: boolean;
  error: string | null;
  data: User | null;
}

// State awal
let state: AppState = {
  isLoading: false,
  error: null,
  data: null,
};

// Fungsi untuk nampilin kondisi state
function render(): void {
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

// Fungsi utama dengan penanganan tipe data pada parameter & error
async function jalankanApp(id: number): Promise<void> {
  // Pertama: state LOADING aktif
  state = { isLoading: true, error: null, data: null };
  render();

  try {
    // Ambil data lewat fungsi dari api.ts
    const user: User = await getUserData(id);
    // Lalu state DATA (SUKSES)
    state = { isLoading: false, error: null, data: user };
  } catch (err) {
    // Selanjutnya state ERROR (gagal)
    const errorMessage = err instanceof Error ? err.message : "Terjadi kesalahan";
    state = { isLoading: false, error: errorMessage, data: null };
  } finally {
    // Lalu tampilkan hasil akhirnya
    render();
  }
}

// --- Tes Jalankan ---
console.log("--- TES 1: DATA BERHASIL ---");
jalankanApp(1); // Ambil ID 1 (Sukses)

// Tes Jalur Error
setTimeout(() => {
  console.log("\n--- TES 2: DATA ERROR ---");
  jalankanApp(9999); // Ambil dari ID 9999 (pasti Error 404)
}, 2000); // Dikasih jeda 2 detik