import {
  Users,
  Building2,
  Handshake,
  MousePointerClick,
  CreditCard,
  ArrowRight,
  Send,
  Menu,
  X,
  type LucideProps,
} from "lucide-react";

// lucide-react no longer ships trademarked brand marks (Instagram, Twitter,
// Dribbble, YouTube), so social glyphs are hand-drawn, minimal outline icons
// kept in the same registry/contract as the lucide icons below.
function Instagram(props: LucideProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={props.strokeWidth ?? 1.75} className={props.className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
function Twitter(props: LucideProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={props.strokeWidth ?? 1.75} className={props.className}>
      <path d="M20 6.5c-.6.3-1.3.5-2 .6a3.3 3.3 0 0 0 1.5-1.9 6.6 6.6 0 0 1-2.2.9 3.4 3.4 0 0 0-5.9 3.1A9.7 9.7 0 0 1 4.3 5.6a3.4 3.4 0 0 0 1.1 4.6 3.4 3.4 0 0 1-1.6-.4v.1a3.4 3.4 0 0 0 2.8 3.4 3.4 3.4 0 0 1-1.5.1 3.4 3.4 0 0 0 3.2 2.4A6.9 6.9 0 0 1 3 17.3a9.7 9.7 0 0 0 5.3 1.6c6.3 0 9.8-5.4 9.8-10.1v-.5A7 7 0 0 0 20 6.5z" />
    </svg>
  );
}
function Dribbble(props: LucideProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={props.strokeWidth ?? 1.75} className={props.className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M4 9.5c4 1.2 8.5 1.2 15.3-.3M3.5 15c5-1.6 10.6-1.2 14.5 3.3M9 3.2c3 4.3 4.8 9.6 4.8 15.8" />
    </svg>
  );
}
function Youtube(props: LucideProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={props.strokeWidth ?? 1.75} className={props.className}>
      <rect x="2.5" y="6" width="19" height="12" rx="4" />
      <path d="M10.5 9.5l5 2.5-5 2.5z" fill="currentColor" stroke="none" />
    </svg>
  );
}

const registry: Record<string, React.ComponentType<LucideProps>> = {
  users: Users,
  "users-group": Users,
  building: Building2,
  handshake: Handshake,
  tap: MousePointerClick,
  card: CreditCard,
  instagram: Instagram,
  twitter: Twitter,
  youtube: Youtube,
  dribbble: Dribbble,
  arrowRight: ArrowRight,
  send: Send,
  menu: Menu,
  close: X,
};

export function Icon({
  name,
  className,
  strokeWidth = 1.75,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = registry[name];
  if (!Cmp) return null;
  return <Cmp className={className} strokeWidth={strokeWidth} />;
}
