import { useScrollReveal } from '../hooks/useScrollReveal';

const WA_GENERAL = 'https://wa.me/595984411521?text=Hola%20buenas%2C%20quiero%20consultar%20por%20un%20turno%20en%20Ewa%20Beauty%20Experience';

interface PriceItem {
  label: string;
  price: string;
  note?: string;
}

interface PriceCategoryProps {
  icon: string;
  title: string;
  items: PriceItem[];
  note?: string;
  delay: number;
  visible: boolean;
}

function PriceCategory({ icon, title, items, note, delay, visible }: PriceCategoryProps) {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: '#1e2e1c',
        border: '1px solid rgba(199,168,107,0.15)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      {/* Category header */}
      <div
        className="px-5 py-4 flex items-center gap-3"
        style={{ background: 'rgba(199,168,107,0.08)', borderBottom: '1px solid rgba(199,168,107,0.15)' }}
      >
        <span className="text-xl">{icon}</span>
        <h3
          className="text-base"
          style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: '#FAF7F0' }}
        >
          {title}
        </h3>
      </div>

      {/* Items */}
      <div className="divide-y" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
        {items.map((item) => (
          <div
            key={item.label}
            className="price-row flex items-center justify-between px-5 py-3 transition-colors duration-200 cursor-default"
          >
            <div>
              <span
                className="text-sm"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, color: '#b5c4a0' }}
              >
                {item.label}
              </span>
              {item.note && (
                <p
                  className="text-xs mt-0.5"
                  style={{ color: 'rgba(181,196,160,0.6)', fontFamily: "'Inter', sans-serif" }}
                >
                  {item.note}
                </p>
              )}
            </div>
            <span
              className="text-sm font-medium ml-4 shrink-0"
              style={{ fontFamily: "'Inter', sans-serif", color: '#C7A86B' }}
            >
              {item.price}
            </span>
          </div>
        ))}
      </div>

      {note && (
        <div
          className="px-5 py-3 text-xs leading-relaxed"
          style={{
            color: 'rgba(181,196,160,0.7)',
            fontFamily: "'Inter', sans-serif",
            background: 'rgba(0,0,0,0.1)',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            fontStyle: 'italic',
          }}
        >
          ⚠️ {note}
        </div>
      )}
    </div>
  );
}

const categories = [
  {
    icon: '💧',
    title: 'Lavado capilar',
    items: [
      { label: 'Lavado normal / neutro', price: '45.000 Gs' },
      { label: 'Lavado hidratante', price: '60.000 Gs' },
    ],
  },
  {
    icon: '💨',
    title: 'Brushing y secados',
    items: [
      { label: 'Secado rápido', price: '30.000 Gs' },
      { label: 'Difusor', price: '60.000 Gs' },
      { label: 'Brushing corto', price: '45.000 Gs' },
      { label: 'Brushing medio', price: '65.000 Gs' },
      { label: 'Brushing largo', price: '75.000 Gs' },
      { label: 'Brushing extra largo', price: '85.000 Gs' },
    ],
  },
  {
    icon: '✂️',
    title: 'Corte',
    items: [
      { label: 'Corte general', price: '80.000 Gs', note: 'Incluye asesoría' },
      { label: 'Flequillo', price: '40.000 Gs' },
    ],
  },
  {
    icon: '🌊',
    title: 'Ondas o planchita',
    items: [
      { label: 'Corto', price: '80.000 Gs' },
      { label: 'Medio', price: '95.000 Gs' },
      { label: 'Largo', price: '110.000 Gs' },
      { label: 'Extra largo', price: '125.000 Gs' },
    ],
    note: 'Incluye secado. Si se realiza solo planchita u ondas, restar el valor del secado (30.000 Gs).',
  },
  {
    icon: '👑',
    title: 'Peinado glam',
    items: [
      { label: 'Recogido completo', price: '180.000 Gs', note: 'Incluye lavado' },
      { label: 'Semirecogido', price: '165.000 Gs', note: 'Incluye lavado' },
      { label: 'Quinceañera', price: '350.000 Gs', note: 'Incluye asesoría y prueba' },
      { label: 'Novia', price: '400.000 Gs', note: 'Incluye asesoría y prueba' },
      { label: 'Trenzas desde', price: '45.000 Gs' },
    ],
  },
];

export default function PriceSection() {
  const { ref, visible } = useScrollReveal(0.06);

  return (
    <section
      id="precios"
      className="py-20 lg:py-28"
      style={{ background: 'linear-gradient(180deg, #182417 0%, #1e2e1c 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className="text-center mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <span
            className="inline-block text-xs tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: "'Inter', sans-serif", color: '#C7A86B', fontWeight: 400 }}
          >
            Catálogo
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: '#FAF7F0' }}
          >
            Servicios y precios de referencia
          </h2>
          <p
            className="text-base leading-relaxed max-w-xl mx-auto mb-4"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: '#8fa07a' }}
          >
            Consultá el servicio que necesitás y confirmá disponibilidad por WhatsApp.
          </p>

          {/* Disclaimer */}
          <div
            className="inline-flex items-start gap-2 rounded-xl px-4 py-3 text-sm text-left max-w-lg"
            style={{
              background: 'rgba(199,168,107,0.08)',
              border: '1px solid rgba(199,168,107,0.2)',
              color: '#b5c4a0',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            <span className="shrink-0 mt-0.5">ℹ️</span>
            <span>Los precios están basados en el catálogo de referencia y pueden estar sujetos a confirmación por WhatsApp.</span>
          </div>

          <div className="gold-divider mt-8 max-w-xs mx-auto" />
        </div>

        {/* Price categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {categories.map((cat, i) => (
            <PriceCategory
              key={cat.title}
              icon={cat.icon}
              title={cat.title}
              items={cat.items}
              note={cat.note}
              delay={i * 0.1}
              visible={visible}
            />
          ))}
        </div>

        {/* CTA box */}
        <div
          className="rounded-2xl px-6 py-8 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(199,168,107,0.1) 0%, rgba(199,168,107,0.05) 100%)',
            border: '1px solid rgba(199,168,107,0.25)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease 0.55s, transform 0.6s ease 0.55s',
          }}
        >
          <p
            className="text-lg mb-2"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: '#FAF7F0' }}
          >
            ¿No sabés qué elegir?
          </p>
          <p
            className="text-sm leading-relaxed max-w-md mx-auto mb-5"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: '#8fa07a' }}
          >
            Escribinos por WhatsApp y te ayudamos a elegir según tu evento, largo de cabello o servicio.
          </p>
          <a
            href={WA_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300"
            style={{ background: '#C7A86B', color: '#182417', fontFamily: "'Inter', sans-serif" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#d4b97a'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#C7A86B'; }}
          >
            <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Consultar mi servicio
          </a>
        </div>
      </div>
    </section>
  );
}
