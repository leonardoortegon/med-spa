"use client";

import { BookConsultationButton } from "@/components/booking/book-consultation-button";
import { ExploreServicesLink } from "@/components/booking/explore-services-link";

export function FinalCtaSection() {
  return (
    <section className="bg-white" aria-labelledby="final-cta-heading">
      <div className="mx-auto max-w-7xl px-6 py-14 text-center lg:px-12 lg:py-16">
        <div className="mx-auto max-w-xl">
          <h2
            id="final-cta-heading"
            className="font-display text-3xl font-semibold tracking-tight text-black lg:text-[2rem]"
          >
            Ready to create your treatment plan?
          </h2>
          <p className="mx-auto mt-6 max-w-xs leading-relaxed text-zinc-600">
            Book your consultation and discover the best options for your goals.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <BookConsultationButton />
            <ExploreServicesLink />
          </div>
        </div>
      </div>
    </section>
  );
}
