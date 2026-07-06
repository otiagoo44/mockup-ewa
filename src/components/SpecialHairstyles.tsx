import { useScrollReveal } from '../hooks/useScrollReveal';

const WA_PEINADOS = 'https://wa.me/595984411521?text=Hola%20buenas%2C%20quiero%20consultar%20por%20peinados%20especiales%20en%20Ewa%20Beauty%20Experience';
const WA_NOVIA = 'https://wa.me/595984411521?text=Hola%20buenas%2C%20quiero%20consultar%20por%20peinado%20de%20novia%20en%20Ewa%20Beauty%20Experience';
const WA_QUINCEA = 'https://wa.me/595984411521?text=Hola%20buenas%2C%20quiero%20consultar%20por%20peinado%20de%20quincea%C3%B1era%20en%20Ewa%20Beauty%20Experience';

const miniPeinados = [
  { label: 'Foto real de recogido glam', emoji: '🥀' },
  { label: 'Foto real de semirecogido', emoji: '🌸' },
  { label: 'Foto real de ondas naturales', emoji: '🌊' },
];

const servicios = [
  { label: 'Recogido completo', waUrl: WA_PEINADOS },
  { label: 'Semirecogido', waUrl: WA_PEINADOS },
  { label: 'Quinceañera', waUrl: WA_QUINCEA },
  { label: 'Novia', waUrl: WA_NOVIA },
  { label: 'Trenzas', waUrl: WA_PEINADOS },
  { label: 'Ondas', waUrl: WA_PEINADOS },
  { label: 'Planchita', waUrl: WA_PEINADOS },
];

export default function SpecialHairstyles() {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section
      id="peinados"
      className="py-20 lg:py-28 overflow-hidden"
      style={{ background: '#FAF7F0' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div
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
            Eventos
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: '#182417' }}
          >
            Peinados especiales para momentos importantes
          </h2>
          <p
            className="text-base leading-relaxed max-w-xl mx-auto mb-3"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: '#4a6243' }}
          >
            Para una fiesta, una sesión, una quinceañera o una boda, el peinado no se improvisa: se planifica.
          </p>
          <p
            className="text-sm italic"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, color: '#263322', letterSpacing: '0.06em' }}
          >
            "La belleza se planifica, el resultado se disfruta."
          </p>
          <div className="gold-divider mt-8 max-w-xs mx-auto" />
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* LEFT: Main image + mini images */}
          <div
            className="flex flex-col gap-4"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-24px)',
              transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
            }}
          >
            {/* Main placeholder */}
            <div
              className="img-placeholder rounded-2xl overflow-hidden relative"
              style={{
                aspectRatio: '4/3',
                border: '1px solid rgba(199,168,107,0.2)',
                boxShadow: '0 20px 60px rgba(24,36,23,0.15)',
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10">
                <span className="text-5xl">💍</span>
                <p
                  className="text-xs tracking-[0.2em] uppercase text-center px-8"
                  style={{ color: 'rgba(181,196,160,0.7)' }}
                >
                  Foto real de peinado glam
                </p>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-1/3"
                style={{ background: 'linear-gradient(to top, rgba(24,36,23,0.7), transparent)' }}
              />
            </div>

            {/* Mini placeholders */}
            <div className="grid grid-cols-3 gap-3">
              {miniPeinados.map((p) => (
                <div
                  key={p.label}
                  className="img-placeholder rounded-xl overflow-hidden relative group cursor-default"
                  style={{ aspectRatio: '1/1' }}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 z-10 p-2">
                    <span className="text-2xl">{p.emoji}</span>
                    <p
                      className="text-[0.6rem] tracking-wider uppercase text-center leading-tight"
                      style={{ color: 'rgba(181,196,160,0.7)' }}
                    >
                      {p.label}
                    </p>
                  </div>
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'rgba(199,168,107,0.1)' }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Info */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(24px)',
              transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
            }}
          >
            {/* Services list */}
            <div className="grid grid-cols-1 gap-3 mb-8">
              {servicios.map((s, i) => (
                <a
                  key={s.label}
                  href={s.waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-5 py-3.5 rounded-xl transition-all duration-200 group"
                  style={{
                    background: '#1e2e1c',
                    border: '1px solid rgba(199,168,107,0.1)',
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateX(0)' : 'translateX(16px)',
                    transition: `opacity 0.5s ease ${i * 0.07 + 0.3}s, transform 0.5s ease ${i * 0.07 + 0.3}s`,
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(199,168,107,0.35)';
                    (e.currentTarget as HTMLElement).style.background = '#263322';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(199,168,107,0.1)';
                    (e.currentTarget as HTMLElement).style.background = '#1e2e1c';
                  }}
                >
                  <span
                    className="text-sm"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, color: '#E8DDCB' }}
                  >
                    {s.label}
                  </span>
                  <span
                    className="text-xs tracking-wider transition-colors duration-200"
                    style={{ color: '#C7A86B', fontFamily: "'Inter', sans-serif" }}
                  >
                    Consultar →
                  </span>
                </a>
              ))}
            </div>

            {/* Note */}
            <div
              className="rounded-xl px-5 py-4 mb-8 text-sm leading-relaxed"
              style={{
                background: 'rgba(199,168,107,0.08)',
                border: '1px solid rgba(199,168,107,0.2)',
                color: '#b5c4a0',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
              }}
            >
              <span style={{ color: '#C7A86B', fontWeight: 500 }}>ℹ️ A tener en cuenta: </span>
              Los peinados para quinceañera y novia incluyen asesoría y prueba, según el catálogo visible. Consultá por WhatsApp para coordinar.
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={WA_PEINADOS}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300"
                style={{ background: '#C7A86B', color: '#182417', fontFamily: "'Inter', sans-serif" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#d4b97a'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#C7A86B'; }}
              >
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Consultar peinado
              </a>
              <a
                href="#precios"
                onClick={e => { e.preventDefault(); document.querySelector('#precios')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm tracking-wide transition-all duration-300"
                style={{
                  border: '1px solid rgba(38,51,34,0.4)',
                  color: '#263322',
                  fontFamily: "'Inter', sans-serif",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = '#C7A86B';
                  (e.currentTarget as HTMLElement).style.color = '#C7A86B';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(38,51,34,0.4)';
                  (e.currentTarget as HTMLElement).style.color = '#263322';
                }}
              >
                Ver precios
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
