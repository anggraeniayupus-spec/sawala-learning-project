# 05-nextjs-strapi-final-project

Final project gabungan **Next.js (frontend)** + **Strapi (backend CMS)**.

## Struktur folder

```
05-nextjs-strapi-final-project/
├── backend-strapi/        # Backend headless CMS (Strapi)
│   ├── config/
│   ├── database/migrations/
│   ├── public/
│   │   ├── uploads/
│   │   └── robots.txt
│   └── src/
│       ├── admin/
│       ├── api/
│       └── extensions/
├── frontend-nextjs/       # Frontend Next.js (App Router)
│   ├── public/
│   └── src/
│       ├── app/
│       ├── components/
│       └── lib/
├── types/generated/       # TypeScript types yang di-generate dari Strapi
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── tsconfig.json
```

## Cara menjalankan

1. Install semua dependency:
   ```bash
   npm run setup
   ```

2. Salin dan sesiapkan file environment:
   ```bash
   cp .env.example .env
   cp backend-strapi/.env.example backend-strapi/.env
   cp frontend-nextjs/.env.local.example frontend-nextjs/.env.local
   ```

3. Jalankan development (backend + frontend sekaligus):
   ```bash
   npm run dev
   ```

4. Atau jalankan terpisah:
   ```bash
   # Backend Strapi (port 1337)
   npm run dev:backend

   # Frontend Next.js (port 3000)
   npm run dev:frontend
   ```

## Lisensi

MIT