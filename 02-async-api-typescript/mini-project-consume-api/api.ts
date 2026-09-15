//Pertama kita bjuat cetakan/ template interface untuk data user yang mau kita ambil
interface User {
  id: number;
  name: string;
  email: string;
  website: string;
}

//Kemudian nuat fungsi khusus fetch API
export async function getUserData(userId: number): Promise<User> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    
    // Cek kalau HTTP response gagal (misal status 404)
  if (!response.ok) {
    throw new Error(`Data tidak ditemukan (Status: ${response.status})`);
  }

  const data: User = await response.json();
  return data;
};

