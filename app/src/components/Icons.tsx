type P = { size?: number; stroke?: number; color?: string };

export const IconDash = (p: P) => (
  <svg width={p.size || 16} height={p.size || 16} viewBox="0 0 18 18" fill="none" stroke={p.color || 'currentColor'} strokeWidth={p.stroke || 1.7}>
    <rect x="3" y="3" width="5" height="5" rx="1.4" />
    <rect x="10" y="3" width="5" height="5" rx="1.4" />
    <rect x="3" y="10" width="5" height="5" rx="1.4" />
    <rect x="10" y="10" width="5" height="5" rx="1.4" />
  </svg>
);

export const IconComptes = (p: P) => (
  <svg width={p.size || 16} height={p.size || 16} viewBox="0 0 18 18" fill="none" stroke={p.color || 'currentColor'} strokeWidth={p.stroke || 1.7}>
    <rect x="2.5" y="4.5" width="13" height="9" rx="2" />
    <line x1="2.5" y1="7.5" x2="15.5" y2="7.5" />
  </svg>
);

export const IconFlux = (p: P) => (
  <svg width={p.size || 16} height={p.size || 16} viewBox="0 0 18 18" fill="none" stroke={p.color || 'currentColor'} strokeWidth={p.stroke || 1.7}>
    <path d="M3 6.5h9l-2.6-2.6M15 11.5H6l2.6 2.6" />
  </svg>
);

export const IconContrats = (p: P) => (
  <svg width={p.size || 16} height={p.size || 16} viewBox="0 0 18 18" fill="none" stroke={p.color || 'currentColor'} strokeWidth={p.stroke || 1.7}>
    <path d="M4.5 2.5h6L14 6v9.5H4.5Z" />
    <path d="M10 2.5V6h3.5M6.5 9.5h5M6.5 12h5" />
  </svg>
);

export const IconLedger = (p: P) => (
  <svg width={p.size || 16} height={p.size || 16} viewBox="0 0 18 18" fill="none" stroke={p.color || 'currentColor'} strokeWidth={p.stroke || 1.7}>
    <path d="M4 3h8.5a1.5 1.5 0 0 1 1.5 1.5V15l-2.2-1.4L9.5 15l-2.3-1.4L5 15V4.5A1.5 1.5 0 0 1 4 3Z" />
    <path d="M6.5 6.5h5M6.5 9h5" />
  </svg>
);

export const IconProjections = (p: P) => (
  <svg width={p.size || 16} height={p.size || 16} viewBox="0 0 18 18" fill="none" stroke={p.color || 'currentColor'} strokeWidth={p.stroke || 1.7}>
    <polyline points="3,12.5 7,8.5 10,10.5 15,4.5" />
    <polyline points="11,4.5 15,4.5 15,8.5" />
  </svg>
);

export const IconPatrimoine = (p: P) => (
  <svg width={p.size || 16} height={p.size || 16} viewBox="0 0 18 18" fill="none" stroke={p.color || 'currentColor'} strokeWidth={p.stroke || 1.7}>
    <path d="M9 2.5 15.5 6 9 9.5 2.5 6Z" />
    <path d="M2.5 9.5 9 13l6.5-3.5M2.5 12.5 9 16l6.5-3.5" />
  </svg>
);

export const IconFiscalite = (p: P) => (
  <svg width={p.size || 16} height={p.size || 16} viewBox="0 0 18 18" fill="none" stroke={p.color || 'currentColor'} strokeWidth={p.stroke || 1.7}>
    <path d="M4.5 2.5h6L14 6v9.5H4.5Z" />
    <path d="M9.5 9 7.5 13M11 9.5l-3.5 4.5" />
  </svg>
);

export const IconBell = (p: P) => (
  <svg width={p.size || 17} height={p.size || 17} viewBox="0 0 18 18" fill="none" stroke={p.color || 'currentColor'} strokeWidth={p.stroke || 1.7}>
    <path d="M5 7a4 4 0 0 1 8 0c0 4 1.5 5 1.5 5h-11S5 11 5 7Z" />
    <path d="M7.5 14.5a1.6 1.6 0 0 0 3 0" />
  </svg>
);

export const IconHelp = (p: P) => (
  <svg width={p.size || 17} height={p.size || 17} viewBox="0 0 18 18" fill="none" stroke={p.color || 'currentColor'} strokeWidth={p.stroke || 1.7}>
    <circle cx="9" cy="9" r="6.5" />
    <path d="M7 7a2 2 0 1 1 2.7 1.9c-.5.2-.7.6-.7 1.1v.4" />
    <circle cx="9" cy="12.6" r=".6" fill="currentColor" stroke="none" />
  </svg>
);

export const IconCheck = (p: P) => (
  <svg width={p.size || 13} height={p.size || 13} viewBox="0 0 14 14" fill="none" stroke={p.color || 'currentColor'} strokeWidth={2}>
    <path d="M2.5 7.5 6 11l5.5-7" />
  </svg>
);

export const IconRefresh = (p: P) => (
  <svg width={p.size || 16} height={p.size || 16} viewBox="0 0 16 16" fill="none" stroke={p.color || 'currentColor'} strokeWidth={p.stroke || 1.8}>
    <path d="M13 8a5 5 0 1 1-1.5-3.5M13 2.5V5h-2.5" />
  </svg>
);

export const IconDownload = (p: P) => (
  <svg width={p.size || 14} height={p.size || 14} viewBox="0 0 16 16" fill="none" stroke={p.color || 'currentColor'} strokeWidth={p.stroke || 1.7}>
    <path d="M8 2v8M5 7l3 3 3-3M3 13h10" />
  </svg>
);

export const IconPlus = (p: P) => (
  <svg width={p.size || 14} height={p.size || 14} viewBox="0 0 16 16" fill="none" stroke={p.color || 'currentColor'} strokeWidth={p.stroke || 1.7}>
    <path d="M8 3v10M3 8h10" />
  </svg>
);

export const IconShield = (p: P) => (
  <svg width={p.size || 14} height={p.size || 14} viewBox="0 0 16 16" fill="none" stroke={p.color || 'currentColor'} strokeWidth={p.stroke || 1.7}>
    <path d="M8 1.5 13 4v4c0 3-2.2 5.2-5 6.5C5.2 13.2 3 11 3 8V4Z" />
    <path d="M6 8l1.5 1.5L10.5 6.5" />
  </svg>
);

export const IconGlobe = (p: P) => (
  <svg width={p.size || 13} height={p.size || 13} viewBox="0 0 13 13" fill="none" stroke={p.color || 'currentColor'} strokeWidth={p.stroke || 1.5}>
    <circle cx="6.5" cy="6.5" r="5.5" />
    <path d="M1 6.5h11M6.5 1c1.5 1.6 2.3 3.5 2.3 5.5S8 10.4 6.5 12C5 10.4 4.2 8.5 4.2 6.5S5 2.6 6.5 1Z" />
  </svg>
);

export const IconChevronDown = (p: P) => (
  <svg width={p.size || 13} height={p.size || 13} viewBox="0 0 13 13" fill="none" stroke={p.color || '#93a29a'} strokeWidth={p.stroke || 1.6}>
    <path d="M3.5 5l3 3 3-3" />
  </svg>
);

export const IconLogout = (p: P) => (
  <svg width={p.size || 16} height={p.size || 16} viewBox="0 0 16 16" fill="none" stroke={p.color || 'currentColor'} strokeWidth={p.stroke || 1.6}>
    <path d="M6 14H3.5A1.5 1.5 0 0 1 2 12.5v-9A1.5 1.5 0 0 1 3.5 2H6" />
    <path d="M10.5 11 14 7.5 10.5 4M14 7.5H6" />
  </svg>
);

export const IconSearch = (p: P) => (
  <svg width={p.size || 15} height={p.size || 15} viewBox="0 0 15 15" fill="none" stroke={p.color || 'currentColor'} strokeWidth={p.stroke || 1.7}>
    <circle cx="6.4" cy="6.4" r="4.4" />
    <line x1="9.7" y1="9.7" x2="13" y2="13" />
  </svg>
);

export const IconUser = () => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.6}>
    <path d="M8 8a2.6 2.6 0 1 0 0-5.2A2.6 2.6 0 0 0 8 8ZM3 14c0-2.5 2.2-4 5-4s5 1.5 5 4" />
  </svg>
);

export const IconSettings = () => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.6}>
    <circle cx="8" cy="8" r="2" />
    <path d="M13 8l1-1.2-.8-1.9-1.5.3-1-1L10.5 2h-2l-.3 1.5-1 .4-1.5-.5L4 4.9 5 6 5 7.4 3.5 8.2l.7 1.9 1.5-.3 1 1L8 14h2l.3-1.5" />
  </svg>
);

export const IconSecurity = () => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.6}>
    <path d="M8 1.5 13 4v4c0 3-2.2 5.2-5 6.5C5.2 13.2 3 11 3 8V4Z" />
  </svg>
);

export const IconPrefs = () => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.6}>
    <path d="M2 8h12M8 2c1.6 1.7 2.4 3.7 2.4 6S9.6 12.3 8 14C6.4 12.3 5.6 10.3 5.6 8S6.4 3.7 8 2Z" />
  </svg>
);

export const IconHelpCircle = () => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.6}>
    <circle cx="8" cy="8" r="6.5" />
    <path d="M6 6.2a2 2 0 1 1 2.7 1.9c-.5.2-.7.6-.7 1.1v.4" />
  </svg>
);
