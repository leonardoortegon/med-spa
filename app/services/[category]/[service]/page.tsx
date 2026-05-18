import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  categoryTitles,
  collectServiceStaticParams,
  getServiceLinkLabel,
  isServiceCategory,
} from "@/lib/services-navigation";

type Props = {
  params: Promise<{ category: string; service: string }>;
};

export function generateStaticParams() {
  return collectServiceStaticParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, service } = await params;
  if (!isServiceCategory(category)) {
    return {};
  }
  const label = getServiceLinkLabel(category, service);
  if (!label) {
    return {};
  }
  return {
    title: `${label} | Med Spa`,
    description: `Learn about ${label} at Med Spa.`,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { category, service } = await params;

  if (!isServiceCategory(category)) {
    notFound();
  }

  const label = getServiceLinkLabel(category, service);
  if (!label) {
    notFound();
  }

  const categoryTitle = categoryTitles[category];

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 lg:px-12">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
        Services / {categoryTitle}
      </p>
      <h1 className="mt-4 font-display text-4xl font-semibold text-black">{label}</h1>
      <p className="mt-6 leading-relaxed text-zinc-600">
        Replace this placeholder with medical-grade content, FAQs, candidacy notes, prep instructions,
        and provider credentials for <strong>{label}</strong>.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href={`/services/${category}`}
          className="rounded-[5px] border border-zinc-300 px-5 py-2 text-sm font-semibold text-black transition-colors hover:bg-zinc-50"
        >
          ← Back to {categoryTitle}
        </Link>
        <Link
          href="/contact"
          className="rounded-[5px] bg-black/85 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-black"
        >
          Book consultation
        </Link>
      </div>
    </div>
  );
}
