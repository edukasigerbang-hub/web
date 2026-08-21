import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Aktivasi Lisensi Gerbang Edukasi",
  description:
    "Aktivasi lisensi Gerbang Edukasi — masukkan Kode Aktivasi dan ID Perangkat.",
};

const steps = [
  {
    title: "Buka aplikasi",
    desc: "Jalankan Gerbang Edukasi pada perangkat yang ingin diaktifkan.",
  },
  {
    title: "Temukan ID Perangkat",
    desc: "Buka bagian aktivasi pada aplikasi dan salin ID Perangkat yang ditampilkan.",
  },
  {
    title: "Masukkan kode aktivasi",
    desc: "Masukkan Kode Aktivasi dan ID Perangkat pada formulir di halaman ini.",
  },
  {
    title: "Aktifkan lisensi",
        desc: "Aktivasi lisensi akan diproses melalui layanan aktivasi online.",
  },
];

export default function AktivasiPage() {
  return (
    <>
      <PageHeader
        eyebrow="Aktivasi"
        title="Aktivasi Lisensi Gerbang Edukasi"
        description="Layanan aktivasi online sedang dipersiapkan."
      />
      <Container className="py-14 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="CARA AKTIVASI"
              title="Aktifkan Gerbang Edukasi dalam Beberapa Langkah"
              description="Ikuti langkah berikut untuk menyiapkan aktivasi lisensi Anda."
              align="left"
            />
            <ol className="mt-6 space-y-4">
              {steps.map((s, i) => (
                <li
                  key={s.title}
                  className="flex items-start gap-3 text-sm text-ink-soft"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-soft text-xs font-bold text-primary">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-medium text-ink">{s.title}</p>
                    <p className="mt-0.5 text-sm text-muted">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-6 flex items-center gap-2 text-sm text-muted">
              <Icon name="support" size={18} className="text-primary" />
              Butuh bantuan? Kunjungi halaman
              <a
                href="/support"
                className="font-semibold text-primary hover:text-primary-dark"
              >
                {" "}
                Bantuan
              </a>
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-surface-muted p-6 sm:p-8">
            <h2 className="flex items-center gap-2 text-xl font-bold text-ink">
              <Icon name="key" size={20} className="text-primary" /> Data Aktivasi
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Masukkan informasi yang diperlukan untuk memproses aktivasi lisensi.
            </p>
            <div className="mt-4 grid gap-4">
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-medium text-ink-soft">
                  Kode Aktivasi
                </span>
                <input
                  type="text"
                  placeholder="XXXX-XXXX-XXXX-XXXX"
                  disabled
                  className="rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink font-mono placeholder:text-muted disabled:cursor-not-allowed disabled:opacity-60"
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-medium text-ink-soft">
                  ID Perangkat
                </span>
                <input
                  type="text"
                  placeholder="Masukkan ID Perangkat"
                  disabled
                  className="rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink font-mono placeholder:text-muted disabled:cursor-not-allowed disabled:opacity-60"
                />
              </label>
            </div>
            <div className="mt-4 rounded-xl border border-line bg-surface-muted p-4 text-sm">
              <p className="font-semibold text-ink">Aktivasi Online Segera Hadir</p>
              <p className="mt-1 text-muted">
                Fitur aktivasi online sedang dipersiapkan. Untuk kebutuhan
                aktivasi saat ini, silakan hubungi kami.
              </p>
            </div>
            <div className="mt-6">
              <Button href="/support" variant="primary" className="w-full">
                Hubungi Kami
              </Button>
            </div>
          </div>
        </div>
      </Container>
      <Section tone="white">
        <Container className="flex flex-col items-center gap-4 text-center">
          <SectionHeading
            eyebrow="BUTUH BANTUAN?"
            title="Kesulitan Melakukan Aktivasi?"
            description="Jika Anda mengalami kendala saat melakukan aktivasi, hubungi kami untuk mendapatkan bantuan."
          />
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Button href="/support" variant="primary" size="lg">
              Hubungi Kami
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
