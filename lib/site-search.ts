import { concernDefinitions } from "@/lib/concerns";
import { membershipPackages } from "@/lib/package-pages";
import {
  categoryTitles,
  megaMenuColumns,
  parseServicePath,
  serviceCategories,
  type ServiceCategory,
} from "@/lib/services-navigation";

export type SearchResultType = "Page" | "Service" | "Category" | "Concern" | "Package";

export type SearchResult = {
  id: string;
  title: string;
  href: string;
  type: SearchResultType;
  description?: string;
  group?: string;
};

const staticPages: SearchResult[] = [
  { id: "page-home", title: "Home", href: "/", type: "Page" },
  { id: "page-about", title: "About", href: "/about", type: "Page" },
  { id: "page-services", title: "Services", href: "/services", type: "Page", description: "Browse all treatments by category or concern" },
  { id: "page-packages", title: "Packages", href: "/packages", type: "Page", description: "Membership and treatment packages" },
  { id: "page-before-after", title: "Before & After", href: "/before-after", type: "Page" },
  { id: "page-blog", title: "Blog", href: "/blog", type: "Page" },
  { id: "page-contact", title: "Contact", href: "/contact", type: "Page" },
];

function buildSearchIndex(): SearchResult[] {
  const entries: SearchResult[] = [...staticPages];
  const seenHrefs = new Set(staticPages.map((p) => p.href));

  for (const category of serviceCategories) {
    const href = `/services/${category}`;
    if (!seenHrefs.has(href)) {
      seenHrefs.add(href);
      entries.push({
        id: `category-${category}`,
        title: categoryTitles[category],
        href,
        type: "Category",
        description: `View all ${categoryTitles[category].toLowerCase()} treatments`,
        group: "Services",
      });
    }
  }

  for (const column of megaMenuColumns) {
    const categoryLabel = column.title.replace(/&/g, "and").toLowerCase();

    if (!seenHrefs.has(column.viewAll.href)) {
      seenHrefs.add(column.viewAll.href);
      entries.push({
        id: `category-view-${column.viewAll.href}`,
        title: column.viewAll.label.replace(/\s*→\s*$/, ""),
        href: column.viewAll.href,
        type: "Category",
        group: column.title,
      });
    }

    for (const link of column.links) {
      if (seenHrefs.has(link.href)) continue;
      seenHrefs.add(link.href);
      const parsed = parseServicePath(link.href);
      entries.push({
        id: `service-${link.href}`,
        title: link.label,
        href: link.href,
        type: "Service",
        group: column.title,
        description: parsed
          ? `${categoryTitles[parsed.category as ServiceCategory] ?? parsed.category} treatment`
          : categoryLabel,
      });
    }
  }

  for (const concern of concernDefinitions) {
    const href = `/concerns/${concern.slug}`;
    entries.push({
      id: `concern-${concern.slug}`,
      title: concern.title,
      href,
      type: "Concern",
      description: concern.intro,
      group: "Concerns",
    });
  }

  for (const pkg of membershipPackages) {
    entries.push({
      id: `package-${pkg.id}`,
      title: pkg.title,
      href: `/packages/${pkg.id}`,
      type: "Package",
      description: `${pkg.description}. ${pkg.listingDescription}`,
      group: "Packages",
    });
  }

  return entries;
}

const searchIndex = buildSearchIndex();

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .trim();
}

function scoreResult(result: SearchResult, query: string): number | null {
  const title = normalize(result.title);
  const description = normalize(result.description ?? "");
  const group = normalize(result.group ?? "");
  const type = normalize(result.type);

  if (title === query) return 0;
  if (title.startsWith(query)) return 1;
  if (title.includes(query)) return 2;
  if (group.includes(query)) return 3;
  if (description.includes(query)) return 4;
  if (type.includes(query)) return 5;

  const terms = query.split(/\s+/).filter(Boolean);
  if (terms.length > 1) {
    const haystack = `${title} ${description} ${group}`;
    if (terms.every((term) => haystack.includes(term))) return 6;
  }

  return null;
}

export function searchSite(query: string, limit = 12): SearchResult[] {
  const q = normalize(query);
  if (!q) return [];

  const ranked = searchIndex
    .map((result) => {
      const score = scoreResult(result, q);
      return score === null ? null : { result, score };
    })
    .filter((item): item is { result: SearchResult; score: number } => item !== null)
    .sort((a, b) => a.score - b.score || a.result.title.localeCompare(b.result.title));

  return ranked.slice(0, limit).map((item) => item.result);
}

export function getSearchIndexSize() {
  return searchIndex.length;
}
