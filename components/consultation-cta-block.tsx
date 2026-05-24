"use client";

import { BookConsultationButton } from "@/components/booking/book-consultation-button";
import { ExploreServicesLink } from "@/components/booking/explore-services-link";
import type { BookingOpenOptions } from "@/lib/booking/types";
import { cn } from "@/lib/utils";

type Props = {
  heading: string;
  description: string;
  headingId: string;
  className?: string;
  openOptions?: BookingOpenOptions;
  showExplore?: boolean;
};

export function ConsultationCtaBlock({
  heading,
  description,
  headingId,
  className = "bg-white",
  openOptions,
  showExplore = false,
}: Props) {
  return (
    <section
      className={cn(className)}
      aria-labelledby={headingId}
    >
      <div className="mx-auto max-w-7xl px-6 py-14 text-center lg:px-12 lg:py-16">
        <div className="mx-auto max-w-xl">
          <h2
            id={headingId}
            className="font-display text-3xl font-semibold tracking-tight text-black lg:text-[2rem]"
          >
            {heading}
          </h2>
          <p className="mx-auto mt-6 max-w-md leading-relaxed text-zinc-600">{description}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <BookConsultationButton openOptions={openOptions} />
            {showExplore ? <ExploreServicesLink /> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
