import Link from "next/link";
import type { Metadata } from "next";
import { ConsultationCtaBlock } from "@/components/consultation-cta-block";
import { MembershipPackageImage } from "@/components/membership-package-image";
import { membershipPackageImageSrc, membershipPackages } from "@/lib/packages";
export const metadata: Metadata = {
  title: "Packages | Med Spa",
  description:
    "Glow, injectable, wellness, and laser packages, bundled care with predictable rhythm and member value in Coral Springs.",
};
export default function PackagesPage() {
  return (
    <>
      {" "}
      <section className="bg-white" aria-labelledby="packages-heading">
        {" "}
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-12 lg:py-20">
          {" "}
          <div className="max-w-3xl">
            {" "}
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Packages
            </p>{" "}
            <h1
              id="packages-heading"
              className="mt-4 font-display text-[2rem] font-semibold leading-tight tracking-tight text-black sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]"
            >
              {" "}
              Maintain results with bundled care{" "}
            </h1>{" "}
            <p className="mt-6 text-[15px] leading-relaxed text-zinc-600 lg:text-base">
              {" "}
              Structured plans keep skin, injections, lasers, and wellness on a
              predictable rhythm, often with member-only value over single
              visits. Explore each package below.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {membershipPackages.map((pkg) => (
        <section
          key={pkg.id}
          className="bg-white"
          aria-labelledby={`package-${pkg.id}-heading`}
        >
          {" "}
          <div className="mx-auto max-w-7xl px-4 py-14 lg:px-12 lg:py-20">
            {" "}
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
              {" "}
              <div className="flex min-w-0 flex-col justify-center">
                {" "}
                <h2
                  id={`package-${pkg.id}-heading`}
                  className="font-display text-2xl font-semibold text-black lg:text-[1.875rem] lg:leading-snug"
                >
                  {" "}
                  {pkg.title}{" "}
                </h2>{" "}
                <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-zinc-600 lg:text-base">
                  {" "}
                  {pkg.listingDescription}{" "}
                </p>{" "}
                <Link
                  href={`/packages/${pkg.id}`}
                  className="mt-8 inline-flex w-fit rounded-[5px] bg-black px-8 py-3 text-sm font-medium tracking-wide text-white transition-colors hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  {" "}
                  View package{" "}
                </Link>{" "}
              </div>{" "}
              <div className="w-full min-w-0 bg-zinc-100">
                {" "}
                <MembershipPackageImage
                  src={membershipPackageImageSrc(pkg.imageSrc)}
                  alt={`${pkg.title} imagery`}
                />{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>
      ))}{" "}
      <ConsultationCtaBlock
        headingId="packages-cta-heading"
        heading="Ready to enroll or compare plans?"
        description="Our front desk can walk through pricing, perks, and which package fits your goals and visit cadence."
        openOptions={{ goal: "known", serviceId: "membership-treatment" }}
      />{" "}
    </>
  );
}
