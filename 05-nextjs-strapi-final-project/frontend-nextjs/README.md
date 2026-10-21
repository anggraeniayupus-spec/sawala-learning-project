# Frontend Next.js

Frontend untuk final project Next.js + Strapi.

## Tech stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Axios (fetch data dari Strapi)

## Struktur

```
frontend-nextjs/
├── public/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── articles/[slug]/page.tsx
│   ├── components/
│   │   ├── atoms/
│   │   ├── molecules/
│   │   └── organisms/
│   └── lib/
│       └── strapi.ts
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
├── .env.local
└── package.json
```

## Menjalankan

```bash
npm install
npm run dev
```