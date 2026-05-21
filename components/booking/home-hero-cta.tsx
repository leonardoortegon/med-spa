"use client";

import Link from "next/link";
import { useBooking } from "@/components/booking/booking-context";

export function HomeHeroCta() {
  const { openBooking } = useBooking();

  return (
    <div className="pointer-events-auto flex flex-col gap-3 w-full max-w-[340px] lg:max-w-[360px] mx-auto lg:mx-0 mt-2">
      <button
        type="button"
        onClick={() => openBooking()}
        className="bg-black hover:bg-zinc-800 text-white font-sans text-xs font-semibold uppercase tracking-[0.22em] py-4 px-6 rounded-none transition-colors duration-200 w-full text-center shadow-sm cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Book Your Consultation
      </button>
      <Link
        href="/services"
        className="border border-white/60 lg:border-black/40 hover:border-white lg:hover:border-black text-white lg:text-black font-sans text-xs font-semibold uppercase tracking-[0.22em] py-4 px-6 rounded-none transition-colors duration-200 w-full text-center cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:focus-visible:outline-black"
      >
        Explore Treatments
      </Link>
    </div>
  );
}
