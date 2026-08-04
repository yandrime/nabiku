# 📖 Sirah Nabawiyah App

Aplikasi web interaktif perjalanan hidup Rasulullah ﷺ dari nasab, keluarga Bani Hasyim, kenabian, hijrah, seluruh peperangan, pergaulan sahabat, hingga wafatnya beliau — berdasarkan kitab *Ar-Rahiq al-Makhtum* karya Syaikh Shafiyurrahman al-Mubarakfuri.

---

## 📂 Struktur Proyek

```text
sirah-nabawiyah-app/
├── index.html              # Entry point HTML utama (Vercel Root)
├── sirah-nabawiyah.html    # Entry point kompatibilitas (Redirect ke index.html)
├── vercel.json             # Konfigurasi deployment & routing Vercel
├── package.json            # Konfigurasi npm & Vite dev server
├── css/
│   ├── tokens.css          # Design tokens (skema warna manuskrip & font)
│   ├── layout.css          # Structural layout (rail sidebar, topbar, grid)
│   ├── components.css      # Styling komponen (linimasa, silsilah, kartu, perang)
│   └── style.css           # Master CSS bundler
└── js/
    ├── data/               # Data historis terisolasi (mudah diperbarui)
    │   ├── nasab.js        # Data silsilah 21 generasi
    │   ├── timeline.js     # Data linimasa (Sebelum Kenabian, Hijrah, Wafat)
    │   ├── wars.js         # Data peperangan & ghazwah
    │   ├── family.js       # Data istri-istri & putra-putri
    │   └── companions.js   # Data sahabat-sahabat terdekat
    ├── render.js           # Fungsi rendering DOM komponen
    ├── search.js           # Logika pencarian real-time & debouncing
    ├── nav.js              # Navigasi sidebar, active link, & drawer mobile
    └── app.js              # Entry point JavaScript utama (ES Module)
```

---

## 🚀 Cara Menjalankan Secara Lokal

### Menggunakan Vite (Direkomendasikan)
1. Install dependencies:
   ```bash
   npm install
   ```
2. Jalankan dev server:
   ```bash
   npm run dev
   ```
3. Buka di browser: `http://localhost:5173`

### Menjalankan Langsung Tanpa Node.js (Static)
Aplikasi ini menggunakan standar **Vanilla HTML5 + ES Modules**, sehingga Anda dapat langsung membukanya menggunakan server statis lokal apa saja (seperti Extension Live Server di VS Code, `npx serve`, atau Python `python -m http.server`).

---

## ☁️ Deployment ke Vercel

Aplikasi ini sudah dilengkapi dengan berkas `vercel.json` dan `index.html` di root directory.

### Langkah-langkah Deployment:
1. Push repository ke GitHub / GitLab / Bitbucket.
2. Buka dashboard [Vercel](https://vercel.com) dan klik **"Add New Project"**.
3. Import repository `sirah-nabawiyah-app`.
4. Pilih Framework Preset: **Other** (Static Site) atau **Vite**.
5. Klik **Deploy**!

Vercel akan otomatis menyajikan aplikasi di URL publik dengan optimasi caching dan clean routes.
