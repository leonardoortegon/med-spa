import type { BookingOpenOptions } from "@/lib/booking/types";
import { getServiceLinkLabel } from "@/lib/services-navigation";
import { resolveServicePage } from "@/lib/service-pages";

const CONSULTATION_FIRST = new Set([
  "injectables/botox",
  "injectables/lip-filler",
  "injectables/cheek-filler",
  "injectables/facial-balancing",
  "injectables/sculptra",
  "injectables/radiesse",
  "injectables/kybella",
  "laser-light/co2-laser",
  "laser-light/fractional-laser",
  "laser-light/melasma-treatment",
  "wellness/medical-weight-loss",
  "wellness/hormone-optimization",
  "hair-restoration/prp-hair-restoration",
  "body-contouring/coolsculpting",
  "body-contouring/emsculpt-neo",
  "skin-treatments/acne-treatment",
]);

const CONSULTATION_BY_CATEGORY: Record<string, string> = {
  injectables: "injectables",
  "skin-treatments": "skin",
  "laser-light": "laser",
  "body-contouring": "body",
  wellness: "weight-loss",
  "hair-restoration": "hair-restoration",
};

const DIRECT_BOOKABLE = new Set([
  "skin-treatments/hydrafacial",
  "skin-treatments/dermaplaning",
  "skin-treatments/chemical-peels",
  "laser-light/laser-hair-removal",
  "wellness/iv-therapy",
  "wellness/vitamin-injection",
]);

export function getServiceBookingCta(
  category: string,
  service: string,
): { label: string; openOptions: BookingOpenOptions } {
  const resolved = resolveServicePage(category, service);
  const displayName = resolved?.content.displayName ?? getServiceLinkLabel(category, service);
  const path = `${category}/${service}`;

  if (DIRECT_BOOKABLE.has(path)) {
    return {
      label: `Book ${displayName}`,
      openOptions: {
        goal: "known",
        categoryId: category,
        serviceId: mapBookableServiceId(category, service),
      },
    };
  }

  if (CONSULTATION_FIRST.has(path) || !DIRECT_BOOKABLE.has(path)) {
    const consultationId = CONSULTATION_BY_CATEGORY[category] ?? "new-patient";
    if (service === "medical-weight-loss") {
      return {
        label: "Start Weight Loss Consultation",
        openOptions: { goal: "new", consultationId: "weight-loss" },
      };
    }
    if (category === "hair-restoration") {
      return {
        label: "Book Hair Restoration Consultation",
        openOptions: { goal: "new", consultationId: "hair-restoration" },
      };
    }
    if (service === "lip-filler") {
      return {
        label: "Book Lip Filler Consultation",
        openOptions: { goal: "new", consultationId: "injectables" },
      };
    }
    if (service === "botox") {
      return {
        label: "Book Botox Consultation",
        openOptions: { goal: "new", consultationId: "injectables" },
      };
    }
    if (service === "laser-hair-removal") {
      return {
        label: "Book Laser Hair Removal Consultation",
        openOptions: { goal: "new", consultationId: "laser" },
      };
    }
    return {
      label: `Book ${displayName} Consultation`,
      openOptions: { goal: "new", consultationId },
    };
  }

  return {
    label: "Book Consultation",
    openOptions: { goal: "new", consultationId: "new-patient" },
  };
}

function mapBookableServiceId(category: string, service: string): string {
  if (service === "vitamin-injection") return "vitamin-shot";
  if (service === "laser-hair-removal") return "laser-hair-removal";
  if (service === "hydrafacial") return "hydrafacial";
  if (service === "botox") return "botox";
  if (service === "lip-filler") return "lip-filler";
  return service;
}
