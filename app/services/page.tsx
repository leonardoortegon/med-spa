import Link from "next/link";
import {
  categoryTitles,
  serviceCategories,
} from "@/lib/services-navigation";

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 lg:px-12">
      <h1 className="font-display text-4xl font-semibold text-black">Services</h1>
      <p className="mt-4 max-w-2xl leading-relaxed text-zinc-600">
        Explore treatments by category. Each destination below mirrors your mega menu structure.
      </p>
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {serviceCategories.map((category) => (
          <li key={category}>
            <Link
              href={`/services/${category}`}
              className="flex h-full flex-col rounded-[5px] border border-zinc-200 bg-white p-6 transition-colors hover:border-zinc-400 hover:bg-zinc-50"
            >
              <span className="font-display text-xl font-semibold text-black">
                {categoryTitles[category]}
              </span>
              <span className="mt-3 text-sm font-normal text-black underline underline-offset-4">
                View treatments →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
