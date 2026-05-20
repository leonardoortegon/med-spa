import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { BookingShell } from "@/components/booking/booking-shell";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Med Spa",
  description: "Medical spa experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full bg-white antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white pb-20 lg:pb-0">
        <BookingShell>
          <SiteHeader />
          <main className="flex-1 bg-white">{children}</main>
        </BookingShell>
      </body>
    </html>
  );
}
