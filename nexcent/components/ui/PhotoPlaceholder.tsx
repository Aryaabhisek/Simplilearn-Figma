const tones: Record<string, string> = {
  "blog-reading": "from-amber-100 to-emerald-100",
  "blog-desk": "from-slate-100 to-emerald-100",
  "blog-typing": "from-emerald-50 to-slate-200",
  "testimonial-brand": "from-ink-900 to-ink-700",
};

export function PhotoPlaceholder({
  id,
  alt,
  className = "",
}: {
  id: string;
  alt: string;
  className?: string;
}) {
  const tone = tones[id] ?? "from-surface-alt to-surface-muted";
  return (
    <div
      role="img"
      aria-label={alt}
      className={`bg-gradient-to-br ${tone} ${className}`}
    />
  );
}
