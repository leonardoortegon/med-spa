"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatedMenuButton } from "@/components/animated-menu-button";
import { BookConsultationButton } from "@/components/booking/book-consultation-button";
import { MobileNav } from "@/components/mobile-nav";
import {
  ServicesMegaDropdown,
  ServicesMegaMenuProvider,
  ServicesMegaTrigger,
} from "@/components/services-mega-menu";
import { SiteSearchTrigger } from "@/components/site-search-modal";
import { businessLocation } from "@/lib/business-location";

const navLinkClass =
  "whitespace-nowrap text-sm font-medium tracking-wide text-zinc-700 transition-colors hover:text-black";

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/packages", label: "Packages" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <ServicesMegaMenuProvider>
      <header className="sticky top-0 z-[60] border-b border-zinc-200/80 bg-white">
        <div className="relative z-[61] mx-auto flex h-16 w-full max-w-7xl items-center gap-3 bg-white px-6 md:gap-4 lg:grid lg:grid-cols-3 lg:items-center lg:gap-0 lg:px-12">
          <div className="flex min-w-0 flex-1 justify-start lg:flex-none lg:justify-self-start">
            <Link
              href="/"
              className="block shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <Image
                src="/ml.jpg"
                alt="Plantation Med Spa"
                width={161}
                height={60}
                priority
                unoptimized
                className="h-8 w-auto max-w-[10.5rem] object-contain object-left sm:h-9 md:max-w-[12rem] md:h-10"
              />
            </Link>
          </div>

          <nav
            className="hidden items-center justify-center gap-6 lg:flex lg:justify-self-center lg:gap-8 xl:gap-10"
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

          <div className="flex shrink-0 items-center justify-end gap-2 md:gap-3 lg:flex-none lg:justify-self-end">
            <a
              href={`tel:${businessLocation.phoneTel}`}
              className="hidden whitespace-nowrap text-sm font-medium tracking-wide text-zinc-700 transition-colors hover:text-black lg:inline"
            >
              {businessLocation.phoneDisplay}
            </a>
            <SiteSearchTrigger />
            <BookConsultationButton variant="header" label="Book now" />
            <AnimatedMenuButton
              open={mobileMenuOpen}
              controlsId="mobile-primary-nav"
              className="ml-2"
              onClick={() => setMobileMenuOpen((open) => !open)}
            />
          </div>
        </div>

        <ServicesMegaDropdown />
        <MobileNav open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      </header>
    </ServicesMegaMenuProvider>
  );
}
