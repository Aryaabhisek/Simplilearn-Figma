// components/ui/Illustrations.tsx
const illustrations: Record<string, ...> = {
  "hero-workspace": HeroWorkspace,
  "team-login": TeamLogin,
  "signup-lock": SignupLock,
};

export function Illustration({ id, className }: { id: string; className?: string }) {
  const Cmp = illustrations[id];
  return Cmp ? <Cmp className={className} /> : null;
}