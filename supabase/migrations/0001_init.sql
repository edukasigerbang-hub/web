-- ============================================================
-- GERBANG EDUKASI — Supabase schema + RLS (initial migration)
-- Run in Supabase SQL Editor. Tables are namespaced for extension.
-- ============================================================

-- ---------- TABLES ----------

-- User profiles (extends auth.users)
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  full_name text,
  email text,
  role text not null default 'user' check (role in ('user', 'school', 'partner', 'admin')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Licenses owned by a user or a partner/business
create table if not exists public.licenses (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references auth.users (id) on delete cascade,
  partner_code text,
  plan text not null default 'personal'
    check (plan in ('demo', 'personal', 'school', 'enterprise')),
  status text not null default 'trial'
    check (status in ('trial', 'active', 'expired', 'cancelled')),
  max_devices int not null default 1,
  starts_at timestamptz not null default now(),
  expires_at timestamptz,
  created_at timestamptz not null default now()
);

-- Devices (IFP / installs)
create table if not exists public.devices (
  id uuid primary key default gen_random_uuid(),
  device_id text not null unique,
  license_id uuid references public.licenses (id) on delete cascade,
  platform text not null check (platform in ('android', 'windows')),
  label text,
  status text not null default 'inactive'
    check (status in ('active', 'inactive', 'revoked')),
  activated_at timestamptz,
  owner_id uuid references auth.users (id) on delete cascade,
  created_at timestamptz not null default now()
);

-- Activation audit trail
create table if not exists public.activations (
  id uuid primary key default gen_random_uuid(),
  device_id text not null,
  activation_code text not null,
  result text not null check (result in ('success', 'failed')),
  message text,
  ip text,
  created_at timestamptz not null default now()
);

-- Partner leads
create table if not exists public.partners (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  company text,
  email text not null,
  whatsapp text,
  city text,
  business_type text,
  message text,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

-- Content library (mini marketplace)
create table if not exists public.content (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  category text not null,
  platform text not null check (platform in ('android', 'windows', 'both')),
  description text,
  thumb_url text,
  published boolean not null default false,
  created_at timestamptz not null default now()
);

-- Orders / purchases (B2B + licensing)
create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users (id) on delete cascade,
  plan text not null,
  amount_cents int,
  currency text not null default 'USD',
  status text not null default 'pending',
  created_at timestamptz not null default now()
);

-- ---------- Row Level Security ----------

alter table public.profiles   enable row level security;
alter table public.licenses   enable row level security;
alter table public.devices    enable row level security;
alter table public.activations enable row level security;
alter table public.partners   enable row level security;
alter table public.content    enable row level security;
alter table public.orders     enable row level security;

-- profiles: user can see/update own; admin all
create policy "profiles own select" on public.profiles for select
  to authenticated using (auth.uid() = id);
create policy "profiles own update" on public.profiles for update
  to authenticated using (auth.uid() = id);

-- licenses: owner only (users can see own; partners see via profile_code? simplify to owner)
create policy "licenses owner select" on public.licenses for select
  to authenticated using (auth.uid() = owner_id);
create policy "licenses owner insert" on public.licenses for insert
  to authenticated with check (auth.uid() = owner_id);

-- devices: owner / license lineage
create policy "devices owner select" on public.devices for select
  to authenticated using (auth.uid() = owner_id);
create policy "devices owner insert" on public.devices for insert
  to authenticated with check (auth.uid() = owner_id);

-- activations: append-only; anon can insert (app reports), read public audit minimal
create policy "activations insert" on public.activations for insert
  to anon, authenticated with check (true);

-- partners: anon & authenticated can insert leads
create policy "partners insert" on public.partners for insert
  to anon, authenticated with check (true);

-- content: published rows readable by all (anon)
create policy "content public read" on public.content for select
  to anon, authenticated using (published = true);

-- orders: owner only
create policy "orders owner select" on public.orders for select
  to authenticated using (auth.uid() = user_id);

-- helpers
create or replace function public.handle_new_user()
returns trigger
language plpgsql security definer
as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email)
  on conflict (id) do nothing;
  return new;
end;
$$;

create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();