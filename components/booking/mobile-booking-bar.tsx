"use client";

import { BookConsultationButton } from "@/components/booking/book-consultation-button";

export function MobileBookingBar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 border-t border-zinc-200/90 bg-white/95 p-3 backdrop-blur-sm lg:hidden">
      <div className="pointer-events-auto mx-auto flex max-w-lg gap-2">
        <BookConsultationButton className="flex-1 justify-center py-3.5" />
      </div>
    </div>
  );
}
