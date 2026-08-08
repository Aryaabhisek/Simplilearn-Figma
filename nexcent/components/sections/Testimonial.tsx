import type { TestimonialContent } from "@/content/types";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { LogoMark } from "@/components/ui/LogoMark";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { Icon } from "@/components/ui/Icon";

export function Testimonial({ content }: { content: TestimonialContent }) {
  const { image, quote, authorName, authorRole, logos, meetAllLabel, meetAllHref } = content;

  return (
    <section id="testimonial" className="py-16 md:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          <PhotoPlaceholder
            id={image.src}
            alt={image.alt}
            className="aspect-square w-full rounded-2xl md:aspect-auto md:h-full"
          />

          <div>
            <p className="text-base leading-7 text-body">{quote}</p>
            <p className="mt-6 text-lg font-bold text-brand-500">{authorName}</p>
            <p className="text-sm text-body">{authorRole}</p>

            <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-black/5 pt-8">
              {logos.map((logo, i) => (
                <LogoMark key={`${logo.name}-${i}`} id={logo.src} name={logo.name} className="opacity-80" />
              ))}
              <Button href={meetAllHref} variant="text" className="ml-auto">
                {meetAllLabel}
                <Icon name="arrowRight" className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
