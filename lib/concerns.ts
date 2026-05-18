export type ConcernRecommendation = { label: string; href: string };

export type ConcernDefinition = {
  slug: string;
  title: string;
  intro: string;
  recommendations: ConcernRecommendation[];
};

export const concernDefinitions: ConcernDefinition[] = [
  {
    slug: "fine-lines-wrinkles",
    title: "Fine lines & wrinkles",
    intro:
      "If expression lines or crepey texture show up where you’d like smoother, fresher skin, options span everything from neuromodulators to resurfacing—chosen once we understand where lines form and how deep they go.",
    recommendations: [
      { label: "Botox & wrinkle relaxers", href: "/services/injectables/botox" },
      { label: "Sculptra collagen stimulation", href: "/services/injectables/sculptra" },
      { label: "Microneedling", href: "/services/skin-treatments/microneedling" },
      { label: "Fractional laser resurfacing", href: "/services/laser-light/fractional-laser" },
    ],
  },
  {
    slug: "acne-acne-scars",
    title: "Acne & acne scars",
    intro:
      "Active breakouts and post-inflammatory marks call for different tools than textural scarring. We usually blend targeted skin procedures with home-care direction so improvement is sustainable.",
    recommendations: [
      { label: "Acne treatments", href: "/services/skin-treatments/acne-treatment" },
      { label: "Acne scar treatments", href: "/services/skin-treatments/acne-scars" },
      { label: "Chemical peels", href: "/services/skin-treatments/chemical-peels" },
      { label: "RF microneedling", href: "/services/skin-treatments/rf-microneedling" },
    ],
  },
  {
    slug: "sun-damage-pigmentation",
    title: "Sun damage & pigmentation",
    intro:
      "Uneven tone after UV exposure often combines surface pigment with deeper melasma—treatment plans vary by depth, skin type, and whether you’re looking for single-session brightening versus gradual correction.",
    recommendations: [
      { label: "IPL photofacial", href: "/services/laser-light/ipl-photofacial" },
      { label: "Pigmentation treatments", href: "/services/laser-light/pigmentation-treatment" },
      { label: "Melasma treatments", href: "/services/laser-light/melasma-treatment" },
      { label: "Chemical peels", href: "/services/skin-treatments/chemical-peels" },
    ],
  },
  {
    slug: "skin-texture-pores",
    title: "Skin texture & pores",
    intro:
      "Rough texture and visible pores respond well to a combination of controlled resurfacing and collagen-stimulating modalities—often staggered so skin barrier stays healthy between visits.",
    recommendations: [
      { label: "HydraFacial", href: "/services/skin-treatments/hydrafacial" },
      { label: "Microneedling", href: "/services/skin-treatments/microneedling" },
      { label: "RF microneedling", href: "/services/skin-treatments/rf-microneedling" },
      { label: "Fractional laser resurfacing", href: "/services/laser-light/fractional-laser" },
    ],
  },
  {
    slug: "facial-volume-loss",
    title: "Facial volume loss",
    intro:
      "When cheeks, under-eyes, or lips look hollow or deflated, fillers and biostimulators can restore structure—placement strategy matters as much as product choice for a natural, lifted look.",
    recommendations: [
      { label: "Lip filler", href: "/services/injectables/lip-filler" },
      { label: "Cheek filler", href: "/services/injectables/cheek-filler" },
      { label: "Under eye filler", href: "/services/injectables/under-eye-filler" },
      { label: "Facial balancing", href: "/services/injectables/facial-balancing" },
    ],
  },
  {
    slug: "unwanted-hair",
    title: "Unwanted hair",
    intro:
      "Laser hair removal targets pigment in actively growing follicles—and usually takes a series spaced to your treatment zone. A consult confirms skin type fit, expectations, and maintenance interval.",
    recommendations: [
      { label: "Laser hair removal", href: "/services/laser-light/laser-hair-removal" },
      { label: "Browse all laser & light", href: "/services/laser-light" },
    ],
  },
  {
    slug: "body-fat-loose-skin",
    title: "Body fat & loose skin",
    intro:
      "Goals here might be fat reduction, firmer skin, muscle tone—or a blend. Technologies differ by downtime, area size, and whether the issue is pinchable fat versus laxity.",
    recommendations: [
      { label: "CoolSculpting", href: "/services/body-contouring/coolsculpting" },
      { label: "Emsculpt Neo", href: "/services/body-contouring/emsculpt-neo" },
      { label: "Fat reduction", href: "/services/body-contouring/fat-reduction" },
      { label: "Skin tightening", href: "/services/body-contouring/skin-tightening" },
    ],
  },
  {
    slug: "hair-thinning",
    title: "Hair thinning",
    intro:
      "Thinning may involve shedding cycles, density changes at the part line, or both. PRP and growth-focused protocols are most effective when we match therapy to scalp condition and shedding pattern.",
    recommendations: [
      { label: "PRP hair restoration", href: "/services/hair-restoration/prp-hair-restoration" },
      { label: "Hair growth treatments", href: "/services/hair-restoration/hair-growth-treatment" },
      { label: "Hair restoration overview", href: "/services/hair-restoration" },
    ],
  },
  {
    slug: "low-energy-wellness",
    title: "Low energy & wellness",
    intro:
      "Fatigue, stress load, weight plateaus, and hormone shifts often overlap. Wellness plans here focus on measurable support—hydration, metabolism, hormones, and recovery—aligned with your labs and lifestyle.",
    recommendations: [
      { label: "IV therapy", href: "/services/wellness/iv-therapy" },
      { label: "NAD+ therapy", href: "/services/wellness/nad-therapy" },
      { label: "Hormone optimization", href: "/services/wellness/hormone-optimization" },
      { label: "Medical weight loss", href: "/services/wellness/medical-weight-loss" },
    ],
  },
];

export function getConcernBySlug(slug: string): ConcernDefinition | undefined {
  return concernDefinitions.find((c) => c.slug === slug);
}
