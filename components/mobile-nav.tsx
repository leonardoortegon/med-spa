"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { megaMenuColumns } from "@/lib/services-navigation";
import { cn } from "@/lib/utils";

type Props = {
  open: boolean;
  onClose: () => void;
};

const topLinkClass =
  "flex w-full items-center border-b border-zinc-100 py-4 text-base font-medium tracking-wide text-zinc-800 transition-colors hover:text-black";

const categoryButtonClass =
  "flex w-full items-center justify-between py-3.5 text-left text-sm font-semibold uppercase tracking-[0.18em] text-zinc-800";

const serviceLinkClass =
  "block py-2.5 pl-3 text-[15px] font-medium text-zinc-600 transition-colors hover:text-black";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={cn("size-4 shrink-0 text-zinc-400 transition-transform", open && "rotate-180")}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

const topLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
] as const;

const bottomLinks = [
  { href: "/packages", label: "Packages" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export function MobileNav({ open, onClose }: Props) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const resetSubmenus = useCallback(() => {
    setServicesOpen(false);
    setOpenCategory(null);
  }, []);

  useEffect(() => {
    if (!open) {
      resetSubmenus();
      return;
    }
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, resetSubmenus]);

  if (!open) return null;

  const closeAndNavigate = () => {
    onClose();
    resetSubmenus();
  };

  return (
    <div className="lg:hidden" role="presentation">
      <button
        type="button"
        className="mobile-menu-backdrop-in fixed inset-x-0 bottom-0 top-16 z-40 bg-black/25"
        aria-label="Close menu"
        onClick={onClose}
      />
      <nav
        id="mobile-primary-nav"
        className="mobile-menu-panel-in fixed inset-x-0 bottom-0 top-16 z-40 flex flex-col overflow-hidden border-t border-zinc-100 bg-white"
        aria-label="Mobile primary"
      >
        <div className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-7xl px-6 pb-10 pt-4">
          {topLinks.map((link) => (
            <Link key={link.href} href={link.href} className={topLinkClass} onClick={closeAndNavigate}>
              {link.label}
            </Link>
          ))}

          <div className="border-b border-zinc-100">
            <button
              type="button"
              className={cn(topLinkClass, "justify-between border-b-0")}
              aria-expanded={servicesOpen}
              onClick={() => {
                setServicesOpen((v) => !v);
                if (servicesOpen) setOpenCategory(null);
              }}
            >
              Services
              <ChevronIcon open={servicesOpen} />
            </button>

            {servicesOpen ? (
              <div className="pb-4 pl-1">
                <Link
                  href="/services"
                  className="mb-3 block text-sm font-medium text-black underline underline-offset-4"
                  onClick={closeAndNavigate}
                >
                  View all services
                </Link>

                {megaMenuColumns.map((column) => {
                  const expanded = openCategory === column.title;
                  return (
                    <div key={column.title} className="border-t border-zinc-100 first:border-t-0">
                      <button
                        type="button"
                        className={categoryButtonClass}
                        aria-expanded={expanded}
                        onClick={() =>
                          setOpenCategory((current) =>
                            current === column.title ? null : column.title,
                          )
                        }
                      >
                        <span>{column.title}</span>
                        <ChevronIcon open={expanded} />
                      </button>

                      {expanded ? (
                        <ul className="pb-3">
                          {column.links.map((link) => (
                            <li key={link.href}>
                              <Link
                                href={link.href}
                                className={serviceLinkClass}
                                onClick={closeAndNavigate}
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                          <li>
                            <Link
                              href={column.viewAll.href}
                              className="mt-1 block py-2.5 pl-3 text-sm font-medium text-black underline underline-offset-4"
                              onClick={closeAndNavigate}
                            >
                              {column.viewAll.label.replace(/\s*→\s*$/, "")}
                            </Link>
                          </li>
                        </ul>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>

          {bottomLinks.map((link) => (
            <Link key={link.href} href={link.href} className={topLinkClass} onClick={closeAndNavigate}>
              {link.label}
            </Link>
          ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
