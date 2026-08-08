import type { SplitFeatureContent } from "@/content/types";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Illustration } from "@/components/ui/Illustrations";

export function SplitFeature({ content }: { content: SplitFeatureContent }) {
  const { image, title, paragraph, ctaLabel, ctaHref, imagePosition, background } = content;
  const bgClass = background === "muted" ? "bg-surface-muted" : "bg-surface";

  return (
    <section className={`${bgClass} py-16 md:py-20`}>
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className={imagePosition === "right" ? "md:order-last" : ""}>
            <Illustration id={image.src} className="mx-auto h-auto w-full max-w-[420px]" />
          </div>
          <div>
            <h2 className="text-3xl font-bold leading-tight text-heading sm:text-4xl">{title}</h2>
            <p className="mt-5 text-base leading-7 text-body">{paragraph}</p>
            <Button href={ctaHref} className="mt-8">
              {ctaLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
