# Gerbang Edukasi — Website

Website produk **Gerbang Edukasi**: Media Interaktif untuk Interactive Flat Panel (IFP).
Dibangun sebagai platform **sales, demo, download, lisensi, aktivasi, dan akuisisi pelanggan**
(bukan company profile).

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** (design tokens via `globals.css`)
- Prerender statis (SSG) untuk SEO + semua rute marketing

## Menjalankan

```bash
npm install
npm run dev      # development (http://localhost:3000)
npm run build    # production build
npm run start    # jalankan hasil build
npm run lint     # ESLint
```

## Struktur

```
src/
  app/                 # Routes (App Router) + metadata, sitemap, robots
  components/
    ui/                # Design system: Button, Container, Section, Badge, icons
    layout/            # Navbar (sticky), Footer
    home/              # Section homepage
  data/site.ts          # Konten terpusat (CMS/API-ready)
  lib/analytics.ts      # Layer analytics (GA4/dataLayer-ready)
```

## Konten & CMS
Semua copy berada di `src/data/site.ts`, terpisah dari komponen. Saat backend/CMS tersedia,
array ini cukup diganti dengan respons API tanpa menyentuh UI.

## Analytics
Event tracking (lihat `lib/analytics.ts`): `page_view, demo_click, video_play,
download_android, download_windows, pricing_view, trial_start, activation_start,
activation_success, partner_form_submit, contact_submit, purchase`.
Secara default push ke `window.dataLayer` (GA4-ready). Aktifkan/nonaktifkan via `ENABLED`.

## Asset placeholder
Asset belum tersedia → dipakai placeholder jelas yang mudah diganti:
- `/public/assets/hero-ifp...` → visual hero
- `/public/assets/demo-video.mp4`, `demo-poster.png` → demo
- `/public/assets/content/` → thumbnail konten

## Aturan bisnis
- **Tidak ada data fiktif**: harga, jumlah pengguna, testimonial, partner, logo disajikan
  sebagai placeholder ("Coming Soon", "Hubungi Kami") hingga data resmi diberikan.
- Licensing/aktivasi **tidak di-hardcode di frontend**; arsitektur disiapkan API-ready.

