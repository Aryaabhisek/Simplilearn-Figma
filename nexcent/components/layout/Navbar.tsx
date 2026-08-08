import Link from "next/link";
import type { NavbarContent } from "@/content/types";
import { Button } from "@/components/ui/Button";
import { MobileMenuToggle } from "@/components/layout/MobileMenuToggle";

export function Navbar({ content }: { content: NavbarContent }) {
  const { brand, links, loginLabel, loginHref, signupLabel, signupHref } = content;

  return (
    <header className="relative z-50 bg-surface-muted">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-6 py-5 md:px-10">
        <Link href={brand.href} className="flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
            <polygon points="14,1 27,8 14,15 1,8" className="fill-brand-700" />
            <polygon points="14,15 27,8 27,22 14,29" className="fill-brand-400" />
            <polygon points="1,8 14,15 14,29 1,22" className="fill-brand-500" />
          </svg>
          <span className="text-xl font-bold text-ink-900">{brand.name}</span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[15px] transition-colors hover:text-brand-600 ${
                i === 0 ? "font-semibold text-ink-900" : "text-ink-700"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <a href={loginHref} className="text-[15px] font-medium text-brand-500 hover:text-brand-600">
            {loginLabel}
          </a>
          <Button href={signupHref} className="!py-2.5 !px-6 text-[15px]">
            {signupLabel}
          </Button>
        </div>

        <MobileMenuToggle
          links={links}
          loginLabel={loginLabel}
          loginHref={loginHref}
          signupLabel={signupLabel}
          signupHref={signupHref}
        />
      </div>
    </header>
  );
}
