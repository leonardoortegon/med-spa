import {
  getBookableServiceId,
  getBookingModeForService,
} from "@/lib/booking/service-cta";
import type {
  BookableService,
  BookingConcern,
  ConsultationType,
  ProviderOption,
  ServiceCategoryOption,
  TimePeriod,
} from "@/lib/booking/types";
import {
  categoryTitles,
  getLinksForCategory,
  parseServicePath,
  serviceCategories as siteServiceCategories,
} from "@/lib/services-navigation";

export const BOOKING_PROGRESS_LABELS = [
  "Goal",
  "Appointment",
  "Provider",
  "Time",
  "Details",
  "Confirm",
] as const;

export const consultationTypes: ConsultationType[] = [
  {
    id: "new-patient",
    title: "New Patient Consultation",
    description:
      "A personalized visit to discuss your goals, treatment options, and a recommended plan.",
    durationMinutes: 45,
    policy: "paid-credited",
  },
  {
    id: "injectables",
    title: "Injectables Consultation",
    description: "Best for Botox, filler, facial balancing, or anti-aging treatments.",
    durationMinutes: 30,
    policy: "paid-credited",
  },
  {
    id: "skin",
    title: "Skin Consultation",
    description: "Best for acne, texture, pigmentation, pores, redness, or overall skin health.",
    durationMinutes: 30,
    policy: "paid-credited",
  },
  {
    id: "laser",
    title: "Laser Consultation",
    description: "Best for hair removal, pigment, resurfacing, and light-based treatment planning.",
    durationMinutes: 30,
    policy: "paid-credited",
  },
  {
    id: "body",
    title: "Body Consultation",
    description: "Best for body sculpting, skin tightening, and non-surgical contouring goals.",
    durationMinutes: 30,
    policy: "paid-credited",
  },
  {
    id: "weight-loss",
    title: "Weight Loss Consultation",
    description: "Medical weight management screening and plan design with clinical oversight.",
    durationMinutes: 45,
    policy: "paid-credited",
  },
  {
    id: "hair-restoration",
    title: "Hair Restoration Consultation",
    description: "Evaluate thinning, shedding patterns, and restorative treatment options.",
    durationMinutes: 30,
    policy: "paid-credited",
  },
  {
    id: "virtual",
    title: "Virtual Consultation",
    description: "Meet remotely to discuss goals and next steps before an in-office visit.",
    durationMinutes: 20,
    policy: "paid-consultation",
  },
];

export const serviceCategories: ServiceCategoryOption[] = [
  ...siteServiceCategories.map((id) => ({
    id,
    title: categoryTitles[id],
  })),
  { id: "consultations", title: "Consultations" },
];

function buildBookableServices(): BookableService[] {
  const services: BookableService[] = [];
  const seenIds = new Set<string>();

  for (const category of siteServiceCategories) {
    for (const link of getLinksForCategory(category)) {
      const parsed = parseServicePath(link.href);
      if (!parsed) continue;

      const id = getBookableServiceId(parsed.category, parsed.service);
      if (seenIds.has(id)) continue;
      seenIds.add(id);

      const { bookingMode, consultationId } = getBookingModeForService(
        parsed.category,
        parsed.service,
      );

      services.push({
        id,
        categoryId: parsed.category,
        label: link.label,
        durationMinutes: 45,
        bookingMode,
        consultationId,
      });
    }
  }

  services.push({
    id: "membership-treatment",
    categoryId: "consultations",
    label: "Membership Treatment",
    durationMinutes: 60,
    bookingMode: "direct",
  });

  return services.sort((a, b) => a.label.localeCompare(b.label));
}

export const bookableServices: BookableService[] = buildBookableServices();

export const bookingConcerns: BookingConcern[] = [
  {
    id: "fine-lines-wrinkles",
    title: "Fine Lines & Wrinkles",
    recommendations: [
      { type: "consultation", id: "injectables", label: "Injectables Consultation" },
      { type: "service", id: "botox", label: "Botox & Wrinkle Relaxers", note: "Consultation required for first visit" },
      { type: "service", id: "hydrafacial", label: "Microneedling / skin refresh", note: "Book skin consultation for advanced options" },
    ],
  },
  {
    id: "lips",
    title: "Lips",
    recommendations: [
      { type: "consultation", id: "injectables", label: "Injectables Consultation" },
      { type: "service", id: "lip-filler", label: "Lip Filler", note: "New patients start with a consultation" },
    ],
  },
  {
    id: "facial-volume-loss",
    title: "Facial Volume",
    recommendations: [
      { type: "consultation", id: "injectables", label: "Injectables Consultation" },
      { type: "service", id: "facial-balancing", label: "Facial Balancing" },
    ],
  },
  {
    id: "acne-acne-scars",
    title: "Acne & Acne Scars",
    recommendations: [
      { type: "consultation", id: "skin", label: "Skin Consultation" },
      { type: "service", id: "chemical-peels", label: "Chemical Peels" },
      { type: "service", id: "medical-facials", label: "Medical Facials" },
    ],
  },
  {
    id: "sun-damage-pigmentation",
    title: "Pigmentation",
    recommendations: [
      { type: "consultation", id: "skin", label: "Skin Consultation" },
      { type: "service", id: "melasma-treatment", label: "Pigmentation / Melasma Treatment" },
      { type: "service", id: "chemical-peels", label: "Chemical Peels" },
    ],
  },
  {
    id: "skin-texture-pores",
    title: "Skin Texture",
    recommendations: [
      { type: "consultation", id: "skin", label: "Skin Consultation" },
      { type: "service", id: "hydrafacial", label: "HydraFacial" },
      { type: "service", id: "chemical-peels", label: "Chemical Peels" },
    ],
  },
  {
    id: "unwanted-hair",
    title: "Unwanted Hair",
    recommendations: [
      { type: "consultation", id: "laser", label: "Laser Consultation" },
      { type: "service", id: "laser-hair-removal", label: "Laser Hair Removal" },
    ],
  },
  {
    id: "body-fat-loose-skin",
    title: "Loose Skin & Body Sculpting",
    recommendations: [
      { type: "consultation", id: "body", label: "Body Consultation" },
      { type: "service", id: "medical-weight-loss", label: "Skin Tightening / contouring plans" },
    ],
  },
  {
    id: "hair-thinning",
    title: "Hair Thinning",
    recommendations: [
      { type: "consultation", id: "hair-restoration", label: "Hair Restoration Consultation" },
      {
        type: "service",
        id: "prp-hair-restoration",
        label: "PRP Hair Restoration",
        note: "Consultation recommended first",
      },
    ],
  },
  {
    id: "low-energy-wellness",
    title: "Energy & Wellness",
    recommendations: [
      { type: "consultation", id: "new-patient", label: "Wellness Consultation" },
      { type: "service", id: "iv-therapy", label: "IV Therapy" },
      { type: "service", id: "vitamin-shot", label: "Vitamin Shot" },
    ],
  },
  {
    id: "weight-loss",
    title: "Weight Loss",
    recommendations: [
      { type: "consultation", id: "weight-loss", label: "Weight Loss Consultation" },
      { type: "service", id: "medical-weight-loss", label: "Medical Weight Loss Program" },
    ],
  },
];

export const providers: ProviderOption[] = [
  {
    id: "any",
    name: "Any Available Provider",
    role: "Fastest opening",
    specialty: "Matched to your appointment type",
    nextAvailable: "Multiple slots this week",
  },
  {
    id: "provider-1",
    name: "Dr. Sarah Chen",
    role: "Medical Director",
    specialty: "Injectables & laser oversight",
    nextAvailable: "Tomorrow, 10:00 AM",
  },
  {
    id: "provider-2",
    name: "Nina Alvarez, PA-C",
    role: "Physician Associate",
    specialty: "Injectables & skin treatments",
    nextAvailable: "Wed, 2:30 PM",
  },
  {
    id: "provider-3",
    name: "Jordan Lee, RN",
    role: "Aesthetic Nurse",
    specialty: "Skin, laser & wellness",
    nextAvailable: "Thu, 11:00 AM",
  },
];

export const mockTimeSlots: Record<TimePeriod, string[]> = {
  morning: ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM"],
  afternoon: ["12:00 PM", "1:00 PM", "2:00 PM", "2:30 PM", "3:30 PM"],
  evening: ["4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM"],
};

export const policyCopy: Record<
  import("@/lib/booking/types").PolicyType,
  { title: string; body: string }
> = {
  "free-consultation": {
    title: "Complimentary consultation",
    body: "No charge today. Please arrive 10 minutes early and complete intake before your visit.",
  },
  "paid-consultation": {
    title: "Consultation fee: $50",
    body: "Paid at booking. Virtual consultations are non-refundable if cancelled within 24 hours.",
  },
  "paid-credited": {
    title: "Consultation fee: $50",
    body: "Applied toward treatment if you book within 30 days. Card required to hold your appointment.",
  },
  deposit: {
    title: "Booking deposit",
    body: "A small deposit secures your appointment and is applied to your visit.",
  },
  "card-on-file": {
    title: "Card on file",
    body: "No charge today unless our cancellation policy applies. Your card holds the appointment.",
  },
  none: {
    title: "No payment due today",
    body: "Review clinic policies at check-in. Membership and package bookings may have separate terms.",
  },
};

export function getConsultationById(id: string) {
  return consultationTypes.find((c) => c.id === id);
}

export function getServiceById(id: string) {
  return bookableServices.find((s) => s.id === id);
}

export function getConcernById(id: string) {
  return bookingConcerns.find((c) => c.id === id);
}

export function getServicesForCategory(categoryId: string) {
  return bookableServices.filter((s) => s.categoryId === categoryId);
}
