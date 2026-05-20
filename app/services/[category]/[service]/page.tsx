import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/components/service-detail-page";
import {
  categoryTitles,
  collectServiceStaticParams,
  isServiceCategory,
} from "@/lib/services-navigation";
import { getPracticeCity, resolveServicePage } from "@/lib/service-pages";

type Props = {
  params: Promise<{ category: string; service: string }>;
};

export function generateStaticParams() {
  return collectServiceStaticParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, service } = await params;
  const resolved = resolveServicePage(category, service);
  if (!resolved) return {};

  const { content } = resolved;
  const city = getPracticeCity();
  return {
    title: `${content.displayName} in ${city} | Med Spa`,
    description: content.metaDescription,
  };
}

export default async function ServiceDetailRoute({ params }: Props) {
  const { category, service } = await params;

  if (!isServiceCategory(category)) {
    notFound();
  }

  const resolved = resolveServicePage(category, service);
  if (!resolved) {
    notFound();
  }

  const categoryTitle = categoryTitles[category];
  const categoryHref = `/services/${category}`;
  const canonicalPath = `/services/${category}/${service}`;

  return (
    <ServiceDetailPage
      content={resolved.content}
      categoryTitle={categoryTitle}
      categoryHref={categoryHref}
      canonicalPath={canonicalPath}
    />
  );
}
