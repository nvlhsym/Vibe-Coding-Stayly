# Stayly

Projek ini adalah sebuah monorepo untuk aplikasi **Stayly**, menggunakan NPM workspaces. Monorepo ini berisi beberapa aplikasi (apps) dan package yang saling berbagi kode (shared packages).

## Struktur Projek

Projek ini dibagi menjadi dua direktori utama: `apps` dan `packages`.

### Apps (`/apps`)
Berisi aplikasi-aplikasi utama dalam projek ini:
- **`admin-panel`**: Aplikasi panel admin untuk mengelola data.
- **`backend`**: Server backend / API.
- **`frontend`**: Aplikasi frontend utama untuk pengguna.
- **`host-app`**: Aplikasi host (kemungkinan untuk arsitektur micro-frontend).
- **`legacy-html`**: Aplikasi HTML versi lama (legacy).

### Packages (`/packages`)
Berisi modul-modul yang dapat digunakan kembali (reusable) oleh aplikasi di dalam folder `apps`:
- **`config`**: Konfigurasi standar untuk projek (seperti ESLint, Prettier, TypeScript config, dll).
- **`core-logic`**: Logika bisnis utama yang dibagikan antar aplikasi.
- **`types`**: Definisi tipe data (TypeScript interfaces/types) yang digunakan secara global.
- **`ui-kit`**: Komponen UI yang dibagikan (seperti tombol, form, dll) untuk konsistensi desain.

## Cara Memulai

### 1. Instalasi Dependensi
Karena ini menggunakan NPM workspaces, Anda hanya perlu menjalankan perintah instalasi di root folder (folder utama). Ini akan menginstal semua dependensi untuk semua `apps` dan `packages`.

Pastikan Anda berada di direktori utama `Stayly`, lalu jalankan:
```bash
npm install
```

### 2. Menjalankan Projek
Untuk menjalankan aplikasi tertentu, Anda bisa menggunakan perintah bawaan NPM workspaces.

Misalnya, untuk menjalankan `frontend`:
```bash
npm run dev -w apps/frontend
```
Atau jika script dev sudah dikonfigurasi di root `package.json`, Anda bisa menjalankannya sesuai dengan script yang ada (misal `npm run dev:frontend`).

Untuk menjalankan aplikasi lain, cukup ganti `-w apps/frontend` dengan nama workspace yang sesuai, contoh:
- Backend: `npm run dev -w apps/backend`
- Admin Panel: `npm run dev -w apps/admin-panel`

*(Catatan: pastikan script `dev` atau script yang ingin dijalankan sudah ada di dalam `package.json` masing-masing aplikasi).*

## Skrip Umum
Biasanya dalam monorepo, Anda dapat menjalankan perintah build atau test untuk seluruh aplikasi sekaligus (tergantung konfigurasi skrip di root `package.json`).
Contoh:
- `npm run build` : Mem-build semua aplikasi (jika sudah dikonfigurasi).
- `npm run test` : Menjalankan tes di seluruh aplikasi.

## Teknologi
- Manajemen Paket: NPM (Node Package Manager) dengan fitur Workspaces.
- Integrasi Layanan: Menggunakan Firebase.
- Konfigurasi Deployment: Terdapat konfigurasi `vercel.json` untuk deployment ke Vercel.
