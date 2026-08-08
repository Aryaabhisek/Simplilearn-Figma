import type { AudienceContent } from "@/content/types";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";

export function Audience({ content }: { content: AudienceContent }) {
  const { heading, subheading, cards } = content;

  return (
    <section className="pb-20">
      <Container>
        <div className="text-center">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight text-heading sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 text-body">{subheading}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-black/5 bg-surface-muted p-8 text-center shadow-sm"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-brand-50">
                <Icon name={card.icon} className="h-8 w-8 text-brand-600" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-heading">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-body">{card.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
