import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { concernDefinitions, getConcernBySlug } from "@/lib/concerns";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return concernDefinitions.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const concern = getConcernBySlug(slug);
  if (!concern) return {};
  return {
    title: `${concern.title} · Find the right treatment · Med Spa`,
    description: concern.intro.slice(0, 155),
  };
}

export default async function ConcernTreatmentPage({ params }: Props) {
  const { slug } = await params;
  const concern = getConcernBySlug(slug);
  if (!concern) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 lg:px-12">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
        Find the right treatment
      </p>
      <h1 className="mt-4 font-display text-4xl font-semibold text-black">{concern.title}</h1>
      <p className="mt-6 leading-relaxed text-zinc-600">{concern.intro}</p>

      <div className="mt-10">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-900">
          Where to start
        </h2>
        <ul className="mt-4 divide-y divide-zinc-200 rounded-[5px] border border-zinc-200">
          {concern.recommendations.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex items-center justify-between gap-4 px-5 py-4 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-50 hover:text-black"
              >
                <span>{item.label}</span>
                <span aria-hidden className="text-xs font-semibold text-zinc-400">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Link
        href="/"
        className="mt-10 inline-flex text-sm font-semibold text-black underline underline-offset-4 hover:text-zinc-700"
      >
        ← Back to home
      </Link>
    </div>
  );
}
