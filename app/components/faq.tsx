"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Qué es SIECEA?",
    answer:
      "SIECEA es el Sistema de Gestión Hospitalaria (HSDA) que usamos en el hospital para administrar expedientes clínicos, notas médicas, programación y otros procesos del día a día.",
  },
  {
    question: "¿Quién puede tener acceso?",
    answer:
      "Todo el personal autorizado del hospital: médicos, enfermería, administrativos y otros roles según lo defina el área de sistemas. Cada persona recibe permisos acordes a su puesto.",
  },
  {
    question: "¿Cómo pido una cuenta nueva?",
    answer:
      "Contacta al área de sistemas o al administrador del hospital. Proporciona tu nombre completo, área de trabajo y puesto para que te asignen el usuario correspondiente.",
  },
  {
    question: "Olvidé mi contraseña, ¿qué hago?",
    answer:
      "No puedes restablecerla desde esta página. Comunícate directamente con el área de sistemas del hospital para que te generen una nueva contraseña.",
  },
  {
    question: "¿Dónde está la documentación?",
    answer:
      "El manual completo está en manual.siecea.com. Incluye guías de acceso, tutoriales por módulo y las mejores prácticas para usar el sistema según tu rol.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-section-alt py-24 transition-colors">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-dark dark:text-accent">
            Preguntas frecuentes
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Dudas comunes del personal
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="pr-4 font-semibold text-foreground">
                    {faq.question}
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`shrink-0 text-muted transition-transform ${isOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="border-t border-border px-6 pb-5 pt-2">
                    <p className="leading-relaxed text-muted">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
