import type { Metadata } from "next";
import Link from "next/link";
import { ResetPasswordForm } from "@/components/auth/ResetPasswordForm";
import { Icon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Reset Kata Sandi",
  description: "Atur ulang kata sandi akun Gerbang Edukasi.",
  robots: { index: false },
};

export default function ResetPasswordPage() {
  return (
    <section className="grid min-h-[70vh] place-items-center bg-surface-muted py-16">
      <div className="w-full max-w-sm rounded-2xl border border-line bg-surface p-8 shadow-card">
        <div className="mb-6 flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
            <Icon name="logo" size={24} />
          </span>
          <div>
            <p className="font-bold text-ink">Reset Kata Sandi</p>
            <p className="text-xs text-muted">Kirim tautan atau buat kata sandi baru</p>
          </div>
        </div>
        <ResetPasswordForm />
        <p className="mt-6 text-center text-sm text-muted">
          Ingat kata sandi?{" "}
          <Link href="/login" className="font-semibold text-primary hover:text-primary-dark">
            Kembali ke login
          </Link>
        </p>
      </div>
    </section>
  );
}
