import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { type ServiceCategory } from "@/lib/services-navigation";

export const metadata: Metadata = {
  title: "Services | Med Spa",
  description:
    "Explore aesthetics by category or concern, from injectables and skin treatments to lasers, body contouring, and wellness, in one organized hub.",
};

const SERVICE_CATEGORY_ORDER: ServiceCategory[] = [
  "injectables",
  "skin-treatments",
  "laser-light",
  "body-contouring",
  "hair-restoration",
  "wellness",
];

/**
 * Static `/public` JPGs, one per featured treatment.
 * Bump `SERVICES_PAGE_IMAGE_REVISION` when you replace artwork so browsers/CDNs fetch the new file.
 */
const SERVICES_PAGE_IMAGE_REVISION = "3";

function servicesPageImageSrc(basePath: string) {
  return `${basePath}?v=${SERVICES_PAGE_IMAGE_REVISION}`;
}

/** Upload one JPG per category under `public/`, see `categoryCardImages` filenames. */
const categoryCardImages: Record<ServiceCategory, string> = {
  injectables: "/services-category-injectables.jpg",
  "skin-treatments": "/services-category-skin-treatments.jpg",
  "laser-light": "/services-category-laser-light.jpg",
  "body-contouring": "/services-category-body-contouring.jpg",
  "hair-restoration": "/services-category-hair-restoration.jpg",
  wellness: "/services-category-wellness.jpg",
};

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
  {
    label: "Botox",
    href: "/services/injectables/botox",
    image: "/services-featured-botox.jpg",
    description:
      "Neuromodulator injections that soften expression lines, forehead, frown, and crow’s feet, while keeping movement looking natural, not frozen.",
  },
  {
    label: "Lip Filler",
    href: "/services/injectables/lip-filler",
    image: "/services-featured-lip-filler.jpg",
    description:
      "Hyaluronic acid gel shaped to your goals for definition, balance, or subtle volume, planned around lip anatomy and the look you want day to day.",
  },
  {
    label: "HydraFacial",
    href: "/services/skin-treatments/hydrafacial",
    image: "/services-featured-hydrafacial.jpg",
    description:
      "Medical-grade cleanse, extract, and hydrate in one visit, great before events or as steady upkeep for clarity, glow, and congested pores.",
  },
  {
    label: "Laser Hair Removal",
    href: "/services/laser-light/laser-hair-removal",
    image: "/services-featured-laser-hair-removal.jpg",
    description:
      "Targeted light energy reduces actively growing hair over a series of sessions, ideal when you’re tired of shaving irritation or ingrowns.",
  },
  {
    label: "Microneedling",
    href: "/services/skin-treatments/microneedling",
    image: "/services-featured-microneedling.jpg",
    description:
      "Controlled micro-injuries stimulate collagen and can improve texture, fine lines, and acne scarring with downtime that’s usually manageably mild.",
  },
  {
    label: "Medical Weight Loss",
    href: "/services/wellness/medical-weight-loss",
    image: "/services-featured-medical-weight-loss.jpg",
    description:
      "Provider-guided plans that pair lifestyle coaching with medication options when appropriate, built around labs, safety checks, and sustainable pacing.",
  },
] as const;

export default function ServicesPage() {
  return (
    <>
      <section className="relative w-full" aria-label="Services hero">
        <div className="relative h-[100dvh] min-h-[600px] w-full overflow-hidden">
          <picture className="pointer-events-none absolute inset-0 block">
            <source media="(min-width: 2300px)" srcSet="/services-hero-large.jpg" />
            <source media="(min-width: 1024px)" srcSet="/services-hero-medium.jpg" />
            <img
              src="/services-hero-mobile.jpg"
              alt="Services hero"
              className="absolute inset-0 h-full w-full object-cover object-bottom"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
          
          <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-start pt-28 lg:justify-center lg:pt-0">
            <div className="mx-auto w-full max-w-7xl px-4 lg:px-12 pointer-events-auto">
              <div className="mx-auto lg:mx-0 w-full max-w-2xl text-left flex flex-col items-start gap-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-zinc-500 lg:text-xs">
                  Services
                </p>
                <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-normal leading-[1.15] tracking-widest text-black uppercase">
                  Services designed
                  <br />
                  around your goals
                </h1>
                <p className="max-w-md text-sm lg:text-base font-light tracking-wide text-zinc-600 leading-relaxed">
                  Choose a category, dive into treatments, or choose how you want your skin or profile to evolve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white" aria-label="Service categories">
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-12 lg:py-16">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_CATEGORY_ORDER.map((category) => (
              <Link
                key={category}
                href={`/services/${category}`}
                className="group flex min-h-[5.75rem] flex-row border border-zinc-200 bg-white transition-colors hover:border-zinc-400 hover:bg-zinc-50"
              >
                <div className="relative aspect-square w-[5.625rem] shrink-0 border-r border-zinc-200 bg-zinc-100 sm:w-28 lg:w-[7.25rem]">
                  <Image
                    src={servicesPageImageSrc(categoryCardImages[category])}
                    alt=""
                    fill
                    className="object-cover object-center"
                    sizes="116px"
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-between gap-4 py-5 pr-4 pl-4 sm:pl-5">
                  <span className="font-display text-lg font-semibold leading-snug text-black group-hover:text-zinc-800">
                    {categoryHeadingText[category]}
                  </span>
                  <span className="text-sm font-medium text-black transition-colors group-hover:text-zinc-700">
                    View category →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white" aria-labelledby="browse-by-concern-heading">
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-12 lg:py-16">
          <h2
            id="browse-by-concern-heading"
            className="font-display text-2xl font-semibold text-black lg:text-[1.75rem]"
          >
            Browse by Concern
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-zinc-600">
            Popular entry points, we map anatomy, timelines, and candidacy onto specific treatments inside
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
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-12 lg:py-16">
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
                  className="group flex h-full flex-col bg-white"
                >
                  <div className="relative aspect-[4/3] w-full shrink-0 bg-zinc-100">
                    <Image
                      src={servicesPageImageSrc(item.image)}
                      alt=""
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between gap-6 pt-5">
                    <div>
                      <span className="font-display text-lg font-semibold text-black">{item.label}</span>
                      <p className="mt-3 text-[15px] leading-relaxed text-zinc-600">{item.description}</p>
                    </div>
                    <span className="text-sm font-medium text-black transition-colors group-hover:text-zinc-700">
                      View details →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white" aria-labelledby="services-consult-cta-heading">
        <div className="mx-auto max-w-7xl px-4 py-14 text-center lg:px-12 lg:py-16">
          <div className="mx-auto max-w-xl">
            <h2
              id="services-consult-cta-heading"
              className="font-display text-3xl font-semibold tracking-tight text-black lg:text-[2rem]"
            >
              Not sure which treatment is right for you?
            </h2>
            <p className="mx-auto mt-6 max-w-md leading-relaxed text-zinc-600">
              A focused consult cuts through modality overload, we&apos;ll prioritize what matches your
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
