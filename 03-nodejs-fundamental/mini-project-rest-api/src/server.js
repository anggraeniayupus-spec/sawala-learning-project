// server.js
require('dotenv').config(); // Mengaktifkan pembacaan file .env
const express = require('express');
const app = express();

// Import satpam (middleware) dan koki (controller) yang sudah dibuat
const loggerMiddleware = require('./middleware/logger.middleware');
const { getArticles, createArticle } = require('./controllers/articles.controller');

const PORT = process.env.PORT || 5000;

// Agar Express bisa membaca data JSON yang dikirim oleh user/Postman
app.use(express.json());

// Memasang middleware logger agar berlaku di semua rute URL
app.use(loggerMiddleware);

// ==================== DAFTAR RUTE API ====================

// Jalur untuk melihat list artikel (Method: GET)
app.get('/articles', getArticles);

// Jalur untuk menambah artikel baru (Method: POST)
app.post('/articles', createArticle);

// =========================================================

// Menyalakan server agar mendengarkan request dari luar
app.listen(PORT, () => {
  console.log(`Server aman! Berjalan di http://localhost:${PORT}`);
});