"use client";

import Link from "next/link";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { megaMenuColumns } from "@/lib/services-navigation";

const navLinkClass =
  "whitespace-nowrap text-sm font-medium tracking-wide text-zinc-700 transition-colors hover:text-black";

type MegaMenuContextValue = {
  open: boolean;
  openMenu: () => void;
  scheduleClose: () => void;
  closeMenu: () => void;
};

const MegaMenuContext = createContext<MegaMenuContextValue | null>(null);

function useMegaMenuContext() {
  const ctx = useContext(MegaMenuContext);
  if (!ctx) throw new Error("Mega menu components must be used within ServicesMegaMenuProvider");
  return ctx;
}

export function ServicesMegaMenuProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = useCallback(() => {
    if (closeTimer.current !== null) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const openMenu = useCallback(() => {
    cancelClose();
    setOpen(true);
  }, [cancelClose]);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 140);
  }, [cancelClose]);

  const closeMenu = useCallback(() => {
    cancelClose();
    setOpen(false);
  }, [cancelClose]);

  useEffect(() => () => cancelClose(), [cancelClose]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, closeMenu]);

  const value = useMemo(
    () => ({ open, openMenu, scheduleClose, closeMenu }),
    [open, openMenu, scheduleClose, closeMenu],
  );

  return <MegaMenuContext.Provider value={value}>{children}</MegaMenuContext.Provider>;
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function MegaMenuPanel() {
  const { closeMenu } = useMegaMenuContext();

  return (
    <div className="border border-zinc-200 border-t-0 bg-white shadow-[0_24px_48px_-12px_rgba(15,23,42,0.18)]">
      <div className="overflow-x-auto">
        <nav
          className="mx-auto grid min-w-[880px] w-full grid-cols-5 gap-x-6 gap-y-8 px-8 py-8 lg:gap-x-8 lg:px-10 lg:py-10"
          aria-label="Services overview"
        >
          {megaMenuColumns.map((column) => (
            <div key={column.title} className="flex min-w-0 flex-col gap-3">
              <p className="text-[11px] font-semibold tracking-[0.22em] text-black">
                {column.title}
              </p>
              <ul className="flex flex-col gap-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="block text-[13px] leading-snug text-zinc-600 transition-colors hover:text-black"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={column.viewAll.href}
                onClick={closeMenu}
                className="mt-auto pt-4 text-[13px] font-normal text-black underline underline-offset-4 hover:text-zinc-700"
              >
                {column.viewAll.label}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}

/** Hover target for Services — stays inside the header `<nav>`. */
export function ServicesMegaTrigger() {
  const { open, openMenu, scheduleClose } = useMegaMenuContext();

  return (
    <div
      className="relative flex h-full items-center"
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      <Link
        href="/services"
        className={`${navLinkClass} inline-flex items-center gap-1`}
        aria-expanded={open}
        aria-haspopup="true"
      >
        Services
        <ChevronDown className="opacity-70" />
      </Link>
    </div>
  );
}

/**
 * Fixed panel: top edge flush with nav bottom (`top-16`), centered on the viewport (`left-1/2 -translate-x-1/2`).
 * Render as a sibling after the nav row (not nested inside `<nav>`).
 */
export function ServicesMegaDropdown() {
  const { open, openMenu, scheduleClose } = useMegaMenuContext();

  return (
    <div
      className={`fixed left-1/2 top-16 z-40 w-[min(calc(100vw-2rem),72rem)] -translate-x-1/2 transition-opacity duration-150 ease-out ${
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
      aria-hidden={!open}
    >
      <MegaMenuPanel />
    </div>
  );
}
