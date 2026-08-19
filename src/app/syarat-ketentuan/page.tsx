import type { Metadata } from "next";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan",
  description: "Syarat dan ketentuan penggunaan Gerbang Edukasi.",
};

export default function TermsPage() {
  return (
    <Container className="max-w-3xl py-14 md:py-20">
      <h1 className="text-3xl font-extrabold text-ink">Syarat &amp; Ketentuan</h1>
      <p className="mt-2 text-sm text-muted">Terakhir diperbarui: placeholder</p>
      <div className="mt-8 space-y-4 text-sm leading-relaxed text-ink-soft">
        <p>
          Dengan menggunakan produk {site.name}, Anda menyetujui syarat dan ketentuan berikut.
        </p>
        <p>
          <strong className="text-ink">Lisensi:</strong> penggunaan aplikasi diatur oleh lisensi
          yang Anda miliki (Demo, Personal, School, atau Enterprise).
        </p>
        <p>
          <strong className="text-ink">Aktivasi:</strong> setiap perangkat mungkin memerlukan
          aktivasi dengan activation code dan Device ID.
        </p>
        <p>
          <strong className="text-ink">Larangan:</strong> dilarang memodifikasi, mendistribusikan,
          atau menggunakan ulang aplikasi tanpa izin resmi {site.name}.
        </p>
        <p>
          Dokumen lengkap akan dilengkapi sesuai kebutuhan hukum tim Anda.
        </p>
      </div>
    </Container>
  );
}