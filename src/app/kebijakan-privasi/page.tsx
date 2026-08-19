import type { Metadata } from "next";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description: "Kebijakan privasi Gerbang Edukasi.",
};

export default function PrivacyPage() {
  return (
    <Container className="max-w-3xl py-14 md:py-20">
      <h1 className="text-3xl font-extrabold text-ink">Kebijakan Privasi</h1>
      <p className="mt-2 text-sm text-muted">Terakhir diperbarui: placeholder</p>
      <div className="prose mt-8 space-y-4 text-sm leading-relaxed text-ink-soft">
        <p>
          Dokumen ini menjelaskan bagaimana {site.name} mengumpulkan, menggunakan, dan
          melindungi data Anda.
        </p>
        <p>
          <strong className="text-ink">Data yang dikumpulkan:</strong> data akun, perangkat,
          aktivasi lisensi, dan data penggunaan aplikasi yang diperlukan.
        </p>
        <p>
          <strong className="text-ink">Penggunaan data:</strong> untuk memproses lisensi,
          aktivasi, dukungan, serta peningkatan produk.
        </p>
        <p>
          Konten lengkap kebijakan privasi mengikuti perkembangan produk dan akan dilengkapi
          sesuai persetujuan hukum tim Anda.
        </p>
        <p>
          Untuk pertanyaan privasi, hubungi <a className="text-primary" href="/support">Support</a>.
        </p>
      </div>
    </Container>
  );
}