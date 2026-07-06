import { WHATSAPP } from "../lib/wa";
import Reveal from "./Reveal";
import Placeholder from "./Placeholder";
import { SectionHeading, Button } from "./ui";
import {
  IconWash,
  IconBrush,
  IconScissors,
  IconWaves,
  IconSparkle,
  IconNail,
  IconArrow,
} from "./Icons";

type Service = {
  id: string;
  title: string;
  desc: string;
  items: string[];
  cta: string;
  wa: string;
  icon: React.ComponentType<{ className?: string }>;
  tone: "dark" | "cream" | "sage";
  placeholder: string;
  tag: string;
};

const SERVICES: Service[] = [
  {
    id: "lavado",
    title: "Lavado capilar",
    desc: "Lavado normal, neutro o hidratante para preparar el cabello antes de un brushing, corte o peinado.",
    items: ["Lavado normal / neutro", "Lavado hidratante"],
    cta: "Consultar lavado",
    wa: WHATSAPP.general,
    icon: IconWash,
    tone: "sage",
    placeholder: "Foto real de lavado capilar",
    tag: "Desde 45.000 Gs",
  },
  {
    id: "brushing",
    title: "Brushing y secados",
    desc: "Secados rápidos, brushing por largo y difusor para lograr una terminación prolija y con movimiento.",
    items: ["Secado rápido", "Difusor", "Brushing corto / medio", "Brushing largo / extra"],
    cta: "Consultar brushing",
    wa: WHATSAPP.brushing,
    icon: IconBrush,
    tone: "dark",
    placeholder: "Foto real de brushing",
    tag: "Por largo",
  },
  {
    id: "corte",
    title: "Corte y flequillo",
    desc: "Corte general con asesoría para adaptar la forma del cabello a tu estilo y necesidades.",
    items: ["Corte general", "Flequillo"],
    cta: "Consultar corte",
    wa: WHATSAPP.corte,
    icon: IconScissors,
    tone: "sage",
    placeholder: "Foto real de corte",
    tag: "Con asesoría",
  },
  {
    id: "ondas",
    title: "Ondas y planchita",
    desc: "Terminaciones con ondas o planchita, ideales para salir lista con un look más producido.",
    items: ["Corto", "Medio", "Largo", "Extra largo"],
    cta: "Consultar ondas",
    wa: WHATSAPP.general,
    icon: IconWaves,
    tone: "dark",
    placeholder: "Foto real de ondas o planchita",
    tag: "Incluye secado",
  },
  {
    id: "peinados",
    title: "Peinados especiales",
    desc: "Peinados glam para eventos, sesiones, fiestas, quinceañeras o novias.",
    items: ["Recogido completo", "Semirecogido", "Quinceañera", "Novia", "Trenzas"],
    cta: "Consultar peinado",
    wa: WHATSAPP.peinados,
    icon: IconSparkle,
    tone: "sage",
    placeholder: "Foto real de peinado glam",
    tag: "Eventos",
  },
  {
    id: "unas",
    title: "Uñas y manicura",
    desc: "Cuidado de manos y uñas con terminaciones delicadas, prolijas y femeninas.",
    items: ["Uñas naturales", "Manicura", "Diseños delicados", "Cuidado personal"],
    cta: "Consultar uñas",
    wa: WHATSAPP.unas,
    icon: IconNail,
    tone: "dark",
    placeholder: "Foto real de uñas naturales elegantes",
    tag: "Delicado",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal variant="up">
          <SectionHeading
            eyebrow="Servicios esenciales"
            title="Todo para planificar tu momento de belleza"
            subtitle="Desde el cuidado capilar hasta uñas y peinados para eventos, Ewa reúne servicios pensados para que salgas lista y segura."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.id} variant="up" delay={(i % 3) * 100}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-bone p-4 shadow-soft ring-1 ring-olive/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card hover:ring-gold/30">
                  <div className="overflow-hidden rounded-2xl">
                    <Placeholder
                      label={s.placeholder}
                      tone={s.tone}
                      aspect="aspect-[16/11]"
                      rounded="rounded-2xl"
                      className="transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>

                  <div className="flex flex-1 flex-col px-2 pt-5">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-olive/8 text-olive">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="rounded-full bg-gold/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-soft-green">
                        {s.tag}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-semibold text-olive">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/65">
                      {s.desc}
                    </p>

                    <ul className="mt-4 flex flex-wrap gap-2">
                      {s.items.map((it) => (
                        <li
                          key={it}
                          className="rounded-full border border-olive/12 px-2.5 py-1 text-[12px] text-ink/70"
                        >
                          {it}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 pt-1">
                      <a
                        href={s.wa}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-soft-green"
                      >
                        {s.cta}
                        <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal variant="up" delay={120}>
          <div className="mt-12 flex justify-center">
            <Button href="#precios" variant="outline" className="!text-forest !ring-olive/25 hover:!bg-olive/5 hover:!text-olive">
              Ver catálogo de precios
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
