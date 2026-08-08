import type { CtaBandContent } from "@/content/types";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function CtaBand({ content }: { content: CtaBandContent }) {
  const { heading, ctaLabel, ctaHref } = content;

  return (
    <section className="bg-surface-muted py-20 text-center">
      <Container>
        <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight text-heading sm:text-4xl">
          {heading}
        </h2>
        <Button href={ctaHref} className="mx-auto mt-8">
          {ctaLabel}
          <Icon name="arrowRight" className="h-4 w-4" />
        </Button>
      </Container>
    </section>
  );
}
