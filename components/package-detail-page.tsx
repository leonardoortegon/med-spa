import type { ReactNode } from "react";
import Link from "next/link";
import { BookConsultationButton } from "@/components/booking/book-consultation-button";
import { MembershipPackageImage } from "@/components/membership-package-image";
import { businessLocation } from "@/lib/business-location";
import {
  getPracticeCity,
  membershipPackageImageSrc,
  packagePageJsonLd,
  type PackagePageContent,
} from "@/lib/package-pages";

type Props = {
  content: PackagePageContent;
  canonicalPath: string;
};

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">{children}</p>
  );
}

export function PackageDetailPage({ content, canonicalPath }: Props) {
  const city = getPracticeCity();
  const jsonLdBlocks = packagePageJsonLd(content, canonicalPath);

  return (
    <>
      {jsonLdBlocks.map((block, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}

      <section className="bg-white" aria-labelledby="package-hero-heading">
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-12 lg:py-20">
          <nav className="text-xs font-medium text-zinc-500" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li>
                <Link href="/packages" className="transition-colors hover:text-black">
                  Packages
                </Link>
              </li>
              <li aria-hidden className="text-zinc-300">
                /
              </li>
              <li className="text-zinc-800">{content.title}</li>
            </ol>
          </nav>

          <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
            <div className="min-w-0">
              <SectionEyebrow>Packages</SectionEyebrow>
              <h1
                id="package-hero-heading"
                className="mt-4 font-display text-[2rem] font-semibold leading-tight tracking-tight text-black sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]"
              >
                {content.title} in {city}
              </h1>
              <p className="mt-6 text-[15px] leading-relaxed text-zinc-600 lg:text-base">
                {content.heroDescription}
              </p>
              <div className="mt-10">
                <BookConsultationButton openOptions={{ goal: "new", consultationId: "new-patient" }} />
              </div>
            </div>
            <div className="w-full min-w-0 bg-zinc-100">
              <MembershipPackageImage
                src={membershipPackageImageSrc(content.imageSrc)}
                alt={`${content.title} imagery`}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white" aria-labelledby="package-included-heading">
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-12 lg:py-16">
          <h2
            id="package-included-heading"
            className="font-display text-2xl font-semibold text-black lg:text-[1.75rem]"
          >
            What&apos;s included
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {content.whatsIncluded.map((item) => (
              <li
                key={item}
                className="border border-zinc-200 px-5 py-4 text-[15px] leading-relaxed text-zinc-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white" aria-labelledby="package-how-heading">
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-12 lg:py-16">
          <h2
            id="package-how-heading"
            className="font-display text-2xl font-semibold text-black lg:text-[1.75rem]"
          >
            How it works
          </h2>
          <div className="mt-8 max-w-3xl space-y-5">
            {content.howItWorks.map((paragraph) => (
              <p key={paragraph} className="text-[15px] leading-relaxed text-zinc-600 lg:text-base">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white" aria-labelledby="package-ideal-heading">
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-12 lg:py-16">
          <h2
            id="package-ideal-heading"
            className="font-display text-2xl font-semibold text-black lg:text-[1.75rem]"
          >
            Ideal for
          </h2>
          <ul className="mt-8 flex flex-wrap gap-3">
            {content.idealFor.map((item) => (
              <li
                key={item}
                className="border border-zinc-200 px-4 py-2.5 text-sm font-medium text-zinc-800"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white" aria-labelledby="package-expect-heading">
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-12 lg:py-16">
          <h2
            id="package-expect-heading"
            className="font-display text-2xl font-semibold text-black lg:text-[1.75rem]"
          >
            What to expect
          </h2>
          <dl className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Getting started
              </dt>
              <dd className="mt-3 text-[15px] leading-relaxed text-zinc-600">
                {content.whatToExpect.gettingStarted}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Visit rhythm
              </dt>
              <dd className="mt-3 text-[15px] leading-relaxed text-zinc-600">
                {content.whatToExpect.visitRhythm}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Member perks
              </dt>
              <dd className="mt-3 text-[15px] leading-relaxed text-zinc-600">
                {content.whatToExpect.memberPerks}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Planning ahead
              </dt>
              <dd className="mt-3 text-[15px] leading-relaxed text-zinc-600">
                {content.whatToExpect.planningAhead}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section
        className="bg-gradient-to-b from-zinc-50/90 to-white"
        aria-labelledby="package-trust-heading"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-12 lg:py-16">
          <SectionEyebrow>Clinical care</SectionEyebrow>
          <h2
            id="package-trust-heading"
            className="mt-4 font-display text-2xl font-semibold text-black lg:text-[1.75rem]"
          >
            {content.providerTrust.heading}
          </h2>
          <div className="mt-8 max-w-3xl space-y-5">
            {content.providerTrust.body.map((paragraph) => (
              <p key={paragraph} className="text-[15px] leading-relaxed text-zinc-600 lg:text-base">
                {paragraph}
              </p>
            ))}
          </div>
          <p className="mt-8 text-sm text-zinc-500">
            {businessLocation.practiceName} · {businessLocation.addressLocality},{" "}
            {businessLocation.addressRegion}
          </p>
        </div>
      </section>

      <section className="bg-white" aria-labelledby="package-faqs-heading">
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-12 lg:py-16">
          <h2
            id="package-faqs-heading"
            className="font-display text-2xl font-semibold text-black lg:text-[1.75rem]"
          >
            Frequently asked questions
          </h2>
          <dl className="mt-10 max-w-3xl divide-y divide-zinc-200 border-y border-zinc-200">
            {content.faqs.map((faq) => (
              <div key={faq.question} className="py-6 first:pt-8 last:pb-8">
                <dt className="font-display text-lg font-semibold text-black">{faq.question}</dt>
                <dd className="mt-3 text-[15px] leading-relaxed text-zinc-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-white" aria-labelledby="package-related-heading">
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-12 lg:py-16">
          <h2
            id="package-related-heading"
            className="font-display text-2xl font-semibold text-black lg:text-[1.75rem]"
          >
            Related packages
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.relatedPackages.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex min-h-[3.75rem] items-center border border-zinc-200 px-5 py-4 text-[15px] font-medium text-zinc-800 transition-colors hover:border-zinc-400 hover:bg-zinc-50 hover:text-black"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white" aria-labelledby="package-book-cta-heading">
        <div className="mx-auto max-w-7xl px-4 py-14 text-center lg:px-12 lg:py-16">
          <div className="mx-auto max-w-xl">
            <h2
              id="package-book-cta-heading"
              className="font-display text-3xl font-semibold tracking-tight text-black lg:text-[2rem]"
            >
              Ready to join {content.title}?
            </h2>
            <p className="mx-auto mt-6 max-w-md leading-relaxed text-zinc-600">
              Talk with our team about enrollment, pricing, and how this package fits your goals and
              visit schedule.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <BookConsultationButton openOptions={{ goal: "new", consultationId: "new-patient" }} />
              <a
                href={`tel:${businessLocation.phoneTel}`}
                aria-label={`Call us at ${businessLocation.phoneDisplay}`}
                className="inline-flex flex-col items-center justify-center rounded-[5px] border border-zinc-200 bg-white px-8 py-3 text-sm font-medium tracking-wide text-black transition-colors hover:border-zinc-400 hover:bg-zinc-50 sm:flex-row sm:gap-2"
              >
                <span>Call us</span>
                <span className="text-xs font-normal text-zinc-500 sm:text-sm sm:text-zinc-600">
                  {businessLocation.phoneDisplay}
                </span>
              </a>
            </div>
            <Link
              href="/packages"
              className="mt-8 inline-block text-sm font-medium text-zinc-600 underline underline-offset-4 transition-colors hover:text-black"
            >
              ← All packages
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
