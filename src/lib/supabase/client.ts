/**
 * Browser (anon) Supabase client — used in client components.
 * Guarded: returns null (not a client) when env vars are missing, so the
 * site still builds/runs without live credentials and degrades to
 * placeholder. Pass env vars to go live.
 */
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import type { SupabaseClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let cached: SupabaseClient | null | undefined;

export function isSupabaseConfigured(): boolean {
  return Boolean(url && anonKey);
}

/** Lazily create (or return cached) browser anon client. */
export function createAnonClient(): SupabaseClient | null {
  if (!isSupabaseConfigured()) return null;
  if (cached !== undefined) return cached;
  cached = createSupabaseClient(url!, anonKey!);
  return cached;
}