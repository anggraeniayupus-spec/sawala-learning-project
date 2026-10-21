# Frontend Next.js - Agent Guidelines

Frontend ini menggunakan Next.js 14 (App Router) dan terhubung ke Strapi backend.

- Backend Strapi berjalan di port 1337.
- Frontend Next.js berjalan di port 3000.
- Proxy API `/api/*` diarahkan ke Strapi melalui `next.config.ts`.
- TypeScript strict mode diaktifkan.
- Folder `src/app` berisi halaman (App Router).
- Folder `src/components` berisi komponen UI (atoms, molecules, organisms).
- Folder `src/lib` berisi helper Strapi client.