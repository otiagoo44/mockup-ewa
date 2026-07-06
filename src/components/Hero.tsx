import { motion } from 'framer-motion';

const WA_URL = 'https://wa.me/595984411521?text=Hola%20buenas%2C%20quiero%20consultar%20por%20un%20turno%20en%20Ewa%20Beauty%20Experience';

function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f1a0d 0%, #182417 35%, #263322 65%, #1e2e1c 100%)' }}
    >
      {/* Botanical SVG background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <svg className="absolute -top-16 -right-16 w-[28rem] h-[28rem] opacity-[0.07]" viewBox="0 0 400 400" fill="none">
          <ellipse cx="200" cy="200" rx="60" ry="170" fill="#6F7F5A" transform="rotate(-25 200 200)" />
          <ellipse cx="200" cy="200" rx="40" ry="140" fill="none" stroke="#C7A86B" strokeWidth="0.8" transform="rotate(-25 200 200)" />
        </svg>
        <svg className="absolute -bottom-10 -left-10 w-80 h-80 opacity-[0.06]" viewBox="0 0 400 400" fill="none">
          <ellipse cx="200" cy="200" rx="55" ry="160" fill="#6F7F5A" transform="rotate(20 200 200)" />
          <ellipse cx="200" cy="200" rx="35" ry="120" fill="none" stroke="#C7A86B" strokeWidth="0.6" transform="rotate(20 200 200)" />
        </svg>
        <svg className="absolute top-1/3 right-1/4 w-36 h-36 opacity-[0.05]" viewBox="0 0 200 200" fill="none">
          <ellipse cx="100" cy="100" rx="25" ry="80" fill="#6F7F5A" transform="rotate(45 100 100)" />
        </svg>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(199,168,107,0.04) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{ background: 'linear-gradient(to top, rgba(15,26,13,0.8), transparent)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT: Text */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <FadeUp delay={0.1}>
              <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-x-2 gap-y-1 mb-5 sm:mb-6">
                <span className="inline-block w-2 h-2 rounded-full shrink-0" style={{ background: '#C7A86B' }} />
                <span
                  className="text-[0.65rem] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, color: '#C7A86B' }}
                >
                  Beauty studio · Uñas · Capilar · Peinados
                </span>
                <span className="inline-block w-2 h-2 rounded-full shrink-0" style={{ background: '#C7A86B' }} />
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.4rem] leading-[1.15] mb-4 sm:mb-5"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: '#FAF7F0' }}
              >
                Tu espacio de{' '}
                <em style={{ fontStyle: 'italic', fontWeight: 400, color: '#C7A86B' }}>
                  belleza
                </em>{' '}
                y bienestar en Lambaré
              </h1>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p
                className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 max-w-lg mx-auto lg:mx-0"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: '#8fa07a' }}
              >
                En Ewa Beauty Experience encontrás servicios de uñas, lavado capilar, brushing, cortes y peinados especiales, con atención profesional y reservas por WhatsApp.
              </p>
            </FadeUp>

            <FadeUp delay={0.4}>
              <p
                className="text-sm tracking-wider italic mb-6 sm:mb-8"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, letterSpacing: '0.08em', color: '#E8DDCB' }}
              >
                "La belleza se planifica, el resultado se disfruta."
              </p>
            </FadeUp>

            <FadeUp delay={0.5}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 justify-center lg:justify-start mb-8 sm:mb-10">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 justify-center animate-glow"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    background: '#C7A86B',
                    color: '#182417',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#d4b97a'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#C7A86B'; }}
                >
                  <WhatsAppIcon />
                  Reservar por WhatsApp
                </a>
                <a
                  href="#servicios"
                  onClick={e => { e.preventDefault(); document.querySelector('#servicios')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full text-sm tracking-wide transition-all duration-300 justify-center"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: '#E8DDCB',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(199,168,107,0.6)';
                    (e.currentTarget as HTMLElement).style.color = '#C7A86B';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)';
                    (e.currentTarget as HTMLElement).style.color = '#E8DDCB';
                  }}
                >
                  Ver servicios
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </FadeUp>

            <FadeUp delay={0.6}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0">
                {[
                  { icon: '🕐', text: 'Atención 09:00 a 20:00' },
                  { icon: '📍', text: 'Ubicación en Lambaré' },
                  { icon: '💰', text: 'Catálogo de precios claro' },
                  { icon: '💬', text: 'Turnos por WhatsApp' },
                ].map((b) => (
                  <div
                    key={b.text}
                    className="flex items-center gap-2.5 text-left px-3 py-2 rounded-lg"
                    style={{ background: 'rgba(255,255,255,0.04)' }}
                  >
                    <span className="text-base shrink-0">{b.icon}</span>
                    <span
                      className="text-xs sm:text-[0.8rem] leading-snug"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: '#8fa07a' }}
                    >
                      {b.text}
                    </span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* RIGHT: Visual */}
          <motion.div
            className="relative flex justify-center lg:justify-end order-1 lg:order-2 mt-2 lg:mt-0"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.35, ease: 'easeOut' }}
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              {/* Decorative ring */}
              <div
                className="absolute -inset-3 sm:-inset-4 rounded-[2rem] opacity-20 pointer-events-none"
                style={{ background: 'linear-gradient(135deg, #C7A86B, transparent)', border: '1px solid #C7A86B' }}
              />

              {/* Top badge */}
              <motion.div
                className="absolute -top-3 right-2 sm:-top-4 sm:right-4 z-20 rounded-full px-3 py-2 text-xs font-medium shadow-lg whitespace-nowrap"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                style={{ background: '#C7A86B', color: '#182417', fontFamily: "'Inter', sans-serif" }}
              >
                ✨ Beauty Studio
              </motion.div>

              {/* Main placeholder */}
              <div
                className="img-placeholder rounded-[1.5rem] overflow-hidden relative"
                style={{
                  aspectRatio: '4/5',
                  boxShadow: '0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(199,168,107,0.15)',
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10 px-6">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ border: '1px solid rgba(199,168,107,0.4)' }}
                  >
                    <svg className="w-7 h-7 opacity-60" fill="none" stroke="#C7A86B" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p
                    className="text-xs tracking-[0.2em] uppercase text-center"
                    style={{ color: 'rgba(181,196,160,0.7)' }}
                  >
                    Foto real del salón o clienta<br />en Ewa Beauty Experience
                  </p>
                </div>
                <div
                  className="absolute bottom-0 left-0 right-0 h-2/5"
                  style={{ background: 'linear-gradient(to top, rgba(24,36,23,0.9), transparent)' }}
                />
                <div
                  className="absolute top-0 left-0 right-0 h-1/4"
                  style={{ background: 'linear-gradient(to bottom, rgba(24,36,23,0.4), transparent)' }}
                />

                {/* Info card — inside image, no overflow */}
                <motion.div
                  className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-[210px] z-20 rounded-2xl px-4 py-3 shadow-2xl"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  style={{
                    background: 'rgba(30, 46, 28, 0.92)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(8px)',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.4), 0 0 0 1px rgba(199,168,107,0.1)',
                  }}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                    <span className="text-xs tracking-wide" style={{ color: '#4ade80', fontFamily: "'Inter', sans-serif" }}>
                      Abierto ahora
                    </span>
                  </div>
                  <div className="text-xs mb-0.5" style={{ color: '#E8DDCB', fontFamily: "'Inter', sans-serif" }}>
                    <span style={{ color: '#C7A86B' }}>🕐</span> 09:00 – 20:00
                  </div>
                  <div className="text-xs" style={{ color: '#E8DDCB', fontFamily: "'Inter', sans-serif" }}>
                    <span style={{ color: '#C7A86B' }}>📍</span> Av. Cacique Lambaré
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — anchored to section bottom */}
      <motion.div
        className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-2 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <span
          className="text-[0.6rem] tracking-[0.3em] uppercase"
          style={{ color: 'rgba(181,196,160,0.5)', fontFamily: "'Inter', sans-serif" }}
        >
          Explorar
        </span>
        <div
          className="scroll-indicator w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
          style={{ border: '1px solid rgba(255,255,255,0.2)' }}
        >
          <div className="w-1 h-2 rounded-full" style={{ background: 'rgba(199,168,107,0.7)' }} />
        </div>
      </motion.div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
