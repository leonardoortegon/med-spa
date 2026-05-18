import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  categoryTitles,
  getLinksForCategory,
  isServiceCategory,
  serviceCategories,
} from "@/lib/services-navigation";

type Props = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return serviceCategories.map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  if (!isServiceCategory(category)) {
    return {};
  }
  const title = categoryTitles[category];
  return {
    title: `${title} | Med Spa`,
    description: `${title} treatments and services.`,
  };
}

export default async function ServiceCategoryPage({ params }: Props) {
  const { category } = await params;
  if (!isServiceCategory(category)) {
    notFound();
  }

  const links = getLinksForCategory(category);
  const title = categoryTitles[category];

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 lg:px-12">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
        Services
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-black">
        {title}
      </h1>
      <p className="mt-4 leading-relaxed text-zinc-600">
        Detailed pages for each offering live below—swap in clinical copy when ready.
      </p>
      <ul className="mt-10 divide-y divide-zinc-200 rounded-[5px] border border-zinc-200">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="flex items-center justify-between gap-4 px-5 py-4 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-50 hover:text-black"
            >
              <span>{link.label}</span>
              <span aria-hidden className="text-xs font-semibold text-zinc-400">
                View →
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="/services"
        className="mt-8 inline-flex text-sm font-semibold text-black underline underline-offset-4 hover:text-zinc-700"
      >
        ← Back to all services
      </Link>
    </div>
  );
}
