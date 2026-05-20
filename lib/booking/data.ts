import type {
  BookableService,
  BookingConcern,
  ConsultationType,
  ProviderOption,
  ServiceCategoryOption,
  TimePeriod,
} from "@/lib/booking/types";

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
  { id: "injectables", title: "Injectables" },
  { id: "skin-treatments", title: "Skin Treatments" },
  { id: "laser-light", title: "Laser & Light" },
  { id: "body-contouring", title: "Body Contouring" },
  { id: "hair-restoration", title: "Hair Restoration" },
  { id: "wellness", title: "Wellness" },
  { id: "consultations", title: "Consultations" },
];

export const bookableServices: BookableService[] = [
  { id: "hydrafacial", categoryId: "skin-treatments", label: "HydraFacial", durationMinutes: 60, bookingMode: "direct" },
  { id: "dermaplaning", categoryId: "skin-treatments", label: "Dermaplaning", durationMinutes: 45, bookingMode: "direct" },
  { id: "chemical-peels", categoryId: "skin-treatments", label: "Chemical Peel", durationMinutes: 45, bookingMode: "direct" },
  { id: "medical-facial", categoryId: "skin-treatments", label: "Medical Facial", durationMinutes: 60, bookingMode: "direct" },
  {
    id: "laser-hair-removal",
    categoryId: "laser-light",
    label: "Laser Hair Removal",
    durationMinutes: 30,
    bookingMode: "consultation",
    consultationId: "laser",
  },
  { id: "iv-therapy", categoryId: "wellness", label: "IV Therapy", durationMinutes: 60, bookingMode: "direct" },
  { id: "vitamin-shot", categoryId: "wellness", label: "Vitamin Shot", durationMinutes: 15, bookingMode: "direct" },
  { id: "b12-injection", categoryId: "wellness", label: "B12 Injection", durationMinutes: 15, bookingMode: "direct" },
  {
    id: "botox",
    categoryId: "injectables",
    label: "Follow-up Botox",
    durationMinutes: 20,
    bookingMode: "direct",
  },
  {
    id: "lip-filler",
    categoryId: "injectables",
    label: "Follow-up Filler",
    durationMinutes: 30,
    bookingMode: "direct",
  },
  {
    id: "botox-first",
    categoryId: "injectables",
    label: "First-time Botox",
    durationMinutes: 30,
    bookingMode: "consultation",
    consultationId: "injectables",
  },
  {
    id: "lip-filler-new",
    categoryId: "injectables",
    label: "Lip Filler (new patients)",
    durationMinutes: 30,
    bookingMode: "consultation",
    consultationId: "injectables",
  },
  {
    id: "facial-balancing",
    categoryId: "injectables",
    label: "Facial Balancing",
    durationMinutes: 45,
    bookingMode: "consultation",
    consultationId: "injectables",
  },
  {
    id: "co2-laser",
    categoryId: "laser-light",
    label: "CO2 Laser",
    durationMinutes: 60,
    bookingMode: "consultation",
    consultationId: "laser",
  },
  {
    id: "fractional-laser",
    categoryId: "laser-light",
    label: "Fractional Laser",
    durationMinutes: 45,
    bookingMode: "consultation",
    consultationId: "laser",
  },
  {
    id: "melasma-treatment",
    categoryId: "laser-light",
    label: "Melasma Treatment",
    durationMinutes: 30,
    bookingMode: "consultation",
    consultationId: "skin",
  },
  {
    id: "medical-weight-loss",
    categoryId: "wellness",
    label: "Medical Weight Loss",
    durationMinutes: 45,
    bookingMode: "consultation",
    consultationId: "weight-loss",
  },
  {
    id: "membership-treatment",
    categoryId: "consultations",
    label: "Membership Treatment",
    durationMinutes: 60,
    bookingMode: "direct",
  },
];

export const bookingConcerns: BookingConcern[] = [
  {
    id: "fine-lines-wrinkles",
    title: "Fine Lines & Wrinkles",
    recommendations: [
      { type: "consultation", id: "injectables", label: "Injectables Consultation" },
      { type: "service", id: "botox-first", label: "Botox & Wrinkle Relaxers", note: "Consultation required for first visit" },
      { type: "service", id: "hydrafacial", label: "Microneedling / skin refresh", note: "Book skin consultation for advanced options" },
    ],
  },
  {
    id: "lips",
    title: "Lips",
    recommendations: [
      { type: "consultation", id: "injectables", label: "Injectables Consultation" },
      { type: "service", id: "lip-filler-new", label: "Lip Filler", note: "New patients start with a consultation" },
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
      { type: "service", id: "medical-facial", label: "Medical Facial" },
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
      { type: "service", id: "medical-facial", label: "PRP / growth treatments", note: "Consultation recommended first" },
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
