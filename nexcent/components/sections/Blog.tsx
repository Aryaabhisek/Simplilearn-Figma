import type { BlogContent } from "@/content/types";
import { Container } from "@/components/ui/Container";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { Icon } from "@/components/ui/Icon";

export function Blog({ content }: { content: BlogContent }) {
  const { heading, subheading, posts } = content;

  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-heading sm:text-4xl">{heading}</h2>
          <p className="mt-4 text-body">{subheading}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="group">
              <PhotoPlaceholder
                id={post.image.src}
                alt={post.image.alt}
                className="aspect-[4/3] w-full rounded-xl"
              />
              <div className="relative z-10 -mt-10 mx-4 rounded-xl bg-white p-6 shadow-lg">
                <h3 className="text-lg font-bold leading-snug text-heading">{post.title}</h3>
                <a
                  href={post.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-500 transition-colors group-hover:text-brand-600"
                >
                  {post.readMoreLabel}
                  <Icon name="arrowRight" className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
