import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { BeforeAfterSection } from "@/components/before-after-section";
import { ConsultationCtaBlock } from "@/components/consultation-cta-block";
import { HomeHeroCta } from "@/components/booking/home-hero-cta";
import { FinalCtaSection } from "@/components/final-cta-section";
import { LocationVisitSection } from "@/components/location-visit-section";
import { MedicalTrustSection } from "@/components/medical-trust-section";
import { PackagesSection } from "@/components/packages-section";
import { ReviewsSection } from "@/components/reviews-section";
import { concernDefinitions } from "@/lib/concerns";

const trustPoints = [
  "Medical-grade treatments",
  "Licensed providers",
  "Personalized plans",
  "Natural-looking results",
  "Online booking",
];

const serviceSnapshot = [
  "Botox",
  "Fillers",
  "Lasers",
  "Skin",
  "Wellness",
];

const categoryCards = [
  {
    href: "/services/injectables",
    title: "Injectables",
    description: "Subtle enhancements designed to smooth, restore, and balance your features.",
    image: "/injectables-card.jpg",
  },
  {
    href: "/services/skin-treatments",
    title: "Skin Treatments",
    description: "Customized treatments to refresh texture, clarity, hydration, and overall glow.",
    image: "/skin-treatments-card.jpg",
  },
  {
    href: "/services/laser-light",
    title: "Laser & Light",
    description: "Advanced technology for smoother skin, brighter tone, and targeted correction.",
    image: "/laser-light-card.jpg",
  },
  {
    href: "/services/body-contouring",
    title: "Body Contouring",
    description: "Non-surgical options to refine shape, tighten skin, and support body goals.",
    image: "/body-contouring-card.jpg",
  },
  {
    href: "/services/wellness",
    title: "Wellness",
    description: "Supportive therapies focused on energy, balance, hydration, and long-term vitality.",
    image: "/wellness-card.jpg",
  },
  {
    href: "/services/hair-restoration",
    title: "Hair Restoration",
    description: "Regenerative solutions to support healthier scalp conditions and fuller-looking hair.",
    image: "/hair-restoration-card.jpg",
  },
] as const;

export default function Home() {
  return (
    <>
      <section className="relative w-full" aria-label="Hero">
        <div className="relative h-[100dvh] min-h-[600px] w-full overflow-hidden">
          <picture className="pointer-events-none absolute inset-0 block">
            <source media="(min-width: 1024px)" srcSet="/hero.jpg" />
            <img
              src="/hero-mobile.jpg"
              alt="Med spa hero"
              className="absolute inset-0 h-full w-full object-cover object-center"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
          
          {/* Subtle elegant dark gradient overlay for text readability at the bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent z-0" />

          <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-end pb-12 lg:pb-28">
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
              <div className="mx-auto lg:mx-0 w-full max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start gap-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/95 lg:text-xs">
                  Refine. Restore. Reveal.
                </p>
                <h1 className="font-display text-4xl lg:text-6xl font-normal leading-[1.15] tracking-widest text-white uppercase">
                  Beauty That
                  <br />
                  Feels Like You
                </h1>
                <p className="max-w-[270px] lg:max-w-[320px] text-[14px] lg:text-base font-light tracking-wide text-white/85 leading-relaxed">
                  Advanced aesthetic treatments designed to enhance your natural radiance.
                </p>
                <HomeHeroCta />
              </div>
            </div>

            {/* Scroll Down Chevron */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1.5 opacity-80 animate-bounce">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-t border-zinc-200 bg-white"
        aria-label="Why patients choose us"
      >
        <div className="mx-auto max-w-7xl px-6 py-10 md:py-14 lg:px-12">
          <div className="trust-marquee-mask" role="presentation">
            <div className="trust-marquee-track">
              <ul className="trust-marquee-strip flex shrink-0 items-center gap-x-10 md:gap-x-14">
                {[...trustPoints, ...trustPoints].map((label, index) => (
                  <li
                    key={`${label}-${index}`}
                    aria-hidden={index >= trustPoints.length}
                    className="shrink-0 whitespace-nowrap text-sm leading-snug text-zinc-700 md:text-[15px]"
                  >
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mx-auto mt-9 flex max-w-4xl flex-wrap justify-center text-center text-[13px] font-normal text-zinc-500 md:mt-11 md:text-sm">
            {serviceSnapshot.map((label, index) => (
              <Fragment key={label}>
                {index > 0 && (
                  <span aria-hidden className="mx-2 shrink-0 text-zinc-300 md:mx-3.5">
                    •
                  </span>
                )}
                <span className="tracking-wide">{label}</span>
              </Fragment>
            ))}
          </p>
        </div>
      </section>

      <section
        className="border-t border-zinc-200 bg-white"
        aria-label="Treatments by category"
      >
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-12 lg:py-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {categoryCards.map((card) => (
              <article
                key={card.href}
                className="flex h-full flex-col border border-zinc-200 bg-white"
              >
                <Link
                  href={card.href}
                  className="group flex min-h-0 flex-1 flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
                    <Image
                      src={card.image}
                      alt=""
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="flex min-h-0 flex-1 flex-col p-6">
                    <h2 className="font-display text-xl font-semibold text-black">{card.title}</h2>
                    <p className="mt-2 text-[15px] leading-relaxed text-zinc-600">
                      {card.description}
                    </p>
                    <span className="mt-auto pt-6 text-sm font-medium tracking-wide text-black underline underline-offset-4 transition-colors group-hover:text-zinc-700">
                      View Services →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="border-t border-zinc-200 bg-white"
        aria-label="Find the right treatment"
      >
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-12 lg:py-16">
          <div className="max-w-3xl text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Find the right treatment
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-black">
              What would you like to improve?
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-zinc-600">
              Most guests know how they want to feel, not whether they need IPL, RF microneedling,
              Botox, filler, or a peel. Start with your concern and we&apos;ll map it to options that
              fit your goals.
            </p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {concernDefinitions.map((concern) => (
              <li key={concern.slug}>
                <Link
                  href={`/concerns/${concern.slug}`}
                  className="flex h-full min-h-[4.5rem] items-center border border-zinc-200 px-5 py-4 text-[15px] font-medium text-zinc-800 transition-colors hover:border-zinc-400 hover:bg-zinc-50 hover:text-black"
                >
                  {concern.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <BeforeAfterSection />

      <ConsultationCtaBlock
        headingId="consultation-cta-heading"
        heading="Not sure where to start?"
        description="Our consultation process helps identify the best treatment options for your skin, features, goals, and timeline."
        openOptions={{ goal: "help" }}
        showExplore
      />

      <MedicalTrustSection />

      <PackagesSection />

      <ReviewsSection />

      <LocationVisitSection />

      <FinalCtaSection />
    </>
  );
}
