import { WHATSAPP } from "../lib/wa";
import Reveal from "./Reveal";
import Placeholder from "./Placeholder";
import { SectionHeading, Button } from "./ui";
import { IconSparkle, IconArrow } from "./Icons";

const FEATURED = [
  "Recogido completo",
  "Semirecogido",
  "Peinado para quinceañera",
  "Peinado para novia",
  "Trenzas",
  "Ondas",
  "Planchita",
];

export default function SpecialHairstylesSection() {
  return (
    <section id="peinados" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal variant="up">
          <SectionHeading
            eyebrow="Eventos"
            title="Peinados especiales para momentos importantes"
            subtitle="Para una fiesta, una sesión, una quinceañera o una boda, el peinado no se improvisa: se planifica."
          />
        </Reveal>

        <Reveal variant="up" delay={120}>
          <p className="mt-4 text-center font-serif text-xl italic text-soft-green">
            “La belleza se planifica, el resultado se disfruta.”
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          {/* Visual */}
          <Reveal variant="left">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <Placeholder
                  label="Foto real de peinado glam"
                  tone="sage"
                  aspect="aspect-[16/10]"
                  icon={<IconSparkle className="h-8 w-8" />}
                  className="shadow-soft ring-1 ring-gold/15"
                />
              </div>
              <Placeholder label="recogido" tone="dark" aspect="aspect-square" />
              <Placeholder
                label="semirecogido"
                tone="dark"
                aspect="aspect-square"
              />
            </div>
          </Reveal>

          {/* Content */}
          <Reveal variant="right">
            <div className="lg:pl-4">
              <h3 className="font-serif text-2xl font-semibold text-olive">
                Una propuesta pensada para tu ocasión
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                Los peinados para quinceañera y novia incluyen asesoría y
                prueba, según el catálogo visible.
              </p>

              <ul className="mt-6 grid grid-cols-2 gap-2.5">
                {FEATURED.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 rounded-xl border border-olive/10 bg-bone px-3 py-2.5 text-sm text-ink/75"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  href={WHATSAPP.peinados}
                  variant="gold"
                  withArrow
                  ariaLabel="Consultar peinado"
                >
                  <IconSparkle className="h-4 w-4" />
                  Consultar peinado
                </Button>
                <Button
                  href="#precios"
                  variant="ghost"
                  className="!text-olive hover:!text-soft-green"
                  ariaLabel="Ver precios"
                >
                  Ver precios
                  <IconArrow className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
