import type { Metadata } from "next";
import { partner } from "@/data/site";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/icons";
import type { IconName } from "@/components/ui/icons";
import { PartnerForm } from "@/components/home/PartnerForm";

export const metadata: Metadata = {
  title: "Partner",
  description: "Tumbuh bersama Gerbang Edukasi — jadi distributor, reseller, integrator, atau partner teknologi pendidikan.",
};

export default function PartnerPage() {
  return (
    <>
      <PageHeader
        eyebrow={partner.eyebrow}
        title={partner.title}
        description={partner.description}
      />
      <Container className="py-14 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <ul className="space-y-3">
            {partner.perks.map((perk) => (
              <li
                key={perk.title}
                className="flex items-start gap-3 rounded-2xl border border-line bg-surface p-4 shadow-card"
              >
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <Icon name={perk.icon as IconName} size={20} />
                </span>
                <div>
                  <p className="font-bold text-ink">{perk.title}</p>
                  <p className="text-sm text-muted">{perk.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="rounded-2xl border border-line bg-surface-muted p-6 sm:p-8">
            <h2 className="text-xl font-bold text-ink">Daftar sebagai Partner</h2>
            <p className="mt-1 mb-6 text-sm text-muted">Isi form berikut — tim kami akan menghubungi Anda.</p>
            <PartnerForm />
          </div>
        </div>
      </Container>
    </>
  );
}