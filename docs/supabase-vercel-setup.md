# Setup Supabase + Deploy Vercel

Panduan untuk terhubung backend **Supabase** dan deploy frontend pada **Vercel**.

## 1. Supabase

1. Buat project pada https://supabase.com → **New Project**.
2. Migrate schema:
   - Buka **SQL Editor**.
   - Paste isi dari `supabase/migrations/0001_init.sql` → **Run**.
   - Aksi yang dibuat: `profiles`, `licenses`, `devices`, `activations`, `partners`, `content`, `orders`, Row Level Security, dan trigger `handle_new_user` (membuat profile saat signup).
3. Kirim `.env.example` → `.env.local` dan isi nilai dari **Project Settings → API**:

   ```
   NEXT_PUBLIC_SUPABASE_URL=https://<ref>.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon key>
   SUPABASE_SERVICE_ROLE_KEY=<service_role key>   # hanya server-side
   ```

Opcional nanti:
- **Supabase Auth** → email/password (form login sudah terhubung via `createAnonClient().auth.signInWithPassword`).
- **Supabase Storage** → thumbnail konten (`content.thumb_url`).
- **Supabase Edge Functions** → validasi lisensi pada server (periksa `licenses`/`devices`, tercatat `activations`).

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
- **Aktivasi**: `src/app/api/activation` (POST) → tabla `activations`; logic validasi tetap server-side (mock masih placeholder).
- **Types DB**: `src/lib/supabase/types.ts`.

> ⚠️ Logic lisensi/aktivasi jangan di-hardcode di frontend — hanya via endpoint server (`/api/activation`).