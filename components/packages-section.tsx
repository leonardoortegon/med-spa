import Image from "next/image";
import Link from "next/link";

/** Paths resolve to assets in `public/` (matching filenames below). */
type PackageOffering = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
};

const packages: PackageOffering[] = [
  {
    id: "glow",
    title: "Glow Package",
    description: "Monthly facial + skincare perks",
    imageSrc: "/package-glow.jpg",
  },
  {
    id: "injectable",
    title: "Injectable Package",
    description: "Savings toward wrinkle relaxers and filler",
    imageSrc: "/package-injectable.jpg",
  },
  {
    id: "wellness",
    title: "Wellness Package",
    description: "IV therapy, vitamin shots, recovery support",
    imageSrc: "/package-wellness.jpg",
  },
  {
    id: "laser",
    title: "Laser Packages",
    description: "Treatment bundles for long-term results",
    imageSrc: "/package-laser.jpg",
  },
];

export function PackagesSection() {
  return (
    <section className="border-t border-zinc-200 bg-white" aria-labelledby="packages-heading">
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-12 lg:py-16">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Packages &amp; memberships
          </p>
          <h2 id="packages-heading" className="mt-4 font-display text-3xl font-semibold text-black">
            Maintain results with bundled care
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-zinc-600">
            Structured plans keep skin, injections, lasers, and wellness on a predictable rhythm, often
            with member-only value over single visits.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {packages.map((pkg) => (
            <li key={pkg.id}>
              <article className="flex h-full flex-col border border-zinc-200 bg-white transition-shadow hover:shadow-[0_12px_40px_-24px_rgba(0,0,0,0.18)]">
                <Link
                  href="/memberships"
                  className="group flex min-h-0 flex-1 flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
                    <Image
                      src={pkg.imageSrc}
                      alt={`${pkg.title} imagery`}
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-lg font-semibold text-black">{pkg.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-zinc-600">{pkg.description}</p>
                    <span className="mt-auto pt-6 text-sm font-medium tracking-wide text-black transition-colors group-hover:text-zinc-700">
                      View package →
                    </span>
                  </div>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
