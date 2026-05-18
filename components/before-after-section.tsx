"use client";

import { useState } from "react";
import {
  ImageComparison,
  ImageComparisonImage,
  ImageComparisonSlider,
} from "@/components/ui/image-comparison";
import { cn } from "@/lib/utils";

const categories = [
  {
    id: "injectables",
    label: "Injectables",
    beforeAlt: "Before injectables treatment (placeholder)",
    afterAlt: "After injectables treatment (placeholder)",
  },
  {
    id: "skin",
    label: "Skin",
    beforeAlt: "Before skin treatment (placeholder)",
    afterAlt: "After skin treatment (placeholder)",
  },
  {
    id: "laser",
    label: "Laser",
    beforeAlt: "Before laser treatment (placeholder)",
    afterAlt: "After laser treatment (placeholder)",
  },
  {
    id: "body",
    label: "Body",
    beforeAlt: "Before body treatment (placeholder)",
    afterAlt: "After body treatment (placeholder)",
  },
] as const;

type CategoryId = (typeof categories)[number]["id"];

const PLACEHOLDER_BEFORE = "/ba-before.jpg";
const PLACEHOLDER_AFTER = "/ba-after.jpg";

export function BeforeAfterSection() {
  const [activeId, setActiveId] = useState<CategoryId>("injectables");
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

          <div className="rounded-[5px] border border-zinc-200 bg-zinc-50 p-2 sm:p-3 lg:p-4">
            <div
              id="before-after-panel"
              role="tabpanel"
              aria-labelledby={`before-after-tab-${active.id}`}
            >
              <ImageComparison
                key={active.id}
                className="aspect-[4/3] w-full rounded-[5px] border border-zinc-200 sm:aspect-video lg:aspect-[2.1/1]"
                enableHover
              >
                <ImageComparisonImage
                  src={PLACEHOLDER_BEFORE}
                  className="grayscale"
                  alt={active.beforeAlt}
                  position="left"
                />
                <ImageComparisonImage
                  src={PLACEHOLDER_AFTER}
                  alt={active.afterAlt}
                  position="right"
                />
                <ImageComparisonSlider className="w-0.5 bg-white/30 backdrop-blur-sm">
                  <div className="absolute top-1/2 left-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-sm" />
                </ImageComparisonSlider>
              </ImageComparison>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
