import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/icons";
import { kontenContent } from "@/data/site";

/**
 * Informational banner -- reaffirms that the content collection is actively
 * growing (spec section 14). Very light background keeps it subtle, not heavy.
 */
export function ContentGrowth() {
  return (
    <section className="bg-surface-muted py-10 md:py-12">
      <Container>
        <div className="flex flex-col items-center text-center">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
            <Icon name="sparkle" size={24} />
          </span>
          <h3 className="mt-4 text-lg font-bold text-ink">
            {kontenContent.growthEyebrow}
          </h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
            {kontenContent.growthDescription}
          </p>
        </div>
      </Container>
    </section>
  );
}
