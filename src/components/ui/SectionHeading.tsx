import { Badge } from "./Badge";

/**
 * Consistent section heading block: eyebrow badge + title + description.
 * `tone` lets it adapt to light/dark section backgrounds.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  tone?: "light" | "brand";
}) {
  const text = tone === "brand" ? "text-white" : "text-ink";
  const sub = tone === "brand" ? "text-indigo-100" : "text-muted";
  return (
    <div
      className={`mb-12 flex flex-col gap-4 md:mb-16 ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      }`}
    >
      {eyebrow ? <Badge tone={tone === "brand" ? "neutral" : "brand"}>{eyebrow}</Badge> : null}
      <h2 className={`max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl ${text}`}>
        {title}
      </h2>
      {description ? <p className={`max-w-2xl text-base leading-relaxed sm:text-lg ${sub}`}>{description}</p> : null}
    </div>
  );
}