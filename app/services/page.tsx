import Image from "next/image";
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

/**
 * Static `/public` JPGs — one per category (unique filenames; not reused from homepage cards).
 * Bump `CATEGORY_CARD_IMAGE_REVISION` when you replace artwork so browsers/CDNs fetch the new file.
 */
const CATEGORY_CARD_IMAGE_REVISION = "1";

function categoryCardImageSrc(basePath: string) {
  return `${basePath}?v=${CATEGORY_CARD_IMAGE_REVISION}`;
}

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
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
              <div className="min-w-0 text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
                  Services
                </p>
                <h1 className="mt-4 max-w-xl font-display text-[2rem] font-semibold leading-tight tracking-tight text-black sm:text-4xl lg:max-w-none lg:text-[2.75rem] lg:leading-[1.12]">
                  All services designed around your goals.
                </h1>
                <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-zinc-600 lg:text-base">
                  Choose a clinical category, drill into treatments, or reverse-engineer options from how
                  you want your skin or profile to evolve—matching concerns to modalities is central to
                  every plan we sketch.
                </p>
              </div>
              <div className="relative aspect-square w-full overflow-hidden bg-zinc-100">
                <Image
                  src="/services.jpg"
                  alt="Med spa services and consultation environment."
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white" aria-label="Service categories">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-12 lg:py-16">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_CATEGORY_ORDER.map((category) => (
              <Link
                key={category}
                href={`/services/${category}`}
                className="group flex min-h-[5.75rem] flex-row border border-zinc-200 bg-white transition-colors hover:border-zinc-400 hover:bg-zinc-50"
              >
                <div className="relative aspect-square w-[5.625rem] shrink-0 border-r border-zinc-200 bg-zinc-100 sm:w-28 lg:w-[7.25rem]">
                  <Image
                    src={categoryCardImageSrc(categoryCardImages[category])}
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
                  className="group flex h-full flex-col justify-between gap-10 border border-zinc-200 bg-white px-6 py-5 transition-colors hover:border-zinc-400 hover:bg-zinc-50"
                >
                  <span className="font-display text-lg font-semibold text-black">{item.label}</span>
                  <span className="text-sm font-medium text-black transition-colors group-hover:text-zinc-700">
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
