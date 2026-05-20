"use client";

import { cn } from "@/lib/utils";
import type { BookingOpenOptions } from "@/lib/booking/types";
import { useBooking } from "@/components/booking/booking-context";

const primaryClass =
  "inline-flex rounded-[5px] bg-black px-8 py-3 text-sm font-medium tracking-wide text-white transition-colors hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black";

const secondaryClass =
  "inline-flex rounded-[5px] border border-zinc-200 bg-white px-8 py-3 text-sm font-medium tracking-wide text-black transition-colors hover:border-zinc-400 hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black";

const headerClass =
  "rounded-[5px] bg-black/85 px-4 py-2 text-sm font-medium tracking-wide whitespace-nowrap text-white transition-colors hover:bg-black";

type Props = {
  label?: string;
  variant?: "primary" | "secondary" | "header";
  className?: string;
  openOptions?: BookingOpenOptions;
  onBook?: () => void;
};

export function BookConsultationButton({
  label = "Book Consultation",
  variant = "primary",
  className,
  openOptions,
  onBook,
}: Props) {
  const { openBooking } = useBooking();

  const base =
    variant === "header" ? headerClass : variant === "secondary" ? secondaryClass : primaryClass;

  return (
    <button
      type="button"
      className={cn(base, className)}
      onClick={() => {
        openBooking(openOptions);
        onBook?.();
      }}
    >
      {label}
    </button>
  );
}
