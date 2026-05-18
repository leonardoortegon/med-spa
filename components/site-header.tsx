"use client";

import Link from "next/link";
import {
  ServicesMegaDropdown,
  ServicesMegaMenuProvider,
  ServicesMegaTrigger,
} from "@/components/services-mega-menu";

const navLinkClass =
  "whitespace-nowrap text-sm font-medium tracking-wide text-zinc-700 transition-colors hover:text-black";

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/before-after", label: "Before & After" },
  { href: "/memberships", label: "Memberships" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <ServicesMegaMenuProvider>
      <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white">
        <div className="flex h-16 items-center gap-4 px-6 md:gap-8 md:px-12 lg:pl-24 lg:pr-16">
          <div className="flex min-w-0 flex-1 justify-start">
            <Link
              href="/"
              className="font-display text-lg font-semibold tracking-wide text-black md:text-xl"
            >
              Med Spa
            </Link>
          </div>

          <nav
            className="hidden shrink-0 items-center gap-6 lg:flex lg:gap-8 xl:gap-10"
            aria-label="Primary"
          >
            {primaryLinks.slice(0, 2).map((link) => (
              <Link key={link.href} href={link.href} className={navLinkClass}>
                {link.label}
              </Link>
            ))}
            <ServicesMegaTrigger />
            {primaryLinks.slice(2).map((link) => (
              <Link key={link.href} href={link.href} className={navLinkClass}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex min-w-0 flex-1 items-center justify-end gap-3 md:gap-4">
            <button
              type="button"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[5px] text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-black"
              aria-label="Search"
            >
              <SearchIcon />
            </button>
            <Link
              href="/contact"
              className="rounded-[5px] bg-black/85 px-4 py-2 text-sm font-medium tracking-wide whitespace-nowrap text-white transition-colors hover:bg-black"
            >
              Book Now
            </Link>
          </div>
        </div>

        <ServicesMegaDropdown />

        <div className="border-t border-zinc-100 px-6 py-2.5 lg:hidden">
          <nav className="-mx-1 flex gap-6 overflow-x-auto px-1" aria-label="Primary mobile">
            {primaryLinks.slice(0, 2).map((link) => (
              <Link key={link.href} href={link.href} className={`shrink-0 ${navLinkClass}`}>
                {link.label}
              </Link>
            ))}
            <Link href="/services" className={`shrink-0 ${navLinkClass}`}>
              Services
            </Link>
            {primaryLinks.slice(2).map((link) => (
              <Link key={link.href} href={link.href} className={`shrink-0 ${navLinkClass}`}>
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className={`shrink-0 ${navLinkClass}`}>
              Book Now
            </Link>
          </nav>
        </div>
      </header>
    </ServicesMegaMenuProvider>
  );
}
