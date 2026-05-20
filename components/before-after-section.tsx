"use client";

import { useState } from "react";
import {
  ImageComparison,
  ImageComparisonCenterLabel,
  ImageComparisonImage,
  ImageComparisonSlider,
} from "@/components/ui/image-comparison";
import { BookConsultationButton } from "@/components/booking/book-consultation-button";
import { cn } from "@/lib/utils";

const categories = [
  {
    id: "skin",
    label: "Skin",
    beforeSrc: "/skin-before.jpg",
    afterSrc: "/skin-after.jpg",
    beforeAlt: "Before skin treatment",
    afterAlt: "After skin treatment",
  },
  {
    id: "injectables",
    label: "Injectables",
    beforeSrc: "/injectables-before.jpg",
    afterSrc: "/injectables-after.jpg",
    beforeAlt: "Before injectables treatment",
    afterAlt: "After injectables treatment",
  },
  {
    id: "laser",
    label: "Laser",
    beforeSrc: "/laser-before.jpg",
    afterSrc: "/laser-after.jpg",
    beforeAlt: "Before laser treatment",
    afterAlt: "After laser treatment",
  },
  {
    id: "lips",
    label: "Lips",
    beforeSrc: "/lips-before.jpg",
    afterSrc: "/lips-after.jpg",
    beforeAlt: "Before lip filler",
    afterAlt: "After lip filler",
  },
] as const;

type CategoryId = (typeof categories)[number]["id"];

export function BeforeAfterSection() {
  const [activeId, setActiveId] = useState<CategoryId>("skin");
  const active = categories.find((c) => c.id === activeId) ?? categories[0];

  return (
    <section
      className="border-t border-zinc-200 bg-white"
      aria-labelledby="before-after-heading"
    >
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-12 lg:py-16">
        <div className="flex flex-col gap-8 lg:gap-10">
          <header className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Before &amp; After
            </p>
            <h2 id="before-after-heading" className="mt-4 font-display text-3xl font-semibold text-black lg:text-[2.125rem]">
              Real-looking results by treatment area
            </h2>
            <p className="mt-4 max-w-2xl text-[13px] leading-relaxed text-zinc-500 md:text-sm">
              Results vary by patient. Individual treatment plans are recommended after consultation.
            </p>
          </header>

          <div
            className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:gap-3"
            role="tablist"
            aria-label="Before and after by category"
          >
            {categories.map((cat) => {
              const selected = cat.id === activeId;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  id={`before-after-tab-${cat.id}`}
                  aria-controls="before-after-panel"
                  onClick={() => setActiveId(cat.id)}
                  className={cn(
                    "w-full rounded-[5px] border px-3 py-2.5 text-sm font-medium tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:px-4 sm:py-3 lg:text-[15px]",
                    selected
                      ? "border-black bg-black text-white"
                      : "border-zinc-200 bg-white text-zinc-800 hover:border-zinc-400 hover:bg-zinc-50",
                  )}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div
            id="before-after-panel"
            role="tabpanel"
            aria-labelledby={`before-after-tab-${active.id}`}
          >
              <ImageComparison
                key={active.id}
                className="aspect-[4/3] w-full sm:aspect-video lg:aspect-[2.1/1]"
                enableHover
              >
                <ImageComparisonImage
                  src={active.afterSrc}
                  alt={active.afterAlt}
                  position="left"
                />
                <ImageComparisonImage
                  src={active.beforeSrc}
                  alt={active.beforeAlt}
                  position="right"
                />
                <ImageComparisonSlider className="z-20 w-0.5 bg-white/30 backdrop-blur-sm">
                  <div className="absolute top-1/2 left-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-sm" />
                </ImageComparisonSlider>
                <ImageComparisonCenterLabel />
              </ImageComparison>
            </div>

          <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <BookConsultationButton openOptions={{ goal: "help" }} />
            <p className="text-sm text-zinc-600">
              Results vary. A consultation helps set realistic expectations for your skin and goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
