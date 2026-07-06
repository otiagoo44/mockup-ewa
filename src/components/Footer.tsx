import { WHATSAPP, CONTACT } from "../lib/wa";
import { IconLeaf, IconWhatsapp, IconPin, IconClock, IconMail, IconPhone, IconUp } from "./Icons";

const SERVICES = [
  "Uñas",
  "Lavado capilar",
  "Brushing",
  "Corte",
  "Ondas",
  "Planchita",
  "Peinados especiales",
];

export default function Footer() {
  return (
    <footer className="bg-forest text-cream/80">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/15 text-gold ring-1 ring-gold/30">
                <IconLeaf className="h-5 w-5" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-serif text-lg font-semibold text-cream">
                  Ewa
                </span>
                <span className="text-[10px] font-light uppercase tracking-[0.32em] text-gold/80">
                  Beauty Experience
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/65">
              Tu espacio de belleza y bienestar. La belleza se planifica, el
              resultado se disfruta.
            </p>
            <a
              href={WHATSAPP.general}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-forest transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-soft"
            >
              <IconWhatsapp className="h-4 w-4" />
              Reservar por WhatsApp
            </a>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              Contacto
            </h3>
            <ul className="mt-5 flex flex-col gap-4 text-sm">
              <li className="flex items-start gap-3">
                <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span className="text-cream/70">{CONTACT.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <IconClock className="h-4 w-4 shrink-0 text-gold" />
                <span className="text-cream/70">{CONTACT.schedule}</span>
              </li>
              <li className="flex items-center gap-3">
                <IconPhone className="h-4 w-4 shrink-0 text-gold" />
                <a
                  href={WHATSAPP.general}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/70 transition-colors hover:text-gold"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <IconMail className="h-4 w-4 shrink-0 text-gold" />
                <a
                  href={CONTACT.emailUrl}
                  className="text-cream/70 transition-colors hover:text-gold"
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              Servicios
            </h3>
            <ul className="mt-5 flex flex-col gap-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s}>
                  <a
                    href="#servicios"
                    className="text-cream/70 transition-colors hover:text-gold"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 h-px w-full bg-gold/15" />

        <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-cream/50">
            © 2026 Ewa Beauty Experience · {CONTACT.category}
          </p>
          <a
            href="#inicio"
            className="inline-flex items-center gap-2 text-xs font-medium text-cream/70 transition-colors hover:text-gold"
          >
            <IconUp className="h-4 w-4" />
            Volver arriba
          </a>
        </div>
      </div>
    </footer>
  );
}
