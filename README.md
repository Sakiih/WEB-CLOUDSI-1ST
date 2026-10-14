# Cloudsi Connect — Platform Profil Angkatan Sistem Informasi

Website resmi dan platform profil mahasiswa **Sistem Informasi Universitas Tanjungpura (UNTAN) Angkatan 2025**. Dibangun dengan arsitektur modern berkinerja tinggi, efek visual *liquid glassmorphism*, serta deteksi performa perangkat adaptif.

---

## 🚀 Tech Stack

- **Framework:** [Astro v6.1.4](https://astro.build/) (Server-Side Rendering / SSR via `@astrojs/vercel`)
- **Styling:** [Tailwind CSS v3.4](https://tailwindcss.com/) & CSS Custom Properties / Design Tokens
- **Animasi & Interaktivitas:**
  - [Lenis](https://lenis.darkroom.engineering/) — Smooth scroll
  - [GSAP + ScrollTrigger](https://greensock.com/) — Scroll-driven animations
  - [OGL](https://github.com/oframe/ogl) / WebGL Shaders — Efek awan FBM & riak air dinamis
- **Database & Backend:** [Supabase](https://supabase.com/) & Vercel Serverless Functions
- **Email Service:** [Resend](https://resend.com/)
- **Media CDN:** [Cloudinary](https://cloudinary.com/) & WebP Local Assets

---

## 📁 Struktur Direktori Standar

Struktur project disusun mengikuti konvensi standar Astro Framework:

```text
WEB-CLOUDSI/
├── docs/                     # Dokumentasi, referensi data mentah, dan prototipe
│   ├── notes/                # Catatan pembaruan internal
│   ├── prototypes/           # Eksperimen WebGL & prototype fluid-glass
│   └── references/           # Data mentah profil mahasiswa & daftar sosial media
├── public/                   # Asset statis publik yang dapat diakses langsung oleh URL
│   ├── galeri/               # Foto-foto kegiatan/album
│   ├── members/              # Foto resmi 75 anggota (.webp)
│   ├── logo-angkatan-25.webp # Logo resmi CloudSI
│   └── robots.txt
├── src/                      # Kode sumber aplikasi
│   ├── components/
│   │   ├── canvas/           # Shader canvas WebGL (CloudBackground, WaterRipple)
│   │   ├── layout/           # Header, Footer, PageTransition
│   │   ├── sections/         # Section halaman aktif (Hero, Stats, Contact, PerjalananKami)
│   │   │   └── legacy/       # Arsip section boilerplate awal
│   │   └── ui/               # Preloader, MemberCard, Button, GlassCard
│   ├── data/                 # Dataset lokal utama (members-data.ts)
│   ├── layouts/              # Layout utama (BaseLayout.astro)
│   ├── lib/                  # Integrasi pihak ketiga (supabase.ts, cloudinary.ts)
│   ├── pages/                # File-based routing & API endpoints
│   │   ├── api/              # Endpoint serverless (contact.ts)
│   │   ├── index.astro       # Beranda
│   │   ├── tentang.astro     # Tentang & timeline perjalanan
│   │   ├── anggota.astro     # Direktori & pencarian 75 anggota
│   │   ├── galeri.astro      # Bento-grid album momen
│   │   ├── acara.astro       # Daftar kegiatan/event
│   │   ├── lagu.astro        # Lirik Mars Cloudsi & pemutar MP3
│   │   ├── kontak.astro      # Form kontak & peta UNTAN
│   │   └── 404.astro         # Halaman 404
│   ├── styles/               # tokens.css, global.css
│   ├── types/                # TypeScript interface & types (index.ts)
│   ├── utils/                # Utility & deteksi perangkat (performance-detector.ts)
│   └── env.d.ts              # Deklarasi tipe Astro
├── supabase/                 # Skema & konfigurasi database
│   └── schema.sql            # DDL PostgreSQL, RLS policies, triggers, & indexes
├── .env.example              # Contoh variabel lingkungan
├── .gitignore                # File & direktori yang diabaikan Git
├── astro.config.mjs          # Konfigurasi Astro & Vite
├── package.json              # Dependensi & skrip npm
├── tailwind.config.mjs       # Konfigurasi Tailwind CSS
├── tsconfig.json             # Konfigurasi TypeScript & path aliases
└── vercel.json               # Konfigurasi deployment Vercel
```

---

## 🛠️ Instalasi & Menjalankan Proyek

### 1. Prasyarat
- **Node.js:** Versi 18.x atau 20.x+
- **npm:** Versi 9.x+

### 2. Pasang Dependensi
Karena terdapat integrasi Tailwind khusus untuk Astro, gunakan opsi `--legacy-peer-deps`:
```bash
npm install --legacy-peer-deps
```

### 3. Konfigurasi Environment Variables
Salin file `.env.example` menjadi `.env`:
```bash
cp .env.example .env
```
Sesuaikan nilainya sesuai dengan kredensial project Anda:
```env
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
RESEND_API_KEY=your_resend_api_key
ADMIN_EMAIL=your_email@example.com
```

### 4. Menjalankan Server Pengembangan
```bash
npm run dev
```
Buka browser pada `http://localhost:4321`.

### 5. Build Produksi & Preview
```bash
npm run build
npm run preview
```

---

## ⚡ Adaptive Performance Tiers

Website ini secara otomatis mendeteksi spesifikasi perangkat pengguna:
- **`ULTRA` / `NORMAL`:** Menjalankan WebGL shader penuh (awan & air), efek blur kaca hingga 28px, serta Lenis smooth scroll.
- **`LOW` / `BATTERY_SAVER`:** Mematikan WebGL shaders untuk menghemat daya & memori (VRAM), menggantinya dengan fallback gradien CSS, dan membatasi efek blur kaca.
- **Auto Battery Saver:** Otomatis aktif saat baterai perangkat berada di bawah 20% dan tidak sedang diisi daya.

---

## 🗄️ Database Supabase

Seluruh skema database telah disiapkan pada [`supabase/schema.sql`](file:///c:/Users/user/Documents/Z%20random/Cloudsi-WEB/WEB-CLOUDSI/supabase/schema.sql), mencakup:
- Tabel `members`, `events`, `event_gallery`, `timeline_events`, dan `contact_logs`.
- Row Level Security (RLS) untuk perlindungan privasi data pribadi (NIM/email disembunyikan dari query publik).
- Trigger otomatis untuk pembaruan kolom `updated_at`.
