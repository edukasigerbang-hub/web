import type { Metadata } from "next";
import Link from "next/link";
import { LoginForm } from "@/components/auth/LoginForm";
import { Icon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Login",
  description: "Masuk ke akun Gerbang Edukasi untuk mengelola lisensi, perangkat, dan unduhan.",
};

export default function LoginPage() {
  return (
    <section className="grid min-h-[70vh] place-items-center bg-surface-muted py-16">
      <div className="w-full max-w-sm rounded-2xl border border-line bg-surface p-8 shadow-card">
        <div className="mb-6 flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
            <Icon name="logo" size={24} />
          </span>
          <div>
            <p className="font-bold text-ink">Masuk</p>
            <p className="text-xs text-muted">Akses dashboard & lisensi Anda</p>
          </div>
        </div>
        <LoginForm />
        <p className="mt-6 text-center text-sm text-muted">
          Belum punya akun?{" "}
          <Link href="/demo" className="font-semibold text-primary hover:text-primary-dark">
            Coba demo dulu
          </Link>
        </p>
                        <p className="mt-4 text-center text-xs text-muted">
          Masuk memakai email &amp; kata sandi — autentikasi via Supabase Auth.
        </p>
      </div>
    </section>
  );
}