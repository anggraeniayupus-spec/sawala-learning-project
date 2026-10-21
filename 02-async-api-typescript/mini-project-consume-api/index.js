// File utama untuk menjalankan mini project consume API

import { getPosts } from './api.js';

// Fungsi async untuk menjalankan mini project
async function jalankanMiniProject() {
  console.log("Sedang mengambil data dari API...");
  try {
    const posts = await getPosts();
    posts.forEach((post, index) => {
      console.log(`\n--- Post ke-${index + 1} ---`);
      console.log(`Judul: ${post.title}`);
      console.log(`Isi: ${post.body}`);
    });
  } catch (err) {
    console.error("Gagal menjalankan mini project:", err);
  }
}

// Jalankan fungsinya
jalankanMiniProject();
