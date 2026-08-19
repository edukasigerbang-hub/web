import type { Metadata } from "next";
import { faqs, supportData } from "@/data/pages";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Support",
  description: "Pusat bantuan Gerbang Edukasi — FAQ, panduan instalasi & aktivasi, troubleshooting, dan kontak.",
};

export default function SupportPage() {
  return (
    <>
      <PageHeader
        eyebrow={supportData.eyebrow}
        title={supportData.title}
        description={supportData.description}
      />
      <Container className="py-14 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            <h2 className="text-2xl font-bold text-ink">Pertanyaan Umum</h2>
            <div className="mt-6">
              <FaqAccordion items={faqs} />
            </div>

            <h2 className="mt-14 text-2xl font-bold text-ink">Panduan & Troubleshooting</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                { t: "Panduan Instalasi", href: "/download", icon: "download" },
                { t: "Panduan Aktivasi", href: "/aktivasi", icon: "key" },
                { t: "Troubleshooting", href: "/support", icon: "support" },
              ].map((g) => (
                <a
                  key={g.t}
                  href={g.href}
                  className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-5 shadow-card transition-shadow hover:shadow-card-hover"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <Icon name={g.icon as "download" | "key" | "support"} size={20} />
                  </span>
                  <span className="font-semibold text-ink">{g.t}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact sidebar */}
          <aside className="h-fit rounded-2xl border border-line bg-surface-muted p-6">
            <h3 className="text-lg font-bold text-ink">Kontak Dukungan</h3>
            <p className="mt-2 text-sm text-muted">
              Email: <a href={`mailto:${supportData.email}`} className="font-medium text-primary">{supportData.email}</a>
            </p>
            <div className="mt-4">
              <Button href="/partner" variant="secondary" className="w-full" event="contact_submit">
                Hubungi Kami
              </Button>
            </div>
            <p className="mt-4 text-xs text-muted">{supportData.whatsappNote}</p>
            <p className="mt-2 text-xs text-muted">
              WhatsApp: <span className="font-mono font-semibold text-ink-soft">{supportData.whatsapp}</span>
            </p>
          </aside>
        </div>
      </Container>
    </>
  );
}