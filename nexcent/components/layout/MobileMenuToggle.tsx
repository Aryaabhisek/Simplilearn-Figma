"use client";

import { useState } from "react";
import type { NavLink } from "@/content/types";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";

export function MobileMenuToggle({
  links,
  loginLabel,
  loginHref,
  signupLabel,
  signupHref,
}: {
  links: NavLink[];
  loginLabel: string;
  loginHref: string;
  signupLabel: string;
  signupHref: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="rounded-md p-2 text-ink-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-500"
      >
        <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full z-40 border-t border-black/5 bg-white px-6 py-6 shadow-lg">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-ink-900"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3 border-t border-black/5 pt-6">
            <a href={loginHref} className="text-center text-base font-medium text-brand-500">
              {loginLabel}
            </a>
            <Button href={signupHref}>{signupLabel}</Button>
          </div>
        </div>
      )}
    </div>
  );
}
