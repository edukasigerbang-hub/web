import { partner } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/icons";
import type { IconName } from "@/components/ui/icons";
import { PartnerForm } from "./PartnerForm";

/** Partner — nilai tambah mitra + lead form B2B. */
export function PartnerSection() {
  return (
    <Section id="partner" tone="white">
      <Container>
        <SectionHeading
          eyebrow={partner.eyebrow}
          title={partner.title}
          description={partner.description}
        />
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Partner value */}
          <ul className="space-y-4">
            {partner.perks.map((perk) => (
              <li
                key={perk.title}
                className="flex items-start gap-4 rounded-xl border border-line bg-surface p-4"
              >
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <Icon name={perk.icon as IconName} size={22} />
                </span>
                <div>
                  <p className="font-bold text-ink">{perk.title}</p>
                  <p className="mt-1 text-sm text-muted">{perk.description}</p>
                </div>
              </li>
            ))}
          </ul>
          {/* Lead form */}
          <div className="rounded-2xl border border-line bg-surface-muted p-6 sm:p-8">
            <h3 className="text-xl font-bold text-ink">Daftar sebagai Partner</h3>
            <p className="mt-1 mb-6 text-sm text-muted">
              Isi form berikut — tim kami akan menghubungi Anda.
            </p>
            <PartnerForm />
          </div>
        </div>
      </Container>
    </Section>
  );
}