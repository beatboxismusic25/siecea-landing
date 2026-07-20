export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden grid-pattern">
      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-16 lg:pb-32 lg:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="animate-fade-up text-sm font-semibold uppercase tracking-[0.2em] text-accent-dark dark:text-accent">
            Sistema de Gestión Hospitalaria
          </p>

          <h1 className="animate-fade-up-delay-1 mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Bienvenido a{" "}
            <span className="text-[#23415c] dark:text-accent">SIECEA</span>
          </h1>

          <p className="animate-fade-up-delay-2 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            Aquí encontrarás todo lo que necesitas para usar el sistema en tu
            trabajo diario: cómo acceder, qué módulos tienes disponibles según
            tu rol y dónde consultar la documentación.
          </p>

          <div className="animate-fade-up-delay-3 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#acceso"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#23415c] px-8 text-base font-semibold text-white transition-colors hover:bg-[#2d5270] dark:bg-accent dark:text-accent-fg dark:hover:bg-accent-dark sm:w-auto"
            >
              Cómo acceder
            </a>
            <a
              href="https://manual.siecea.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-border bg-card px-8 text-base font-semibold text-foreground transition-colors hover:border-accent hover:bg-accent/10 sm:w-auto"
            >
              Ver manual de usuario
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>
        </div>

        <div className="animate-fade-up-delay-3 mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { value: "4", label: "Módulos del sistema" },
            { value: "Guías", label: "Paso a paso" },
            { value: "Por rol", label: "Acceso personalizado" },
            { value: "Manual", label: "Siempre disponible" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-card p-5 text-center shadow-sm"
            >
              <p className="text-2xl font-bold text-[#23415c] dark:text-accent">{stat.value}</p>
              <p className="mt-1 text-xs font-medium text-muted sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
