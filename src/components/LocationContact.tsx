import { useScrollReveal } from '../hooks/useScrollReveal';

const WA_URL = 'https://wa.me/595984411521?text=Hola%20buenas%2C%20quiero%20consultar%20por%20un%20turno%20en%20Ewa%20Beauty%20Experience';
const MAPS_URL = 'https://maps.google.com/?q=Av.+Cacique+Lambar%C3%A9,+Lambar%C3%A9,+Paraguay';

export default function LocationContact() {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section
      id="ubicacion"
      className="py-20 lg:py-28"
      style={{ background: 'linear-gradient(180deg, #182417 0%, #0f1a0d 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className="text-center mb-12"
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
            Dónde estamos
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: '#FAF7F0' }}
          >
            Visitá Ewa Beauty Experience en Lambaré
          </h2>
          <div className="gold-divider mt-6 max-w-xs mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* LEFT: Contact card */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: '#1e2e1c',
              border: '1px solid rgba(199,168,107,0.15)',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-24px)',
              transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
            }}
          >
            {/* Card header */}
            <div
              className="px-6 py-5 flex items-center gap-3"
              style={{ background: 'rgba(199,168,107,0.08)', borderBottom: '1px solid rgba(199,168,107,0.12)' }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(199,168,107,0.15)' }}
              >
                <span>🌿</span>
              </div>
              <div>
                <p
                  className="text-sm font-medium"
                  style={{ fontFamily: "'Playfair Display', serif", color: '#FAF7F0' }}
                >
                  Ewa Beauty Experience
                </p>
                <p
                  className="text-xs"
                  style={{ color: '#8fa07a', fontFamily: "'Inter', sans-serif" }}
                >
                  Salón de uñas, belleza y cuidado personal
                </p>
              </div>
              <div className="ml-auto flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs" style={{ color: '#4ade80', fontFamily: "'Inter', sans-serif" }}>Abierto</span>
              </div>
            </div>

            {/* Contact details */}
            <div className="px-6 py-5 space-y-4">
              {[
                {
                  icon: '📍',
                  label: 'Dirección',
                  value: 'M94P+G99, Av. Cacique Lambaré, Lambaré, Paraguay',
                },
                {
                  icon: '🕐',
                  label: 'Horario',
                  value: '09:00 – 20:00',
                },
                {
                  icon: '📱',
                  label: 'WhatsApp',
                  value: '+595 984 411521',
                  href: WA_URL,
                },
                {
                  icon: '📧',
                  label: 'Email',
                  value: 'jacintanailsbar@gmail.com',
                  href: 'mailto:jacintanailsbar@gmail.com',
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: 'rgba(199,168,107,0.08)' }}
                  >
                    <span className="text-sm">{item.icon}</span>
                  </div>
                  <div>
                    <p
                      className="text-xs mb-0.5"
                      style={{ color: '#6F7F5A', fontFamily: "'Inter', sans-serif" }}
                    >
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm transition-colors duration-200"
                        style={{ color: '#C7A86B', fontFamily: "'Inter', sans-serif" }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#d4b97a'; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#C7A86B'; }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p
                        className="text-sm"
                        style={{ color: '#b5c4a0', fontFamily: "'Inter', sans-serif" }}
                      >
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div
              className="px-6 py-5 flex flex-col sm:flex-row gap-3"
              style={{ borderTop: '1px solid rgba(199,168,107,0.08)' }}
            >
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 flex-1"
                style={{
                  border: '1px solid rgba(199,168,107,0.3)',
                  color: '#C7A86B',
                  fontFamily: "'Inter', sans-serif",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(199,168,107,0.1)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                }}
              >
                🗺️ Cómo llegar
              </a>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 flex-1"
                style={{ background: '#C7A86B', color: '#182417', fontFamily: "'Inter', sans-serif" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#d4b97a'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#C7A86B'; }}
              >
                <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Reservar por WhatsApp
              </a>
              <a
                href="mailto:jacintanailsbar@gmail.com"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 flex-1"
                style={{
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#b5c4a0',
                  fontFamily: "'Inter', sans-serif",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
                  (e.currentTarget as HTMLElement).style.color = '#E8DDCB';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                  (e.currentTarget as HTMLElement).style.color = '#b5c4a0';
                }}
              >
                📧 Enviar email
              </a>
            </div>
          </div>

          {/* RIGHT: Map placeholder */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              aspectRatio: '4/3',
              border: '1px solid rgba(199,168,107,0.15)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(24px)',
              transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
            }}
          >
            {/* Embedded map attempt / placeholder */}
            <div className="relative w-full h-full">
              <iframe
                title="Ewa Beauty Experience ubicación"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14354.47547!2d-57.6345!3d-25.3500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDIxJzAwLjAiUyA1N8KwMzgnMDQuMiJX!5e0!3m2!1ses!2spy!4v1700000000000!5m2!1ses!2spy"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ filter: 'grayscale(30%) contrast(1.05)' }}
              />
              {/* Overlay button */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-center">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 shadow-lg"
                  style={{
                    background: 'rgba(24,36,23,0.9)',
                    color: '#C7A86B',
                    border: '1px solid rgba(199,168,107,0.3)',
                    fontFamily: "'Inter', sans-serif",
                    backdropFilter: 'blur(6px)',
                  }}
                >
                  🗺️ Abrir en Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
