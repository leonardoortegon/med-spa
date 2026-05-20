import { businessLocation } from "@/lib/business-location";
export type PackageId =
  | "glow"
  | "injectable"
  | "wellness"
  | "laser"; /** * Full-size art for `/packages` and `/packages/[package]`: * membership-package-glow.jpg, -injectable.jpg, -wellness.jpg, -laser.jpg * Bump `MEMBERSHIP_PACKAGE_IMAGE_REVISION` when replacing those files. */
export const MEMBERSHIP_PACKAGE_IMAGE_REVISION = "2";
export function membershipPackageImagePath(id: PackageId): string {
  return `/membership-package-${id}.jpg`;
}
export function membershipPackageImageSrc(basePath: string): string {
  return `${basePath}?v=${MEMBERSHIP_PACKAGE_IMAGE_REVISION}`;
} /** * Smaller card thumbnails for the homepage packages strip only: * package-glow.jpg, package-injectable.jpg, package-wellness.jpg, package-laser.jpg */
export function homepagePackageImagePath(id: PackageId): string {
  return `/package-${id}.jpg`;
}
export type PackageFaq = { question: string; answer: string };
export type PackageRelatedLink = { label: string; href: string };
export type PackageWhatToExpect = {
  gettingStarted: string;
  visitRhythm: string;
  memberPerks: string;
  planningAhead: string;
};
export type PackagePageContent = {
  id: PackageId;
  title: string;
  /** Short line for cards and listings */ description: string;
  imageSrc: string;
  metaDescription: string;
  heroDescription: string;
  /** Expanded copy for the packages hub listing rows */ listingDescription: string;
  whatsIncluded: string[];
  howItWorks: string[];
  idealFor: string[];
  whatToExpect: PackageWhatToExpect;
  providerTrust: { heading: string; body: string[] };
  faqs: PackageFaq[];
  relatedPackages: PackageRelatedLink[];
};
const packagePages: PackagePageContent[] = [
  {
    id: "glow",
    title: "Glow Package",
    description: "Monthly facial + skincare perks",
    imageSrc: membershipPackageImagePath("glow"),
    metaDescription:
      "Glow membership in Coral Springs, monthly HydraFacial or medical facial plus skincare perks. Predictable glow upkeep at Med Spa.",
    heroDescription:
      "Keep clarity, hydration, and event-ready skin on a steady rhythm. The Glow Package bundles your monthly facial with member-only skincare value so upkeep feels planned, not last-minute.",
    listingDescription:
      "One signature facial each month, HydraFacial or medical facial matched to your skin, plus member pricing on add-ons and skincare perks.",
    whatsIncluded: [
      "One signature facial per month (HydraFacial or medical facial, based on skin needs)",
      "Member pricing on select add-ons such as dermaplaning or light peel boosters",
      "Periodic skincare product credits or discounts (plan-specific at enrollment)",
      "Priority booking windows for facial appointments",
      "Seasonal skin check-in to adjust home care and in-office steps",
    ],
    howItWorks: [
      "You enroll with a clear monthly or annual structure, our team explains what’s included before you commit.",
      "Each month you reserve your facial slot; we track your history so we don’t restart from zero every visit.",
      "Add-ons are optional and quoted upfront when you want more correction or glow before an event.",
      "If your skin shifts (breakouts, dryness, pigmentation), we tweak modalities within the package rather than pushing unrelated upsells.",
    ],
    idealFor: [
      "Maintenance-focused patients",
      "Busy professionals who want predictable self-care",
      "Pre-event skin prep",
      "Acne-prone or congested skin needing regular decongestion",
      "Anyone building a simple, consistent routine",
    ],
    whatToExpect: {
      gettingStarted:
        "Quick enrollment consult or desk review of terms, inclusions, and your skin goals, no pressure to add unrelated treatments the same day.",
      visitRhythm:
        "Plan for one facial visit per month; appointments are typically 45 to 75 minutes depending on the modality selected.",
      memberPerks:
        "Bundled pricing versus paying à la carte each visit, exact savings shared at signup based on current menu pricing.",
      planningAhead:
        "We’ll note preferred days/times and remind you when your monthly benefit is available; pausing or changes are discussed with the front desk per policy.",
    },
    providerTrust: {
      heading: "Skin care under clinical oversight",
      body: [
        "Facials are selected and supervised with your skin health in mind, active breakouts, sensitivities, and recent procedures are factored into what we perform.",
        "Providers can escalate to in-office treatments outside the package when candidacy makes sense, without blurring medical vs. cosmetic boundaries.",
      ],
    },
    faqs: [
      {
        question: "Can I choose HydraFacial every month?",
        answer:
          "Often yes, if your skin tolerates it well. We may rotate modalities seasonally, for example, more hydration in winter, more exfoliation when appropriate in summer.",
      },
      {
        question: "What if I miss a month?",
        answer:
          "Policies vary by plan; ask at enrollment. Some memberships allow a short rollover or credit window, others do not, get clarity in writing before you join.",
      },
      {
        question: "Is there a contract?",
        answer:
          "Terms depend on the membership tier you select. We outline minimum commitment, cancellation notice, and any startup fees before you sign up.",
      },
      {
        question: "Can I share my membership?",
        answer:
          "Memberships are individual and tied to one patient profile. Couples or family plans, if offered, are described separately at the front desk.",
      },
    ],
    relatedPackages: [
      { label: "Injectable Package", href: "/packages/injectable" },
      { label: "Wellness Package", href: "/packages/wellness" },
      { label: "Laser Packages", href: "/packages/laser" },
    ],
  },
  {
    id: "injectable",
    title: "Injectable Package",
    description: "Savings toward wrinkle relaxers and filler",
    imageSrc: membershipPackageImagePath("injectable"),
    metaDescription:
      "Injectable membership in Coral Springs, member savings on Botox, filler, and related injectables with licensed providers at Med Spa.",
    heroDescription:
      "Plan neuromodulator and filler maintenance with transparent member pricing. The Injectable Package helps you budget for refresh visits without guessing what each syringe or unit will cost at every appointment.",
    listingDescription:
      "Member rates on Botox and select fillers with time to plan safe refresh visits. Savings and touch-up policies are explained before you enroll.",
    whatsIncluded: [
      "Member rates on neuromodulators (e.g, Botox) and select fillers",
      "Banking or allotment structures toward units or syringes (plan-specific)",
      "Consultation time to sequence tox and filler safely",
      "Touch-up policy explained at enrollment",
      "Optional add-on pricing for lip, cheek, jawline, or balancing visits",
    ],
    howItWorks: [
      "We start with a baseline consult, movement patterns, volume loss, and timing between tox and filler matter for natural results.",
      "Your membership defines how savings apply: per-unit discounts, pre-purchased allotments, or tiered benefits.",
      "When you’re due for maintenance, you book an injector visit; dosing is adjusted from prior visits, not a one-size template.",
      "If goals change (softer look, more structure, event timing), we adapt within medical guidelines and your remaining benefits.",
    ],
    idealFor: [
      "Regular tox patients",
      "Filler maintenance every 9 to 18 months",
      "Patients combining subtle tox + filler",
      "Jawline / masseter tox for TMJ or slimming",
      "Anyone wanting predictable injectable spend",
    ],
    whatToExpect: {
      gettingStarted:
        "Medical history, prior injectable review, and photography when helpful, then a written summary of how membership pricing applies to your goals.",
      visitRhythm:
        "Tox maintenance is commonly every 3 to 4 months; filler touch-ups vary by area and product, your injector maps a realistic calendar.",
      memberPerks:
        "Savings accrue on repeat visits versus walk-in pricing; exact unit/syringe economics are quoted at signup.",
      planningAhead:
        "We help you schedule before benefits expire if your plan has time limits, and coordinate swelling/downtime around events when you flag dates.",
    },
    providerTrust: {
      heading: "Injectables with licensed clinicians",
      body: [
        "All injections are performed by qualified medical professionals with anatomy-first training, placement and dosing are documented visit to visit.",
        "We discuss risks, asymmetry, and realistic outcomes before treatment; you’ll never be rushed into areas you didn’t ask about.",
      ],
    },
    faqs: [
      {
        question: "Does membership include unlimited Botox?",
        answer:
          "No, plans offer defined discounts or allotments, not unlimited product. You’ll see how many units or areas your tier supports before enrolling.",
      },
      {
        question: "Can I use benefits on any injector?",
        answer:
          "Benefits apply within our practice under the policies you sign. Provider continuity helps us track your response over time.",
      },
      {
        question: "What if I need more filler than my plan includes?",
        answer:
          "Additional syringes are available at member add-on rates quoted the day of treatment after you approve the plan.",
      },
      {
        question: "Can I cancel if I don’t like results?",
        answer:
          "Cancellation terms are separate from clinical outcomes, we address concerns medically first; membership cancellation follows the policy you agreed to at enrollment.",
      },
    ],
    relatedPackages: [
      { label: "Glow Package", href: "/packages/glow" },
      { label: "Wellness Package", href: "/packages/wellness" },
      { label: "Laser Packages", href: "/packages/laser" },
    ],
  },
  {
    id: "wellness",
    title: "Wellness Package",
    description: "IV therapy, vitamin shots, recovery support",
    imageSrc: membershipPackageImagePath("wellness"),
    metaDescription:
      "Wellness membership in Coral Springs, IV therapy, vitamin injections, and recovery support bundles at Med Spa.",
    heroDescription:
      "Support energy, hydration, and recovery with a membership built around IV lounges, vitamin shots, and medically guided wellness visits, not vague spa promises.",
    listingDescription:
      "IV therapy, vitamin shots, and recovery support with clinical screening each visit. Your plan defines which blends are included and how often you can come in.",
    whatsIncluded: [
      "Monthly or bundled IV therapy sessions (formula depends on plan)",
      "Vitamin injection credits or discounted IM shots",
      "Hydration and recovery protocols discussed with clinical staff",
      "Member pricing on select add-ons (e.g, extra IV fluids, boosters)",
      "Periodic wellness check-ins for goals and labs when appropriate",
    ],
    howItWorks: [
      "Enrollment clarifies which IV blends and shots are in-scope, and how often you can visit.",
      "Each session starts with screening questions and consent; we don’t infuse without a clinical green light.",
      "We track what you’ve received so ingredients aren’t duplicated blindly month to month.",
      "If you need medical weight loss, hormone, or peptide conversations, we route you to the right provider visit, not a one-size IV menu.",
    ],
    idealFor: [
      "Dehydration / travel recovery",
      "Athletic recovery routines",
      "Fatigue with cleared medical workup",
      "Patients already enjoying IVs who want savings",
      "Wellness maintenance between busier seasons",
    ],
    whatToExpect: {
      gettingStarted:
        "Review health history, medications, and allergies; confirm IV access is appropriate. Plans and pricing are documented before your first infusion.",
      visitRhythm:
        "Sessions often run 30 to 60 minutes in a quiet lounge setting; frequency depends on your tier (e.g, monthly IV).",
      memberPerks:
        "Bundled per-session pricing vs. single visits; booster shots may roll in at reduced member rates.",
      planningAhead:
        "Hydrate before appointments as directed; book around travel or training cycles when you want recovery support most.",
    },
    providerTrust: {
      heading: "Wellness with medical screening",
      body: [
        "IV and injection services follow clinical protocols, vitals, contraindications, and ingredient selection are supervised, not trendy guesswork.",
        "We refer out when symptoms need diagnostics beyond wellness infusions, and document what you receive each visit.",
      ],
    },
    faqs: [
      {
        question: "Are IV memberships the same as medical weight loss?",
        answer:
          "No, weight management programs are separate tracks. Wellness memberships focus on hydration, vitamin support, and recovery unless your plan explicitly states otherwise.",
      },
      {
        question: "How often can I get IVs?",
        answer:
          "Your tier sets the cadence. We won’t exceed safe spacing just because a benefit is available, clinical judgment comes first.",
      },
      {
        question: "Do you take insurance?",
        answer:
          "Cosmetic and elective wellness services are typically self-pay. Ask the front desk for HSA/FSA eligibility guidance if applicable.",
      },
      {
        question: "What if I’m needle-phobic?",
        answer:
          "Let us know, we can discuss smaller-volume options, topical numbing when appropriate, or whether IM shots fit better than large IV sessions.",
      },
    ],
    relatedPackages: [
      { label: "Glow Package", href: "/packages/glow" },
      { label: "Injectable Package", href: "/packages/injectable" },
      { label: "Laser Packages", href: "/packages/laser" },
    ],
  },
  {
    id: "laser",
    title: "Laser Packages",
    description: "Treatment bundles for long-term results",
    imageSrc: membershipPackageImagePath("laser"),
    metaDescription:
      "Laser membership packages in Coral Springs, bundled hair removal, resurfacing, and light-based treatments for long-term results.",
    heroDescription:
      "Series-based laser care works best on a schedule. Laser Packages bundle sessions for hair removal, pigment, or resurfacing so you stay on protocol, not five sessions spread across years.",
    listingDescription:
      "Bundled laser sessions for hair removal, pigment, or resurfacing on a steady schedule. We confirm candidacy and map your protocol before you start.",
    whatsIncluded: [
      "Multi-session bundles for eligible laser or light devices",
      "Member pricing on maintenance passes after initial series",
      "Consultation to match device to skin type and goal",
      "Pre- and post-care instructions each visit",
      "Touch-up session policies defined at enrollment",
    ],
    howItWorks: [
      "We confirm candidacy for your skin tone, medications, and sun exposure habits before selling a bundle.",
      "Packages map to a protocol, e.g, six hair-removal sessions on an interval, or a set number of resurfacing passes.",
      "Each visit logs settings and responses so we adjust energy and spacing safely.",
      "Maintenance pricing kicks in after your series when you want to preserve results long term.",
    ],
    idealFor: [
      "Laser hair removal series",
      "Sun damage / pigment programs",
      "Texture and resurfacing journeys",
      "Patients who need interval reminders",
      "Long-term hair or pigment maintenance",
    ],
    whatToExpect: {
      gettingStarted:
        "Test spot or full consult when required, clear timeline for sessions, and written package terms including device, areas, and expiry if applicable.",
      visitRhythm:
        "Spacing depends on treatment, hair removal is often 4 to 8 weeks apart; resurfacing may need longer gaps. We book your next visit before you leave.",
      memberPerks:
        "Per-session cost within a package is lower than single visits; maintenance tiers may apply after the core series.",
      planningAhead:
        "Sun avoidance and home care matter, plan around vacations and outdoor events; we’ll tell you when to pause if you’ve had recent sun.",
    },
    providerTrust: {
      heading: "Laser care with protocol discipline",
      body: [
        "Treatments are performed or supervised by trained laser staff with device-specific safety checklists.",
        "We won’t treat through active tan, certain medications, or unrealistic timelines, better to delay than risk pigment problems.",
      ],
    },
    faqs: [
      {
        question: "How many sessions are in a package?",
        answer:
          "Depends on area and device, hair removal often needs 6 to 8 sessions; pigment or resurfacing plans vary. You’ll get a number at consult, not a vague “unlimited.”",
      },
      {
        question: "Do packages expire?",
        answer:
          "Some do. Ask for the validity window in writing and how extensions work if you pause for pregnancy, travel, or medical reasons.",
      },
      {
        question: "Is laser safe for my skin tone?",
        answer:
          "We assess Fitzpatrick type, recent sun, and device capabilities. If you’re not a candidate for a wavelength, we’ll say so and discuss alternatives.",
      },
      {
        question: "Can I combine laser with facials or injectables?",
        answer:
          "Often yes with spacing rules, we sequence visits to reduce irritation and protect healing skin.",
      },
    ],
    relatedPackages: [
      { label: "Glow Package", href: "/packages/glow" },
      { label: "Injectable Package", href: "/packages/injectable" },
      { label: "Wellness Package", href: "/packages/wellness" },
    ],
  },
];
export const membershipPackages = packagePages.map((pkg) => ({
  id: pkg.id,
  title: pkg.title,
  description: pkg.description,
  listingDescription: pkg.listingDescription,
  imageSrc: pkg.imageSrc,
})); /** Homepage card strip, same copy, smaller `package-*.jpg` assets (not membership-package-*). */
export const homepageMembershipPackages = packagePages.map((pkg) => ({
  id: pkg.id,
  title: pkg.title,
  description: pkg.description,
  imageSrc: homepagePackageImagePath(pkg.id),
}));
export function getPackageIds(): PackageId[] {
  return packagePages.map((p) => p.id);
}
export function getPackagePageContent(
  id: string,
): PackagePageContent | undefined {
  return packagePages.find((p) => p.id === id);
}
export function getPracticeCity(): string {
  return businessLocation.addressLocality;
}
export function packagePageJsonLd(
  content: PackagePageContent,
  canonicalPath: string,
): Record<string, unknown>[] {
  const city = getPracticeCity();
  return [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: `${content.title} in ${city}`,
      description: content.metaDescription,
      url: canonicalPath,
      brand: { "@type": "Organization", name: businessLocation.practiceName },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: content.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];
}
