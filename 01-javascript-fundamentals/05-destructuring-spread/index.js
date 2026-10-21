// Contoh destructuring dan spread operator pada objek

// Objek profil user
const profil = {
  username: "budi_cool",
  role: "Admin",
  status: "Aktif"
};

// 1. Destructuring: ambil username dan role dari objek profil
const { username, role } = profil;
console.log(`User ${username} memiliki role sebagai ${role}`);

// 2. Spread Operator (...): salin profil lalu ubah status dan tambah tanggal login
const profilUpdate = {
  ...profil,
  status: "Non-Aktif",
  terakhirLogin: "Hari ini"
};

console.log("Profil Terbaru:", profilUpdate);
