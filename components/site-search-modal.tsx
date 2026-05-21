"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { searchSite, type SearchResult, type SearchResultType } from "@/lib/site-search";
import { cn } from "@/lib/utils";

type Props = {
  open: boolean;
  onClose: () => void;
};

const typeLabels: Record<SearchResultType, string> = {
  Page: "Page",
  Service: "Service",
  Category: "Category",
  Concern: "Concern",
  Package: "Package",
};

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export function SiteSearchModal({ open, onClose }: Props) {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const results = searchSite(query);

  const reset = useCallback(() => {
    setQuery("");
    setActiveIndex(0);
  }, []);

  useEffect(() => {
    if (!open) {
      reset();
      return;
    }
    const t = window.setTimeout(() => inputRef.current?.focus(), 0);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, reset]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (results.length) setActiveIndex((i) => (i + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (results.length) setActiveIndex((i) => (i - 1 + results.length) % results.length);
    } else if (e.key === "Enter" && results[activeIndex]) {
      e.preventDefault();
      onClose();
      window.location.href = results[activeIndex].href;
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-start justify-center px-4 pt-[12vh] sm:px-6">
      <button
        type="button"
        className="absolute inset-0 bg-black/40"
        aria-label="Close search"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${inputId}-label`}
        className="relative w-full max-w-xl overflow-hidden rounded-[5px] border border-zinc-200 bg-white shadow-[0_24px_80px_-24px_rgba(0,0,0,0.35)]"
      >
        <div className="flex items-center gap-3 border-b border-zinc-100 px-4 py-3">
          <SearchIcon className="shrink-0 text-zinc-400" />
          <div className="min-w-0 flex-1">
            <label id={`${inputId}-label`} htmlFor={inputId} className="sr-only">
              Search treatments, concerns, and pages
            </label>
            <input
              ref={inputRef}
              id={inputId}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search services, concerns, packages…"
              autoComplete="off"
              className="w-full bg-transparent text-[15px] text-black outline-none placeholder:text-zinc-400"
            />
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-[5px] px-2 py-1 text-xs font-medium tracking-wide text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-black"
          >
            Esc
          </button>
        </div>

        <div className="max-h-[min(50vh,360px)] overflow-y-auto px-2 py-2">
          {!query.trim() ? (
            <p className="px-3 py-8 text-center text-sm text-zinc-500">
              Try Botox, HydraFacial, acne, laser hair removal, or packages
            </p>
          ) : results.length === 0 ? (
            <p className="px-3 py-8 text-center text-sm text-zinc-500">
              No results for &ldquo;{query}&rdquo;. Try a treatment name or concern.
            </p>
          ) : (
            <ul role="listbox" aria-label="Search results">
              {results.map((result, index) => (
                <li key={result.id} role="option" aria-selected={index === activeIndex}>
                  <Link
                    href={result.href}
                    onClick={onClose}
                    className={cn(
                      "flex items-start justify-between gap-3 rounded-[5px] px-3 py-3 transition-colors",
                      index === activeIndex ? "bg-zinc-100" : "hover:bg-zinc-50",
                    )}
                    onMouseEnter={() => setActiveIndex(index)}
                  >
                    <div className="min-w-0">
                      <p className="font-medium text-black">{result.title}</p>
                      {result.description ? (
                        <p className="mt-0.5 line-clamp-2 text-sm text-zinc-500">{result.description}</p>
                      ) : null}
                    </div>
                    <span className="shrink-0 pt-0.5 text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                      {typeLabels[result.type]}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="hidden border-t border-zinc-100 px-4 py-2 text-[11px] text-zinc-400 sm:flex sm:items-center sm:justify-between">
          <span>
            <kbd className="rounded border border-zinc-200 px-1">↑</kbd>{" "}
            <kbd className="rounded border border-zinc-200 px-1">↓</kbd> navigate
          </span>
          <span>
            <kbd className="rounded border border-zinc-200 px-1">↵</kbd> open
          </span>
        </div>
      </div>
    </div>
  );
}

export function SiteSearchTrigger({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-[5px] transition-colors",
          className || "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800"
        )}
        aria-label="Search site"
      >
        <SearchIcon />
      </button>
      <SiteSearchModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
