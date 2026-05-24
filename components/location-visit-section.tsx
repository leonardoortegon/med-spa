import {
  businessLocation,
  formatFullAddress,
  formatStreetCityLine,
  googleMapsDirectionsUrl,
  googleMapsEmbedSrc,
  localBusinessJsonLd,
  serviceAreaCopy,
} from "@/lib/business-location";

export function LocationVisitSection() {
  const jsonLd = localBusinessJsonLd();
  const mapSrc = googleMapsEmbedSrc();
  const directionsUrl = googleMapsDirectionsUrl();

  return (
    <section
      className="bg-white"
      aria-labelledby="visit-location-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-12 lg:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-start lg:gap-x-14">
          <div className="min-w-0 max-w-md">
            <header>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
                Location / Visit
              </p>
              <h2
                id="visit-location-heading"
                className="mt-4 font-display text-3xl font-semibold text-black lg:text-[2rem]"
              >
                Visit our Coral Springs
                <br />
                med spa
              </h2>

              <p className="mt-6 leading-relaxed text-zinc-600">
                Our clinic is rooted in Coral Springs, with appointments that suit locals and commuters
                alike, whether your day started in Boca Raton, Fort Lauderdale, Parkland, or another part
                of Broward County. {serviceAreaCopy}
              </p>
            </header>

            <aside className="mt-8 min-w-0 lg:mt-10">
              <h3 className="sr-only">Map, {businessLocation.practiceName}</h3>
              <iframe
                title={`Map showing ${businessLocation.practiceName} near ${businessLocation.addressLocality}, ${businessLocation.addressRegion}`}
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="aspect-[4/3] h-auto min-h-[12rem] w-full border border-zinc-200 sm:min-h-[14rem]"
              />
              <p className="mt-3 text-xs leading-relaxed text-zinc-500">
                Approximate pin for {formatFullAddress()}; confirm suite details before your visit.
              </p>
            </aside>
          </div>

          <div className="min-w-0 space-y-8 border-t border-zinc-200 pt-8 lg:border-t-0 lg:pt-0">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Address
              </h3>
              <address className="mt-2 not-italic text-[15px] leading-relaxed text-black">
                <span className="block font-medium">{businessLocation.practiceName}</span>
                <span className="mt-1 block text-zinc-700">{formatStreetCityLine()}</span>
                <span className="block text-zinc-700">
                  {businessLocation.postalCode}, {businessLocation.addressCountry}
                </span>
              </address>
              <a
                href={directionsUrl}
                className="mt-3 inline-block text-sm font-medium text-black underline underline-offset-4 transition-colors hover:text-zinc-700"
                rel="noopener noreferrer"
                target="_blank"
              >
                Get directions in Google Maps
              </a>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Phone
              </h3>
              <p className="mt-2">
                <a
                  href={`tel:${businessLocation.phoneTel}`}
                  className="text-[15px] font-medium text-black underline underline-offset-4 transition-colors hover:text-zinc-700"
                >
                  {businessLocation.phoneDisplay}
                </a>
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                Call to book, reschedule, or ask which treatment fits your goals, our front desk routes
                you to the right provider.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Hours
              </h3>
              <dl className="mt-3 space-y-2 text-[15px] text-zinc-800">
                {businessLocation.hours.map((row) => (
                  <div key={row.label} className="flex flex-wrap justify-between gap-x-4 gap-y-1">
                    <dt className="font-medium text-black">{row.label}</dt>
                    <dd className="text-zinc-600">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Parking
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-zinc-700">
                {businessLocation.parkingNotes}
              </p>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Service area
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-zinc-700">{serviceAreaCopy}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
