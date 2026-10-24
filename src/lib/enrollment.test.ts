import { describe, expect, it } from "vitest";
import {
  generateEnrollmentCode,
  hashEnrollmentCode,
  normalizeEnrollmentCode
} from "./enrollment";

describe("kode enrollment", () => {
  it("membuat format 4 grup x 4 karakter tanpa ambiguitas", () => {
    const code = generateEnrollmentCode();
    expect(code).toMatch(/^[A-HJ-NP-Z2-9]{4}(-[A-HJ-NP-Z2-9]{4}){3}$/);
    expect(code).not.toMatch(/[01OIL]/);
  });

  it("menghasilkan kode berbeda", () => {
    expect(generateEnrollmentCode()).not.toBe(generateEnrollmentCode());
  });

  it("hash stabil dan peka pepper", () => {
    expect(normalizeEnrollmentCode("  ABCD-EFGH  ")).toBe("ABCD-EFGH");
    const first = hashEnrollmentCode(" ABCD-EFGH ", "pepper");
    expect(first).toBe(hashEnrollmentCode("ABCD-EFGH", "pepper"));
    expect(hashEnrollmentCode("ABCD-EFGH", "pepper-2")).not.toBe(first);
    expect(first).toHaveLength(64);
  });

  it("menolak pepper kosong", () => {
    expect(() => hashEnrollmentCode("ABCD-EFGH", "")).toThrow(/PEPPER/);
  });
});
