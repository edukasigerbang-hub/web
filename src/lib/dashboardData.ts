import { createAnonClient } from "@/lib/supabase/client";

export interface LicenseRow {
  id: string;
  plan: string;
  status: string;
  max_devices: number;
  starts_at: string;
  expires_at: string | null;
  activated_at: string | null;
  created_at: string;
}

export interface DeviceRow {
  id: string;
  device_id: string;
  license_id: string | null;
  platform: string;
  label: string | null;
  status: string;
  activated_at: string | null;
  last_seen_at: string | null;
  created_at: string;
}

export interface OwnDashboardData {
  userId: string;
  licenses: LicenseRow[];
  devices: DeviceRow[];
}

export async function loadOwnDashboardData(): Promise<
  { ok: true; data: OwnDashboardData } | { ok: false; reason: "unconfigured" | "unauthenticated" | "error" }
> {
  const client = createAnonClient();
  if (!client) {
    return { ok: false, reason: "unconfigured" };
  }

  const session = await client.auth.getSession();
  const user = session.data.session?.user;
  if (!user) {
    return { ok: false, reason: "unauthenticated" };
  }

  const [licensesResult, devicesResult] = await Promise.all([
    client
      .from("licenses")
      .select("id, plan, status, max_devices, starts_at, expires_at, activated_at, created_at")
      .eq("owner_id", user.id)
      .order("created_at", { ascending: false }),
    client
      .from("ifp_devices")
      .select(
        "id, device_id, license_id, platform, label, status, activated_at, last_seen_at, created_at"
      )
      .eq("owner_id", user.id)
      .order("created_at", { ascending: false })
  ]);

  if (licensesResult.error || devicesResult.error) {
    return { ok: false, reason: "error" };
  }

  return {
    ok: true,
    data: {
      userId: user.id,
      licenses: (licensesResult.data ?? []) as LicenseRow[],
      devices: (devicesResult.data ?? []) as DeviceRow[]
    }
  };
}
