// articles.controller.js

// Ini database sementara kita (disimpan di memori laptop/array)
let articles = [
  { id: 1, title: "Belajar Node.js", content: "Node.js itu seru banget!" },
  { id: 2, title: "Mengenal Express", content: "Express bikin bikin server jadi gampang." }
];

// 1. FUNGSI READ: Mengambil semua data artikel
function getArticles(req, res) {
  res.status(200).json({
    message: "Berhasil mengambil data artikel",
    data: articles
  });
}

// 2. FUNGSI CREATE: Menambahkan artikel baru
function createArticle(req, res) {
  // Mengambil data yang dikirim user dari body request
  const title = req.body.title;
  const content = req.body.content;

  // Validasi Dasar: Kalau judul atau isi kosong, tolak!
  if (!title || !content) {
    return res.status(400).json({ 
      message: "Gagal menambah artikel. Judul dan konten wajib diisi!" 
    });
  }

  // Membuat objek artikel baru
  const newArticle = {
    id: articles.length + 1,
    title: title,
    content: content
  };

  // Masukkan data baru ke dalam array database sementara
  articles.push(newArticle);

  // Kirim respons sukses dengan kode 201 Created
  res.status(201).json({
    message: "Artikel berhasil ditambahkan",
    data: newArticle
  });
}

// Ekspor kedua fungsi agar bisa dipanggil oleh server.js
module.exports = {
  getArticles: getArticles,
  createArticle: createArticle
};