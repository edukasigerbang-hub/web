# Setup Supabase + Deploy Vercel

Panduan untuk terhubung backend **Supabase** dan deploy frontend pada **Vercel**.

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

## 2. Deploy Vercel

1. Import repo: https://vercel.com → **Add New** → **Import Git Repository** → pilih `edukasigerbang-hub/web`.
2. Attena **Project Settings → Environment Variables**, tambah variabel Supabase tersebut.
3. Klik **Deploy**. Vercel auto-dete Next.js (tanpa config special).

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
- **Types DB**: `src/lib/supabase/types.ts`.

> ⚠️ Logic lisensi/aktivasi jangan di-hardcode di frontend — hanya via endpoint server (`/api/activation`).