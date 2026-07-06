import { useScrollReveal } from '../hooks/useScrollReveal';

const WA_UNAS = 'https://wa.me/595984411521?text=Hola%20buenas%2C%20quiero%20consultar%20por%20u%C3%B1as%20en%20Ewa%20Beauty%20Experience';

const gallery = [
  { label: 'Uñas naturales elegantes', emoji: '🤍' },
  { label: 'Diseño azul delicado', emoji: '💙' },
  { label: 'Manicura limpia', emoji: '✨' },
  { label: 'Cuidado de manos', emoji: '🌿' },
];

export default function NailsSection() {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section
      className="py-20 lg:py-28"
      style={{ background: 'linear-gradient(180deg, #182417 0%, #1e2e1c 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT: Text */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-24px)',
              transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
            }}
          >
            <span
              className="inline-block text-xs tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: "'Inter', sans-serif", color: '#C7A86B', fontWeight: 400 }}
            >
              Uñas
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl mb-5"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: '#FAF7F0', lineHeight: '1.2' }}
            >
              Detalles delicados para manos cuidadas
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: '#8fa07a' }}
            >
              Ewa Beauty Experience también ofrece servicios de uñas y cuidado personal, con una estética prolija, femenina y elegante.
            </p>

            {/* Feature list */}
            <ul className="space-y-3 mb-8">
              {['Uñas naturales con terminación delicada', 'Manicura prolija y femenina', 'Diseños elegantes a pedido', 'Cuidado de manos y cutícula'].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(199,168,107,0.15)', border: '1px solid rgba(199,168,107,0.3)' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#C7A86B' }} />
                  </span>
                  <span
                    className="text-sm"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: '#b5c4a0' }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href={WA_UNAS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300"
              style={{ background: '#C7A86B', color: '#182417', fontFamily: "'Inter', sans-serif" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#d4b97a'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#C7A86B'; }}
            >
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Consultar uñas por WhatsApp
            </a>
          </div>

          {/* RIGHT: Gallery */}
          <div
            className="grid grid-cols-2 gap-4"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(24px)',
              transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
            }}
          >
            {gallery.map((g, i) => (
              <div
                key={g.label}
                className="img-zoom-wrap rounded-2xl overflow-hidden group relative cursor-default"
                style={{
                  aspectRatio: i === 0 ? '1/1.2' : '1/1',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
                  border: '1px solid rgba(199,168,107,0.12)',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(16px)',
                  transition: `opacity 0.5s ease ${i * 0.1 + 0.3}s, transform 0.5s ease ${i * 0.1 + 0.3}s`,
                }}
              >
                <div
                  className="img-placeholder w-full h-full absolute inset-0"
                  style={{ transition: 'transform 0.5s ease' }}
                >
                  <div className="flex flex-col items-center justify-center gap-2 w-full h-full">
                    <span className="text-3xl">{g.emoji}</span>
                    <p
                      className="text-[0.6rem] tracking-[0.15em] uppercase text-center px-3 leading-relaxed"
                      style={{ color: 'rgba(181,196,160,0.6)' }}
                    >
                      {g.label}
                    </p>
                  </div>
                </div>
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 z-10"
                  style={{ background: 'linear-gradient(to top, rgba(24,36,23,0.8), transparent)' }}
                >
                  <p
                    className="text-xs"
                    style={{ color: '#E8DDCB', fontFamily: "'Inter', sans-serif" }}
                  >
                    {g.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
