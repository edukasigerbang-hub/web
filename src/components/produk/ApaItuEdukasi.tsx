import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ScreenPlaceholder } from "@/components/fitur/ScreenPlaceholder";

/** "Apa Itu Gerbang Edukasi?" — intro produk, teks + visual berdampingan. */
export function ApaItuEdukasi() {
  return (
    <Section id="tentang" tone="white">
      <Container className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-ink sm:text-3xl">
            Apa Itu Gerbang Edukasi?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Gerbang Edukasi adalah platform media pembelajaran interaktif yang
            dirancang untuk Interactive Flat Panel. Guru dapat menggunakan satu
            platform untuk menghadirkan materi, aktivitas, kuis, multimedia,
            permainan edukasi, latihan, dan presentasi dalam satu pengalaman
            belajar.
          </p>
        </div>
        <div>
          <ScreenPlaceholder
            icon="logo"
            title="Gerbang Edukasi"
            theme="accent"
            img="/assets/hero-ifp.png"
          />
        </div>
      </Container>
    </Section>
  );
}
