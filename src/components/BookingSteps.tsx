import { useScrollReveal } from '../hooks/useScrollReveal';

const WA_URL = 'https://wa.me/595984411521?text=Hola%20buenas%2C%20quiero%20consultar%20por%20un%20turno%20en%20Ewa%20Beauty%20Experience';

const steps = [
  {
    number: '01',
    title: 'Escribís por WhatsApp',
    text: 'Contanos qué servicio querés: uñas, lavado, brushing, corte, ondas o peinado especial.',
  },
  {
    number: '02',
    title: 'Indicás fecha y horario',
    text: 'Consultá disponibilidad según el día que necesitás.',
  },
  {
    number: '03',
    title: 'Confirmás el servicio',
    text: 'Te orientan según tu largo de cabello, evento o necesidad.',
  },
  {
    number: '04',
    title: 'Recibís indicaciones',
    text: 'Si el servicio requiere preparación, prueba o asesoría, se coordina previamente.',
  },
  {
    number: '05',
    title: 'Llegás a Ewa',
    text: 'Disfrutás tu momento de belleza y bienestar.',
  },
];

export default function BookingSteps() {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section
      className="py-20 lg:py-28"
      style={{ background: '#FAF7F0' }}
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
            Reservas
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: '#182417' }}
          >
            Reservar tu turno es simple
          </h2>
          <div className="gold-divider mt-6 max-w-xs mx-auto" />
        </div>

        {/* Steps - desktop horizontal, mobile vertical */}
        <div className="relative">
          {/* Desktop connector line */}
          <div
            className="hidden lg:block absolute top-10 left-0 right-0 h-px"
            style={{
              background: 'linear-gradient(90deg, transparent, #C7A86B, #C7A86B, #C7A86B, #C7A86B, transparent)',
              opacity: visible ? 0.3 : 0,
              transition: 'opacity 0.8s ease 0.4s',
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="flex flex-col lg:items-center lg:text-center relative"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s`,
                }}
              >
                {/* Mobile connector */}
                {i < steps.length - 1 && (
                  <div
                    className="lg:hidden absolute left-5 top-20 bottom-0 w-px"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(199,168,107,0.4), transparent)',
                      height: 'calc(100% - 40px)',
                      top: '40px',
                    }}
                  />
                )}

                {/* Number circle */}
                <div className="flex items-center gap-4 lg:flex-col lg:gap-3 mb-4 lg:mb-3 relative z-10">
                  <div
                    className="w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      background: '#182417',
                      border: '1px solid rgba(199,168,107,0.4)',
                    }}
                  >
                    <span
                      className="text-sm lg:text-base"
                      style={{ fontFamily: "'Playfair Display', serif", color: '#C7A86B', fontWeight: 500 }}
                    >
                      {step.number}
                    </span>
                  </div>
                  <h3
                    className="text-sm lg:hidden font-medium"
                    style={{ fontFamily: "'Playfair Display', serif", color: '#182417' }}
                  >
                    {step.title}
                  </h3>
                </div>

                <h3
                  className="hidden lg:block text-sm mb-2 font-medium"
                  style={{ fontFamily: "'Playfair Display', serif", color: '#182417', fontWeight: 500 }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-xs leading-relaxed pl-14 lg:pl-0"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: '#4a6243' }}
                >
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="text-center mt-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease 0.65s, transform 0.6s ease 0.65s',
          }}
        >
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-xl"
            style={{
              background: '#182417',
              color: '#FAF7F0',
              fontFamily: "'Inter', sans-serif",
              boxShadow: '0 4px 20px rgba(24,36,23,0.2)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = '#263322';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(24,36,23,0.35)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = '#182417';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(24,36,23,0.2)';
            }}
          >
            <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Reservar ahora
          </a>
        </div>
      </div>
    </section>
  );
}
