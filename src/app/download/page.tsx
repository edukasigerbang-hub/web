import type { Metadata } from "next";
import { downloads, systemRequirements, installGuide, faqs } from "@/data/pages";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { Icon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Download",
  description: "Download Gerbang Edukasi untuk Android dan Windows — system requirement, panduan instalasi, dan FAQ.",
};

export default function DownloadPage() {
  return (
    <>
      <PageHeader
        eyebrow="Download"
        title="Download Aplikasi"
        description="Pilih platform Anda — Android atau Windows. Cek system requirement sebelum menginstal."
      />
      <Container className="py-14 md:py-20">
        {/* Platform download */}
        <div className="grid gap-5 md:grid-cols-2">
          {downloads.map((item) => (
            <div key={item.platform} className="rounded-2xl border border-line bg-surface p-8 shadow-card">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-muted text-ink">
                  <Icon name={item.platform === "android" ? "android" : "window"} size={26} />
                </span>
                <h2 className="text-xl font-bold capitalize text-ink">{item.platform}</h2>
              </div>
              <p className="mt-4 text-sm font-semibold text-primary-dark">{item.version}</p>
              <p className="mt-1 text-sm text-muted">{item.note}</p>
              <div className="mt-6">
                <Button
                  href={item.href}
                  variant="primary"
                  icon="download"
                  event={item.platform === "android" ? "download_android" : "download_windows"}
                >
                  Download {item.platform === "android" ? "Android" : "Windows"}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* System requirements */}
        <h2 className="mt-16 text-2xl font-bold text-ink">System Requirement</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {systemRequirements.map((req) => (
            <div key={req.platform} className="rounded-2xl border border-line bg-surface-muted p-6">
              <h3 className="font-bold capitalize text-ink">{req.platform}</h3>
              <ul className="mt-3 space-y-2">
                {req.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                    <Icon name="check" size={16} className="mt-0.5 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Install guide */}
        <h2 className="mt-16 text-2xl font-bold text-ink">Panduan Instalasi</h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {installGuide.map((step) => (
            <li key={step.step} className="rounded-2xl border border-line bg-surface p-5 shadow-card">
              <span className="text-2xl font-extrabold text-primary">{step.step}</span>
              <h3 className="mt-2 font-bold text-ink">{step.title}</h3>
              <p className="mt-1 text-sm text-muted">{step.description}</p>
            </li>
          ))}
        </ol>

        {/* FAQ */}
        <h2 className="mt-16 text-2xl font-bold text-ink">FAQ Download</h2>
        <div className="mt-6 max-w-3xl">
          <FaqAccordion items={faqs} />
        </div>
      </Container>
    </>
  );
}