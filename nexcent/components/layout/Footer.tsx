import Link from "next/link";
import type { FooterContent } from "@/content/types";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";

export function Footer({ content }: { content: FooterContent }) {
  const { brand, copyright, tagline, social, linkGroups, newsletter } = content;

  return (
    <footer className="bg-ink-900 pt-16 pb-10 text-slate-300">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_1fr_1fr_1.3fr]">
          <div>
            <Link href={brand.href} className="flex items-center gap-2">
              <svg width="26" height="26" viewBox="0 0 28 28" aria-hidden="true">
                <polygon points="14,1 27,8 14,15 1,8" className="fill-brand-700" />
                <polygon points="14,15 27,8 27,22 14,29" className="fill-brand-400" />
                <polygon points="1,8 14,15 14,29 1,22" className="fill-brand-500" />
              </svg>
              <span className="text-lg font-bold text-white">{brand.name}</span>
            </Link>
            <p className="mt-6 text-sm leading-6 text-slate-400">{copyright}</p>
            <p className="text-sm leading-6 text-slate-400">{tagline}</p>
            <div className="mt-6 flex gap-3">
              {social.map((s) => (
                <a
                  key={s.platform}
                  href={s.href}
                  aria-label={s.platform}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-500"
                >
                  <Icon name={s.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {linkGroups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h3 className="text-base font-semibold text-white">{group.title}</h3>
              <ul className="mt-5 flex flex-col gap-3.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-slate-400 transition-colors hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 className="text-base font-semibold text-white">{newsletter.title}</h3>
            <form className="mt-5 flex items-center rounded-md bg-white/10 pr-1.5">
              <label htmlFor="newsletter-email" className="sr-only">
                {newsletter.placeholder}
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder={newsletter.placeholder}
                className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none"
              />
              <button
                type="submit"
                aria-label={newsletter.submitLabel}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-brand-500 text-white transition-colors hover:bg-brand-600"
              >
                <Icon name="send" className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </Container>
    </footer>
  );
}
