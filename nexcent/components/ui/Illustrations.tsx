import type { SVGProps } from "react";

type IllustrationProps = SVGProps<SVGSVGElement>;

function HeroWorkspace(props: IllustrationProps) {
  return (
    <svg viewBox="0 0 640 520" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <ellipse cx="330" cy="470" rx="230" ry="18" className="fill-ink-900/5" />
      <rect x="120" y="70" width="290" height="200" rx="10" className="fill-brand-500" />
      <rect x="132" y="94" width="266" height="152" rx="4" className="fill-white" />
      <rect x="150" y="112" width="90" height="10" rx="2" className="fill-ink-900/15" />
      <rect x="150" y="132" width="130" height="8" rx="2" className="fill-ink-900/10" />
      <circle cx="330" cy="175" r="26" className="fill-brand-100" />
      <path d="M318 175l8 8 16-16" stroke="currentColor" className="text-brand-600" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="150" y="215" width="60" height="16" rx="4" className="fill-brand-500" />
      <rect x="60" y="150" width="46" height="26" rx="4" className="fill-ink-900" />
      <text x="83" y="167" textAnchor="middle" className="fill-white text-[10px] font-bold">CSS</text>
      <rect x="60" y="185" width="46" height="26" rx="4" className="fill-ink-900" />
      <text x="83" y="202" textAnchor="middle" className="fill-white text-[10px] font-bold">HTML</text>
      <rect x="60" y="220" width="46" height="26" rx="4" className="fill-ink-900" />
      <text x="83" y="237" textAnchor="middle" className="fill-white text-[10px] font-bold">C++</text>
      <rect x="60" y="255" width="46" height="26" rx="4" className="fill-brand-500" />
      <text x="83" y="272" textAnchor="middle" className="fill-white text-[11px] font-bold">{"</>"}</text>
      <rect x="330" y="40" width="220" height="170" rx="10" className="fill-ink-800" />
      <rect x="342" y="64" width="196" height="132" rx="4" className="fill-ink-900" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x="356" y={80 + i * 18} width={60 + (i % 3) * 30} height="6" rx="2" className="fill-brand-400/70" />
      ))}
      <rect x="150" y="330" width="200" height="130" rx="8" className="fill-ink-800" />
      <rect x="230" y="290" width="40" height="60" className="fill-ink-800" />
      <rect x="120" y="450" width="150" height="12" rx="6" className="fill-ink-900/10" />
      <circle cx="470" cy="330" r="34" className="fill-brand-50" />
      <rect x="452" y="300" width="36" height="90" rx="18" className="fill-ink-700" />
      <circle cx="470" cy="290" r="18" className="fill-[#f4c9a8]" />
      <rect x="440" y="330" width="20" height="55" rx="8" className="fill-brand-500" />
      <rect x="480" y="330" width="20" height="55" rx="8" className="fill-brand-500" />
      <rect x="500" y="250" width="34" height="34" rx="6" className="fill-ink-900" />
      <path d="M508 267l6-10 6 10" stroke="white" strokeWidth="2" fill="none" />
    </svg>
  );
}

function TeamLogin(props: IllustrationProps) {
  return (
    <svg viewBox="0 0 480 380" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <ellipse cx="230" cy="360" rx="200" ry="14" className="fill-ink-900/5" />
      <rect x="180" y="20" width="150" height="260" rx="14" className="fill-brand-100" />
      <circle cx="255" cy="55" r="16" className="fill-brand-500" />
      <rect x="205" y="90" width="100" height="10" rx="4" className="fill-white" />
      <rect x="205" y="115" width="100" height="10" rx="4" className="fill-white" />
      <rect x="205" y="140" width="70" height="10" rx="4" className="fill-white" />
      <rect x="205" y="220" width="100" height="24" rx="6" className="fill-brand-500" />
      <rect x="40" y="150" width="26" height="70" rx="6" className="fill-ink-700" />
      <circle cx="90" cy="150" r="20" className="fill-[#f4c9a8]" />
      <rect x="60" y="170" width="60" height="90" rx="16" className="fill-brand-500" />
      <rect x="55" y="230" width="12" height="70" rx="6" className="fill-ink-800" />
      <rect x="115" y="230" width="12" height="70" rx="6" className="fill-ink-800" />
      <rect x="60" y="255" width="55" height="18" rx="9" className="fill-ink-900" />
      <circle cx="380" cy="140" r="20" className="fill-[#f4c9a8]" />
      <rect x="352" y="160" width="56" height="95" rx="16" className="fill-ink-700" />
      <rect x="345" y="230" width="12" height="70" rx="6" className="fill-ink-900" />
      <rect x="400" y="230" width="12" height="70" rx="6" className="fill-ink-900" />
    </svg>
  );
}

function SignupLock(props: IllustrationProps) {
  return (
    <svg viewBox="0 0 480 380" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <ellipse cx="230" cy="360" rx="190" ry="14" className="fill-ink-900/5" />
      <rect x="130" y="20" width="150" height="290" rx="20" className="fill-white" stroke="currentColor" strokeWidth="4" style={{ color: "var(--color-ink-700)" }} />
      <circle cx="205" cy="65" r="14" className="fill-ink-700" />
      <rect x="165" y="90" width="80" height="8" rx="4" className="fill-ink-900/10" />
      <rect x="165" y="115" width="80" height="8" rx="4" className="fill-ink-900/10" />
      <rect x="165" y="150" width="80" height="10" className="fill-brand-100" />
      <rect x="165" y="175" width="80" height="10" className="fill-brand-100" />
      <rect x="165" y="210" width="80" height="24" rx="4" className="fill-brand-500" />
      <rect x="250" y="60" width="60" height="80" rx="10" className="fill-brand-500" />
      <path d="M262 60v-14a18 18 0 0136 0v14" stroke="currentColor" className="text-brand-500" strokeWidth="8" fill="none" />
      <circle cx="280" cy="95" r="7" className="fill-white" />
      <rect x="277" y="100" width="6" height="14" className="fill-white" />
      <rect x="330" y="150" width="34" height="90" rx="14" className="fill-brand-400" opacity="0.6" />
      <circle cx="80" cy="200" r="18" className="fill-[#f4c9a8]" />
      <rect x="50" y="220" width="60" height="90" rx="18" className="fill-ink-700" />
      <rect x="45" y="280" width="14" height="70" rx="7" className="fill-ink-900" />
      <rect x="100" y="280" width="14" height="70" rx="7" className="fill-ink-900" />
      <path d="M35 165c14-14 30-4 24 10-8 4-20-2-24-10z" className="fill-brand-500" />
      <text x="47" y="172" className="fill-white text-[16px]">{"\uD83D\uDC4D"}</text>
    </svg>
  );
}

function TeamStanding(props: IllustrationProps) {
  return (
    <svg viewBox="0 0 480 380" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <ellipse cx="240" cy="360" rx="180" ry="14" className="fill-ink-900/5" />
      <circle cx="200" cy="90" r="22" className="fill-[#f4c9a8]" />
      <rect x="165" y="115" width="70" height="110" rx="20" className="fill-brand-500" />
      <rect x="158" y="215" width="18" height="90" rx="9" className="fill-ink-800" />
      <rect x="224" y="215" width="18" height="90" rx="9" className="fill-ink-800" />
      <circle cx="300" cy="100" r="20" className="fill-[#f4c9a8]" />
      <rect x="270" y="122" width="60" height="100" rx="18" className="fill-ink-700" />
      <rect x="264" y="212" width="16" height="85" rx="8" className="fill-ink-900" />
      <rect x="320" y="212" width="16" height="85" rx="8" className="fill-brand-500" />
    </svg>
  );
}

const illustrations: Record<string, (props: IllustrationProps) => React.JSX.Element> = {
  "hero-workspace": HeroWorkspace,
  "team-login": TeamLogin,
  "signup-lock": SignupLock,
  "team-standing": TeamStanding,
};

export function Illustration({ id, className }: { id: string; className?: string }) {
  const Cmp = illustrations[id];
  if (!Cmp) return null;
  return <Cmp className={className} />;
}
