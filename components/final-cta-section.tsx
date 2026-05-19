import Link from "next/link";
import { businessLocation } from "@/lib/business-location";

export function FinalCtaSection() {
  return (
    <section className="border-t border-zinc-200 bg-white" aria-labelledby="final-cta-heading">
      <div className="mx-auto max-w-6xl px-6 py-14 text-center lg:px-12 lg:py-16">
        <div className="mx-auto max-w-xl">
          <h2
            id="final-cta-heading"
            className="font-display text-3xl font-semibold tracking-tight text-black lg:text-[2rem]"
          >
            Ready to create your personalized treatment plan?
          </h2>
          <p className="mx-auto mt-6 max-w-md leading-relaxed text-zinc-600">
            Book your consultation and discover the best options for your goals.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex rounded-[5px] bg-black px-8 py-3 text-sm font-medium tracking-wide text-white transition-colors hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Book Consultation
            </Link>
            <a
              href={`tel:${businessLocation.phoneTel}`}
              aria-label={`Call us at ${businessLocation.phoneDisplay}`}
              className="inline-flex flex-col items-center justify-center rounded-[5px] border border-zinc-200 bg-white px-8 py-3 text-sm font-medium tracking-wide text-black transition-colors hover:border-zinc-400 hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:flex-row sm:gap-2"
            >
              <span>Call Us</span>
              <span className="text-xs font-normal text-zinc-500 sm:text-sm sm:font-normal sm:text-zinc-600">
                {businessLocation.phoneDisplay}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
