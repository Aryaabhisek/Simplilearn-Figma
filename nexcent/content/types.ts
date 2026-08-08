// content/types.ts (excerpt)
export interface HeroContent {
  titleLine1: string;
  titleLine2Highlight: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  image: { src: string; alt: string; width: number; height: number };
  slideCount: number;
  activeSlideIndex: number;
}