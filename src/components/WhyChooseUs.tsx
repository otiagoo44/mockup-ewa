import Reveal from "./Reveal";
import { SectionHeading } from "./ui";
import {
  IconLeaf,
  IconPin,
  IconClock,
  IconSparkle,
  IconCheck,
  IconWhatsapp,
} from "./Icons";

const CARDS = [
  {
    icon: IconLeaf,
    title: "Catálogo claro",
    text: "Los servicios principales están organizados por categoría para que puedas consultar mejor antes de reservar.",
  },
  {
    icon: IconPin,
    title: "Ubicación fácil",
    text: "Ewa está ubicada sobre Av. Cacique Lambaré, en Lambaré, Paraguay.",
  },
  {
    icon: IconClock,
    title: "Horario amplio",
    text: "Atención de 09:00 a 20:00, ideal para coordinar tu momento de belleza.",
  },
  {
    icon: IconSparkle,
    title: "Servicios integrales",
    text: "Uñas, cabello, brushing, corte y peinados especiales en un solo lugar.",
  },
  {
    icon: IconCheck,
    title: "Peinados planificados",
    text: "Los servicios para novias y quinceañeras incluyen asesoría y prueba según el catálogo.",
  },
  {
    icon: IconWhatsapp,
    title: "Reserva directa",
    text: "Podés consultar y reservar fácilmente por WhatsApp.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-bone py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal variant="up">
          <SectionHeading
            eyebrow="Por qué Ewa"
            title="Un espacio para cuidarte de forma completa"
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.title} variant="up" delay={(i % 3) * 100}>
                <article className="group flex h-full flex-col gap-4 rounded-3xl bg-cream p-7 shadow-soft ring-1 ring-olive/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-card hover:ring-gold/30">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-olive/8 text-soft-green transition-colors duration-300 group-hover:bg-olive group-hover:text-gold-soft">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-olive">
                    {c.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink/65">{c.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
