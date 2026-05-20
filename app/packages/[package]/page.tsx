import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PackageDetailPage } from "@/components/package-detail-page";
import { getPackageIds, getPackagePageContent, getPracticeCity } from "@/lib/package-pages";

type Props = {
  params: Promise<{ package: string }>;
};

export function generateStaticParams() {
  return getPackageIds().map((pkg) => ({ package: pkg }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { package: packageId } = await params;
  const content = getPackagePageContent(packageId);
  if (!content) return {};

  const city = getPracticeCity();
  return {
    title: `${content.title} in ${city} | Med Spa`,
    description: content.metaDescription,
  };
}

export default async function PackagePage({ params }: Props) {
  const { package: packageId } = await params;
  const content = getPackagePageContent(packageId);

  if (!content) {
    notFound();
  }

  const canonicalPath = `/packages/${packageId}`;

  return <PackageDetailPage content={content} canonicalPath={canonicalPath} />;
}
