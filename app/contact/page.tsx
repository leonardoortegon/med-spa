import Link from "next/link";
import { businessLocation, formatFullAddress, serviceAreaCopy } from "@/lib/business-location";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 lg:px-12">
      <h1 className="font-display text-4xl font-semibold text-black">Contact</h1>
      <p className="mt-6 leading-relaxed text-zinc-600">
        Reach out to reserve a consultation, ask about candidacy for a procedure, or plan your next
        visit. We strive to reply the same business day.
      </p>

      <div className="mt-10 border-t border-zinc-200 pt-10">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Practice</h2>
        <address className="mt-4 not-italic text-[15px] leading-relaxed text-zinc-800">
          <span className="block font-semibold text-black">{businessLocation.practiceName}</span>
          <span className="mt-2 block">{formatFullAddress()}</span>
        </address>
        <p className="mt-4">
          <a
            href={`tel:${businessLocation.phoneTel}`}
            className="font-medium text-black underline underline-offset-4 transition-colors hover:text-zinc-700"
          >
            {businessLocation.phoneDisplay}
          </a>
        </p>
        <p className="mt-6 text-sm leading-relaxed text-zinc-600">{serviceAreaCopy}</p>
        <Link
          href="/"
          className="mt-6 inline-block text-sm font-medium text-black underline underline-offset-4 transition-colors hover:text-zinc-700"
        >
          View map &amp; hours on the homepage
        </Link>
      </div>

      <p className="mt-10 text-sm leading-relaxed text-zinc-500">
        Add your booking widget, intake form, or preferred scheduling link in this page next.
      </p>
    </div>
  );
}
