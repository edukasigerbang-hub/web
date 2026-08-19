"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks, site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icons";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line-soft bg-surface/85 backdrop-blur">
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8"
      >
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} — beranda`}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white">
            <Icon name="logo" size={22} />
          </span>
          <span className="text-lg font-bold tracking-tight text-ink">
            Gerbang<span className="text-primary">Edukasi</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-surface-muted hover:text-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-2 lg:flex">
          <Button href="/login" variant="ghost" size="sm">
            Login
          </Button>
          <Button href="/demo" variant="primary" size="sm" event="demo_click" icon="arrow">
            Coba Demo
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-soft hover:bg-surface-muted lg:hidden"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} size={24} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open ? (
        <div className="border-t border-line-soft bg-surface lg:hidden">
          <ul className="flex flex-col gap-1 px-5 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-ink-soft hover:bg-surface-muted hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 border-t border-line-soft px-5 py-4">
            <Button href="/login" variant="secondary">
              Login
            </Button>
            <Button href="/demo" variant="primary" event="demo_click">
              Coba Demo
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}