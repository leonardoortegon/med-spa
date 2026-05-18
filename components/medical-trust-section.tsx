const pillars = [
  {
    title: "Qualified oversight",
    body: "Treatments align with medically sound indications and anatomical considerations.",
  },
  {
    title: "Measured technique",
    body: "Dosing, positioning, and device settings are individualized—not one-size formulas.",
  },
  {
    title: "Transparency",
    body: "We welcome questions about training, protocols, and what to expect during recovery.",
  },
] as const;

export function MedicalTrustSection() {
  return (
    <section
      className="border-t border-zinc-200 bg-gradient-to-b from-zinc-50/90 via-white to-white"
      aria-labelledby="medical-trust-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-12 lg:py-24">
        <div className="relative lg:grid lg:grid-cols-12 lg:gap-x-14 lg:gap-y-0">
          <div className="lg:col-span-6 lg:pr-6 xl:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Provider &amp; medical trust
            </p>
            <h2
              id="medical-trust-heading"
              className="mt-6 max-w-xl font-display text-[1.875rem] font-medium leading-snug tracking-[-0.02em] text-black sm:text-[2.125rem] lg:text-[2.375rem] lg:leading-[1.12]"
            >
              A medical approach to{" "}
              <span className="text-zinc-700 lg:text-black">modern aesthetics</span>
            </h2>
          </div>

          <div className="relative mt-12 lg:col-span-6 lg:mt-3 lg:pt-3 xl:col-span-7">
            <div className="absolute -top-px left-0 right-0 h-px bg-zinc-200/80 lg:hidden" aria-hidden />
            <div className="lg:border-l lg:border-zinc-200/90 lg:pl-10 xl:pl-14">
              <p className="max-w-xl leading-relaxed text-zinc-600 lg:max-w-md">
                Every treatment is performed with attention to safety, facial balance, and natural-looking outcomes.
              </p>
              <ul className="mt-12 space-y-9 lg:max-w-lg">
                {pillars.map((item, index) => (
                  <li key={item.title} className="group grid grid-cols-[auto_1fr] gap-x-5 gap-y-1">
                    <span
                      aria-hidden
                      className="pt-1 font-display text-xl font-semibold tabular-nums text-zinc-300 transition-colors duration-300 group-hover:text-zinc-500"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-medium tracking-wide text-black">{item.title}</p>
                      <p className="mt-2 text-[15px] leading-relaxed text-zinc-600">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
