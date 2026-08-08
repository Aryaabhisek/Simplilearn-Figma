// components/ui/Icon.tsx
const registry: Record<string, ComponentType<LucideProps>> = {
  users: Users, building: Building2, handshake: Handshake, ...
};
export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = registry[name];
  return Cmp ? <Cmp className={className} /> : null;
}