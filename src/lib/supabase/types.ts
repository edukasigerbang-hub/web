/**
 * Database types used as the typed Supabase client generic.
 * Colons correspond to the migration `supabase/migrations/0001_init.sql`.
 * Regenerate automatically later: `supabase gen types typescript`.
 */
export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: { id: string; full_name: string | null; email: string | null; role: string; created_at: string; updated_at: string };
        Insert: { id: string; full_name?: string | null; email?: string | null; role?: string };
        Update: { full_name?: string | null; email?: string | null; role?: string };
      };
      licenses: {
        Row: { id: string; owner_id: string | null; partner_code: string | null; plan: string; status: string; max_devices: number; starts_at: string; expires_at: string | null; created_at: string; serial_hash: string | null; product_id: string | null; license_type: string | null; machine_id: string | null; key_id: string | null; activated_at: string | null };
        Insert: { owner_id?: string | null; partner_code?: string | null; plan?: string; status?: string; max_devices?: number; expires_at?: string | null; serial_hash?: string | null; product_id?: string | null; license_type?: string | null; machine_id?: string | null; key_id?: string | null; activated_at?: string | null };
        Update: { plan?: string; status?: string; max_devices?: number; expires_at?: string | null; serial_hash?: string | null; product_id?: string | null; license_type?: string | null; machine_id?: string | null; key_id?: string | null; activated_at?: string | null };
      };
      devices: {
        Row: { id: string; device_id: string; license_id: string | null; platform: string; label: string | null; status: string; activated_at: string | null; owner_id: string | null; created_at: string; last_seen_at: string | null };
        Insert: { device_id: string; license_id?: string | null; platform: string; label?: string | null; status?: string; owner_id?: string | null; last_seen_at?: string | null };
        Update: { platform?: string; label?: string | null; status?: string; last_seen_at?: string | null };
      };
      activations: {
        Row: { id: string; device_id: string; activation_code: string; result: string; message: string | null; ip: string | null; created_at: string };
        Insert: { device_id: string; activation_code: string; result: string; message?: string | null; ip?: string | null };
        Update: { result?: string; message?: string | null };
      };
      partners: {
        Row: { id: string; name: string; company: string | null; email: string; phone: string | null; city: string | null; business_type: string | null; message: string | null; status: string; created_at: string };
        Insert: { name: string; company?: string | null; email: string; phone?: string | null; city?: string | null; business_type?: string | null; message?: string | null; status?: string };
        Update: { status?: string };
      };
      content: {
        Row: { id: string; slug: string; title: string; category: string; platform: string; description: string | null; thumb_url: string | null; published: boolean; created_at: string };
        Insert: { slug: string; title: string; category: string; platform: string; description?: string | null; thumb_url?: string | null; published?: boolean };
        Update: { title?: string; description?: string | null; thumb_url?: string | null; published?: boolean };
      };
      orders: {
        Row: { id: string; user_id: string | null; plan: string; amount_cents: number | null; currency: string; status: string; created_at: string };
        Insert: { user_id?: string | null; plan: string; amount_cents?: number | null; currency?: string; status?: string };
        Update: { status?: string };
      };
      enrollment_codes: {
        Row: { id: string; code_hash: string; label: string | null; max_uses: number; used_count: number; expires_at: string | null; created_at: string };
        Insert: { code_hash: string; label?: string | null; max_uses?: number; expires_at?: string | null };
        Update: { label?: string | null; max_uses?: number; expires_at?: string | null };
      };
      sync_events: {
        Row: { id: number; device_id: string; event_id: string; event_type: string; payload: Json; received_at: string };
        Insert: { device_id: string; event_id: string; event_type: string; payload: Json };
        Update: Record<string, never>;
      };
      license_audit: {
        Row: { id: number; license_id: string | null; action: string; machine_id: string | null; actor: string | null; created_at: string };
        Insert: { license_id?: string | null; action: string; machine_id?: string | null; actor?: string | null };
        Update: Record<string, never>;
      };
      admin_roles: {
        Row: { user_id: string; role: string; created_at: string };
        Insert: { user_id: string; role: string };
        Update: { role?: string };
      };
    };
    Views: Record<string, never>;
    Functions: {
      consume_enrollment_code: {
        Args: { p_code_hash: string };
        Returns: Array<{ code_id: string | null; allowed: boolean }>;
      };
    };
    Enums: Record<string, never>;
  };
};