"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { BookingOpenOptions } from "@/lib/booking/types";

type BookingContextValue = {
  isOpen: boolean;
  openOptions: BookingOpenOptions | null;
  openBooking: (options?: BookingOpenOptions) => void;
  closeBooking: () => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openOptions, setOpenOptions] = useState<BookingOpenOptions | null>(null);

  const openBooking = useCallback((options?: BookingOpenOptions) => {
    setOpenOptions(options ?? null);
    setIsOpen(true);
  }, []);

  const closeBooking = useCallback(() => {
    setIsOpen(false);
    setOpenOptions(null);
  }, []);

  const value = useMemo(
    () => ({ isOpen, openOptions, openBooking, closeBooking }),
    [isOpen, openOptions, openBooking, closeBooking],
  );

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) {
    throw new Error("useBooking must be used within BookingProvider");
  }
  return ctx;
}
