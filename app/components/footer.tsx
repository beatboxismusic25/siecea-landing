export function Footer() {
  return (
    <footer className="border-t border-header-border bg-header-bg transition-colors">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-header-fg-muted">
            Hospital San Diego de Alcalá
          </p>
          <p className="mt-1 text-lg font-bold text-header-fg">SIECEA</p>
          <p className="mt-2 text-xs text-muted">
            Portal interno · Uso exclusivo del personal
          </p>
        </div>

        <nav className="mt-8 flex flex-wrap items-center justify-center gap-6">
          <a
            href="https://manual.siecea.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-accent-dark dark:hover:text-accent"
          >
            Manual
          </a>
          <a
            href="#modulos"
            className="text-sm text-muted transition-colors hover:text-accent-dark dark:hover:text-accent"
          >
            Módulos
          </a>
          <a
            href="#acceso"
            className="text-sm text-muted transition-colors hover:text-accent-dark dark:hover:text-accent"
          >
            Acceso
          </a>
          <a
            href="#faq"
            className="text-sm text-muted transition-colors hover:text-accent-dark dark:hover:text-accent"
          >
            FAQ
          </a>
        </nav>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted">
           SIECEA · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
