"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { MutableRefObject } from "react";
import { cn } from "@/lib/utils";

const REVIEWS_PER_PAGE = 4;

function syncPageRefFromScroll(
  track: HTMLDivElement,
  pageRef: MutableRefObject<number>,
  totalPages: number,
) {
  const cards = [...track.querySelectorAll<HTMLElement>("[data-review-card]")];
  if (cards.length === 0 || totalPages < 2) return;

  const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
  if (track.scrollLeft >= maxScroll - 2) {
    pageRef.current = totalPages - 1;
    return;
  }

  let bestPage = 0;
  let bestGap = Infinity;
  for (let p = 0; p < totalPages; p++) {
    const lead = cards[p * REVIEWS_PER_PAGE];
    if (!lead) break;
    const gap = Math.abs(track.scrollLeft - lead.offsetLeft);
    if (gap < bestGap) {
      bestGap = gap;
      bestPage = p;
    }
  }
  pageRef.current = bestPage;
}

type Review = {
  id: string;
  name: string;
  initial: string;
  excerpt: string;
  fullText: string;
};

const reviews: Review[] = [
  {
    id: "1",
    name: "Lala",
    initial: "L",
    excerpt:
      "I had a fantastic experience. The staff was welcoming, the environment was clean and professional, and my treatment...",
    fullText:
      "I had a fantastic experience. The staff was welcoming, the environment was clean and professional, and my treatment was tailored with real attention to symmetry and downtime. Scheduling was painless and follow-up texts made recovery feel manageable.",
  },
  {
    id: "2",
    name: "Michelle",
    initial: "M",
    excerpt:
      "Honestly the calmest injector visit I\u2019ve had. Conservative dosing, thoughtful placement, no pressure to add extras...",
    fullText:
      "Honestly the calmest injector visit I\u2019ve had. Conservative dosing, thoughtful placement, no pressure to add extras I didn\u2019t ask for. I felt heard about my migraine history and pacing between visits.",
  },
  {
    id: "3",
    name: "Jordan",
    initial: "J",
    excerpt:
      "Laser series was explained clearly, what hurts, how many passes, sunscreen expectations, and my melasma patches...",
    fullText:
      "Laser series was explained clearly, what hurts, how many passes, sunscreen expectations, and my melasma patches finally look softened without my skin flipping out. Nurses checked in proactively.",
  },
  {
    id: "4",
    name: "Priya",
    initial: "P",
    excerpt:
      "Hydrafacial memberships make upkeep realistic for my commute. Glow days feel restorative without feeling salesy...",
    fullText:
      "Hydrafacial memberships make upkeep realistic for my commute. Glow days feel restorative without feeling salesy, I always leave with a handwritten tweak list rather than vague promises.",
  },
  {
    id: "5",
    name: "Alex",
    initial: "A",
    excerpt:
      "Consultation nailed candidacy, they steered me away from filler I didn\u2019t actually need because my volume loss...",
    fullText:
      "Consultation nailed candidacy, they steered me away from filler I didn\u2019t actually need because my volume loss was muscle-related. That integrity alone earned my trust for future visits.",
  },
  {
    id: "6",
    name: "Renee",
    initial: "R",
    excerpt:
      "Post-procedure kit was thorough; no guessing which acids to pause. Even my partner noticed how even my tone looks...",
    fullText:
      "Post-procedure kit was thorough; no guessing which acids to pause. Even my partner noticed how even my tone looks under daylight. Would recommend for anyone nervous about first-time lasers.",
  },
  {
    id: "7",
    name: "Chris",
    initial: "C",
    excerpt:
      "IV lounge experience was quiet, clinical, and quick. Phlebotomy skills were on point and the provider explained...",
    fullText:
      "IV lounge experience was quiet, clinical, and quick. Phlebotomy skills were on point and the provider explained ingredients without wellness buzzwords. Felt safe the whole time.",
  },
  {
    id: "8",
    name: "Sam",
    initial: "S",
    excerpt:
      "Body contouring consult included realistic timelines, no photoshopped mood boards. Tech walked me through each...",
    fullText:
      "Body contouring consult included realistic timelines, no photoshopped mood boards. Tech walked me through each applicator change and why we paused when my skin temp rose. Professional end to end.",
  },
];

function GoogleBadge() {
  return (
    <span
      className="absolute -bottom-1.5 -right-1.5 flex size-5 items-center justify-center rounded-full bg-white ring-1 ring-zinc-100"
      aria-hidden
    >
      <svg className="size-3.5" viewBox="0 0 24 24" aria-hidden>
        <path
          fill="#4285F4"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        />
        <path
          fill="#34A853"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
          fill="#FBBC05"
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        />
        <path
          fill="#EA4335"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        />
      </svg>
    </span>
  );
}

function StarRow() {
  return (
    <div className="flex gap-0.5 text-amber-400" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-sm leading-none" aria-hidden>
          ★
        </span>
      ))}
    </div>
  );
}

export function ReviewsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef(0);
  const totalPages = Math.max(1, Math.ceil(reviews.length / REVIEWS_PER_PAGE));
  const [expanded, setExpanded] = useState<Set<string>>(() => new Set());

  const toggleExpanded = useCallback((id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const scrollCarouselToPage = useCallback(
    (pageIndex: number) => {
      const track = trackRef.current;
      if (!track) return;
      const cards = [...track.querySelectorAll<HTMLElement>("[data-review-card]")];
      const firstLead = cards[pageIndex * REVIEWS_PER_PAGE];
      const reduceMotion =
        typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (!firstLead || !cards[0]) return;

      const maxScrollLeft = Math.max(0, track.scrollWidth - track.clientWidth);
      const targetLeft = Math.max(0, Math.min(Math.round(firstLead.offsetLeft), maxScrollLeft));

      pageRef.current = pageIndex;

      track.scrollTo({
        left: targetLeft,
        behavior: reduceMotion ? "auto" : "smooth",
      });
    },
    [],
  );

  const scrollByDirection = useCallback(
    (direction: "prev" | "next") => {
      const track = trackRef.current;
      if (!track || totalPages < 2) return;
      const delta = direction === "next" ? 1 : -1;
      const nextPage = Math.max(0, Math.min(totalPages - 1, pageRef.current + delta));
      scrollCarouselToPage(nextPage);
    },
    [scrollCarouselToPage, totalPages],
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track || totalPages < 2) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => syncPageRefFromScroll(track, pageRef, totalPages));
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      track.removeEventListener("scroll", onScroll);
    };
  }, [totalPages]);

  return (
    <section className="border-t border-zinc-200 bg-white" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-12 lg:py-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">Reviews</p>
            <h2 id="reviews-heading" className="mt-4 font-display text-3xl font-semibold text-black">
              Loved by real patients
            </h2>
          </div>
          <div className="hidden gap-2 lg:flex">
            <button
              type="button"
              onClick={() => scrollByDirection("prev")}
              className="inline-flex size-10 items-center justify-center border border-zinc-200 bg-white text-zinc-700 transition-colors hover:border-zinc-400 hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              aria-label="Show previous reviews"
            >
              <Chevron dir="left" />
            </button>
            <button
              type="button"
              onClick={() => scrollByDirection("next")}
              className="inline-flex size-10 items-center justify-center border border-zinc-200 bg-white text-zinc-700 transition-colors hover:border-zinc-400 hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              aria-label="Show next reviews"
            >
              <Chevron dir="right" />
            </button>
          </div>
        </div>

        <div className="relative mt-10">
          <div
            ref={trackRef}
            className={cn(
              "flex snap-x snap-proximity gap-6 overflow-x-auto pb-2",
              "[scroll-padding-inline:1.5rem] lg:[scroll-padding-inline:3rem]",
              "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
            )}
            tabIndex={0}
            aria-label="Patient reviews carousel"
          >
            {reviews.map((review) => {
              const isOpen = expanded.has(review.id);
              return (
                <article
                  key={review.id}
                  data-review-card
                  className="flex w-[min(100%,18rem)] shrink-0 snap-start snap-always flex-col border border-zinc-200 bg-white p-5 [scroll-margin-inline:1.5rem] sm:w-[min(100%,20rem)] lg:w-[calc((100%-4.5rem)/4)] lg:min-w-0 lg:[scroll-margin-inline:3rem]"
                >
                  <div className="flex items-start gap-3">
                    <div className="relative shrink-0">
                      <div
                        className="flex size-9 items-center justify-center rounded-full bg-teal-800 text-xs font-semibold tracking-tight text-white"
                        aria-hidden
                      >
                        {review.initial}
                      </div>
                      <GoogleBadge />
                    </div>
                    <p className="pt-1.5 text-sm font-semibold text-black">{review.name}</p>
                  </div>

                  <div className="mt-4">
                    <StarRow />
                  </div>

                  <p
                    className={cn(
                      "mt-4 text-sm leading-relaxed text-black",
                      !isOpen && "line-clamp-4",
                    )}
                  >
                    {isOpen ? review.fullText : review.excerpt}
                  </p>

                  <button
                    type="button"
                    onClick={() => toggleExpanded(review.id)}
                    className="mt-5 self-start text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    aria-expanded={isOpen}
                  >
                    {isOpen ? "Read less" : "Read more"}
                  </button>
                </article>
              );
            })}
          </div>

          {/* Mobile carousel affordance */}
          <p className="mt-4 text-center text-xs text-zinc-400 sm:hidden">Swipe sideways for more reviews</p>
        </div>
      </div>
    </section>
  );
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      aria-hidden
    >
      {dir === "left" ? <path d="m15 18-6-6 6-6" /> : <path d="m9 18 6-6-6-6" />}
    </svg>
  );
}
