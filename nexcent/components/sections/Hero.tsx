import type { HeroContent } from "@/content/types";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Illustration } from "@/components/ui/Illustrations";

export function Hero({ content }: { content: HeroContent }) {
  const { titleLine1, titleLine2Highlight, subtitle, ctaLabel, ctaHref, image, slideCount, activeSlideIndex } =
    content;

  return (
    <section id="home" className="bg-surface-muted pb-14 pt-6 md:pb-20">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-8">
          <div>
            <h1 className="text-4xl font-bold leading-[1.1] text-heading sm:text-5xl lg:text-[56px]">
              {titleLine1}
              <br />
              <span className="text-brand-500">{titleLine2Highlight}</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-7 text-body sm:text-lg">{subtitle}</p>
            <Button href={ctaHref} className="mt-8">
              {ctaLabel}
            </Button>
          </div>

          <div className="order-first md:order-last">
            <Illustration id={image.src} className="mx-auto h-auto w-full max-w-[560px]" />
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-2 md:mt-16">
          {Array.from({ length: slideCount }).map((_, i) => (
            <span
              key={i}
              className={`h-2 rounded-full transition-all ${
                i === activeSlideIndex ? "w-6 bg-brand-500" : "w-2 bg-ink-900/15"
              }`}
              aria-hidden="true"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
