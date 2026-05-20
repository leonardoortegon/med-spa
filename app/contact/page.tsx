import { LocationVisitSection } from "@/components/location-visit-section";
import { businessLocation } from "@/lib/business-location";

export default function ContactPage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">Contact</p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-black lg:text-[2.75rem]">
            Book, call, or visit
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-zinc-600 lg:text-base">
            Reach out to reserve a consultation, ask about candidacy for a procedure, or plan your next
            visit. We strive to reply the same business day. For scheduling, call{" "}
            <a
              href={`tel:${businessLocation.phoneTel}`}
              className="font-medium text-black underline underline-offset-4 transition-colors hover:text-zinc-700"
            >
              {businessLocation.phoneDisplay}
            </a>{" "}
            or use the booking flow from any service page.
          </p>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-zinc-500">
            Your booking widget, intake form, or preferred scheduling link can live in this intro
            section next.
          </p>
        </div>
      </section>

      <LocationVisitSection embedded showBookingCtas={false} />
    </>
  );
}
