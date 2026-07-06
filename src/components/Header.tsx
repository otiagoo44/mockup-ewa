import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { WHATSAPP } from "../lib/wa";
import { IconLeaf, IconMenu, IconClose, IconWhatsapp } from "./Icons";

const LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Precios", href: "#precios" },
  { label: "Peinados", href: "#peinados" },
  { label: "Galería", href: "#galeria" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Preguntas", href: "#preguntas" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-forest/85 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)] backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        {/* Logo */}
        <a
          href="#inicio"
          className="group flex items-center gap-2.5 text-cream"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/15 text-gold ring-1 ring-gold/30 transition-colors group-hover:bg-gold/25">
            <IconLeaf className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-lg font-semibold tracking-wide text-cream">
              Ewa
            </span>
            <span className="text-[10px] font-light uppercase tracking-[0.32em] text-gold/80">
              Beauty Experience
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-sm font-light tracking-wide text-cream/85 transition-colors hover:text-cream"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP.general}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-forest shadow-[0_12px_30px_-12px_rgba(199,168,107,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-soft sm:inline-flex"
          >
            <IconWhatsapp className="h-4 w-4" />
            Reservar
          </a>

          <button
            type="button"
            aria-label="Abrir menú"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-cream ring-1 ring-gold/30 transition-colors hover:bg-gold/10 lg:hidden"
          >
            {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-500 lg:hidden",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="mx-4 mb-4 rounded-3xl bg-forest/95 p-4 shadow-card ring-1 ring-gold/15 backdrop-blur-md">
          <ul className="flex flex-col">
            {LINKS.map((l, i) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center justify-between border-b border-gold/10 py-3 text-base text-cream/90 transition-colors last:border-none hover:text-gold",
                    i === 0 && "pt-1"
                  )}
                >
                  {l.label}
                  <span className="text-gold/40">→</span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={WHATSAPP.general}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-gold px-5 py-3.5 text-sm font-medium text-forest"
          >
            <IconWhatsapp className="h-4 w-4" />
            Reservar por WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
