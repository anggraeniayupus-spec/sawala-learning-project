export const metadata = {
  title: 'Final Project Next.js + Strapi',
  description: 'Website final project dengan Next.js dan Strapi CMS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
