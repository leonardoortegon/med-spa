export type MegaMenuLink = { label: string; href: string };

export type MegaMenuColumn = {
  title: string;
  viewAll: MegaMenuLink;
  links: MegaMenuLink[];
};

export const megaMenuColumns: MegaMenuColumn[] = [
  {
    title: "INJECTABLES",
    viewAll: { label: "View All Injectables →", href: "/services/injectables" },
    links: [
      { label: "Botox & Wrinkle Relaxers", href: "/services/injectables/botox" },
      { label: "Lip Filler", href: "/services/injectables/lip-filler" },
      { label: "Cheek Filler", href: "/services/injectables/cheek-filler" },
      { label: "Jawline & Chin Filler", href: "/services/injectables/jawline-filler" },
      { label: "Under Eye Filler", href: "/services/injectables/under-eye-filler" },
      { label: "Facial Balancing", href: "/services/injectables/facial-balancing" },
      { label: "Sculptra", href: "/services/injectables/sculptra" },
      { label: "Radiesse", href: "/services/injectables/radiesse" },
      { label: "Kybella", href: "/services/injectables/kybella" },
      { label: "Lip Flip", href: "/services/injectables/lip-flip" },
      { label: "Masseter / TMJ Botox", href: "/services/injectables/masseter-botox" },
      { label: "Hyperhidrosis Treatment", href: "/services/injectables/hyperhidrosis-treatment" },
    ],
  },
  {
    title: "SKIN TREATMENTS",
    viewAll: { label: "View All Skin Treatments →", href: "/services/skin-treatments" },
    links: [
      { label: "HydraFacial", href: "/services/skin-treatments/hydrafacial" },
      { label: "DiamondGlow Facial", href: "/services/skin-treatments/diamondglow" },
      { label: "Microneedling", href: "/services/skin-treatments/microneedling" },
      { label: "RF Microneedling", href: "/services/skin-treatments/rf-microneedling" },
      { label: "PRP Facial", href: "/services/skin-treatments/prp-facial" },
      { label: "Chemical Peels", href: "/services/skin-treatments/chemical-peels" },
      { label: "Dermaplaning", href: "/services/skin-treatments/dermaplaning" },
      { label: "Medical Facials", href: "/services/skin-treatments/medical-facials" },
      { label: "Acne Treatments", href: "/services/skin-treatments/acne-treatment" },
      { label: "Acne Scar Treatments", href: "/services/skin-treatments/acne-scars" },
      { label: "Rosacea & Redness", href: "/services/skin-treatments/rosacea-redness" },
      { label: "Collagen Stimulation", href: "/services/skin-treatments/collagen-stimulation" },
    ],
  },
  {
    title: "LASER & LIGHT",
    viewAll: { label: "View All Laser Treatments →", href: "/services/laser-light" },
    links: [
      { label: "Laser Hair Removal", href: "/services/laser-light/laser-hair-removal" },
      { label: "IPL Photofacial", href: "/services/laser-light/ipl-photofacial" },
      { label: "Fractional Laser Resurfacing", href: "/services/laser-light/fractional-laser" },
      { label: "CO2 Laser Resurfacing", href: "/services/laser-light/co2-laser" },
      { label: "Pigmentation Treatments", href: "/services/laser-light/pigmentation-treatment" },
      { label: "Melasma Treatments", href: "/services/laser-light/melasma-treatment" },
      { label: "Tattoo Removal", href: "/services/laser-light/tattoo-removal" },
      { label: "Vein Treatments", href: "/services/laser-light/vein-treatment" },
      { label: "Skin Tightening", href: "/services/laser-light/skin-tightening" },
      { label: "Red Light Therapy", href: "/services/laser-light/red-light-therapy" },
    ],
  },
  {
    title: "BODY CONTOURING",
    viewAll: { label: "View All Body Treatments →", href: "/services/body-contouring" },
    links: [
      { label: "CoolSculpting", href: "/services/body-contouring/coolsculpting" },
      { label: "Emsculpt Neo", href: "/services/body-contouring/emsculpt-neo" },
      { label: "Body Sculpting", href: "/services/body-contouring/body-sculpting" },
      { label: "Skin Tightening", href: "/services/body-contouring/skin-tightening" },
      { label: "Cellulite Reduction", href: "/services/body-contouring/cellulite-reduction" },
      { label: "Stretch Mark Treatments", href: "/services/body-contouring/stretch-marks" },
      { label: "Fat Reduction", href: "/services/body-contouring/fat-reduction" },
      { label: "Non-Surgical Contouring", href: "/services/body-contouring/non-surgical-contouring" },
      { label: "Arm Tightening", href: "/services/body-contouring/arm-tightening" },
      { label: "Abdomen Tightening", href: "/services/body-contouring/abdomen-tightening" },
    ],
  },
  {
    title: "WELLNESS & HAIR",
    viewAll: { label: "View All Wellness Services →", href: "/services/wellness" },
    links: [
      { label: "IV Therapy", href: "/services/wellness/iv-therapy" },
      { label: "Vitamin Injections", href: "/services/wellness/vitamin-injections" },
      { label: "NAD+ Therapy", href: "/services/wellness/nad-therapy" },
      { label: "Medical Weight Loss", href: "/services/wellness/medical-weight-loss" },
      { label: "GLP-1 Weight Loss", href: "/services/wellness/glp1-weight-loss" },
      { label: "Hormone Optimization", href: "/services/wellness/hormone-optimization" },
      { label: "Peptide Therapy", href: "/services/wellness/peptide-therapy" },
      { label: "Hydration Therapy", href: "/services/wellness/hydration-therapy" },
      { label: "PRP Hair Restoration", href: "/services/hair-restoration/prp-hair-restoration" },
      { label: "Hair Growth Treatments", href: "/services/hair-restoration/hair-growth-treatment" },
    ],
  },
];

const pathRe = /^\/services\/([^/]+)\/([^/]+)\/?$/;

export function parseServicePath(href: string): { category: string; service: string } | null {
  const m = href.match(pathRe);
  if (!m) return null;
  return { category: m[1], service: m[2] };
}

export function collectServiceStaticParams(): { category: string; service: string }[] {
  const out: { category: string; service: string }[] = [];
  const seen = new Set<string>();
  for (const col of megaMenuColumns) {
    for (const link of col.links) {
      const parsed = parseServicePath(link.href);
      if (!parsed) continue;
      const key = `${parsed.category}/${parsed.service}`;
      if (seen.has(key)) continue;
      seen.add(key);
      out.push({ category: parsed.category, service: parsed.service });
    }
  }
  return out;
}

export const serviceCategories = [
  "injectables",
  "skin-treatments",
  "laser-light",
  "body-contouring",
  "wellness",
  "hair-restoration",
] as const;

export type ServiceCategory = (typeof serviceCategories)[number];

export function isServiceCategory(value: string): value is ServiceCategory {
  return (serviceCategories as readonly string[]).includes(value);
}

export function getLinksForCategory(category: ServiceCategory): MegaMenuLink[] {
  const out: MegaMenuLink[] = [];
  for (const col of megaMenuColumns) {
    for (const link of col.links) {
      const p = parseServicePath(link.href);
      if (p?.category === category) out.push(link);
    }
  }
  return out;
}

export const categoryTitles: Record<ServiceCategory, string> = {
  injectables: "Injectables",
  "skin-treatments": "Skin treatments",
  "laser-light": "Laser & light",
  "body-contouring": "Body contouring",
  wellness: "Wellness",
  "hair-restoration": "Hair restoration",
};

export function getServiceLinkLabel(
  category: string,
  slug: string,
): string | undefined {
  const href = `/services/${category}/${slug}`;
  for (const col of megaMenuColumns) {
    for (const link of col.links) {
      if (link.href === href) return link.label;
    }
  }
  return undefined;
}
