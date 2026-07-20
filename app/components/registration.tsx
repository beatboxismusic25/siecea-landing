const steps = [
  {
    step: "01",
    title: "Solicita tu cuenta",
    description:
      "Si eres nuevo personal, pide tu usuario al área de sistemas o al administrador del hospital. Indica tu nombre, área y puesto.",
  },
  {
    step: "02",
    title: "Recibe tus credenciales",
    description:
      "Te asignarán un usuario y contraseña según tu rol: médico, enfermería, administrativo u otro perfil autorizado.",
  },
  {
    step: "03",
    title: "Revisa la guía de acceso",
    description:
      "Antes de ingresar, consulta la guía de acceso en el manual para conocer la URL del sistema y los pasos de inicio de sesión.",
  },
  {
    step: "04",
    title: "Ingresa al dashboard",
    description:
      "Una vez dentro, verás el panel principal con los módulos habilitados para tu perfil. Desde ahí comienzas tu jornada.",
  },
];

export function Registration() {
  return (
    <section id="acceso" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent-dark dark:text-accent">
              Acceso
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              ¿Cómo ingreso al sistema?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Las cuentas las gestiona el hospital. Si ya trabajas aquí y
              aún no tienes acceso, o necesitas permisos adicionales, sigue
              estos pasos.
            </p>

            <div className="mt-8 rounded-2xl border border-accent/30 bg-accent/10 p-6">
              <h3 className="font-semibold text-foreground">
                ¿Ya tienes usuario y contraseña?
              </h3>
              <p className="mt-2 text-sm text-muted">
                Consulta la{" "}
                <a
                  href="https://manual.siecea.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#23415c] underline-offset-2 hover:underline dark:text-accent"
                >
                  guía de acceso
                </a>{" "}
                en el manual para ingresar al sistema. Si olvidaste tu
                contraseña, contacta al área de sistemas del hospital.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-[#23415c] via-accent/50 to-transparent dark:from-accent lg:block" />

            <div className="space-y-8">
              {steps.map((item) => (
                <div key={item.step} className="relative flex gap-6">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#23415c] bg-card text-sm font-bold text-[#23415c] dark:border-accent dark:text-accent">
                    {item.step}
                  </div>
                  <div className="pt-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
