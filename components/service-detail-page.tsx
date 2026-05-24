import type { ReactNode } from "react";
import Link from "next/link";
import { ServiceBookCta } from "@/components/service-book-cta";
import { ServiceBeforeAfterSlider } from "@/components/service-before-after-slider";
import { businessLocation } from "@/lib/business-location";
import {
  getPracticeCity,
  servicePageJsonLd,
  type ServicePageContent,
} from "@/lib/service-pages";

type Props = {
  content: ServicePageContent;
  category: string;
  service: string;
  categoryTitle: string;
  categoryHref: string;
  canonicalPath: string;
};

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">{children}</p>
  );
}

export function ServiceDetailPage({
  content,
  category,
  service,
  categoryTitle,
  categoryHref,
  canonicalPath,
}: Props) {
  const city = getPracticeCity();
  const jsonLdBlocks = servicePageJsonLd(content, categoryTitle, canonicalPath);

  return (
    <>
      {jsonLdBlocks.map((block, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}

      {/* 1. Hero */}
      <section className="bg-white" aria-labelledby="service-hero-heading">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:px-12 lg:py-20">
          <nav className="text-xs font-medium text-zinc-500" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li>
                <Link href="/services" className="transition-colors hover:text-black">
                  Services
                </Link>
              </li>
              <li aria-hidden className="text-zinc-300">
                /
              </li>
              <li>
                <Link href={categoryHref} className="transition-colors hover:text-black">
                  {categoryTitle}
                </Link>
              </li>
              <li aria-hidden className="text-zinc-300">
                /
              </li>
              <li className="text-zinc-800">{content.displayName}</li>
            </ol>
          </nav>

          <div className="mt-8 max-w-3xl">
            <SectionEyebrow>{categoryTitle}</SectionEyebrow>
            <h1
              id="service-hero-heading"
              className="mt-4 font-display text-[2rem] font-semibold leading-tight tracking-tight text-black sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]"
            >
              {content.displayName} in {city}
            </h1>
            <p className="mt-6 text-[15px] leading-relaxed text-zinc-600 lg:text-base">
              {content.heroDescription}
            </p>
            <div className="mt-10">
              <ServiceBookCta category={category} service={service} />
            </div>
          </div>
        </div>
      </section>

      {/* 2. What it treats */}
      <section className="bg-white" aria-labelledby="what-it-treats-heading">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:px-12 lg:py-16">
          <h2
            id="what-it-treats-heading"
            className="font-display text-2xl font-semibold text-black lg:text-[1.75rem]"
          >
            What it treats
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {content.whatItTreats.map((item) => (
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

      {/* 3. How it works */}
      <section className="bg-white" aria-labelledby="how-it-works-heading">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:px-12 lg:py-16">
          <h2
            id="how-it-works-heading"
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

      {/* 4. Treatment areas */}
      <section className="bg-white" aria-labelledby="treatment-areas-heading">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:px-12 lg:py-16">
          <h2
            id="treatment-areas-heading"
            className="font-display text-2xl font-semibold text-black lg:text-[1.75rem]"
          >
            Treatment areas
          </h2>
          <ul className="mt-8 flex flex-wrap gap-3">
            {content.treatmentAreas.map((area) => (
              <li
                key={area}
                className="border border-zinc-200 px-4 py-2.5 text-sm font-medium text-zinc-800"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. What to expect */}
      <section className="bg-white" aria-labelledby="what-to-expect-heading">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:px-12 lg:py-16">
          <h2
            id="what-to-expect-heading"
            className="font-display text-2xl font-semibold text-black lg:text-[1.75rem]"
          >
            What to expect
          </h2>
          <dl className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Consultation
              </dt>
              <dd className="mt-3 text-[15px] leading-relaxed text-zinc-600">
                {content.whatToExpect.consultation}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Treatment time
              </dt>
              <dd className="mt-3 text-[15px] leading-relaxed text-zinc-600">
                {content.whatToExpect.treatmentTime}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Downtime
              </dt>
              <dd className="mt-3 text-[15px] leading-relaxed text-zinc-600">
                {content.whatToExpect.downtime}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Results timeline
              </dt>
              <dd className="mt-3 text-[15px] leading-relaxed text-zinc-600">
                {content.whatToExpect.resultsTimeline}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* 6. Before & after (optional) */}
      {content.beforeAfter ? (
        <section className="bg-white" aria-labelledby="service-before-after-heading">
          <div className="mx-auto max-w-6xl px-4 py-14 lg:px-12 lg:py-16">
            <SectionEyebrow>Before &amp; after</SectionEyebrow>
            <h2
              id="service-before-after-heading"
              className="mt-4 font-display text-2xl font-semibold text-black lg:text-[1.75rem]"
            >
              Results patients often discuss
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-500">
              Drag the slider to compare. Outcomes are individual, not everyone will match these
              examples.
            </p>
            <div className="mt-10">
              <ServiceBeforeAfterSlider beforeAfter={content.beforeAfter} />
            </div>
          </div>
        </section>
      ) : null}

      {/* 7. Provider trust */}
      <section
        className="bg-gradient-to-b from-zinc-50/90 to-white"
        aria-labelledby="provider-trust-heading"
      >
        <div className="mx-auto max-w-6xl px-4 py-14 lg:px-12 lg:py-16">
          <SectionEyebrow>Clinical care</SectionEyebrow>
          <h2
            id="provider-trust-heading"
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

      {/* 8. FAQs */}
      <section className="bg-white" aria-labelledby="service-faqs-heading">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:px-12 lg:py-16">
          <h2
            id="service-faqs-heading"
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

      {/* 9. Related treatments */}
      <section className="bg-white" aria-labelledby="related-treatments-heading">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:px-12 lg:py-16">
          <h2
            id="related-treatments-heading"
            className="font-display text-2xl font-semibold text-black lg:text-[1.75rem]"
          >
            Related treatments
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {content.relatedTreatments.map((item) => (
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

      {/* 10. Book CTA */}
      <section className="bg-white" aria-labelledby="service-book-cta-heading">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center lg:px-12 lg:py-16">
          <div className="mx-auto max-w-xl">
            <h2
              id="service-book-cta-heading"
              className="font-display text-3xl font-semibold tracking-tight text-black lg:text-[2rem]"
            >
              Ready for {content.displayName} in {city}?
            </h2>
            <p className="mx-auto mt-6 max-w-md leading-relaxed text-zinc-600">
              Schedule a consultation to confirm candidacy, pricing, and timing, we&apos;ll build a plan
              that fits your features and goals.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <ServiceBookCta category={category} service={service} />
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
              href={categoryHref}
              className="mt-8 inline-block text-sm font-medium text-zinc-600 underline underline-offset-4 transition-colors hover:text-black"
            >
              ← All {categoryTitle.toLowerCase()}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
