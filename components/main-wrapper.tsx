"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function MainWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isServicesPage = pathname === "/services";
  const isHomePage = pathname === "/";
  const isLightPage = !isHomePage && !isServicesPage;

  return (
    <main className={cn("flex-1 bg-white", isLightPage ? "pt-16" : "")}>
      {children}
    </main>
  );
}
