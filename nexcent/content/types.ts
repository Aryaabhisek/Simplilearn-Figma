// Central content contract for the whole page.
// Every section component receives one of these shapes as props —
// no component ever hardcodes copy, links, or asset paths.

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteBrand {
  name: string;
  logo: string; // path under /public
  href: string;
}

export interface NavbarContent {
  brand: SiteBrand;
  links: NavLink[];
  loginLabel: string;
  loginHref: string;
  signupLabel: string;
  signupHref: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface HeroContent {
  eyebrowless?: boolean;
  titleLine1: string;
  titleLine2Highlight: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  image: ImageAsset;
  slideCount: number;
  activeSlideIndex: number;
}

export interface LogoItem {
  name: string;
  src: string;
  width: number;
  height: number;
}

export interface ClientsContent {
  title: string;
  subtitle: string;
  logos: LogoItem[];
}

export interface AudienceCard {
  icon: string;
  title: string;
  description: string;
}

export interface AudienceContent {
  heading: string;
  subheading: string;
  cards: AudienceCard[];
}

export interface SplitFeatureContent {
  id: string;
  image: ImageAsset;
  title: string;
  paragraph: string;
  ctaLabel: string;
  ctaHref: string;
  imagePosition: "left" | "right";
  background: "white" | "muted";
}

export interface StatItem {
  icon: string;
  value: string;
  label: string;
}

export interface StatsContent {
  headingLine1: string;
  headingLine2Highlight: string;
  subheading: string;
  stats: StatItem[];
}

export interface TestimonialContent {
  image: ImageAsset;
  quote: string;
  authorName: string;
  authorRole: string;
  logos: LogoItem[];
  meetAllLabel: string;
  meetAllHref: string;
}

export interface BlogCard {
  image: ImageAsset;
  title: string;
  readMoreLabel: string;
  href: string;
}

export interface BlogContent {
  heading: string;
  subheading: string;
  posts: BlogCard[];
}

export interface CtaBandContent {
  heading: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface FooterLinkGroup {
  title: string;
  links: NavLink[];
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}

export interface NewsletterContent {
  title: string;
  placeholder: string;
  submitLabel: string;
}

export interface FooterContent {
  brand: SiteBrand;
  copyright: string;
  tagline: string;
  social: SocialLink[];
  linkGroups: FooterLinkGroup[];
  newsletter: NewsletterContent;
}

export interface SiteContent {
  navbar: NavbarContent;
  hero: HeroContent;
  clients: ClientsContent;
  audience: AudienceContent;
  featureSplits: SplitFeatureContent[];
  stats: StatsContent;
  testimonial: TestimonialContent;
  blog: BlogContent;
  ctaBand: CtaBandContent;
  footer: FooterContent;
}
