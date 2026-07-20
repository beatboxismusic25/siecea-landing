"use client";

import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#modulos", label: "Módulos" },
  { href: "#acceso", label: "Acceso" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-header-border bg-header-bg transition-colors">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#inicio" className="flex flex-col">
          <span className="text-xs font-medium uppercase tracking-[0.12em] text-header-fg-muted">
            Hospital San Diego de Alcalá
          </span>
          <span className="text-lg font-bold tracking-tight text-header-fg">
            SIECEA
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-header-fg-muted transition-colors hover:text-accent-dark dark:hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href="https://manual.siecea.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-header-fg-muted transition-colors hover:text-accent-dark dark:hover:text-accent"
          >
            Manual
          </a>
          <a
            href="#acceso"
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-fg transition-colors hover:bg-accent-dark"
          >
            Acceder
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-header-fg"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-header-border px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-2 text-sm font-medium text-header-fg-muted transition-colors hover:text-accent-dark dark:hover:text-accent"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://manual.siecea.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 text-sm font-medium text-header-fg-muted"
            >
              Manual
            </a>
            <a
              href="#acceso"
              className="mt-2 rounded-full bg-accent px-5 py-2.5 text-center text-sm font-semibold text-accent-fg"
              onClick={() => setOpen(false)}
            >
              Acceder
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
