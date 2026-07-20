export function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-inverse-bg px-8 py-16 text-center text-inverse-fg transition-colors sm:px-16">
          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              ¿Necesitas ayuda con SIECEA?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-inverse-fg-muted">
              Revisa el manual de usuario para resolver dudas sobre los módulos,
              o contacta al área de sistemas del hospital si tienes problemas
              de acceso.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://manual.siecea.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-accent px-8 text-base font-semibold text-accent-fg transition-colors hover:bg-accent-dark sm:w-auto"
              >
                Abrir manual de usuario
              </a>
              <a
                href="#acceso"
                className="inline-flex h-12 w-full items-center justify-center rounded-full border-2 border-inverse-border px-8 text-base font-semibold text-inverse-fg transition-colors hover:bg-inverse-surface sm:w-auto"
              >
                Guía de acceso
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
