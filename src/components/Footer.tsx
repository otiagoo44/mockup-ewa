const WA_URL = 'https://wa.me/595984411521?text=Hola%20buenas%2C%20quiero%20consultar%20por%20un%20turno%20en%20Ewa%20Beauty%20Experience';

const services = [
  'Uñas y manicura',
  'Lavado capilar',
  'Brushing y secados',
  'Corte y flequillo',
  'Ondas y planchita',
  'Peinados especiales',
  'Peinados para novia',
  'Peinados para quinceañera',
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      className="pt-16 pb-8"
      style={{ background: '#0f1a0d', borderTop: '1px solid rgba(199,168,107,0.12)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span
                className="block text-2xl mb-0.5"
                style={{ fontFamily: "'Playfair Display', serif", color: '#C7A86B', letterSpacing: '0.1em' }}
              >
                Ewa
              </span>
              <span
                className="block text-[0.6rem] tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Inter', sans-serif", color: '#6F7F5A' }}
              >
                Beauty Experience
              </span>
            </div>
            <p
              className="text-xs leading-relaxed mb-4"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: '#6F7F5A' }}
            >
              Tu espacio de belleza y bienestar en Lambaré, Paraguay.
            </p>
            <p
              className="text-xs italic"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: '#4a6243', letterSpacing: '0.05em' }}
            >
              "La belleza se planifica, el resultado se disfruta."
            </p>

            {/* Status */}
            <div className="flex items-center gap-2 mt-4">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span
                className="text-xs"
                style={{ color: '#4a6243', fontFamily: "'Inter', sans-serif" }}
              >
                09:00 – 20:00 · Lambaré
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-xs tracking-[0.2em] uppercase mb-5"
              style={{ fontFamily: "'Inter', sans-serif", color: '#C7A86B', fontWeight: 500 }}
            >
              Servicios
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href={WA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs transition-colors duration-200"
                    style={{ color: '#4a6243', fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#8fa07a'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#4a6243'; }}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs tracking-[0.2em] uppercase mb-5"
              style={{ fontFamily: "'Inter', sans-serif", color: '#C7A86B', fontWeight: 500 }}
            >
              Contacto
            </h4>
            <div className="space-y-3">
              <div>
                <p
                  className="text-xs mb-0.5"
                  style={{ color: '#374a32', fontFamily: "'Inter', sans-serif" }}
                >
                  Dirección
                </p>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: '#4a6243', fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                >
                  M94P+G99, Av. Cacique Lambaré,<br />Lambaré, Paraguay
                </p>
              </div>
              <div>
                <p
                  className="text-xs mb-0.5"
                  style={{ color: '#374a32', fontFamily: "'Inter', sans-serif" }}
                >
                  WhatsApp
                </p>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs transition-colors duration-200"
                  style={{ color: '#C7A86B', fontFamily: "'Inter', sans-serif" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#d4b97a'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#C7A86B'; }}
                >
                  +595 984 411521
                </a>
              </div>
              <div>
                <p
                  className="text-xs mb-0.5"
                  style={{ color: '#374a32', fontFamily: "'Inter', sans-serif" }}
                >
                  Email
                </p>
                <a
                  href="mailto:jacintanailsbar@gmail.com"
                  className="text-xs transition-colors duration-200"
                  style={{ color: '#4a6243', fontFamily: "'Inter', sans-serif" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#8fa07a'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#4a6243'; }}
                >
                  jacintanailsbar@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick links + CTA */}
          <div>
            <h4
              className="text-xs tracking-[0.2em] uppercase mb-5"
              style={{ fontFamily: "'Inter', sans-serif", color: '#C7A86B', fontWeight: 500 }}
            >
              Navegación
            </h4>
            <ul className="space-y-2.5 mb-6">
              {[
                { label: 'Servicios', href: '#servicios' },
                { label: 'Precios', href: '#precios' },
                { label: 'Peinados', href: '#peinados' },
                { label: 'Galería', href: '#galeria' },
                { label: 'Ubicación', href: '#ubicacion' },
                { label: 'Preguntas', href: '#faq' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={e => { e.preventDefault(); document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="text-xs transition-colors duration-200 cursor-pointer"
                    style={{ color: '#4a6243', fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#8fa07a'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#4a6243'; }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300"
              style={{ background: '#C7A86B', color: '#182417', fontFamily: "'Inter', sans-serif" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#d4b97a'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#C7A86B'; }}
            >
              <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Reservar turno
            </a>
          </div>
        </div>

        {/* Gold divider */}
        <div className="gold-divider mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-xs"
            style={{ color: '#2e3d29', fontFamily: "'Inter', sans-serif" }}
          >
            © 2026 Ewa Beauty Experience · Lambaré, Paraguay
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs transition-colors duration-200 cursor-pointer"
            style={{ color: '#374a32', fontFamily: "'Inter', sans-serif", background: 'none', border: 'none' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#C7A86B'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#374a32'; }}
          >
            Volver arriba
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
