export const MIN_PASSWORD_LENGTH = 8;
// Batas bcrypt yang dipakai Supabase Auth.
export const MAX_PASSWORD_LENGTH = 72;

export function validateNewPassword(password: string): string | null {
  if (password.length < MIN_PASSWORD_LENGTH) {
    return `Kata sandi minimal ${MIN_PASSWORD_LENGTH} karakter.`;
  }
  if (password.length > MAX_PASSWORD_LENGTH) {
    return `Kata sandi maksimal ${MAX_PASSWORD_LENGTH} karakter.`;
  }
  return null;
}
