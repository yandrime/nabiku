# 📖 Sirah Nabawiyah App

Aplikasi web interaktif perjalanan hidup Rasulullah ﷺ dari nasab, keluarga Bani Hasyim, kenabian, hijrah, seluruh peperangan, pergaulan sahabat, hingga wafatnya beliau — disadur dari berbagai sumber rujukan sirah nabawiyah yang shahih (termasuk *Ar-Rahiq al-Makhtum* karya Syaikh Shafiyurrahman al-Mubarakfuri).

Dibuat menggunakan standar modern **Next.js App Router** dengan **React** & **TypeScript**.

---

## 📂 Struktur Proyek

```text
sirah-nabawiyah-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout & Google fonts configuration
│   │   ├── page.tsx         # Main page (Beranda & Sirah sections)
│   │   ├── globals.css      # Design tokens, layout & component styles
│   │   └── sumber/
│   │       └── page.tsx     # Halaman Sumber & Rujukan
│   ├── components/          # Komponen React Modular
│   │   ├── SidebarRail.tsx  # Sidebar navigasi & drawer mobile
│   │   ├── TopBar.tsx       # Header mobile
│   │   ├── Hero.tsx         # Hero banner dengan motif geometric khatam SVG
│   │   ├── NasabSection.tsx # Silsilah nasab (3 penggal accordion)
│   │   ├── BaniHasyimSection.tsx # Pohon keluarga Bani Hasyim
│   │   ├── TimelineSection.tsx # Linimasa (Sebelum Kenabian, Hijrah, Wafat)
│   │   ├── WarsSection.tsx  # Daftar peperangan & filter tahun
│   │   ├── FamilySection.tsx# Kartu Istri-istri & Putra-putri
│   │   ├── CompanionsSection.tsx # Kartu Sahabat-sahabat
│   │   └── Footer.tsx       # Footer aplikasi
│   ├── data/                # Data terstruktur & type-safe
│   │   ├── nasab.ts
│   │   ├── timeline.ts
│   │   ├── family.ts
│   │   ├── wars.ts
│   │   └── companions.ts
│   └── types/
│       └── index.ts         # TypeScript interface definitions
├── next.config.js           # Konfigurasi Next.js
├── tsconfig.json            # Konfigurasi TypeScript
├── package.json             # Dependencies Next.js, React, TypeScript
└── vercel.json              # Header keamanan Vercel
```

---

## 🚀 Cara Menjalankan Secara Lokal

1. Install dependencies:
   ```bash
   npm install
   ```
2. Jalankan dev server:
   ```bash
   npm run dev
   ```
3. Buka di browser: `http://localhost:3000`

---

## ☁️ Deployment ke Vercel

Aplikasi ini menggunakan standar **Next.js App Router**.

### Langkah-langkah Deployment:
1. Push repository ke GitHub / GitLab / Bitbucket.
2. Buka dashboard [Vercel](https://vercel.com) dan klik **"Add New Project"**.
3. Import repository `sirah-nabawiyah-app`.
4. Vercel akan otomatis mengenali preset **Next.js**.
5. Klik **Deploy**!
