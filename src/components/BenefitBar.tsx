import Reveal from "./Reveal";
import { IconNail, IconSparkle, IconBrush, IconScissors, IconPin, IconWhatsapp } from "./Icons";

const BENEFITS = [
  { icon: IconNail, label: "Uñas y belleza" },
  { icon: IconSparkle, label: "Peinados especiales" },
  { icon: IconBrush, label: "Brushing y secados" },
  { icon: IconScissors, label: "Corte con asesoría" },
  { icon: IconPin, label: "Atención en Lambaré" },
  { icon: IconWhatsapp, label: "Reservas por WhatsApp" },
];

export default function BenefitBar() {
  return (
    <section className="relative z-10 -mt-8 lg:-mt-14">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal variant="up">
          <div className="grid grid-cols-2 overflow-hidden rounded-3xl bg-olive shadow-card ring-1 ring-gold/15 sm:grid-cols-3 lg:grid-cols-6">
            {BENEFITS.map(({ icon: Icon, label }, i) => (
              <div
                key={label}
                style={{ "--i": i } as React.CSSProperties}
                className="stagger group flex flex-col items-center justify-center gap-2.5 border-b border-gold/10 px-3 py-5 text-center transition-colors hover:bg-forest sm:border-b-0 sm:[&:not(:last-child)]:border-r lg:[&:not(:last-child)]:border-r"
              >
                <Icon className="h-7 w-7 text-gold transition-transform duration-300 group-hover:scale-110" />
                <span className="text-[13px] font-light leading-tight text-cream/85">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
