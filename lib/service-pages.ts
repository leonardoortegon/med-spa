import { businessLocation } from "@/lib/business-location";
import { getServiceLinkLabel, isServiceCategory, type ServiceCategory } from "@/lib/services-navigation";

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceRelatedTreatment = {
  label: string;
  href: string;
};

export type ServiceWhatToExpect = {
  consultation: string;
  treatmentTime: string;
  downtime: string;
  resultsTimeline: string;
};

export type ServiceBeforeAfter = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  disclaimer: string;
};

export type ServicePageContent = {
  /** Short name for headings, e.g. "Botox" not "Botox & Wrinkle Relaxers". */
  displayName: string;
  metaDescription: string;
  heroDescription: string;
  whatItTreats: string[];
  howItWorks: string[];
  treatmentAreas: string[];
  whatToExpect: ServiceWhatToExpect;
  beforeAfter?: ServiceBeforeAfter;
  providerTrust: {
    heading: string;
    body: string[];
  };
  faqs: ServiceFaq[];
  relatedTreatments: ServiceRelatedTreatment[];
};

const servicePages: Partial<Record<ServiceCategory, Partial<Record<string, ServicePageContent>>>> = {
  injectables: {
    botox: {
      displayName: "Botox",
      metaDescription:
        "Botox in Coral Springs for forehead lines, crow’s feet, and frown lines. Natural-looking neuromodulator treatment with licensed providers. Book a consultation.",
      heroDescription:
        "Soften expression lines without looking frozen. Our Coral Springs team maps dosing to your anatomy and goals—forehead, eyes, jaw, and beyond—for refreshed movement that still looks like you.",
      whatItTreats: [
        "Forehead lines and horizontal creases",
        "Crow’s feet at the outer corners of the eyes",
        "Frown lines between the brows (the “11s”)",
        "Bunny lines on the nose",
        "Lip lines and a subtle lip flip when appropriate",
        "Masseter / jaw slimming and TMJ-related tension",
        "Neck bands and select lower-face lines",
        "Hyperhidrosis (excessive underarm sweating)",
      ],
      howItWorks: [
        "Botox is a neuromodulator—it temporarily limits nerve signals to targeted muscles so they relax and lines look softer when your face is at rest.",
        "We mark injection points based on how you animate (raise your brows, squint, smile) so placement respects your natural asymmetry.",
        "Most visits take about 15–20 minutes. You can return to normal activities the same day with a few simple aftercare steps.",
        "Results are gradual: you’ll notice softening over several days, with peak effect typically around 10–14 days.",
      ],
      treatmentAreas: [
        "Forehead",
        "Glabella (frown / “11” lines)",
        "Crow’s feet",
        "Brow lift (tail of brow)",
        "Under-eye / bunny lines",
        "Lips (lip flip)",
        "Masseter / jawline",
        "Neck (platysmal bands)",
        "Underarms (hyperhidrosis)",
      ],
      whatToExpect: {
        consultation:
          "We review your medical history, medications, and prior injectables; discuss goals; and agree on a conservative or fuller plan before any treatment.",
        treatmentTime:
          "About 15–20 minutes in-office. Numbing is usually optional—many patients tolerate fine needles without it.",
        downtime:
          "Minimal. Avoid rubbing the area, heavy workouts, and lying flat for a few hours. Minor pinpoint redness or swelling can fade within hours.",
        resultsTimeline:
          "Early changes in 3–5 days; peak around 10–14 days. Maintenance is typically every 3–4 months, adjusted to how your muscles respond.",
      },
      beforeAfter: {
        beforeSrc: "/injectables-before.jpg",
        afterSrc: "/injectables-after.jpg",
        beforeAlt: "Before neuromodulator treatment",
        afterAlt: "After neuromodulator treatment",
        disclaimer:
          "Individual results vary. Photos are illustrative; your plan and outcomes depend on anatomy, dosing, and follow-up care. Not a guarantee of results.",
      },
      providerTrust: {
        heading: "Who performs your Botox",
        body: [
          "Injectables are administered by licensed medical professionals trained in facial anatomy—not estheticians performing cosmetic procedures without medical oversight.",
          "We prioritize conservative dosing, symmetry checks at animation, and honest candidacy conversations so expectations match what neuromodulators can achieve.",
          "You receive written aftercare, access for questions if something feels unusual, and follow-up guidance for maintenance timing.",
        ],
      },
      faqs: [
        {
          question: "How long does Botox last?",
          answer:
            "Most patients enjoy results for about 3–4 months. Metabolism, muscle strength, dose, and treatment area all influence duration—your provider will recommend a maintenance cadence at follow-up.",
        },
        {
          question: "Does Botox hurt?",
          answer:
            "Discomfort is usually mild—brief pinches with very fine needles. Ice or topical numbing can be used if you’re sensitive; most visits are quick and well tolerated.",
        },
        {
          question: "When will I see results?",
          answer:
            "You may notice softening within 3–5 days. Peak effect is commonly around 10–14 days. We can schedule a two-week check if small tweaks are appropriate.",
        },
        {
          question: "Is there downtime?",
          answer:
            "Little to none for most people. Avoid rubbing treated areas, saunas, and strenuous exercise for the rest of the day. Bruising is possible but usually minor and coverable.",
        },
        {
          question: "Will I look frozen?",
          answer:
            "Not when dosing is tailored to your movement. Our approach aims for smoother lines at rest while preserving expression—tell us if you prefer ultra-subtle or a bit stronger correction.",
        },
        {
          question: "Who is not a candidate?",
          answer:
            "Pregnancy, breastfeeding, certain neuromuscular conditions, and active infection at injection sites are common reasons to wait. Share your full medical history at consultation.",
        },
      ],
      relatedTreatments: [
        { label: "Lip filler", href: "/services/injectables/lip-filler" },
        { label: "Sculptra", href: "/services/injectables/sculptra" },
        { label: "Microneedling", href: "/services/skin-treatments/microneedling" },
        { label: "Skin tightening (laser)", href: "/services/laser-light/skin-tightening" },
      ],
    },
  },
};

export function getPracticeCity(): string {
  return businessLocation.addressLocality;
}

export function getServicePageContent(
  category: ServiceCategory,
  service: string,
  menuLabel: string,
): ServicePageContent {
  const custom = servicePages[category]?.[service];
  if (custom) return custom;
  return buildFallbackServiceContent(category, service, menuLabel);
}

function buildFallbackServiceContent(
  category: ServiceCategory,
  service: string,
  menuLabel: string,
): ServicePageContent {
  const displayName = menuLabel.split(" & ")[0]?.split(" / ")[0]?.trim() || menuLabel;
  const city = getPracticeCity();

  return {
    displayName,
    metaDescription: `${displayName} in ${city}. Learn what it treats, what to expect, and book a consultation at Med Spa.`,
    heroDescription: `Explore ${displayName} with a medically guided team in ${city}. We’ll align candidacy, timing, and goals before recommending a personalized plan.`,
    whatItTreats: [
      "Concerns commonly addressed within this treatment category",
      "Combination approaches when multiple modalities support your goals",
      "Maintenance and sequencing discussed at consultation",
    ],
    howItWorks: [
      `${displayName} is selected when it fits your anatomy, skin or body goals, and comfort with downtime.`,
      "Your provider explains how the technology or product works in plain language—not jargon—and what success looks like for you.",
      "Sessions, devices, or formulas are chosen for your presentation; plans can combine in-office care with home support.",
    ],
    treatmentAreas: [
      "Face",
      "Perioral / lips",
      "Eyes",
      "Jaw & neck",
      "Body (when applicable)",
    ],
    whatToExpect: {
      consultation:
        "Medical history, photos when helpful, and an honest conversation about timing, investment, and alternatives.",
      treatmentTime:
        "Varies by modality—your coordinator will quote length at booking after your consult.",
      downtime:
        "Ranges from none to several days depending on intensity; written aftercare is provided.",
      resultsTimeline:
        "Some treatments show early change quickly; collagen-building or series-based plans unfold over weeks to months.",
    },
    providerTrust: {
      heading: "Medical oversight you can ask questions about",
      body: [
        "Treatments are delivered under licensed clinical supervision with attention to safety, anatomy, and informed consent.",
        "We document your plan, explain risks and realistic outcomes, and adjust follow-up if your skin or body response evolves.",
      ],
    },
    faqs: [
      {
        question: "How do I know if I’m a candidate?",
        answer:
          "A consultation is the right start—we review health history, goals, and prior treatments before recommending a specific protocol.",
      },
      {
        question: "Does it hurt?",
        answer:
          "Comfort varies by treatment. We discuss numbing, sensation, and pacing so you know what to expect before you commit.",
      },
      {
        question: "When will I see results?",
        answer:
          "Timelines depend on the modality—some changes are immediate, others build over a series. Your provider outlines milestones at consult.",
      },
      {
        question: "Is there downtime?",
        answer:
          "From none to several days is possible. You’ll receive clear guidance on activity, sun, skincare, and follow-up visits.",
      },
    ],
    relatedTreatments: getDefaultRelatedForCategory(category, service),
  };
}

function getDefaultRelatedForCategory(
  category: ServiceCategory,
  currentService: string,
): ServiceRelatedTreatment[] {
  const pools: Record<ServiceCategory, ServiceRelatedTreatment[]> = {
    injectables: [
      { label: "Botox", href: "/services/injectables/botox" },
      { label: "Lip filler", href: "/services/injectables/lip-filler" },
      { label: "Cheek filler", href: "/services/injectables/cheek-filler" },
      { label: "Sculptra", href: "/services/injectables/sculptra" },
    ],
    "skin-treatments": [
      { label: "HydraFacial", href: "/services/skin-treatments/hydrafacial" },
      { label: "Microneedling", href: "/services/skin-treatments/microneedling" },
      { label: "Chemical peels", href: "/services/skin-treatments/chemical-peels" },
      { label: "RF microneedling", href: "/services/skin-treatments/rf-microneedling" },
    ],
    "laser-light": [
      { label: "Laser hair removal", href: "/services/laser-light/laser-hair-removal" },
      { label: "IPL photofacial", href: "/services/laser-light/ipl-photofacial" },
      { label: "Fractional laser", href: "/services/laser-light/fractional-laser" },
      { label: "Skin tightening", href: "/services/laser-light/skin-tightening" },
    ],
    "body-contouring": [
      { label: "CoolSculpting", href: "/services/body-contouring/coolsculpting" },
      { label: "Emsculpt Neo", href: "/services/body-contouring/emsculpt-neo" },
      { label: "Fat reduction", href: "/services/body-contouring/fat-reduction" },
      { label: "Skin tightening", href: "/services/body-contouring/skin-tightening" },
    ],
    "hair-restoration": [
      { label: "PRP hair restoration", href: "/services/hair-restoration/prp-hair-restoration" },
      { label: "Hair growth treatments", href: "/services/hair-restoration/hair-growth-treatment" },
      { label: "Microneedling", href: "/services/skin-treatments/microneedling" },
      { label: "IV therapy", href: "/services/wellness/iv-therapy" },
    ],
    wellness: [
      { label: "Medical weight loss", href: "/services/wellness/medical-weight-loss" },
      { label: "IV therapy", href: "/services/wellness/iv-therapy" },
      { label: "NAD+ therapy", href: "/services/wellness/nad-therapy" },
      { label: "Hormone optimization", href: "/services/wellness/hormone-optimization" },
    ],
  };

  return pools[category].filter((item) => !item.href.endsWith(`/${currentService}`)).slice(0, 4);
}

export function resolveServicePage(
  category: string,
  service: string,
): { content: ServicePageContent; menuLabel: string } | null {
  if (!isServiceCategory(category)) return null;
  const menuLabel = getServiceLinkLabel(category, service);
  if (!menuLabel) return null;
  const content = getServicePageContent(category, service, menuLabel);
  return { content, menuLabel };
}

export function servicePageJsonLd(
  content: ServicePageContent,
  categoryTitle: string,
  canonicalPath: string,
): Record<string, unknown>[] {
  const city = getPracticeCity();
  const name = `${content.displayName} in ${city}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      name,
      description: content.metaDescription,
      procedureType: categoryTitle,
      url: canonicalPath,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: content.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];
}
