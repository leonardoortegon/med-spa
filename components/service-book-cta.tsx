"use client";

import { BookConsultationButton } from "@/components/booking/book-consultation-button";
import { getServiceBookingCta } from "@/lib/booking/service-cta";
import { cn } from "@/lib/utils";

type Props = {
  category: string;
  service: string;
  className?: string;
};

export function ServiceBookCta({ category, service, className }: Props) {
  const { label, openOptions } = getServiceBookingCta(category, service);
  return <BookConsultationButton label={label} openOptions={openOptions} className={className} />;
}
