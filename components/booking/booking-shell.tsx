"use client";

import type { ReactNode } from "react";
import { BookingModal } from "@/components/booking/booking-modal";
import { BookingProvider } from "@/components/booking/booking-context";
import { MobileBookingBar } from "@/components/booking/mobile-booking-bar";

export function BookingShell({ children }: { children: ReactNode }) {
  return (
    <BookingProvider>
      {children}
      <BookingModal />
      <MobileBookingBar />
    </BookingProvider>
  );
}
