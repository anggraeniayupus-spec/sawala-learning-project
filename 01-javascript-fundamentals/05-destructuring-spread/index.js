const profil = {
  username: "budi_cool",
  role: "Admin",
  status: "Aktif"
};

// 1. Destructuring
const { username, role } = profil;
console.log(`User ${username} memiliki role sebagai ${role}`);

// 2. Spread Operator (Update profil)
const profilUpdate = {
  ...profil,
  status: "Non-Aktif",
  terakhirLogin: "Hari ini"
};

console.log("Profil Terbaru:", profilUpdate);