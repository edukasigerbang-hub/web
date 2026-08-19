import { valueProps } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/icons";
import type { IconName } from "@/components/ui/icons";

/** Trust / value strip — value proposition singkat setelah hero. */
export function ValueStrip() {
  return (
    <section className="border-y border-line-soft bg-surface-muted">
      <Container className="grid grid-cols-2 gap-6 py-10 lg:grid-cols-4">
        {valueProps.map((item) => (
          <div key={item.title} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
              <Icon name={item.icon as IconName} size={20} />
            </span>
            <div>
              <p className="text-sm font-bold text-ink">{item.title}</p>
              <p className="mt-0.5 text-sm leading-snug text-muted">{item.description}</p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}