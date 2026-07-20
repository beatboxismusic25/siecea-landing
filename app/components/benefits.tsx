const resources = [
  {
    title: "Expediente clínico digital",
    description:
      "Consulta y actualiza la información de tus pacientes sin necesidad de buscar expedientes en papel.",
  },
  {
    title: "Notas desde el sistema",
    description:
      "Registra evoluciones, triage y egresos directamente en la plataforma, con formatos estandarizados del hospital.",
  },
  {
    title: "Programación centralizada",
    description:
      "Revisa cirugías, consultas y calendarios de tu servicio en un solo lugar, actualizados en tiempo real.",
  },
  {
    title: "Acceso según tu rol",
    description:
      "Solo ves los módulos y funciones correspondientes a tu puesto: médico, enfermería, administración u otro.",
  },
  {
    title: "Manual siempre a mano",
    description:
      "El manual en línea tiene guías paso a paso para cada módulo, disponible cuando lo necesites.",
  },
  {
    title: "Soporte interno",
    description:
      "Ante dudas técnicas o problemas de acceso, el área de sistemas del hospital es tu punto de contacto.",
  },
];

export function Benefits() {
  return (
    <section className="bg-inverse-bg py-24 text-inverse-fg transition-colors">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Recursos
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Lo que SIECEA te ofrece en el día a día
          </h2>
          <p className="mt-4 text-lg text-inverse-fg-muted">
            Herramientas que ya usamos en el hospital para agilizar la atención
            y mantener la información clínica organizada.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((item) => (
            <div key={item.title} className="rounded-2xl border border-inverse-border bg-inverse-surface p-6 backdrop-blur-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-inverse-fg-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
