import { useScrollReveal } from '../hooks/useScrollReveal';

const galleryItems = [
  { label: 'Foto real del salón', emoji: '🏡', wide: true },
  { label: 'Foto real de uñas nude', emoji: '🤍' },
  { label: 'Foto real de uñas con diseño azul', emoji: '💙' },
  { label: 'Foto real de brushing', emoji: '💨', wide: false },
  { label: 'Foto real de ondas', emoji: '🌊' },
  { label: 'Foto real de peinado glam', emoji: '👑', wide: true },
  { label: 'Foto real de clienta en Ewa', emoji: '✨' },
  { label: 'Foto real de lavado capilar', emoji: '💧' },
  { label: 'Foto real de corte', emoji: '✂️' },
  { label: 'Foto real del catálogo', emoji: '📋' },
];

export default function GallerySection() {
  const { ref, visible } = useScrollReveal(0.06);

  return (
    <section
      id="galeria"
      className="py-20 lg:py-28"
      style={{ background: '#FAF7F0' }}
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
            Galería
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: '#182417' }}
          >
            Una muestra de la experiencia Ewa
          </h2>
          <p
            className="text-base leading-relaxed max-w-xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: '#4a6243' }}
          >
            Espacios, uñas, cabello y peinados pensados para que puedas imaginar tu próximo servicio.
          </p>
          <div className="gold-divider mt-8 max-w-xs mx-auto" />
        </div>

        {/* Grid - desktop masonry-style, mobile 2 col */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {galleryItems.map((item, i) => {
            const isWide = item.wide && i < 2;
            const isTall = i === 5;
            return (
              <div
                key={item.label}
                className={`img-zoom-wrap rounded-2xl overflow-hidden group relative cursor-default ${
                  isWide ? 'lg:col-span-2' : ''
                } ${isTall ? 'lg:row-span-2' : ''}`}
                style={{
                  aspectRatio: isTall ? '1/2' : isWide ? '16/9' : '1/1',
                  border: '1px solid rgba(38,51,34,0.12)',
                  boxShadow: '0 4px 20px rgba(24,36,23,0.08)',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'scale(1)' : 'scale(0.97)',
                  transition: `opacity 0.6s ease ${i * 0.07}s, transform 0.6s ease ${i * 0.07}s`,
                }}
              >
                <div className="img-placeholder w-full h-full absolute inset-0">
                  <div className="flex flex-col items-center justify-center gap-2 w-full h-full px-4">
                    <span className="text-4xl">{item.emoji}</span>
                    <p
                      className="text-[0.6rem] tracking-[0.15em] uppercase text-center leading-relaxed"
                      style={{ color: 'rgba(181,196,160,0.65)' }}
                    >
                      {item.label}
                    </p>
                  </div>
                </div>
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-400 z-10 flex items-end p-4"
                  style={{ background: 'linear-gradient(to top, rgba(24,36,23,0.85) 0%, rgba(24,36,23,0.2) 60%, transparent 100%)' }}
                >
                  <p
                    className="text-xs font-medium"
                    style={{ color: '#E8DDCB', fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <p
          className="text-center text-xs mt-8 tracking-wide"
          style={{ fontFamily: "'Inter', sans-serif", color: '#6F7F5A', fontStyle: 'italic' }}
        >
          Los espacios marcados corresponden a fotografías reales que el negocio puede subir directamente.
        </p>
      </div>
    </section>
  );
}
