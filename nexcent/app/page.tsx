import { getSiteContent } from "@/lib/getContent";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Clients } from "@/components/sections/Clients";
import { Audience } from "@/components/sections/Audience";
import { SplitFeature } from "@/components/sections/SplitFeature";
import { Stats } from "@/components/sections/Stats";
import { Testimonial } from "@/components/sections/Testimonial";
import { Blog } from "@/components/sections/Blog";
import { CtaBand } from "@/components/sections/CtaBand";

// Server component — content is read at request/build time and
// passed down as props. No section ever imports the JSON itself.
export default function HomePage() {
  const content = getSiteContent();

  return (
    <>
      <Navbar content={content.navbar} />
      <main className="flex-1">
        <Hero content={content.hero} />
        <Clients content={content.clients} />
        <Audience content={content.audience} />
        <SplitFeature content={content.featureSplits[0]} />
        <Stats content={content.stats} />
        <SplitFeature content={content.featureSplits[1]} />
        <Testimonial content={content.testimonial} />
        <Blog content={content.blog} />
        <CtaBand content={content.ctaBand} />
      </main>
      <Footer content={content.footer} />
    </>
  );
}
