import { WHATSAPP } from "../lib/wa";
import Reveal from "./Reveal";
import Placeholder from "./Placeholder";
import { SectionHeading, Button } from "./ui";
import { IconNail, IconWhatsapp } from "./Icons";

const GALLERY = [
  "Foto real de uñas naturales elegantes",
  "Foto real de diseño azul delicado",
  "Foto real de manicura limpia",
  "Foto real de cuidado de manos",
];

export default function NailsSection() {
  return (
    <section className="relative overflow-hidden bg-olive py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 leaf-bg opacity-50" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal variant="left">
            <div className="flex flex-col items-start">
              <SectionHeading
                tone="light"
                eyebrow="Uñas"
                title="Detalles delicados para manos cuidadas"
                subtitle="Ewa Beauty Experience también ofrece servicios de uñas y cuidado personal, con una estética prolija, femenina y elegante."
              />
              <div className="mt-8">
                <Button
                  href={WHATSAPP.unas}
                  variant="gold"
                  size="lg"
                  withArrow
                  ariaLabel="Consultar uñas por WhatsApp"
                >
                  <IconWhatsapp className="h-5 w-5" />
                  Consultar uñas por WhatsApp
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal variant="right" delay={120}>
            <div className="grid grid-cols-2 gap-4">
              {GALLERY.map((g, i) => (
                <Placeholder
                  key={g}
                  label={g.split("Foto real de ").pop() || g}
                  tone={i % 2 === 0 ? "dark" : "sage"}
                  aspect={i < 2 ? "aspect-[4/5]" : "aspect-[4/5]"}
                  icon={<IconNail className="h-7 w-7" />}
                  className="shadow-soft transition-transform duration-500 hover:scale-[1.03]"
                />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
