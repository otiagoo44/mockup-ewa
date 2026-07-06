import { useScrollReveal } from '../hooks/useScrollReveal';

const WA_URL = 'https://wa.me/595984411521?text=Hola%20buenas%2C%20quiero%20consultar%20por%20un%20turno%20en%20Ewa%20Beauty%20Experience';

export default function FinalCTA() {
  const { ref, visible } = useScrollReveal(0.15);

  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f1a0d 0%, #182417 40%, #263322 70%, #1e2e1c 100%)' }}
    >
      {/* Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute -top-10 -right-10 w-64 h-64 opacity-[0.06]" viewBox="0 0 300 300" fill="none">
          <ellipse cx="150" cy="150" rx="50" ry="130" fill="#6F7F5A" transform="rotate(-25 150 150)" />
          <ellipse cx="150" cy="150" rx="30" ry="100" fill="none" stroke="#C7A86B" strokeWidth="0.8" transform="rotate(-25 150 150)" />
        </svg>
        <svg className="absolute -bottom-10 -left-10 w-56 h-56 opacity-[0.05]" viewBox="0 0 300 300" fill="none">
          <ellipse cx="150" cy="150" rx="45" ry="120" fill="#6F7F5A" transform="rotate(30 150 150)" />
        </svg>
        {/* Gold glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(199,168,107,0.06) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          ref={ref}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          {/* Top tag */}
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="gold-divider w-12" />
            <span
              className="text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Inter', sans-serif", color: '#C7A86B', fontWeight: 400 }}
            >
              Ewa Beauty Experience
            </span>
            <div className="gold-divider w-12" />
          </div>

          {/* Title */}
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl mb-5 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: '#FAF7F0' }}
          >
            Planificá tu momento de{' '}
            <em style={{ fontStyle: 'italic', color: '#C7A86B', fontWeight: 400 }}>belleza</em>{' '}
            en Ewa
          </h2>

          {/* Text */}
          <p
            className="text-base leading-relaxed max-w-2xl mx-auto mb-4"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: '#8fa07a' }}
          >
            Consultá por uñas, lavado capilar, brushing, cortes, ondas, planchita o peinados especiales y reservá tu turno por WhatsApp.
          </p>

          {/* Brand phrase */}
          <p
            className="text-sm italic mb-10 tracking-wider"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, color: '#E8DDCB', letterSpacing: '0.1em' }}
          >
            "La belleza se planifica, el resultado se disfruta."
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-medium tracking-wide transition-all duration-300 w-full sm:w-auto justify-center animate-glow"
              style={{
                background: '#C7A86B',
                color: '#182417',
                fontFamily: "'Inter', sans-serif",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = '#d4b97a';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = '#C7A86B';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Reservar por WhatsApp
            </a>
            <a
              href="#precios"
              onClick={e => { e.preventDefault(); document.querySelector('#precios')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="flex items-center gap-2 px-8 py-4 rounded-full text-sm tracking-wide transition-all duration-300 w-full sm:w-auto justify-center"
              style={{
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#E8DDCB',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(199,168,107,0.5)';
                (e.currentTarget as HTMLElement).style.color = '#C7A86B';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)';
                (e.currentTarget as HTMLElement).style.color = '#E8DDCB';
              }}
            >
              Ver catálogo
            </a>
          </div>

          {/* Bottom micro info */}
          <div
            className="flex items-center justify-center gap-6 mt-10 flex-wrap"
            style={{
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.6s ease 0.3s',
            }}
          >
            {['09:00 – 20:00', 'Lambaré, Paraguay', '+595 984 411521'].map((item) => (
              <span
                key={item}
                className="text-xs tracking-wide"
                style={{ color: '#6F7F5A', fontFamily: "'Inter', sans-serif" }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
