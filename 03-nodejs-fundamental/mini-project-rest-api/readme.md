# Mini Project REST API Artikel

Mini project sederhana untuk membuat REST API dengan **Node.js** dan **Express**. API ini digunakan untuk mengelola data artikel (lihat daftar dan tambah artikel baru).

Ditulis dengan gaya yang ramah serta menggunakan analogi **"satpam" (middleware)** dan **"koki" (controller)** agar mudah dipahami.

---

## 📑 Struktur Folder

```text
mini-project-rest-api/
├── package.json          # Konfigurasi project dan dependensi
├── server.js             # Titik masuk server (mengatur rute dan menyalakan Express)
└── src/
    ├── controllers/
    │   └── articles.controller.js   # "Koki" — memproses data artikel
    └── middleware/
        └── logger.middleware.js     # "Satpam" — mencatat setiap request masuk
```

---

## 🛠️ Prasyarat & Instalasi

1. Pastikan sudah menginstal **Node.js** (versi 18+ direkomendasikan).
2. Masuk ke folder project ini:
   ```bash
   cd 03-nodejs-fundamental/mini-project-rest-api
   ```
3. Install dependensi (Express dan dotenv):
   ```bash
   npm install
   ```
4. Buat file `.env` di root folder project ini untuk mengatur PORT (opsional):
   ```env
   PORT=5000
   ```
5. Jalankan server:
   ```bash
   npm start
   ```
   atau
   ```bash
   node server.js
   ```

Server akan berjalan di `http://localhost:5000` (atau port yang kamu atur di `.env`).

---

## 🚀 Daftar Rute API

### ==================== DAFTAR RUTE API ====================

| Method | Endpoint | Fungsi |
|--------|----------|--------|
| GET | `/articles` | Melihat semua daftar artikel |
| POST | `/articles` | Menambah artikel baru |

### =========================================================

#### 1. Lihat Semua Artikel (GET)

**Endpoint:** `GET /articles`

Contoh pemakaian di browser atau Postman:
```
http://localhost:5000/articles
```

Respons yang dikirim server:
```json
{
  "message": "Berhasil mengambil data artikel",
  "data": [
    { "id": 1, "title": "Belajar Node.js", "content": "Node.js itu seru banget!" },
    { "id": 2, "title": "Mengenal Express", "content": "Express bikin bikin server jadi gampang." }
  ]
}
```

#### 2. Tambah Artikel Baru (POST)

**Endpoint:** `POST /articles`

Kirim data dalam format JSON di body request:
```json
{
  "title": "Judul Artikel Baru",
  "content": "Isi artikelnya di sini"
}
```

Contoh respons sukses (`201 Created`):
```json
{
  "message": "Artikel berhasil ditambahkan",
  "data": {
    "id": 3,
    "title": "Judul Artikel Baru",
    "content": "Isi artikelnya di sini"
  }
}
```

Contoh respons gagal kalau judul atau konten kosong (`400 Bad Request`):
```json
{
  "message": "Gagal menambah artikel. Judul dan konten wajib diisi!"
}
```

---

## 🧩 Penjelasan File Kode

### `server.js` — Titik masuk server

File ini bertugas menyalakan Express dan mengatur semua rute API. Di sini juga dipasang **middleware logger** agar setiap request yang masuk dicatat ke terminal.

- `require('dotenv').config()` → membaca file `.env` (konfigurasi seperti PORT).
- `express.json()` → agar Express bisa membaca data JSON yang dikirim oleh user.
- `app.use(loggerMiddleware)` → memasang satpam (middleware) untuk mencatat request.
- `app.get('/articles', getArticles)` → rute untuk melihat daftar artikel.
- `app.post('/articles', createArticle)` → rute untuk menambah artikel baru.
- `app.listen(PORT, ...)` → menyalakan server agar mendengarkan request dari luar.

### `src/controllers/articles.controller.js` — "Koki"

File ini bertugas sebagai **koki** yang memproses data artikel. Ada dua fungsi utama:

1. `getArticles(req, res)` → mengambil semua data artikel dari array sementara dan mengirimkannya ke user.
2. `createArticle(req, res)` → menerima data artikel baru, memvalidasi apakah judul dan konten diisi, lalu menyimpannya ke array sementara.

Data disimpan di array `articles` yang berada di memori laptop (data akan hilang saat server dimatikan).

### `src/middleware/logger.middleware.js` — "Satpam"

File ini bertugas sebagai **satpam** yang mencatat setiap request yang masuk ke server. Apa yang dicatat:

- Waktu request (format ISO)
- Metode HTTP (`GET` atau `POST`)
- URL tujuan

Fungsi `next()` wajib dipanggil agar request tidak "gantung" dan bisa lanjut ke controller (koki) berikutnya.

---

## 🧪 Cara Menguji API

Kamu bisa menggunakan **Postman**, **Insomnia**, atau langsung dari terminal dengan `curl`.

### Contoh dengan curl

Lihat semua artikel:
```bash
curl http://localhost:5000/articles
```

Tambah artikel baru:
```bash
curl -X POST http://localhost:5000/articles \
  -H "Content-Type: application/json" \
  -d '{"title":"Belajar Express","content":"Express itu keren!"}'
```

---

## ✅ Catatan 

- Data yang disimpan hanya sementara (di array memori). Jika server dimatikan dan dihidupkan lagi, data akan kembali ke default (2 artikel awal).
- Pastikan file `.env` ada jika ingin menentukan PORT sendiri. Jika tidak ada, server akan pakai port `5000` secara default.
- Semua komentar dalam kode ditulis dalam **Bahasa Indonesia** agar mudah dipahami.

---

Selamat mencobaa! 🎉
