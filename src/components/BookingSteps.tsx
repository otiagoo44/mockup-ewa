import { WHATSAPP } from "../lib/wa";
import Reveal from "./Reveal";
import { SectionHeading, Button } from "./ui";
import { IconWhatsapp } from "./Icons";

const STEPS = [
  {
    n: "1",
    title: "Escribís por WhatsApp",
    text: "Contanos qué servicio querés: uñas, lavado, brushing, corte, ondas o peinado especial.",
  },
  {
    n: "2",
    title: "Indicás fecha y horario",
    text: "Consultá disponibilidad según el día que necesitás.",
  },
  {
    n: "3",
    title: "Confirmás el servicio",
    text: "Te orientan según tu largo de cabello, evento o necesidad.",
  },
  {
    n: "4",
    title: "Recibís indicaciones",
    text: "Si el servicio requiere preparación, prueba o asesoría, se coordina previamente.",
  },
  {
    n: "5",
    title: "Llegás a Ewa",
    text: "Disfrutás tu momento de belleza y bienestar.",
  },
];

export default function BookingSteps() {
  return (
    <section className="bg-soft-green/15 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal variant="up">
          <SectionHeading
            eyebrow="Reservas"
            title="Reservar tu turno es simple"
          />
        </Reveal>

        <div className="relative mt-16">
          {/* connecting line */}
          <div className="absolute left-5 top-3 bottom-3 w-px bg-gold/30 lg:left-0 lg:right-0 lg:top-7 lg:bottom-auto lg:h-px lg:w-full" />

          <ol className="grid gap-8 lg:grid-cols-5 lg:gap-4">
            {STEPS.map((s, i) => (
              <Reveal
                key={s.n}
                variant="up"
                delay={i * 90}
                as="li"
                className="relative"
              >
                <div className="flex flex-col items-start gap-4 lg:items-center lg:text-center">
                  <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-olive font-serif text-2xl font-semibold text-gold-soft shadow-soft ring-4 ring-cream">
                    {s.n}
                  </span>
                  <div className="lg:px-2">
                    <h3 className="font-serif text-lg font-semibold text-olive">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/65">
                      {s.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal variant="up" delay={120}>
          <div className="mt-14 flex justify-center">
            <Button
              href={WHATSAPP.general}
              variant="gold"
              size="lg"
              withArrow
              ariaLabel="Reservar ahora"
            >
              <IconWhatsapp className="h-5 w-5" />
              Reservar ahora
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
