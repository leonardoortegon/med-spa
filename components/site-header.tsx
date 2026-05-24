"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatedMenuButton } from "@/components/animated-menu-button";
import { BookConsultationButton } from "@/components/booking/book-consultation-button";
import { MobileNav } from "@/components/mobile-nav";
import {
  ServicesMegaDropdown,
  ServicesMegaMenuProvider,
  ServicesMegaTrigger,
} from "@/components/services-mega-menu";
import { SiteSearchTrigger } from "@/components/site-search-modal";

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
  const pathname = usePathname();
  const isServicesPage = pathname === "/services";
  const isHomePage = pathname === "/";
  const isLightPage = !isHomePage && !isServicesPage;
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrolled = currentScrollY > 0;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));

      if (currentScrollY > lastScrollY) {
        // Prevent hiding during elastic scroll at the top
        if (currentScrollY > 10) {
          setScrollDirection("down");
        }
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    const t = setTimeout(handleScroll, 0);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(t);
    };
  }, []);

  const showMobileWhiteNav = mobileMenuOpen || (isScrolled && scrollDirection === "up") || isServicesPage || isLightPage;

  return (
    <ServicesMegaMenuProvider>
      <header
        className={cn(
          "z-[60] transition-all duration-300",
          mobileMenuOpen
            ? "fixed inset-x-0 top-0 bg-white border-b border-zinc-200/80"
            : cn(
                "fixed inset-x-0 top-0",
                isScrolled && scrollDirection === "down"
                  ? "-translate-y-full lg:transform-none"
                  : "",
                (isScrolled && scrollDirection === "up") || isLightPage
                  ? "bg-white border-b border-zinc-200/80"
                  : "bg-transparent border-b border-transparent",
                isScrolled || isLightPage
                  ? "lg:bg-white lg:border-zinc-200/80"
                  : "lg:bg-transparent lg:border-transparent"
              )
        )}
      >
        <div
          className={cn(
            "relative z-[61] mx-auto flex h-16 w-full max-w-7xl items-center gap-3 px-4 md:gap-4 lg:grid lg:grid-cols-3 lg:items-center lg:gap-0 lg:px-12 transition-colors duration-200",
            mobileMenuOpen ? "bg-white" : "bg-transparent"
          )}
        >
          <div className="flex min-w-0 flex-1 justify-start lg:flex-none lg:justify-self-start">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "font-display text-xl font-medium tracking-wider focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:text-2xl transition-colors duration-200",
                showMobileWhiteNav ? "text-black" : "text-white lg:text-black"
              )}
            >
              Your Brand
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
            <SiteSearchTrigger
              className={cn(
                "transition-colors duration-200",
                showMobileWhiteNav
                  ? "text-black lg:text-zinc-500"
                  : "text-white lg:text-zinc-500"
              )}
            />
            <BookConsultationButton
              variant="header"
              label="Book now"
              className="hidden lg:inline-flex"
            />
            <AnimatedMenuButton
              open={mobileMenuOpen}
              controlsId="mobile-primary-nav"
              className={cn(
                "ml-2 transition-colors duration-200",
                showMobileWhiteNav ? "text-black" : "text-white lg:text-black"
              )}
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
