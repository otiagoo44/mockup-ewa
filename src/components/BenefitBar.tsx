import { useScrollReveal } from '../hooks/useScrollReveal';

const benefits = [
  { icon: '💅', label: 'Uñas y belleza' },
  { icon: '👑', label: 'Peinados especiales' },
  { icon: '💨', label: 'Brushing y secados' },
  { icon: '✂️', label: 'Corte con asesoría' },
  { icon: '📍', label: 'Atención en Lambaré' },
  { icon: '💬', label: 'Reservas por WhatsApp' },
];

export default function BenefitBar() {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section
      ref={ref}
      className="relative z-10 py-5 sm:py-6 overflow-hidden"
      style={{ background: '#FAF7F0', borderTop: '1px solid #E8DDCB', borderBottom: '1px solid #E8DDCB' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px" style={{ background: '#E8DDCB' }}>
          {benefits.map((b, i) => (
            <div
              key={b.label}
              className="flex flex-col items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-3 sm:py-4 text-center transition-all duration-300 group cursor-default min-h-[4.5rem] sm:min-h-0"
              style={{
                background: '#FAF7F0',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(16px)',
                transition: `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s, background 0.2s`,
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#F4EFE6'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#FAF7F0'; }}
            >
              <span className="text-xl sm:text-2xl">{b.icon}</span>
              <span
                className="text-[0.65rem] sm:text-xs tracking-wide leading-tight"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: '#263322' }}
              >
                {b.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
