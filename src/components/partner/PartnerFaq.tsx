import { partner } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

/** FAQ kemitraan ringkas — accordion aksesibel (reuse FaqAccordion). */
export function PartnerFaq() {
  const { faq } = partner;
  return (
    <Section id="faq" tone="white">
      <Container>
        <SectionHeading eyebrow={faq.eyebrow} title={faq.title} />
        <div className="mx-auto max-w-3xl">
          <FaqAccordion items={faq.items} />
        </div>
      </Container>
    </Section>
  );
}
