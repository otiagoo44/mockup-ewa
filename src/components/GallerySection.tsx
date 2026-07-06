import Reveal from "./Reveal";
import { SectionHeading } from "./ui";
import { IconLeaf } from "./Icons";

type Shot = {
  label: string;
  tone: "dark" | "cream" | "sage";
  span?: string;
};

const SHOTS: Shot[] = [
  { label: "Foto real del salón", tone: "dark", span: "lg:row-span-2" },
  { label: "Foto real del catálogo", tone: "sage" },
  { label: "Foto real de uñas nude", tone: "cream" },
  { label: "Foto real de uñas con diseño azul", tone: "dark" },
  { label: "Foto real de brushing", tone: "sage" },
  { label: "Foto real de ondas", tone: "cream" },
  { label: "Foto real de peinado glam", tone: "dark", span: "lg:row-span-2" },
  { label: "Foto real de clienta", tone: "sage" },
  { label: "Foto real de lavado capilar", tone: "cream" },
  { label: "Foto real de corte", tone: "dark" },
];

const tones: Record<string, string> = {
  dark: "from-olive via-forest to-forest",
  cream: "from-beige via-cream to-bone",
  sage: "from-soft-green/80 via-olive to-forest",
};

export default function GallerySection() {
  return (
    <section id="galeria" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal variant="up">
          <SectionHeading
            eyebrow="Galería"
            title="Una muestra de la experiencia Ewa"
            subtitle="Espacios, uñas, cabello y peinados pensados para que puedas imaginar tu próximo servicio."
          />
        </Reveal>

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:auto-rows-[200px]">
          {SHOTS.map((s, i) => (
            <Reveal
              key={s.label}
              variant="up"
              delay={(i % 4) * 80}
              className={s.span}
            >
              <figure
                className="group relative h-full overflow-hidden rounded-3xl bg-gradient-to-br ph-pattern shadow-soft ring-1 ring-olive/10"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tones[s.tone]}`}
                />
                <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gold/10 blur-2xl" />

                {/* overlay */}
                <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-forest/85 via-forest/10 to-transparent p-4 opacity-100 transition-opacity duration-300 lg:opacity-0 lg:group-hover:opacity-100">
                  <span className="flex items-center gap-2 text-sm font-medium text-cream">
                    <IconLeaf className="h-4 w-4 text-gold" />
                    {s.label}
                  </span>
                </figcaption>

                {/* mobile label always visible */}
                <span className="absolute left-3 top-3 rounded-full bg-black/25 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-cream/90 ring-1 ring-white/15 lg:hidden">
                  {s.label}
                </span>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
