import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { BeforeAfterSection } from "@/components/before-after-section";
import { MedicalTrustSection } from "@/components/medical-trust-section";
import { PackagesSection } from "@/components/packages-section";
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
        <div className="relative h-[min(70vh,900px)] min-h-[240px] w-full overflow-hidden">
          <picture className="pointer-events-none absolute inset-0 block">
            <source media="(min-width: 1920px)" srcSet="/hero-large.jpg" />
            <img
              src="/hero.jpg"
              alt="Med spa hero"
              className="absolute inset-0 h-full w-full object-cover object-center"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 flex flex-col items-start justify-center gap-5 pr-4 pl-12 md:pl-24 lg:pl-32 md:pr-8">
            <h1 className="font-display max-w-xl text-left text-xl font-medium leading-snug tracking-wide text-black md:max-w-2xl md:text-3xl">
              Personalized aesthetic
              <br />
              treatment solutions
            </h1>
            <button
              type="button"
              className="pointer-events-auto rounded-[5px] bg-black/55 px-8 py-3 text-sm font-medium tracking-wide text-white transition-colors hover:bg-black/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80"
            >
              Book now
            </button>
          </div>
        </div>
      </section>

      <section
        className="border-t border-zinc-200 bg-white"
        aria-label="Why patients choose us"
      >
        <div className="mx-auto max-w-6xl px-6 py-10 md:py-14 lg:px-12">
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
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-12 lg:py-16">
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
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-12 lg:py-16">
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

      <section
        className="border-t border-zinc-200 bg-white"
        aria-labelledby="consultation-cta-heading"
      >
        <div className="mx-auto max-w-6xl px-6 py-14 text-center lg:px-12 lg:py-16">
          <div className="mx-auto max-w-xl">
            <h2
              id="consultation-cta-heading"
              className="font-display text-3xl font-semibold tracking-tight text-black lg:text-[2rem]"
            >
              Not sure where to start?
            </h2>
            <p className="mx-auto mt-6 max-w-md leading-relaxed text-zinc-600">
              Our consultation process helps identify the best treatment options for your skin,
              features, goals, and timeline.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex rounded-[5px] bg-black px-8 py-3 text-sm font-medium tracking-wide text-white transition-colors hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Book your consultation
            </Link>
          </div>
        </div>
      </section>

      <MedicalTrustSection />

      <PackagesSection />
    </>
  );
}
