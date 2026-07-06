import { WHATSAPP } from "../lib/wa";
import Reveal from "./Reveal";
import { Button } from "./ui";
import { IconWhatsapp, IconLeaf } from "./Icons";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-forest py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 leaf-bg" />
      <div className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-soft-green/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute left-12 top-12 hidden text-gold/10 lg:block">
        <IconLeaf className="h-48 w-48" />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 text-center lg:px-8">
        <Reveal variant="up">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold-soft">
            <IconLeaf className="h-3.5 w-3.5" />
            Ewa Beauty Experience
          </span>
        </Reveal>

        <Reveal variant="up" delay={100}>
          <h2 className="mt-6 font-serif text-3xl font-semibold leading-tight text-cream sm:text-5xl">
            Planificá tu momento de belleza en Ewa
          </h2>
        </Reveal>

        <Reveal variant="up" delay={180}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
            Consultá por uñas, lavado capilar, brushing, cortes, ondas,
            planchita o peinados especiales y reservá tu turno por WhatsApp.
          </p>
        </Reveal>

        <Reveal variant="up" delay={240}>
          <p className="mt-5 font-serif text-xl italic text-gold-soft/90">
            “La belleza se planifica, el resultado se disfruta.”
          </p>
        </Reveal>

        <Reveal variant="up" delay={300}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
            <Button href="#precios" variant="outline" size="lg">
              Ver catálogo
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
