//Pertama kita bjuat cetakan/ template interface untuk data user yang mau kita ambil
export interface User {
  id: number;
  name: string;
  email: string;
  website: string;
}

//Kemudian buat fungsi khusus fetch API
export async function getUserData(userId: number): Promise<User> {

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    
    // Cek kalau HTTP response gagal (misal status 404)
  if (!response.ok) {
    throw new Error(`Data tidak ditemukan (Status: ${response.status})`);
  }

  const data: User = await response.json();
  return data;
  }
 catch (error) {
  console.error("Gagal mengambil data user:", error);
  throw error;
}
}
