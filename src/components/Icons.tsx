import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = (props: P) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export const IconLeaf = (p: P) => (
  <svg {...base(p)}>
    <path d="M11 20A7 7 0 0 1 4 13c0-5 4-9 9-9 0 5-4 9-9 9" />
    <path d="M11 20c0-5 4-9 9-9" />
  </svg>
);

export const IconNail = (p: P) => (
  <svg {...base(p)}>
    <rect x="8" y="3" width="8" height="14" rx="4" />
    <path d="M8 9c2 1.5 6 1.5 8 0" />
    <path d="M9 20h6" />
  </svg>
);

export const IconWash = (p: P) => (
  <svg {...base(p)}>
    <path d="M6 12c0 4 2 7 6 7s6-3 6-7-3-8-6-8-6 4-6 8Z" />
    <path d="M9 14c1 1 5 1 6 0" />
  </svg>
);

export const IconBrush = (p: P) => (
  <svg {...base(p)}>
    <path d="M14 4l6 6-7 7-3-3 7-7Z" />
    <path d="M11 14l-5 5-2-2 5-5" />
  </svg>
);

export const IconScissors = (p: P) => (
  <svg {...base(p)}>
    <circle cx="6" cy="6" r="2.4" />
    <circle cx="6" cy="18" r="2.4" />
    <path d="M8 7.5 20 18M8 16.5 20 6" />
  </svg>
);

export const IconWaves = (p: P) => (
  <svg {...base(p)}>
    <path d="M3 8c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
    <path d="M3 14c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
    <path d="M3 20c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
  </svg>
);

export const IconSparkle = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
    <path d="M18 15l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2Z" />
  </svg>
);

export const IconWhatsapp = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12.04 2C6.6 2 2.13 6.46 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.44 0 9.91-4.46 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.84 9.84 0 0 0 12.04 2Zm5.8 14.08c-.24.68-1.4 1.32-1.92 1.36-.5.04-.96.2-3.24-.66-2.7-1-4.43-3.6-4.56-3.77-.13-.17-1.04-1.38-1.04-2.64 0-1.25.66-1.87.9-2.13.23-.26.5-.33.67-.33.17 0 .34 0 .48.01.16.01.37-.06.58.44.24.56.82 1.98.89 2.12.07.14.12.3.02.48-.1.18-.15.29-.3.45-.15.16-.31.36-.45.48-.14.14-.29.29-.13.57.17.29.75 1.24 1.62 2.01 1.11 1 2.05 1.32 2.34 1.47.29.14.46.12.63-.07.17-.2.7-.82.89-1.1.19-.28.38-.24.64-.14.26.1 1.65.78 1.93.92.29.15.48.22.55.34.07.12.07.69-.17 1.37Z" />
  </svg>
);

export const IconPin = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

export const IconClock = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const IconMail = (p: P) => (
  <svg {...base(p)}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="M4 7l8 6 8-6" />
  </svg>
);

export const IconPhone = (p: P) => (
  <svg {...base(p)}>
    <path d="M6 3h3l2 5-2.5 1.5a11 11 0 0 0 5 5L16 12l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2Z" />
  </svg>
);

export const IconArrow = (p: P) => (
  <svg {...base(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconCheck = (p: P) => (
  <svg {...base(p)}>
    <path d="M5 12l5 5L20 6" />
  </svg>
);

export const IconPlus = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const IconQuote = (p: P) => (
  <svg {...base(p)}>
    <path d="M9 7c-3 0-5 2-5 5 0 2 1 3 3 3 0-2 0-3-1-4 2 0 3 1 3 3 0 2-1 4-3 4 3 1 5-1 5-4 0-3-2-7-5-7Zm11 0c-3 0-5 2-5 5 0 2 1 3 3 3 0-2 0-3-1-4 2 0 3 1 3 3 0 2-1 4-3 4 3 1 5-1 5-4 0-3-2-7-5-7Z" />
  </svg>
);

export const IconBraid = (p: P) => (
  <svg {...base(p)}>
    <path d="M8 3c0 3 8 3 8 6s-8 3-8 6 8 3 8 6" />
    <path d="M16 3c0 3-8 3-8 6s8 3 8 6-8 3-8 6" />
  </svg>
);

export const IconUp = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 19V5M6 11l6-6 6 6" />
  </svg>
);

export const IconMenu = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const IconClose = (p: P) => (
  <svg {...base(p)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);
