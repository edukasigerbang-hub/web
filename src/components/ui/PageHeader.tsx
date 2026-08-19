import { Badge } from "./Badge";
import { Container } from "./Container";

/** Hero kecil untuk halaman dalam — konsisten di semua halaman. */
export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="border-b border-line-soft bg-surface-muted">
      <Container className="py-14 md:py-20">
        <div className="max-w-2xl">
          {eyebrow ? <Badge tone="brand">{eyebrow}</Badge> : null}
          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>
          ) : null}
        </div>
      </Container>
    </div>
  );
}