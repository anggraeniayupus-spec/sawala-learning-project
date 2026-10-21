import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Konfigurasi Vite: build tool dan dev server untuk proyek React.
// export default digunakan agar Vite dapat membaca konfigurasi ini saat menjalankan vite dev / build.
export default defineConfig({
  // Plugin React memungkinkan Vite memproses file .tsx / JSX
  plugins: [react()],
});
