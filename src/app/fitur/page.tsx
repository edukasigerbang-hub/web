import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { features } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/icons";
import type { IconName } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Fitur",
  description: "Fitur inti Gerbang Edukasi — interactive learning, quiz, multimedia, educational games, dan lebih.",
};

export default function FiturPage() {
  return (
    <>
      <PageHeader
        eyebrow="Fitur"
        title="Fitur yang Membuat Belajar Lebih Interaktif"
        description="Semua fitur inti Gerbang Edukasi dalam satu platform — untuk pembelajaran yang lebih aktif di kelas."
      />
      <Container className="py-16 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.id}
              className="rounded-2xl border border-line bg-surface p-7 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <Icon name={feature.icon as IconName} size={24} />
              </span>
              <h2 className="mt-4 text-lg font-bold text-ink">{feature.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{feature.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </>
  );
}