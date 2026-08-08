import type { StatsContent } from "@/content/types";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";

export function Stats({ content }: { content: StatsContent }) {
  const { headingLine1, headingLine2Highlight, subheading, stats } = content;

  return (
    <section className="bg-surface-muted py-16 md:py-20">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-heading sm:text-4xl">
              {headingLine1}
              <br />
              <span className="text-brand-500">{headingLine2Highlight}</span>
            </h2>
            <p className="mt-4 text-body">{subheading}</p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-4">
                <Icon name={stat.icon} className="h-8 w-8 shrink-0 text-brand-500" strokeWidth={1.5} />
                <div>
                  <p className="text-xl font-bold text-heading sm:text-2xl">{stat.value}</p>
                  <p className="text-sm text-body">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
