import { partner } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/icons";
import type { IconName } from "@/components/ui/icons";
import { PartnerForm } from "@/components/home/PartnerForm";

/**
 * Section CTA/form — dua kolom di desktop (penjelasan kiri, form kanan).
 * Di mobile penjelasan tampil lebih dulu, lalu form. Menyertakan reassurance
 * tanpa klaim SLA/waktu respons.
 */
export function PartnerCta() {
  return (
    <Section id="form" tone="muted">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* Left: explanation + concise benefit recap */}
          <div>
            <SectionHeading
              align="left"
              eyebrow={partner.eyebrow}
              title="Mulai Kemitraan Anda Hari Ini"
              description={partner.heroSupport}
            />
            <ul className="space-y-3">
              {partner.perks.map((perk) => (
                <li
                  key={perk.title}
                  className="flex items-start gap-3 rounded-xl border border-line bg-surface p-3.5 shadow-card"
                >
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
                    <Icon name={perk.icon as IconName} size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{perk.title}</p>
                    <p className="text-sm text-muted">{perk.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form */}
          <div className="rounded-2xl border border-line bg-surface p-6 shadow-card sm:p-8">
            <h2 className="text-xl font-bold text-ink">Daftar sebagai Partner</h2>
            <p className="mt-1 mb-6 text-sm text-muted">{partner.reassurance}</p>
            <PartnerForm />
          </div>
        </div>
      </Container>
    </Section>
  );
}
