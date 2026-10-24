import { createHash } from "node:crypto";

export interface ActivationLicense {
  id: string;
  owner_id: string | null;
  status: string;
  starts_at: string;
  expires_at: string | null;
  max_devices: number;
  activated_at: string | null;
}

export interface ActivationDevice {
  device_id: string;
  license_id: string | null;
  platform: string;
  status: string;
}

export type ActivationDecision =
  | { ok: true; idempotent: boolean; activateLicense: boolean }
  | { ok: false; code: string; message: string };

export function normalizeActivationCode(input: string): string {
  return input.trim().toUpperCase();
}

export function hashActivationCode(input: string, pepper: string): string {
  if (!pepper) {
    throw new Error("ACTIVATION_CODE_PEPPER wajib diisi.");
  }
  return createHash("sha256")
    .update(`${pepper}:${normalizeActivationCode(input)}`)
    .digest("hex");
}

export function decideActivation(input: {
  license: ActivationLicense;
  device: ActivationDevice | null;
  deviceCount: number;
  now: Date;
}): ActivationDecision {
  const { license, device, deviceCount, now } = input;

  if (license.status !== "trial" && license.status !== "active") {
    return {
      ok: false,
      code: "LICENSE_INACTIVE",
      message: `Lisensi berstatus ${license.status} dan tidak dapat diaktifkan.`
    };
  }

  const startsAt = Date.parse(license.starts_at);
  if (Number.isFinite(startsAt) && startsAt > now.getTime()) {
    return {
      ok: false,
      code: "LICENSE_NOT_STARTED",
      message: "Lisensi belum memasuki masa berlaku."
    };
  }

  if (license.expires_at) {
    const expiresAt = Date.parse(license.expires_at);
    if (Number.isFinite(expiresAt) && expiresAt < now.getTime()) {
      return {
        ok: false,
        code: "LICENSE_EXPIRED",
        message: "Lisensi sudah kedaluwarsa."
      };
    }
  }

  if (device?.license_id && device.license_id !== license.id) {
    return {
      ok: false,
      code: "DEVICE_BOUND_OTHER",
      message: "Perangkat ini sudah terikat ke lisensi lain."
    };
  }

  if (device?.license_id === license.id) {
    return { ok: true, idempotent: true, activateLicense: license.status !== "active" };
  }

  if (deviceCount >= license.max_devices) {
    return {
      ok: false,
      code: "DEVICE_LIMIT_REACHED",
      message: `Batas perangkat untuk lisensi ini tercapai (${license.max_devices}).`
    };
  }

  return { ok: true, idempotent: false, activateLicense: license.status !== "active" };
}

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export function machineIdForAudit(deviceId: string): string | null {
  return UUID_PATTERN.test(deviceId) ? deviceId : null;
}
