import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const faqs = [
  {
    q: '¿Dónde queda Ewa Beauty Experience?',
    a: 'Está ubicado en M94P+G99, Av. Cacique Lambaré, Lambaré, Paraguay.',
  },
  {
    q: '¿Cuál es el horario de atención?',
    a: 'El horario visible es de 09:00 a 20:00.',
  },
  {
    q: '¿Cómo puedo reservar un turno?',
    a: 'Podés reservar o consultar directamente por WhatsApp al +595 984 411521.',
  },
  {
    q: '¿Hacen peinados para novias?',
    a: 'Sí, el catálogo incluye peinado de novia con asesoría y prueba.',
  },
  {
    q: '¿Hacen peinados para quinceañeras?',
    a: 'Sí, el catálogo incluye peinado de quinceañera con asesoría y prueba.',
  },
  {
    q: '¿El brushing depende del largo del cabello?',
    a: 'Sí, el catálogo diferencia brushing corto, medio, largo y extra largo.',
  },
  {
    q: '¿Puedo hacerme solo ondas o solo planchita?',
    a: 'Sí, según la observación del catálogo, si se realiza solamente planchita u ondas, se resta el valor del secado, equivalente a 30.000 Gs.',
  },
  {
    q: '¿Tienen servicio de uñas?',
    a: 'Sí, Ewa figura como salón de uñas, belleza, cosmética y cuidado personal.',
  },
  {
    q: '¿Los precios son finales?',
    a: 'Los precios deben confirmarse por WhatsApp, especialmente según largo de cabello, servicio y disponibilidad.',
  },
  {
    q: '¿Puedo consultar por email?',
    a: 'Sí, el email visible es jacintanailsbar@gmail.com.',
  },
];

function FAQItem({ question, answer, isOpen, onToggle }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="rounded-xl overflow-hidden transition-all duration-300"
      style={{
        background: isOpen ? '#1e2e1c' : '#182417',
        border: `1px solid ${isOpen ? 'rgba(199,168,107,0.3)' : 'rgba(255,255,255,0.06)'}`,
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <span
          className="text-sm font-medium pr-4"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: isOpen ? '#FAF7F0' : '#b5c4a0',
            fontWeight: isOpen ? 500 : 400,
          }}
        >
          {question}
        </span>
        <span
          className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            background: isOpen ? 'rgba(199,168,107,0.2)' : 'rgba(255,255,255,0.05)',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          <svg
            className="w-3 h-3"
            fill="none"
            stroke={isOpen ? '#C7A86B' : '#6F7F5A'}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>

      <div
        style={{
          maxHeight: isOpen ? '300px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div
          className="px-5 pb-4 text-sm leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: '#8fa07a' }}
        >
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, visible } = useScrollReveal(0.06);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      className="py-20 lg:py-28"
      style={{ background: 'linear-gradient(180deg, #0f1a0d 0%, #182417 100%)' }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Preguntas frecuentes
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: '#FAF7F0' }}
          >
            ¿Tenés alguna duda?
          </h2>
          <p
            className="text-sm"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: '#6F7F5A' }}
          >
            Si tu pregunta no está acá, escribinos por WhatsApp.
          </p>
          <div className="gold-divider mt-6 max-w-xs mx-auto" />
        </div>

        {/* FAQ list */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(16px)',
                transition: `opacity 0.5s ease ${i * 0.06}s, transform 0.5s ease ${i * 0.06}s`,
              }}
            >
              <FAQItem
                question={faq.q}
                answer={faq.a}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
