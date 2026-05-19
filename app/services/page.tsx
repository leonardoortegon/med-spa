import Link from "next/link";
import type { Metadata } from "next";
import { type ServiceCategory } from "@/lib/services-navigation";

export const metadata: Metadata = {
  title: "Services | Med Spa",
  description:
    "Explore aesthetics by category or concern—from injectables and skin treatments to lasers, body contouring, and wellness—in one organized hub.",
};

const SERVICE_CATEGORY_ORDER: ServiceCategory[] = [
  "injectables",
  "skin-treatments",
  "laser-light",
  "body-contouring",
  "hair-restoration",
  "wellness",
];

/** Heading copy for this page (title-case where it reads better than mega menu strings). */
const categoryHeadingText: Record<ServiceCategory, string> = {
  injectables: "Injectables",
  "skin-treatments": "Skin Treatments",
  "laser-light": "Laser & Light",
  "body-contouring": "Body Contouring",
  "hair-restoration": "Hair Restoration",
  wellness: "Wellness",
};

const browseByConcernLinks = [
  { label: "Wrinkles", slug: "fine-lines-wrinkles" },
  { label: "Acne", slug: "acne-acne-scars" },
  { label: "Pigmentation", slug: "sun-damage-pigmentation" },
  { label: "Texture", slug: "skin-texture-pores" },
  { label: "Volume loss", slug: "facial-volume-loss" },
  { label: "Unwanted hair", slug: "unwanted-hair" },
  { label: "Body sculpting", slug: "body-fat-loose-skin" },
] as const;

const featuredServices = [
  { label: "Botox", href: "/services/injectables/botox" },
  { label: "Lip Filler", href: "/services/injectables/lip-filler" },
  { label: "HydraFacial", href: "/services/skin-treatments/hydrafacial" },
  { label: "Laser Hair Removal", href: "/services/laser-light/laser-hair-removal" },
  { label: "Microneedling", href: "/services/skin-treatments/microneedling" },
  { label: "Medical Weight Loss", href: "/services/wellness/medical-weight-loss" },
] as const;

export default function ServicesPage() {
  return (
    <>
      <section aria-label="Services hero">
        <div className="bg-white px-6 py-16 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">Services</p>
            <h1 className="mt-4 max-w-3xl font-display text-[2rem] font-semibold leading-tight tracking-tight text-black sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
              All services designed around your goals.
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-relaxed text-zinc-600 lg:text-base">
              Choose a clinical category, drill into treatments, or reverse-engineer options from how
              you want your skin or profile to evolve—matching concerns to modalities is central to every
              plan we sketch.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white" aria-labelledby="services-categories-heading">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-12 lg:py-16">
          <h2
            id="services-categories-heading"
            className="font-display text-2xl font-semibold text-black lg:text-[1.75rem]"
          >
            Service Categories
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-zinc-600">
            Each pillar opens more specific procedures—all filtered through medically sound candidacy
            checks.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_CATEGORY_ORDER.map((category) => (
              <Link
                key={category}
                href={`/services/${category}`}
                className="group flex min-h-[5.75rem] flex-col justify-between border border-zinc-200 bg-white p-6 transition-colors hover:border-zinc-400 hover:bg-zinc-50"
              >
                <span className="font-display text-lg font-semibold text-black group-hover:text-zinc-800">
                  {categoryHeadingText[category]}
                </span>
                <span className="mt-6 text-sm font-medium text-black underline underline-offset-4 decoration-zinc-300 group-hover:decoration-zinc-500">
                  View category →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white" aria-labelledby="browse-by-concern-heading">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-12 lg:py-16">
          <h2
            id="browse-by-concern-heading"
            className="font-display text-2xl font-semibold text-black lg:text-[1.75rem]"
          >
            Browse by Concern
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-zinc-600">
            Popular entry points—we map anatomy, timelines, and candidacy onto specific treatments inside
            each guide.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {browseByConcernLinks.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/concerns/${item.slug}`}
                  className="flex min-h-[3.75rem] items-center border border-zinc-200 px-5 py-4 text-[15px] font-medium text-zinc-800 transition-colors hover:border-zinc-400 hover:bg-zinc-50 hover:text-black"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white" aria-labelledby="services-featured-heading">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-12 lg:py-16">
          <h2
            id="services-featured-heading"
            className="font-display text-2xl font-semibold text-black lg:text-[1.75rem]"
          >
            Featured Services
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-zinc-600">
            Direct links into our most-booked modality pages when you already know where you&apos;re
            headed.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex h-full flex-col justify-between gap-10 border border-zinc-200 bg-white px-6 py-5 transition-colors hover:border-zinc-400 hover:bg-zinc-50"
                >
                  <span className="font-display text-lg font-semibold text-black">{item.label}</span>
                  <span className="text-sm font-medium text-black underline underline-offset-4">
                    View details →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white" aria-labelledby="services-consult-cta-heading">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center lg:px-12 lg:py-16">
          <div className="mx-auto max-w-xl">
            <h2
              id="services-consult-cta-heading"
              className="font-display text-3xl font-semibold tracking-tight text-black lg:text-[2rem]"
            >
              Not sure which treatment is right for you?
            </h2>
            <p className="mx-auto mt-6 max-w-md leading-relaxed text-zinc-600">
              A focused consult cuts through modality overload—we&apos;ll prioritize what matches your
              goals, anatomy, downtime comfort, and budget.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex rounded-[5px] bg-black px-8 py-3 text-sm font-medium tracking-wide text-white transition-colors hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Book a consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
