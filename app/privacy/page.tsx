import type { Metadata } from "next";
import { businessLocation } from "@/lib/business-location";

export const metadata: Metadata = {
  title: `Privacy Policy | ${businessLocation.practiceName}`,
  description: `Privacy policy and patient data protection practices at ${businessLocation.practiceName}.`,
};

export default function PrivacyPage() {
  return (
    <article className="min-h-screen bg-white">
      <section className="mx-auto max-w-3xl px-4 py-16 lg:px-12 lg:py-24">
        <header className="border-b border-zinc-200 pb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">Legal</p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-black sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-zinc-400">Last updated: May 23, 2026</p>
        </header>

        <div className="prose prose-zinc mt-12 max-w-none text-zinc-600 leading-relaxed space-y-8">
          <p>
            At {businessLocation.practiceName}, we are committed to maintaining the confidentiality,
            integrity, and security of your personal and health information. This Privacy Policy outlines
            how we collect, use, and safeguard your data when you visit our clinic or use our website.
          </p>

          <div>
            <h2 className="font-display text-2xl font-semibold text-black">1. Information We Collect</h2>
            <p className="mt-3">
              We collect information to provide you with safe, effective aesthetic treatments and a seamless
              booking experience. This includes:
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-2">
              <li><strong>Contact Information:</strong> Name, phone number, email address, and mailing address.</li>
              <li><strong>Health &amp; Medical Records:</strong> Medical history, skin concerns, treatment records, and clinical photographs for tracking results.</li>
              <li><strong>Billing Details:</strong> Payment card numbers and transaction history (processed securely via encrypted gateways).</li>
              <li><strong>Technical Data:</strong> Cookies, IP address, and browser information used to optimize your website experience.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-black">2. How We Use Your Information</h2>
            <p className="mt-3">
              Your information is utilized solely for providing care and operational support, specifically to:
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-2">
              <li>Schedule, confirm, and manage your appointments.</li>
              <li>Assess candidacy and develop customized treatment roadmaps.</li>
              <li>Administer procedures safely and follow up on post-treatment care.</li>
              <li>Process payments and issue invoices/receipts.</li>
              <li>Send periodic clinic updates or promotions, if you have opted in.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-black">3. Patient Privacy &amp; HIPAA</h2>
            <p className="mt-3">
              As a provider of medical-grade aesthetic procedures, we respect medical confidentiality.
              Clinical charts, consultation intake forms, and treatment records are protected under state
              laws and our strict internal security policies. We do not disclose health information to third
              parties except to coordinate your direct care or as required by law.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-black">4. Data Security</h2>
            <p className="mt-3">
              We implement industry-standard administrative, physical, and technical safeguards to protect
              your personal data. Online scheduling, intake submissions, and credit card processing are conducted
              over secure, SSL-encrypted platforms.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-black">5. Your Rights</h2>
            <p className="mt-3">
              You have the right to request access to your records, ask for corrections, or request that we
              delete non-medical personal contact details. You may opt out of marketing communications at
              any time using the unsubscribe link in our messages.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-black">6. Contact Us</h2>
            <p className="mt-3">
              For any questions regarding this policy or how we manage your information, please contact us at:
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
