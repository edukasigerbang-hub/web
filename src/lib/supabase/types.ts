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
        Row: { id: string; owner_id: string | null; partner_code: string | null; plan: string; status: string; max_devices: number; starts_at: string; expires_at: string | null; created_at: string };
        Insert: { owner_id?: string | null; partner_code?: string | null; plan?: string; status?: string; max_devices?: number; expires_at?: string | null };
        Update: { plan?: string; status?: string; max_devices?: number; expires_at?: string | null };
      };
      devices: {
        Row: { id: string; device_id: string; license_id: string | null; platform: string; label: string | null; status: string; activated_at: string | null; owner_id: string | null; created_at: string };
        Insert: { device_id: string; license_id?: string | null; platform: string; label?: string | null; status?: string; owner_id?: string | null };
        Update: { platform?: string; label?: string | null; status?: string };
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
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
};