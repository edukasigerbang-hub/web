import { describe, expect, it } from "vitest";
import {
  decideActivation,
  hashActivationCode,
  machineIdForAudit,
  normalizeActivationCode
} from "./activation";

const NOW = new Date("2026-10-24T00:00:00Z");

function license(overrides: Partial<Parameters<typeof decideActivation>[0]["license"]> = {}) {
  return {
    id: "license-1",
    owner_id: null,
    status: "trial",
    starts_at: "2026-01-01T00:00:00Z",
    expires_at: "2026-12-31T00:00:00Z",
    max_devices: 1,
    activated_at: null,
    ...overrides
  };
}

describe("hash aktivasi", () => {
  it("menormalisasi kode dan menghasilkan hash stabil", () => {
    expect(normalizeActivationCode("  ab-cd  ")).toBe("AB-CD");
    const first = hashActivationCode("  ab-cd ", "pepper-1");
    const second = hashActivationCode("AB-CD", "pepper-1");
    expect(first).toBe(second);
    expect(first).toHaveLength(64);
    expect(hashActivationCode("AB-CD", "pepper-2")).not.toBe(first);
  });

  it("menolak pepper kosong", () => {
    expect(() => hashActivationCode("AB-CD", "")).toThrow(/PEPPER/);
  });
});

describe("decideActivation", () => {
  it("mengaktifkan perangkat baru saat kuota tersedia", () => {
    const decision = decideActivation({
      license: license({ status: "active" }),
      device: null,
      deviceCount: 0,
      now: NOW
    });
    expect(decision).toEqual({ ok: true, idempotent: false, activateLicense: false });
  });

  it("menolak lisensi kedaluwarsa, tidak aktif, atau belum mulai", () => {
    expect(
      decideActivation({
        license: license({ expires_at: "2026-10-01T00:00:00Z" }),
        device: null,
        deviceCount: 0,
        now: NOW
      })
    ).toMatchObject({ ok: false, code: "LICENSE_EXPIRED" });

    expect(
      decideActivation({
        license: license({ status: "cancelled" }),
        device: null,
        deviceCount: 0,
        now: NOW
      })
    ).toMatchObject({ ok: false, code: "LICENSE_INACTIVE" });

    expect(
      decideActivation({
        license: license({ starts_at: "2027-01-01T00:00:00Z" }),
        device: null,
        deviceCount: 0,
        now: NOW
      })
    ).toMatchObject({ ok: false, code: "LICENSE_NOT_STARTED" });
  });

  it("menolak perangkat yang terikat lisensi lain", () => {
    expect(
      decideActivation({
        license: license(),
        device: {
          device_id: "device-1",
          license_id: "license-lain",
          platform: "windows",
          status: "active"
        },
        deviceCount: 1,
        now: NOW
      })
    ).toMatchObject({ ok: false, code: "DEVICE_BOUND_OTHER" });
  });

  it("menolak perangkat baru saat kuota penuh", () => {
    expect(
      decideActivation({
        license: license({ max_devices: 2 }),
        device: null,
        deviceCount: 2,
        now: NOW
      })
    ).toMatchObject({ ok: false, code: "DEVICE_LIMIT_REACHED" });
  });

  it("idempoten untuk perangkat yang sama walau kuota penuh", () => {
    expect(
      decideActivation({
        license: license({ status: "active" }),
        device: {
          device_id: "device-1",
          license_id: "license-1",
          platform: "windows",
          status: "active"
        },
        deviceCount: 1,
        now: NOW
      })
    ).toEqual({ ok: true, idempotent: true, activateLicense: false });
  });

  it("menandai lisensi trial perlu diaktifkan", () => {
    expect(
      decideActivation({
        license: license({ status: "trial" }),
        device: null,
        deviceCount: 0,
        now: NOW
      })
    ).toEqual({ ok: true, idempotent: false, activateLicense: true });
  });
});

describe("machineIdForAudit", () => {
  it("hanya mengembalikan UUID", () => {
    expect(machineIdForAudit("123e4567-e89b-42d3-a456-426614174000")).toBe(
      "123e4567-e89b-42d3-a456-426614174000"
    );
    expect(machineIdForAudit("GE-XXXX")).toBeNull();
  });
});
