// Interface untuk struktur data Post dari API

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Fungsi async untuk mengambil daftar post dari JSONPlaceholder
export async function getPosts(): Promise<Post[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3");
  const data: Post[] = await response.json();
  return data;
}
