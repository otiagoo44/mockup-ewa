import { useState } from "react";
import { cn } from "../utils/cn";
import Reveal from "./Reveal";
import { SectionHeading } from "./ui";
import { IconPlus } from "./Icons";

const FAQS = [
  {
    q: "¿Dónde queda Ewa Beauty Experience?",
    a: "Está ubicado en M94P+G99, Av. Cacique Lambaré, Lambaré, Paraguay.",
  },
  {
    q: "¿Cuál es el horario de atención?",
    a: "El horario visible es de 09:00 a 20:00.",
  },
  {
    q: "¿Cómo puedo reservar un turno?",
    a: "Podés reservar o consultar directamente por WhatsApp al +595 984 411521.",
  },
  {
    q: "¿Hacen peinados para novias?",
    a: "Sí, el catálogo incluye peinado de novia con asesoría y prueba.",
  },
  {
    q: "¿Hacen peinados para quinceañeras?",
    a: "Sí, el catálogo incluye peinado de quinceañera con asesoría y prueba.",
  },
  {
    q: "¿El brushing depende del largo del cabello?",
    a: "Sí, el catálogo diferencia brushing corto, medio, largo y extra largo.",
  },
  {
    q: "¿Puedo hacerme solo ondas o solo planchita?",
    a: "Sí, según la observación del catálogo, si se realiza solamente planchita u ondas, se resta el valor del secado, equivalente a 30.000 Gs.",
  },
  {
    q: "¿Tienen servicio de uñas?",
    a: "Sí, Ewa figura como salón de uñas, belleza, cosmética y cuidado personal.",
  },
  {
    q: "¿Los precios son finales?",
    a: "Los precios deben confirmarse por WhatsApp, especialmente según largo de cabello, servicio y disponibilidad.",
  },
  {
    q: "¿Puedo consultar por email?",
    a: "Sí, el email visible es jacintanailsbar@gmail.com.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="preguntas" className="bg-bone py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <Reveal variant="up">
          <SectionHeading
            eyebrow="Preguntas frecuentes"
            title="Todo lo que podrías consultar"
          />
        </Reveal>

        <div className="mt-12 divide-y divide-olive/10 overflow-hidden rounded-3xl bg-cream shadow-soft ring-1 ring-olive/10">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-bone/60 sm:px-8"
                >
                  <span
                    className={cn(
                      "font-serif text-lg font-medium transition-colors",
                      isOpen ? "text-olive" : "text-ink/80"
                    )}
                  >
                    {item.q}
                  </span>
                  <span
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full ring-1 transition-all duration-300",
                      isOpen
                        ? "rotate-45 bg-gold text-forest ring-gold"
                        : "text-soft-green ring-olive/20"
                    )}
                  >
                    <IconPlus className="h-4 w-4" />
                  </span>
                </button>
                <div className={cn("accordion-body", isOpen && "open")}>
                  <div>
                    <p className="px-6 pb-6 text-sm leading-relaxed text-ink/65 sm:px-8">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
