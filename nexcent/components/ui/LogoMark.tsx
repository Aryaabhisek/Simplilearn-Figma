const glyphs: Record<string, React.JSX.Element> = {
  "logo-duolane": (
    <>
      <circle cx="10" cy="14" r="8" className="fill-ink-900" />
      <circle cx="10" cy="14" r="4" className="fill-white" />
      <path d="M18 6 L26 14 L18 22 L18 14 Z" className="fill-violet-600" />
    </>
  ),
  "logo-umbra": <path d="M4 16c4-10 20-10 24 0-6 5-18 5-24 0z" className="fill-ink-900" />,
  "logo-boxcar": (
    <>
      <rect x="3" y="10" width="16" height="10" rx="2" className="fill-ink-900" />
      <path d="M19 13h6l3 4v3h-9z" className="fill-ink-900" />
      <circle cx="9" cy="22" r="2.4" className="fill-white" stroke="currentColor" />
    </>
  ),
  "logo-ipsum": (
    <text x="0" y="20" className="fill-violet-600 font-extrabold text-[15px]">
      LOGO!
    </text>
  ),
  "logo-fingerprint": (
    <>
      {[0, 1, 2, 3].map((i) => (
        <circle key={i} cx="16" cy="16" r={4 + i * 3.4} className="fill-none stroke-ink-900" strokeWidth="1.6" />
      ))}
    </>
  ),
  "logo-loopwave": (
    <path
      d="M4 18c3-8 7-8 10 0s7 8 10 0"
      className="fill-none stroke-ink-900"
      strokeWidth="3.4"
      strokeLinecap="round"
    />
  ),
};

export function LogoMark({ id, name, className = "" }: { id: string; name: string; className?: string }) {
  const glyph = glyphs[id];
  return (
    <svg
      viewBox="0 0 32 32"
      className={`h-8 w-auto text-ink-900 ${className}`}
      role="img"
      aria-label={name}
    >
      {glyph ?? <circle cx="16" cy="16" r="10" className="fill-ink-900/20" />}
    </svg>
  );
}
