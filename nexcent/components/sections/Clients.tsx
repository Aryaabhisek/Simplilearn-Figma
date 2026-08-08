import type { ClientsContent } from "@/content/types";
import { Container } from "@/components/ui/Container";
import { LogoMark } from "@/components/ui/LogoMark";

export function Clients({ content }: { content: ClientsContent }) {
  const { title, subtitle, logos } = content;

  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-heading sm:text-4xl">{title}</h2>
          <p className="mt-3 text-body">{subtitle}</p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:justify-between">
          {logos.map((logo, i) => (
            <LogoMark key={`${logo.name}-${i}`} id={logo.src} name={logo.name} className="opacity-80" />
          ))}
        </div>
      </Container>
    </section>
  );
}
