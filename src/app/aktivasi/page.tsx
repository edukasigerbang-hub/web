import type { Metadata } from "next";
import { activationData } from "@/data/pages";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { ActivationForm } from "@/components/ui/ActivationForm";
import { Icon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Aktivasi",
  description: "Aktivasi lisensi Gerbang Edukasi — masukkan activation code dan Device ID perangkat.",
};

export default function AktivasiPage() {
  return (
    <>
      <PageHeader
        eyebrow={activationData.eyebrow}
        title={activationData.title}
        description={activationData.description}
      />
      <Container className="py-14 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold text-ink">Cara Aktivasi</h2>
            <ol className="mt-4 space-y-3">
              {activationData.steps.map((step, i) => (
                <li key={step} className="flex items-start gap-3 text-sm text-ink-soft">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-soft text-xs font-bold text-primary">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
            <p className="mt-6 rounded-xl border border-line bg-surface-muted p-4 text-xs text-muted">
              {activationData.note}
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm text-muted">
              <Icon name="support" size={18} className="text-primary" />
              Butuh bantuan? Kunjungi halaman{" "}
              <a href="/support" className="font-semibold text-primary hover:text-primary-dark">
                Support
              </a>
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-surface-muted p-6 sm:p-8">
            <ActivationForm />
          </div>
        </div>
      </Container>
    </>
  );
}