import { useScrollReveal } from '../hooks/useScrollReveal';

interface ServiceCardProps {
  emoji: string;
  title: string;
  description: string;
  includes: string[];
  waUrl: string;
  buttonText: string;
  delay: number;
  visible: boolean;
}

function ServiceCard({ emoji, title, description, includes, waUrl, buttonText, delay, visible }: ServiceCardProps) {
  return (
    <div
      className="service-card rounded-2xl overflow-hidden flex flex-col group"
      style={{
        background: '#1e2e1c',
        border: '1px solid rgba(199,168,107,0.15)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      {/* Image placeholder */}
      <div
        className="img-placeholder relative overflow-hidden"
        style={{ aspectRatio: '16/9' }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 z-10">
          <span className="text-4xl">{emoji}</span>
          <p
            className="text-xs tracking-[0.15em] uppercase text-center px-4"
            style={{ color: 'rgba(181,196,160,0.7)' }}
          >
            {title}
          </p>
        </div>
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: 'rgba(199,168,107,0.05)' }}
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3
          className="text-xl mb-2"
          style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: '#FAF7F0' }}
        >
          {title}
        </h3>
        <p
          className="text-sm leading-relaxed mb-4 flex-1"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: '#8fa07a' }}
        >
          {description}
        </p>

        {/* Includes list */}
        <ul className="mb-5 space-y-1">
          {includes.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-xs"
              style={{ color: '#b5c4a0', fontFamily: "'Inter', sans-serif" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: '#C7A86B' }}
              />
              {item}
            </li>
          ))}
        </ul>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-full text-xs font-medium tracking-wide transition-all duration-300 mt-auto"
          style={{
            fontFamily: "'Inter', sans-serif",
            border: '1px solid rgba(199,168,107,0.4)',
            color: '#C7A86B',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.background = '#C7A86B';
            (e.currentTarget as HTMLElement).style.color = '#182417';
            (e.currentTarget as HTMLElement).style.borderColor = '#C7A86B';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.background = 'transparent';
            (e.currentTarget as HTMLElement).style.color = '#C7A86B';
            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(199,168,107,0.4)';
          }}
        >
          <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          {buttonText}
        </a>
      </div>
    </div>
  );
}

const services = [
  {
    emoji: '💧',
    title: 'Lavado capilar',
    description: 'Lavado normal, neutro o hidratante para preparar el cabello antes de un brushing, corte o peinado.',
    includes: ['Lavado normal / neutro', 'Lavado hidratante'],
    waUrl: 'https://wa.me/595984411521?text=Hola%20buenas%2C%20quiero%20consultar%20por%20un%20turno%20en%20Ewa%20Beauty%20Experience',
    buttonText: 'Consultar lavado',
  },
  {
    emoji: '💨',
    title: 'Brushing y secados',
    description: 'Secados rápidos, brushing por largo y difusor para lograr una terminación prolija y con movimiento.',
    includes: ['Secado rápido', 'Difusor', 'Brushing corto', 'Brushing medio', 'Brushing largo', 'Brushing extra largo'],
    waUrl: 'https://wa.me/595984411521?text=Hola%20buenas%2C%20quiero%20consultar%20por%20brushing%20o%20secado%20en%20Ewa%20Beauty%20Experience',
    buttonText: 'Consultar brushing',
  },
  {
    emoji: '✂️',
    title: 'Corte y flequillo',
    description: 'Corte general con asesoría para adaptar la forma del cabello a tu estilo y necesidades.',
    includes: ['Corte general', 'Flequillo'],
    waUrl: 'https://wa.me/595984411521?text=Hola%20buenas%2C%20quiero%20consultar%20por%20corte%20en%20Ewa%20Beauty%20Experience',
    buttonText: 'Consultar corte',
  },
  {
    emoji: '🌊',
    title: 'Ondas y planchita',
    description: 'Terminaciones con ondas o planchita, ideales para salir lista con un look más producido.',
    includes: ['Corto', 'Medio', 'Largo', 'Extra largo'],
    waUrl: 'https://wa.me/595984411521?text=Hola%20buenas%2C%20quiero%20consultar%20por%20un%20turno%20en%20Ewa%20Beauty%20Experience',
    buttonText: 'Consultar ondas',
  },
  {
    emoji: '👰',
    title: 'Peinados especiales',
    description: 'Peinados glam para eventos, sesiones, fiestas, quinceañeras o novias.',
    includes: ['Recogido completo', 'Semirecogido', 'Quinceañera', 'Novia', 'Trenzas'],
    waUrl: 'https://wa.me/595984411521?text=Hola%20buenas%2C%20quiero%20consultar%20por%20peinados%20especiales%20en%20Ewa%20Beauty%20Experience',
    buttonText: 'Consultar peinado',
  },
  {
    emoji: '💅',
    title: 'Uñas y manicura',
    description: 'Cuidado de manos y uñas con terminaciones delicadas, prolijas y femeninas.',
    includes: ['Uñas naturales', 'Manicura', 'Diseños delicados', 'Cuidado personal'],
    waUrl: 'https://wa.me/595984411521?text=Hola%20buenas%2C%20quiero%20consultar%20por%20u%C3%B1as%20en%20Ewa%20Beauty%20Experience',
    buttonText: 'Consultar uñas',
  },
];

export default function Services() {
  const { ref, visible } = useScrollReveal(0.08);

  return (
    <section id="servicios" className="py-20 lg:py-28" style={{ background: '#FAF7F0' }}>
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
            Servicios esenciales
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: '#182417' }}
          >
            Todo para planificar tu momento de belleza
          </h2>
          <p
            className="text-base leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: '#4a6243' }}
          >
            Desde el cuidado capilar hasta uñas y peinados para eventos, Ewa reúne servicios pensados para que salgas lista y segura.
          </p>
          <div className="gold-divider mt-8 max-w-xs mx-auto" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard
              key={s.title}
              {...s}
              delay={i * 0.1}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
