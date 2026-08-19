/**
 * Server (service-role) Supabase client — used ONLY in server-side
 * API route handlers. Never expose the service role key to the client.
 * Guarded: returns null when env is missing.
 */
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import type { SupabaseClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

let cached: SupabaseClient | null | undefined;

export function createServerAdminClient(): SupabaseClient | null {
  if (!url || !serviceRoleKey) return null;
  if (cached !== undefined) return cached;
  cached = createSupabaseClient(url, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
  return cached;
}