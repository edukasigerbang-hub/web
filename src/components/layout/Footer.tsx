import Link from "next/link";
import { footerLinks, site } from "@/data/site";
import { Icon } from "@/components/ui/icons";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line-soft bg-ink text-slate-300">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} — beranda`}>
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white">
                <Icon name="logo" size={22} />
              </span>
              <span className="text-lg font-bold tracking-tight text-white">
                Gerbang<span className="text-indigo-400">Edukasi</span>
              </span>
            </Link>
            <p className="mt-3 text-sm text-slate-400">{site.tagline}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">{site.description}</p>
          </div>

          {/* Links */}
          <nav aria-label="Link footer">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {footerLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. Semua hak dilindungi.
          </p>
          <p>Interactive Education Platform</p>
        </div>
      </Container>
    </footer>
  );
}