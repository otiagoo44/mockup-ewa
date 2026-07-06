import { WHATSAPP } from "../lib/wa";
import Reveal from "./Reveal";
import { SectionHeading, Button } from "./ui";
import { IconCheck, IconWhatsapp } from "./Icons";

type Item = { name: string; price: string; note?: string };
type Category = { title: string; intro?: string; items: Item[]; obs?: string };

const CATEGORIES: Category[] = [
  {
    title: "Lavado capilar",
    items: [
      { name: "Lavado normal / neutro", price: "45.000 Gs" },
      { name: "Lavado hidratante", price: "60.000 Gs" },
    ],
  },
  {
    title: "Brushing y secados",
    items: [
      { name: "Secado rápido", price: "30.000 Gs" },
      { name: "Difusor", price: "60.000 Gs" },
      { name: "Brushing corto", price: "45.000 Gs" },
      { name: "Brushing medio", price: "65.000 Gs" },
      { name: "Brushing largo", price: "75.000 Gs" },
      { name: "Brushing extra largo", price: "85.000 Gs" },
    ],
  },
  {
    title: "Corte",
    items: [
      { name: "Corte general, incluye asesoría", price: "80.000 Gs" },
      { name: "Flequillo", price: "40.000 Gs" },
    ],
  },
  {
    title: "Ondas o planchita, incluye secado",
    obs: "Si desea realizarse solamente planchita o solo ondas, restar el valor de secado, igual a 30.000 Gs.",
    items: [
      { name: "Planchita / ondas corto", price: "80.000 Gs" },
      { name: "Planchita / ondas medio", price: "95.000 Gs" },
      { name: "Planchita / ondas largo", price: "110.000 Gs" },
      { name: "Planchita / ondas extra largo", price: "125.000 Gs" },
    ],
  },
  {
    title: "Peinado glam, incluye lavado",
    items: [
      { name: "Peinado recogido completo", price: "180.000 Gs" },
      { name: "Peinado semirecogido", price: "165.000 Gs" },
      {
        name: "Peinado quinceañera, incluye asesoría y prueba",
        price: "350.000 Gs",
      },
      {
        name: "Peinado novia, incluye asesoría y prueba",
        price: "400.000 Gs",
      },
      { name: "Trenzas", price: "desde 45.000 Gs" },
    ],
  },
];

export default function PriceSection() {
  return (
    <section id="precios" className="relative bg-forest py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 leaf-bg opacity-60" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal variant="up">
          <SectionHeading
            tone="light"
            eyebrow="Catálogo"
            title="Servicios y precios de referencia"
            subtitle="Consultá el servicio que necesitás y confirmá disponibilidad por WhatsApp."
          />
        </Reveal>

        <Reveal variant="up" delay={120}>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm text-gold/80">
            Los precios están basados en el catálogo mostrado y pueden estar
            sujetos a confirmación por WhatsApp.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={cat.title} variant="up" delay={(i % 2) * 100}>
              <div className="flex h-full flex-col rounded-3xl bg-olive/70 p-6 ring-1 ring-gold/15 transition-colors duration-300 hover:ring-gold/35 sm:p-7">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-gold/70" />
                  <h3 className="font-serif text-xl font-semibold text-cream">
                    {cat.title}
                  </h3>
                </div>

                <ul className="divide-y divide-gold/10">
                  {cat.items.map((it) => (
                    <li
                      key={it.name}
                      className="group flex items-baseline justify-between gap-4 py-3 transition-colors"
                    >
                      <span className="text-sm text-cream/85 sm:text-[15px]">
                        {it.name}
                      </span>
                      <span className="flex shrink-0 items-baseline gap-2">
                        <span className="h-px w-0 bg-gold/50 transition-all duration-300 group-hover:w-6" />
                        <span className="whitespace-nowrap font-serif text-base font-semibold text-gold-soft transition-transform duration-300 group-hover:scale-105">
                          {it.price}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>

                {cat.obs && (
                  <p className="mt-4 rounded-2xl border border-gold/15 bg-forest/40 p-3 text-[13px] leading-relaxed text-cream/65">
                    {cat.obs}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Inline CTA */}
        <Reveal variant="up" delay={120}>
          <div className="mx-auto mt-12 max-w-3xl rounded-3xl bg-gradient-to-r from-gold/15 via-olive to-olive p-px">
            <div className="flex flex-col items-center gap-5 rounded-3xl bg-forest/80 px-6 py-9 text-center ring-1 ring-gold/20">
              <h3 className="font-serif text-2xl font-semibold text-cream">
                ¿No sabés qué elegir?
              </h3>
              <p className="max-w-xl text-sm leading-relaxed text-cream/75">
                Escribinos por WhatsApp y te ayudamos a elegir según tu evento,
                largo de cabello o servicio.
              </p>
              <Button
                href={WHATSAPP.general}
                variant="gold"
                size="lg"
                withArrow
                ariaLabel="Consultar mi servicio"
              >
                <IconWhatsapp className="h-5 w-5" />
                Consultar mi servicio
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal variant="up">
          <p className="mt-8 flex items-center justify-center gap-2 text-center text-xs text-cream/45">
            <IconCheck className="h-3.5 w-3.5 text-soft-green" />
            Servicios de referencia según catálogo visible · Precios sujetos a
            confirmación
          </p>
        </Reveal>
      </div>
    </section>
  );
}
