# Setup Supabase + Deploy (Cloudflare Workers / Vercel)

Panduan untuk terhubung backend **Supabase** dan deploy frontend. Jalur aktif: **Cloudflare Workers** (OpenNext); Vercel tetap didukung sebagai alternatif.

## 1. Supabase

1. Buat project pada https://supabase.com → **New Project**.
2. Migrate schema (urutan wajib):
   - Buka **SQL Editor**.
   - Paste isi `supabase/migrations/0001_init.sql` → **Run**.
   - Paste isi `0002_app_backend.sql` dari repo `ifp-apps` (aditif: `enrollment_codes`, `sync_events`, `license_audit`, `admin_roles`, kolom lisensi tambahan) → **Run**.
   - Aksi yang dibuat: `profiles`, `licenses`, `devices`, `activations`, `partners`, `content`, `orders`, tabel tambahan di atas, RLS, trigger `handle_new_user`.
3. Kirim `.env.example` → `.env.local` dan isi nilai dari **Project Settings → API**:

   ```
   NEXT_PUBLIC_SUPABASE_URL=https://<ref>.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon key>
   SUPABASE_SERVICE_ROLE_KEY=<service_role key>   # hanya server-side
   ACTIVATION_CODE_PEPPER=<string acak>           # hash kode aktivasi, server-side
   ```

   `ACTIVATION_CODE_PEPPER` harus sama dengan pepper yang dipakai saat membuat `serial_hash` lisensi. Jangan menggantinya setelah ada lisensi aktif.

Opcional nanti:
- **Supabase Auth** → email/password (form login sudah terhubung via `createAnonClient().auth.signInWithPassword`).
- **Supabase Storage** → thumbnail konten (`content.thumb_url`).
- **Cloudflare Worker** → enrollment perangkat & sync (lihat repo `ifp-apps`, `workers/api`).

## 2. Deploy Cloudflare Workers

1. Build command service: `npm run build` (`postbuild` menjalankan OpenNext; tidak perlu mengubah dashboard).
2. **Deploy command** tetap: `npx wrangler versions upload`.
3. Tambahkan environment variables Supabase + `ACTIVATION_CODE_PEPPER` + `ENROLLMENT_CODE_PEPPER` pada service (Production/Preview sesuai kebutuhan). `ENROLLMENT_CODE_PEPPER` harus sama dengan secret Worker di repo `ifp-apps`.
4. Konfigurasi worker ada di `wrangler.jsonc` (OpenNext: `.open-next/worker.js` + assets `.open-next/assets`, `nodejs_compat`).
5. Lokal: `npm run cf:preview` setelah `wrangler login`.

Catatan: `@opennextjs/cloudflare` dipin ke `1.19.0` agar cocok dengan Next 16.3.1; periksa peer dependency sebelum menaikkan salah satunya.

## 2b. Deploy Vercel (alternatif)

1. Import repo: https://vercel.com → **Add New** → **Import Git Repository** → pilih `edukasigerbang-hub/web`.
2. Tambah environment variables Supabase tersebut.
3. Klik **Deploy**.

## 3. Test lokal

```bash
cp .env.example .env.local
npm run dev        # http://localhost:3000
```

## Struktura integrasi

- **Auth**: `src/app/login` + `src/components/auth/LoginForm` — Supabase Auth; jika env kosong, dapat placeholder.
- **Partner lead**: `src/app/api/partner` (POST) → tabla `partners` via service role.
- **Aktivasi**: `src/app/api/activation` (POST) memvalidasi `licenses.serial_hash`, status/masa berlaku, binding `devices.device_id`, batas `max_devices`, mencatat `activations` (hash kode, bukan kode mentah) dan `license_audit`. Logika keputusan murni di `src/lib/activation.ts` (diuji Vitest).
- **Kode aktivasi**: case-insensitive (trim + uppercase); hash `SHA-256(pepper:code)`. Kode mentah tidak pernah disimpan/ditampilkan.
- **Dashboard perangkat/lisensi**: membaca data milik pengguna via Supabase Auth + RLS (`owner_id`), di `src/lib/dashboardData.ts`.
- **Kode enrollment (admin)**: `src/app/api/admin/enrollment-codes` (GET/POST) memverifikasi bearer token Supabase Auth lalu peran `admin` di `admin_roles`. Kode dibuat di server, hanya hash yang disimpan; kode ditampilkan sekali di `/dashboard/perangkat`.
  - Beri peran admin manual: `insert into public.admin_roles (user_id, role) values ('<uuid-user>', 'admin');`
  - `ENROLLMENT_CODE_PEPPER` harus sama dengan secret Worker agar kode dapat dipakai saat enrollment perangkat.
- **Types DB**: `src/lib/supabase/types.ts`.

> ⚠️ Logic lisensi/aktivasi jangan di-hardcode di frontend — hanya via endpoint server (`/api/activation`).