interface Props {
  href: string;
  dark?: boolean;
}

/** Self-contained Google Play badge — no external image URLs */
export default function GooglePlayBadge({ href, dark = false }: Props) {
  const bg = dark ? '#ffffff' : '#111827';
  const text = dark ? '#111827' : '#ffffff';

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{ display: 'inline-flex', textDecoration: 'none' }}
    >
      <svg
        width="168"
        height="50"
        viewBox="0 0 168 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ borderRadius: 10, display: 'block' }}
      >
        <rect width="168" height="50" rx="10" fill={bg} />

        {/* Play triangle */}
        <polygon points="14,16 14,34 27,25" fill={text} opacity="0.9" />

        {/* "GET IT ON" small text */}
        <text
          x="38"
          y="19"
          fontFamily="Inter, Arial, sans-serif"
          fontSize="9"
          fontWeight="500"
          fill={text}
          opacity="0.7"
          letterSpacing="1"
        >
          GET IT ON
        </text>

        {/* "Google Play" text */}
        <text
          x="38"
          y="34"
          fontFamily="Inter, Arial, sans-serif"
          fontSize="16"
          fontWeight="700"
          fill={text}
        >
          Google Play
        </text>
      </svg>
    </a>
  );
}
