# Mini Project React Dashboard

Dashboard sederhana dibangun dengan **React**, **TypeScript**, dan **Vite**.  
Tampilan mencakup sidebar navigasi, header, grid kartu statistik, serta tabel aktivitas terbaru dengan badge status (Dipublikasi / Draft).

> Referensi konsep dari proyek dashboard artikel (kartu metrik + tombol aksi), dikembangkan dengan tampilan dan fitur yang lebih kaya.

---

## 📦 Tech Stack

| Teknologi | Fungsi |
|-----------|--------|
| [React 18](https://react.dev/) | Library untuk membangun antarmuka pengguna |
| [TypeScript](https://www.typescriptlang.org/) | Penulisan JavaScript dengan tipe data (type safety) |
| [Vite](https://vitejs.dev/) | Build tool dan dev server yang cepat (hot reload) |
| CSS (modular) | Styling antarmuka |

---

## 📂 Struktur Folder

```
mini-project-react-dashboard/
├── index.html               # Titik masuk HTML, memuat #root dan main.tsx
├── package.json             # Metadata proyek, dependensi, dan skrip npm
├── package-lock.json        # Kunci versi dependensi (dihasilkan otomatis)
├── .gitignore               # File/folder yang diabaikan Git (node_modules, dist, dll.)
├── eslint.config.js         # Konfigurasi linter untuk kode TypeScript/JavaScript
├── vite.config.ts           # Konfigurasi Vite (build tool + plugin React)
├── tsconfig.json            # Konfigurasi TypeScript dasar untuk seluruh proyek
├── tsconfig.app.json        # Konfigurasi TypeScript khusus kode aplikasi (src/)
├── tsconfig.node.json       # Konfigurasi TypeScript untuk lingkungan Node.js (konfigurasi build)
├── README.md                # Dokumentasi proyek (file ini)
├── dist/                    # Hasil build produksi (dihasilkan oleh `npm run build`)
└── src/
    ├── main.tsx             # Entry point React (merender App ke #root)
    └── components/
        ├── App.tsx          # Komponen utama dashboard (tata letak + logika state)
        ├── App.css          # Gaya khusus tata letak dashboard
        ├── index.css        # Gaya global yang berlaku di seluruh aplikasi
        ├── Card.tsx         # Komponen kartu statistik (Total Artikel, Views, dll.)
        └── Button.tsx       # Komponen tombol aksi (+ Tambah Artikel, dll.)
```

---

## 🚀 Cara Menjalankan

Pastikan [Node.js](https://nodejs.org/) sudah terinstall.

### 1. Install dependensi
```bash
npm install
```

### 2. Jalankan server pengembangan
```bash
npm run dev
```
Buka `http://localhost:5173` di browser.

### 3. Build untuk produksi
```bash
npm run build
```
Hasil akan disimpan di folder `dist/`.

### 4. Preview hasil build produksi
```bash
npm run preview
```

---

## 📜 Skrip Tersedia (`package.json`)

| Skrip | Keterangan |
|-------|------------|
| `npm run dev` | Menjalankan Vite dev server dengan hot reload (development) |
| `npm run build` | Men-compile TypeScript lalu build bundel produksi dengan Vite |
| `npm run preview` | Menampilkan hasil build produksi secara lokal sebelum di-deploy |

---

## 🧩 Penjelasan Komponen

### `src/components/App.tsx`
Komponen utama yang mengatur tata lengkap dashboard:
- **Sidebar navigasi** (Beranda, Artikel, Komentar, Pengaturan)
- **Header** dengan judul dan tombol `+ Tambah Artikel`
- **Grid kartu statistik** (Total Artikel, Total Views, Komentar, Draft) dengan variasi warna
- **Tabel aktivitas terbaru** yang menampilkan daftar artikel beserta status dan waktu

State `artikelCount` dikelola dengan `useState`. Saat tombol `+ Tambah Artikel` diklik, nilai artikel bertambah satu secara real-time.

### `src/components/Card.tsx`
Komponen kartu statistik yang menerima props:
- `title` — judul metrik (contoh: "Total Artikel")
- `value` — nilai utama (angka atau teks)
- `description` — keterangan tambahan (opsional)
- `variant` — warna aksen (`default`, `success`, `warning`, `info`)

Setiap kartu memiliki latar belakang putih, border radius, bayangan lembut, dan garis aksen di bagian atas sesuai variant yang dipilih.

### `src/components/Button.tsx`
Komponen tombol interaktif yang menerima props:
- `label` — teks tombol
- `onClick` — fungsi yang dipanggil saat diklik
- `variant` — gaya warna (`primary`, `secondary`, `outline`)
- `disabled` — status tombol nonaktif (opsional)

Gaya dasar dibagikan semua variant, sementara warna background dan teks bervariasi sesuai `variant`.

### `src/main.tsx`
Entry point aplikasi React. Mengambil elemen `#root` dari `index.html`, lalu merender komponen `<App />` di dalam `React.StrictMode` menggunakan `ReactDOM.createRoot` (React 18+).

### `src/components/index.css` dan `App.css`
- `index.css`: gaya global (font, warna latar, reset margin/padding, dll.)
- `App.css`: gaya khusus tata letak dashboard (sidebar, header, grid kartu, tabel aktivitas, badge status)

---

## ✅ Fitur Utama

- ✅ Sidebar navigasi yang selalu terlihat (fixed)
- ✅ Header dengan sambutan dan tombol aksi
- ✅ 4 kartu statistik dengan warna berbeda-beda
- ✅ Tabel aktivitas terbaru dengan badge status (Dipublikasi / Draft)
- ✅ Tombol `+ Tambah Artikel` yang menambah jumlah artikel secara real-time
- ✅ Responsif (grid kartu menyesuaikan lebar layar)
- ✅ TypeScript untuk type safety
- ✅ ESLint untuk memeriksa kualitas kode

---

## 🧑‍💻 Kontribusi

Jika ingin berkontribusi:
1. Fork repositori
2. Buat branch fitur baru (`git checkout -b fitur-nama`)
3. Commit perubahan (`git commit -m "Menambahkan fitur..."`)
4. Push ke branch (`git push origin fitur-nama`)
5. Buat Pull Request

---

## 📄 Lisensi

Proyek ini dibuat untuk keperluan pembelajaran React fundamental. Bebas digunakan dan dimodifikasi.

---

Dibuat dengan ❤️ menggunakan React + TypeScript + Vite.
