import { useScrollReveal } from '../hooks/useScrollReveal';

const cards = [
  {
    icon: '📋',
    title: 'Catálogo claro',
    text: 'Los servicios principales están organizados por categoría para que puedas consultar mejor antes de reservar.',
  },
  {
    icon: '📍',
    title: 'Ubicación fácil',
    text: 'Ewa está ubicada sobre Av. Cacique Lambaré, en Lambaré, Paraguay.',
  },
  {
    icon: '🕐',
    title: 'Horario amplio',
    text: 'Atención de 09:00 a 20:00, ideal para coordinar tu momento de belleza.',
  },
  {
    icon: '✨',
    title: 'Servicios integrales',
    text: 'Uñas, cabello, brushing, corte y peinados especiales en un solo lugar.',
  },
  {
    icon: '👑',
    title: 'Peinados planificados',
    text: 'Los servicios para novias y quinceañeras incluyen asesoría y prueba según el catálogo.',
  },
  {
    icon: '💬',
    title: 'Reserva directa',
    text: 'Podés consultar y reservar fácilmente por WhatsApp.',
  },
];

export default function WhyChooseUs() {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section
      className="py-20 lg:py-28"
      style={{ background: 'linear-gradient(180deg, #1e2e1c 0%, #182417 100%)' }}
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
            Por qué Ewa
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: '#FAF7F0' }}
          >
            Un espacio para cuidarte de forma completa
          </h2>
          <div className="gold-divider mt-8 max-w-xs mx-auto" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className="group rounded-2xl px-6 py-6 transition-all duration-300 cursor-default"
              style={{
                background: '#263322',
                border: '1px solid rgba(199,168,107,0.1)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.6s ease ${i * 0.09}s, transform 0.6s ease ${i * 0.09}s, background 0.3s`,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = '#2e3d29';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(199,168,107,0.3)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = '#263322';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(199,168,107,0.1)';
              }}
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center mb-4 transition-all duration-300"
                style={{ background: 'rgba(199,168,107,0.1)', border: '1px solid rgba(199,168,107,0.2)' }}
              >
                <span className="text-xl">{card.icon}</span>
              </div>
              <h3
                className="text-base mb-2"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: '#FAF7F0' }}
              >
                {card.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: '#8fa07a' }}
              >
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
