import type { Metadata } from "next";
import { businessLocation } from "@/lib/business-location";

export const metadata: Metadata = {
  title: `Terms of Service | ${businessLocation.practiceName}`,
  description: `Terms and conditions governing appointments, treatments, and cancellations at ${businessLocation.practiceName}.`,
};

export default function TermsPage() {
  return (
    <article className="min-h-screen bg-white">
      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-12 lg:py-24">
        <header className="border-b border-zinc-200 pb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">Legal</p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-black sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-zinc-400">Last updated: May 23, 2026</p>
        </header>

        <div className="prose prose-zinc mt-12 max-w-none text-zinc-600 leading-relaxed space-y-8">
          <p>
            Welcome to {businessLocation.practiceName}. By scheduling an appointment, purchasing a package,
            or using our website, you agree to comply with and be bound by the following Terms of Service.
            Please review them carefully before booking your visit.
          </p>

          <div>
            <h2 className="font-display text-2xl font-semibold text-black">1. Appointment &amp; Cancellation Policy</h2>
            <p className="mt-3">
              To respect the schedule of our providers and other guests, we enforce a strict cancellation policy:
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-2">
              <li><strong>Cancellation Notice:</strong> A minimum of 24 hours notice is required to cancel or reschedule an appointment.</li>
              <li><strong>Late Cancellations &amp; No-Shows:</strong> Cancellations made less than 24 hours in advance, or failure to show up, may result in a cancellation fee charged to the card on file or forfeiture of a deposit.</li>
              <li><strong>Late Arrivals:</strong> If you arrive late, your service time may be shortened to accommodate the next patient, while full treatment pricing still applies.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-black">2. Medical Candidacy &amp; Treatment Consent</h2>
            <p className="mt-3">
              Your safety is our absolute priority. We reserve the right to refuse service or suggest alternative treatments if our medical providers determine that a requested procedure is clinically inappropriate or carries undue risk based on your medical profile. Written consent is required prior to administering any injectable, laser, or chemical treatment.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-black">3. Treatment Expectations &amp; Results</h2>
            <p className="mt-3">
              Aesthetic medicine and skincare are not exact sciences. Individual results vary significantly based on genetics, lifestyle, anatomy, and adherence to recommended pre- and post-treatment instructions. No guarantees or refunds are offered on treatment outcomes.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-black">4. Payments, Refunds, &amp; Packages</h2>
            <p className="mt-3">
              Please note our financial terms:
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-2">
              <li><strong>Due Date:</strong> All balances are due in full at the time services are rendered.</li>
              <li><strong>Packages &amp; Memberships:</strong> Pre-paid packages and memberships are non-refundable and non-transferable between patients. They carry specific expiration periods detailed at the time of purchase.</li>
              <li><strong>Product Returns:</strong> Unopened, sealed skincare products may be returned for clinic credit within 14 days of purchase with a receipt. Opened products are final sale.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-black">5. Updates to Terms</h2>
            <p className="mt-3">
              We reserve the right to update these terms at any time. Any revisions will take effect immediately upon being posted on this website. Your continued scheduling of appointments constitutes acceptance of any revised terms.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-black">6. Contact</h2>
            <p className="mt-3">
              If you have any questions regarding our terms and policies, please reach out to us at:
            </p>
            <address className="mt-3 not-italic text-zinc-800">
              <strong>{businessLocation.practiceName}</strong><br />
              Phone: {businessLocation.phoneDisplay}<br />
              Coral Springs, FL
            </address>
          </div>
        </div>
      </section>
    </article>
  );
}
