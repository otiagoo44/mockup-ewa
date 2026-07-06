import { WHATSAPP, CONTACT } from "../lib/wa";
import { Button } from "./ui";
import Placeholder from "./Placeholder";
import Reveal from "./Reveal";
import { IconWhatsapp, IconLeaf, IconPin, IconClock } from "./Icons";

const MINI = [
  { icon: IconClock, label: "Atención 09:00 – 20:00" },
  { icon: IconPin, label: "Ubicación en Lambaré" },
  { icon: IconLeaf, label: "Catálogo claro de precios" },
  { icon: IconWhatsapp, label: "Turnos por WhatsApp" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-forest leaf-bg pt-28 pb-20 sm:pt-32 lg:pt-36 lg:pb-28"
    >
      {/* botanical decorations */}
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-soft-green/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute left-8 top-1/3 hidden text-gold/15 lg:block">
        <IconLeaf className="h-40 w-40" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-10 lg:px-8">
        {/* Text */}
        <div className="flex flex-col items-start">
          <Reveal variant="up">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold-soft">
              <IconLeaf className="h-3.5 w-3.5" />
              Beauty studio · Uñas · Capilar · Peinados
            </span>
          </Reveal>

          <Reveal variant="up" delay={80}>
            <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.08] text-cream sm:text-5xl lg:text-[3.6rem]">
              Tu espacio de belleza y bienestar en{" "}
              <span className="italic text-gold-soft">Lambaré</span>
            </h1>
          </Reveal>

          <Reveal variant="up" delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
              En Ewa Beauty Experience encontrás servicios de uñas, lavado
              capilar, brushing, cortes y peinados especiales, con atención
              profesional y reservas por WhatsApp.
            </p>
          </Reveal>

          <Reveal variant="up" delay={220}>
            <p className="mt-5 font-serif text-xl italic text-gold-soft/90">
              “La belleza se planifica, el resultado se disfruta.”
            </p>
          </Reveal>

          <Reveal variant="up" delay={280}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                href={WHATSAPP.general}
                variant="gold"
                size="lg"
                withArrow
                ariaLabel="Reservar por WhatsApp"
              >
                <IconWhatsapp className="h-5 w-5" />
                Reservar por WhatsApp
              </Button>
              <Button href="#servicios" variant="outline" size="lg">
                Ver servicios
              </Button>
            </div>
          </Reveal>

          <Reveal variant="up" delay={340}>
            <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 sm:gap-x-10">
              {MINI.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2.5 text-sm text-cream/80"
                >
                  <Icon className="h-4 w-4 shrink-0 text-gold" />
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Visual */}
        <Reveal variant="right" delay={120} className="relative">
          <div className="relative">
            <Placeholder
              label="Foto real del salón o clienta en Ewa Beauty Experience"
              aspect="aspect-[4/5]"
              rounded="rounded-[2rem]"
              icon={<IconLeaf className="h-8 w-8" />}
              className="shadow-card ring-1 ring-gold/15"
            />
            {/* floating card */}
            <div className="float-soft absolute -bottom-6 -left-5 w-56 rounded-2xl bg-bone/95 p-4 shadow-card ring-1 ring-gold/20 backdrop-blur sm:-left-8">
              <div className="flex items-center gap-2 text-soft-green">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-soft-green/60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-soft-green" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wide">
                  Abierto ahora
                </span>
              </div>
              <p className="mt-2 font-serif text-lg text-olive">
                {CONTACT.schedule}
              </p>
              <p className="mt-1 text-xs text-ink/60">{CONTACT.address}</p>
              <a
                href={WHATSAPP.general}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-forest underline decoration-gold decoration-2 underline-offset-2"
              >
                <IconWhatsapp className="h-3.5 w-3.5" />
                Reservas por WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      {/* scroll indicator */}
      <div className="pointer-events-none absolute bottom-5 left-1/2 hidden -translate-x-1/2 lg:block">
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-gold/40 p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-gold/70" />
        </div>
      </div>
    </section>
  );
}
