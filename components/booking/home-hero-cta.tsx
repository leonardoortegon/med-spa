"use client";

import { BookConsultationButton } from "@/components/booking/book-consultation-button";
import { ExploreServicesLink } from "@/components/booking/explore-services-link";

export function HomeHeroCta() {
  return (
    <div className="pointer-events-auto flex flex-row flex-wrap items-center justify-center gap-3 lg:justify-start">
      <BookConsultationButton label="Book now" className="bg-black/85 hover:bg-black" />
      <ExploreServicesLink label="Services" className="bg-white/90 hover:bg-white" />
    </div>
  );
}
