/**
 * Single source for name, address, and phone across the marketing site.
 * Replace with your verified NAP (name / address / phone) before launch.
 */

export const businessLocation = {
  practiceName: "Med Spa",
  streetAddress: "9551 W Sample Rd, Suite 200",
  addressLocality: "Coral Springs",
  addressRegion: "FL",
  postalCode: "33065",
  addressCountry: "US",
  phoneDisplay: "(954) 555-0123",
  phoneTel: "+19545550123",
  parkingNotes:
    "Complimentary visitor parking in the suite building lot, pull in from Sample Rd and follow signage toward the elevator. Short-term curb spots are permitted on Sample Rd during quick pickups.",
  hours: [
    { label: "Monday to Friday", value: "9:00 a.m. to 6:00 p.m." },
    { label: "Saturday", value: "9:00 a.m. to 3:00 p.m." },
    { label: "Sunday", value: "Closed" },
  ],
} as const;

/** Natural sentence for onsite copy & local relevance (homepage + SEO). */
export const serviceAreaCopy =
  "Serving patients in Coral Springs, Parkland, Boca Raton, Fort Lauderdale, and surrounding South Florida areas.";

export function formatStreetCityLine(): string {
  const { streetAddress, addressLocality, addressRegion } = businessLocation;
  return `${streetAddress}, ${addressLocality}, ${addressRegion}`;
}

export function formatFullAddress(): string {
  return `${formatStreetCityLine()} ${businessLocation.postalCode}`.trim();
}

export function googleMapsDirectionsUrl(): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(formatFullAddress())}`;
}

export function googleMapsEmbedSrc(): string {
  const q = encodeURIComponent(formatFullAddress());
  return `https://maps.google.com/maps?q=${q}&z=15&output=embed`;
}

export function localBusinessJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: businessLocation.practiceName,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessLocation.streetAddress,
      addressLocality: businessLocation.addressLocality,
      addressRegion: businessLocation.addressRegion,
      postalCode: businessLocation.postalCode,
      addressCountry: businessLocation.addressCountry,
    },
    telephone: businessLocation.phoneTel,
    areaServed: [
      { "@type": "City", name: "Coral Springs" },
      { "@type": "City", name: "Parkland" },
      { "@type": "City", name: "Boca Raton" },
      { "@type": "City", name: "Fort Lauderdale" },
      { "@type": "AdministrativeArea", name: "South Florida" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "15:00",
      },
    ],
  };
}
