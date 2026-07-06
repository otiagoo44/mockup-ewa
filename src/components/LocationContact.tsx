import { WHATSAPP, CONTACT } from "../lib/wa";
import Reveal from "./Reveal";
import { SectionHeading, Button } from "./ui";
import {
  IconPin,
  IconClock,
  IconPhone,
  IconMail,
  IconWhatsapp,
  IconArrow,
} from "./Icons";

const INFO = [
  { icon: IconPin, label: "Dirección", value: CONTACT.address },
  { icon: IconClock, label: "Horario", value: CONTACT.schedule },
  { icon: IconPhone, label: "WhatsApp", value: CONTACT.phone },
  { icon: IconMail, label: "Email", value: CONTACT.email },
];

export default function LocationContact() {
  return (
    <section id="ubicacion" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal variant="up">
          <SectionHeading
            eyebrow="Dónde estamos"
            title="Visitá Ewa Beauty Experience en Lambaré"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.25fr]">
          {/* Contact card */}
          <Reveal variant="left">
            <div className="flex h-full flex-col rounded-3xl bg-forest p-7 shadow-card ring-1 ring-gold/15 sm:p-9">
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                Contacto
              </span>
              <h3 className="mt-2 font-serif text-2xl font-semibold text-cream">
                {CONTACT.category}
              </h3>

              <ul className="mt-7 flex flex-col gap-5">
                {INFO.map(({ icon: Icon, label, value }) => (
                  <li key={label} className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/12 text-gold">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-cream/50">
                        {label}
                      </p>
                      <p className="mt-0.5 text-[15px] text-cream/90">{value}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3">
                <Button
                  href={CONTACT.mapsUrl}
                  target="_blank"
                  variant="light"
                  withArrow
                  ariaLabel="Cómo llegar"
                >
                  <IconPin className="h-4 w-4" />
                  Cómo llegar
                </Button>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    href={WHATSAPP.general}
                    variant="gold"
                    ariaLabel="Reservar por WhatsApp"
                  >
                    <IconWhatsapp className="h-4 w-4" />
                    Reservar por WhatsApp
                  </Button>
                  <Button
                    href={CONTACT.emailUrl}
                    variant="outline"
                    ariaLabel="Enviar email"
                  >
                    <IconMail className="h-4 w-4" />
                    Enviar email
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Map placeholder */}
          <Reveal variant="right" delay={120}>
            <div className="group relative h-full min-h-[320px] overflow-hidden rounded-3xl bg-gradient-to-br from-olive via-forest to-forest p-px shadow-soft">
              <div className="relative flex h-full min-h-[320px] flex-col items-center justify-center gap-4 rounded-3xl bg-[#1f2a1d] p-8 text-center">
                <div className="pointer-events-none absolute inset-0 ph-pattern opacity-40" />
                <div className="pointer-events-none absolute left-1/3 top-1/4 h-40 w-40 rounded-full bg-soft-green/20 blur-3xl" />

                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold ring-1 ring-gold/30">
                  <IconPin className="h-7 w-7" />
                </span>
                <p className="relative z-10 max-w-xs text-sm leading-relaxed text-cream/80">
                  Mapa de ubicación en Av. Cacique Lambaré
                </p>
                <a
                  href={CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 inline-flex items-center gap-1.5 text-sm font-semibold text-gold underline decoration-2 underline-offset-4 transition-colors hover:text-gold-soft"
                >
                  Abrir en Google Maps
                  <IconArrow className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
