"use client";

import Link from "next/link";
import { businessLocation, formatStreetCityLine } from "@/lib/business-location";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-beige-subtle" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand & Description */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="font-display text-xl font-medium tracking-wider text-black lg:text-2xl"
            >
              Your Brand
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-zinc-500">
              Rigorous medicine with a calm, individualized approach to natural radiance and aesthetic wellness.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-800">
              Treatments
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/services/injectables" className="text-zinc-500 hover:text-black transition-colors">
                  Injectables
                </Link>
              </li>
              <li>
                <Link href="/services/skin-treatments" className="text-zinc-500 hover:text-black transition-colors">
                  Skin Treatments
                </Link>
              </li>
              <li>
                <Link href="/services/laser-light" className="text-zinc-500 hover:text-black transition-colors">
                  Laser &amp; Light
                </Link>
              </li>
              <li>
                <Link href="/services/body-contouring" className="text-zinc-500 hover:text-black transition-colors">
                  Body Contouring
                </Link>
              </li>
              <li>
                <Link href="/services/wellness" className="text-zinc-500 hover:text-black transition-colors">
                  Wellness
                </Link>
              </li>
              <li>
                <Link href="/services/hair-restoration" className="text-zinc-500 hover:text-black transition-colors">
                  Hair Restoration
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-800">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/" className="text-zinc-500 hover:text-black transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-zinc-500 hover:text-black transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-zinc-500 hover:text-black transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-zinc-500 hover:text-black transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-500 hover:text-black transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-800">
              Clinic
            </h3>
            <address className="not-italic text-sm leading-relaxed text-zinc-500">
              <span className="block font-medium text-zinc-800">{businessLocation.practiceName}</span>
              <span className="block mt-1">{formatStreetCityLine()}</span>
              <span className="block">{businessLocation.postalCode}, {businessLocation.addressCountry}</span>
            </address>
            <p className="text-sm">
              <a
                href={`tel:${businessLocation.phoneTel}`}
                className="font-medium text-black hover:text-zinc-700 transition-colors"
              >
                {businessLocation.phoneDisplay}
              </a>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-zinc-200 pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-zinc-400">
          <p>© {currentYear} {businessLocation.practiceName}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-zinc-700 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-zinc-700 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
