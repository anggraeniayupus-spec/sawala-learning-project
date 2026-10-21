import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Beranda</h1>
      <p>Selamat datang di website final project Next.js + Strapi.</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>
          <Link href="/articles">Daftar Artikel</Link>
        </li>
      </ul>
    </main>
  );
}
