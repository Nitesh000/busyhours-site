interface Props {
  size?: number;
  light?: boolean; // force light colour (for dark backgrounds)
}

/** SVG app logo — a shield containing a clock and a muted bell dot */
export default function Logo({ size = 36, light = false }: Props) {
  const fg = light ? '#ffffff' : '#1A56DB';
  const bg = light ? 'rgba(255,255,255,0.15)' : '#DBE4FF';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background pill */}
      <rect width="40" height="40" rx="12" fill={bg} />

      {/* Clock circle */}
      <circle cx="20" cy="19" r="9" stroke={fg} strokeWidth="2" fill="none" />
      {/* Clock hands */}
      <line x1="20" y1="19" x2="20" y2="14" stroke={fg} strokeWidth="2" strokeLinecap="round" />
      <line x1="20" y1="19" x2="24" y2="21" stroke={fg} strokeWidth="2" strokeLinecap="round" />
      {/* Muted dot — top-right corner */}
      <circle cx="30" cy="10" r="5" fill={light ? '#ffffff' : '#1A56DB'} />
      <line x1="27.5" y1="7.5" x2="32.5" y2="12.5" stroke={bg === '#DBE4FF' ? '#DBE4FF' : 'rgba(26,86,219,0.8)'} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
