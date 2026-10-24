import { describe, expect, it } from "vitest";
import { MAX_PASSWORD_LENGTH, validateNewPassword } from "./password";

describe("validateNewPassword", () => {
  it("menolak kata sandi pendek", () => {
    expect(validateNewPassword("pendek")).toBe("Kata sandi minimal 8 karakter.");
  });

  it("menerima kata sandi 8 karakter", () => {
    expect(validateNewPassword("12345678")).toBeNull();
  });

  it("menolak kata sandi melebihi batas bcrypt", () => {
    expect(validateNewPassword("a".repeat(MAX_PASSWORD_LENGTH + 1))).toBe(
      "Kata sandi maksimal 72 karakter."
    );
  });

  it("tidak memangkas spasi karena spasi adalah bagian kata sandi", () => {
    expect(validateNewPassword(" pass phrase ")).toBeNull();
  });
});
