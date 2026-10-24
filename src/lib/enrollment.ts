import { createHash, randomInt } from "node:crypto";

// Tanpa karakter ambigu (0/O, 1/I/L).
const ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";

export function generateEnrollmentCode(groups = 4, groupLength = 4): string {
  const parts: string[] = [];
  for (let group = 0; group < groups; group += 1) {
    let part = "";
    for (let index = 0; index < groupLength; index += 1) {
      part += ALPHABET[randomInt(ALPHABET.length)];
    }
    parts.push(part);
  }
  return parts.join("-");
}

export function normalizeEnrollmentCode(input: string): string {
  return input.trim();
}

export function hashEnrollmentCode(input: string, pepper: string): string {
  if (!pepper) {
    throw new Error("ENROLLMENT_CODE_PEPPER wajib diisi.");
  }
  return createHash("sha256")
    .update(`${pepper}:${normalizeEnrollmentCode(input)}`)
    .digest("hex");
}
