export type BlogCategory =
  | "treatments"
  | "skin-health"
  | "wellness"
  | "tips"
  | "news";

export type BlogCategoryMeta = {
  id: BlogCategory;
  label: string;
  description: string;
};

export const blogCategories: BlogCategoryMeta[] = [
  {
    id: "treatments",
    label: "Treatments",
    description: "Injectables, lasers, facials, and what to expect from popular modalities.",
  },
  {
    id: "skin-health",
    label: "Skin health",
    description: "Acne, texture, pigment, and routines that support in-office care.",
  },
  {
    id: "wellness",
    label: "Wellness",
    description: "Hydration, recovery, metabolism, and medically guided support.",
  },
  {
    id: "tips",
    label: "Tips & guides",
    description: "Planning visits, budgeting care, and questions worth asking at consult.",
  },
  {
    id: "news",
    label: "News",
    description: "Clinic updates, new services, and seasonal offers.",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  category: BlogCategory;
  publishedAt: string;
  readMinutes: number;
  excerpt: string;
  intro: string;
  sections: { heading?: string; paragraphs: string[] }[];
  relatedSlugs?: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "botox-results-timeline",
    category: "treatments",
    title: "Botox results timeline: what to expect week by week",
    publishedAt: "2026-04-02",
    readMinutes: 5,
    excerpt:
      "From first softening to peak effect, a realistic calendar for neuromodulator visits and when to schedule a follow-up.",
    intro:
      "If you are new to Botox or returning after a long break, the timeline can feel opaque. Most patients notice gradual change rather than an overnight transformation, which is exactly what we want for natural movement.",
    sections: [
      {
        paragraphs: [
          "Days 1 to 3: You may have tiny bumps at injection sites that settle within hours. Avoid rubbing the area, strenuous exercise, and lying flat for the first evening if your provider recommends it.",
          "Days 4 to 7: Expression lines often start to soften when you animate. Friends usually do not notice yet, but many patients feel a difference when they raise their brows or squint in the mirror.",
        ],
      },
      {
        heading: "Peak effect and maintenance",
        paragraphs: [
          "Days 10 to 14: Peak effect is common around the two-week mark. This is the ideal window for a touch-up check if your injector offers one, especially for areas that move asymmetrically.",
          "Months 3 to 4: Metabolism, dose, and treatment area influence how long results last. Maintenance visits are typically planned on a cadence your provider sets at the first consult.",
        ],
      },
    ],
    relatedSlugs: ["lip-filler-swelling-tips", "first-med-spa-consultation"],
  },
  {
    slug: "hydrafacial-vs-medical-facial",
    category: "skin-health",
    title: "HydraFacial vs. medical facial: which fits your skin now?",
    publishedAt: "2026-03-18",
    readMinutes: 6,
    excerpt:
      "Both refresh the skin, but goals, downtime, and add-ons differ. Here is how we match the visit to congestion, events, and barrier health.",
    intro:
      "Patients often ask which facial is better. The honest answer depends on what your skin needs this month: decongestion before an event, barrier repair after travel, or a clinician-led plan for breakouts.",
    sections: [
      {
        heading: "HydraFacial strengths",
        paragraphs: [
          "HydraFacial is popular for consistent glow and clogged pores. The vortex tip cleanses, extracts lightly, and infuses serums in one pass, which makes it efficient when you want predictable upkeep.",
          "Downtime is usually minimal. Makeup can often be applied the same day if skin is not irritated.",
        ],
      },
      {
        heading: "When a medical facial makes sense",
        paragraphs: [
          "Medical facials may include peels, enzymes, or targeted actives chosen after a quick skin review. They can be better when you need correction, not just refresh.",
          "If you are on retinoids, recent injectables, or active breakouts, tell us upfront so we sequence actives safely.",
        ],
      },
    ],
    relatedSlugs: ["spf-and-pigmentation-basics", "microneedling-downtime-guide"],
  },
  {
    slug: "laser-hair-removal-prep",
    category: "treatments",
    title: "Laser hair removal prep: before your first session",
    publishedAt: "2026-03-05",
    readMinutes: 4,
    excerpt:
      "Shaving, sun exposure, medications, and skin tone all affect candidacy. Use this checklist before you book.",
    intro:
      "Laser hair removal works best on a series, not a single visit. Preparation protects your skin and helps each session stay on protocol.",
    sections: [
      {
        paragraphs: [
          "Shave the treatment area 24 hours before if directed. Do not wax or pluck, the laser targets pigment in the follicle during active growth.",
          "Avoid deliberate tanning for several weeks. Recent sun exposure can increase pigment risk and may require postponing treatment.",
        ],
      },
      {
        heading: "At your consult",
        paragraphs: [
          "Bring a list of medications and supplements. Some photosensitizing drugs affect scheduling.",
          "Your technician will confirm fitzpatrick type, hair color, and interval spacing for the body areas you want treated.",
        ],
      },
    ],
    relatedSlugs: ["membership-packages-explained", "botox-results-timeline"],
  },
  {
    slug: "membership-packages-explained",
    category: "tips",
    title: "Membership packages explained: glow, injectables, laser, wellness",
    publishedAt: "2026-02-20",
    readMinutes: 5,
    excerpt:
      "How bundled plans differ from single visits, what is usually included, and how to pick a tier that matches your cadence.",
    intro:
      "Packages are designed for patients who already know what keeps their skin on track. They bundle predictable visits with member pricing so upkeep feels planned, not reactive.",
    sections: [
      {
        paragraphs: [
          "Glow packages center on monthly facials and periodic skincare perks. Injectable packages focus on member rates and allotments for tox or filler maintenance.",
          "Laser packages map to multi-session protocols such as hair removal series or pigment plans. Wellness packages may include IV or vitamin support with clinical screening each visit.",
        ],
      },
      {
        heading: "Before you enroll",
        paragraphs: [
          "Ask for written terms: commitment length, rollover rules, and what happens if you pause for travel or pregnancy.",
          "Match the tier to realistic visit frequency. A package only saves money if you actually use the benefits on schedule.",
        ],
      },
    ],
    relatedSlugs: ["first-med-spa-consultation", "laser-hair-removal-prep"],
  },
  {
    slug: "spf-and-pigmentation-basics",
    category: "skin-health",
    title: "SPF and pigmentation: basics that actually help",
    publishedAt: "2026-02-08",
    readMinutes: 5,
    excerpt:
      "In-office treatments work better when daily SPF is consistent. Here is how to choose coverage and pair it with pigment care.",
    intro:
      "Sun exposure is the most common reason pigment plans stall. You do not need a complicated routine, but you do need daily protection that fits how you live in South Florida.",
    sections: [
      {
        paragraphs: [
          "Choose broad-spectrum SPF 30 or higher and reapply when outdoors for extended periods. Hats and shade still matter, especially after IPL or resurfacing.",
          "If melasma is part of your concern, physical blocks and iron oxide tints can help some patients, your clinician may tailor recommendations.",
        ],
      },
      {
        heading: "Pairing with in-office care",
        paragraphs: [
          "Chemical peels, IPL, and pigment lasers can improve tone, but they require spacing and home care discipline between visits.",
          "Tell us about every product you use, including exfoliants and vitamin C, so we avoid stacking irritants before treatment.",
        ],
      },
    ],
    relatedSlugs: ["hydrafacial-vs-medical-facial", "microneedling-downtime-guide"],
  },
  {
    slug: "medical-weight-loss-consult",
    category: "wellness",
    title: "What happens at a medical weight loss consultation",
    publishedAt: "2026-01-22",
    readMinutes: 6,
    excerpt:
      "Labs, history, goals, and realistic pacing. A walkthrough of the first visit before you commit to a program.",
    intro:
      "Medical weight management is not a one-size menu. The consult is where we decide whether medication, coaching, or a different track is appropriate for your health profile.",
    sections: [
      {
        paragraphs: [
          "Expect a review of medical history, current medications, prior weight loss attempts, and any red-flag symptoms that need a primary care workup first.",
          "Labs may be discussed if indicated. We explain what we are measuring and why before ordering tests.",
        ],
      },
      {
        heading: "After the visit",
        paragraphs: [
          "If you are a candidate, you receive a written plan: visit rhythm, lifestyle focus, and how progress is monitored.",
          "Wellness IV memberships are separate tracks. This consult is specifically about medically supervised weight management.",
        ],
      },
    ],
    relatedSlugs: ["membership-packages-explained", "first-med-spa-consultation"],
  },
  {
    slug: "microneedling-downtime-guide",
    category: "treatments",
    title: "Microneedling downtime: what is normal afterward",
    publishedAt: "2026-01-10",
    readMinutes: 4,
    excerpt:
      "Pinkness, dryness, and peeling timelines vary by depth. Learn what to avoid and when makeup is reasonable again.",
    intro:
      "Microneedling triggers controlled injury to stimulate collagen. Downtime is usually manageable, but it is not zero, especially when depth targets acne scars or texture.",
    sections: [
      {
        paragraphs: [
          "Day 0 to 1: Skin may feel warm and look sunburned. Use gentle cleanser and approved moisturizer only.",
          "Days 2 to 4: Light flaking can appear. Do not pick. Skip retinol, acids, and heavy sweat if your provider advised rest.",
        ],
      },
      {
        heading: "Results timeline",
        paragraphs: [
          "Glow can show early within a week. Collagen remodeling builds over multiple sessions spaced weeks apart.",
          "Plan around events. A series is a journey, not a single pre-party fix unless depth is intentionally light.",
        ],
      },
    ],
    relatedSlugs: ["hydrafacial-vs-medical-facial", "spf-and-pigmentation-basics"],
  },
  {
    slug: "lip-filler-swelling-tips",
    category: "treatments",
    title: "Lip filler swelling: tips for the first 48 hours",
    publishedAt: "2025-12-15",
    readMinutes: 4,
    excerpt:
      "Ice, elevation, and realistic volume timelines for new and returning lip patients.",
    intro:
      "Some swelling is expected, especially for first-time filler or when structure and body are treated in one visit. Most patients prefer planning around photos and events with buffer days.",
    sections: [
      {
        paragraphs: [
          "Use cold compresses briefly as directed. Avoid aggressive massage unless your injector specifically recommends it.",
          "Sleep slightly elevated the first night if you are prone to puffiness.",
        ],
      },
      {
        paragraphs: [
          "Swelling often looks most pronounced day 1 to 2, then settles over several days. Final shape is best judged after soft tissue calms, not in the chair mirror.",
          "Book a follow-up if asymmetry persists after the settling window your provider gives you.",
        ],
      },
    ],
    relatedSlugs: ["botox-results-timeline", "first-med-spa-consultation"],
  },
  {
    slug: "first-med-spa-consultation",
    category: "tips",
    title: "Your first med spa consultation: how to prepare",
    publishedAt: "2025-12-01",
    readMinutes: 5,
    excerpt:
      "Photos, medications, goals, and budget. A simple prep list so your first visit feels focused, not rushed.",
    intro:
      "The first consult is not a sales pitch. It is a mapping visit: what bothers you, what is safe, and what sequence makes sense for your calendar and budget.",
    sections: [
      {
        paragraphs: [
          "Bring a list of medications, allergies, and prior aesthetic treatments. Note dates for tox, filler, lasers, or surgeries.",
          "Share inspiration photos if helpful, but expect a conversation about anatomy, not copying a celebrity snapshot.",
        ],
      },
      {
        heading: "Questions worth asking",
        paragraphs: [
          "Who performs the treatment, what credentials do they hold, and what is the downtime?",
          "What does maintenance look like in cost and visit frequency over the next year?",
        ],
      },
    ],
    relatedSlugs: ["membership-packages-explained", "medical-weight-loss-consult"],
  },
  {
    slug: "winter-skin-reset-event",
    category: "news",
    title: "Winter skin reset: event hours and booking windows",
    publishedAt: "2025-11-20",
    readMinutes: 3,
    excerpt:
      "Extended evening consult slots in January for HydraFacial and skin assessments. Here is how to reserve.",
    intro:
      "Each winter we see a bump in requests for hydration-focused facials and pigment planning before spring travel. This season we added select evening consult blocks for new patients.",
    sections: [
      {
        paragraphs: [
          "Event windows run January 8 through January 31. Mention winter reset when you call or book online so front desk routes you to the right calendar.",
          "Existing members can still use package benefits where eligible. Some add-ons may require standard pricing if not included in your tier.",
        ],
      },
      {
        paragraphs: [
          "Parking and suite directions are on our contact page. Arrive ten minutes early for intake if you are new.",
        ],
      },
    ],
    relatedSlugs: ["hydrafacial-vs-medical-facial", "first-med-spa-consultation"],
  },
];

export function getBlogCategoryMeta(id: BlogCategory): BlogCategoryMeta | undefined {
  return blogCategories.find((c) => c.id === id);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}

export function getBlogPostsByCategory(category: BlogCategory): BlogPost[] {
  return blogPosts.filter((p) => p.category === category);
}

export function formatBlogDate(iso: string): string {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
