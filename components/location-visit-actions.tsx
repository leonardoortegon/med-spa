"use client";

import { BookConsultationButton } from "@/components/booking/book-consultation-button";

export function LocationVisitActions() {
  return (
    <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:flex-wrap sm:items-center">
      <BookConsultationButton label="Book Consultation" />
      <BookConsultationButton
        label="Request a consultation"
        variant="secondary"
        className="border-0 bg-transparent px-0 py-0 text-sm font-medium tracking-wide text-zinc-700 underline underline-offset-4 hover:bg-transparent hover:text-black"
        openOptions={{ goal: "new", consultationId: "new-patient" }}
      />
    </div>
  );
}
