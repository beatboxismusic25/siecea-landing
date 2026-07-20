export function Features() {
  const modules = [
    {
      title: "Gestión de Pacientes",
      description:
        "Consulta y administra expedientes clínicos, historial médico y seguimiento de pacientes asignados a tu área.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: "Notas Clínicas",
      description:
        "Registra notas de evolución, triage, egreso hospitalario y demás documentación clínica desde el sistema.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
        </svg>
      ),
    },
    {
      title: "Programación",
      description:
        "Consulta y gestiona la programación de cirugías, calendarios médicos y pacientes previos de tu servicio.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
      ),
    },
    {
      title: "Guías de Uso",
      description:
        "Encuentra tutoriales paso a paso en el manual para aprender a usar cada módulo según tu función.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="modulos" className="bg-section-alt py-24 transition-colors">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-dark dark:text-accent">
            Módulos
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            ¿Qué puedes hacer en SIECEA?
          </h2>
          <p className="mt-4 text-lg text-muted">
            El sistema integra las herramientas que usamos en el hospital para
            la atención clínica y los procesos administrativos. Los módulos a
            los que accedes dependen de tu rol.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {modules.map((mod) => (
            <article
              key={mod.title}
              className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#23415c] text-white transition-colors group-hover:bg-accent group-hover:text-accent-fg dark:bg-accent dark:text-accent-fg dark:group-hover:bg-accent-dark">
                {mod.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">
                {mod.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                {mod.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
