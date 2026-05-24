import { BeforeAfterSection } from "@/components/before-after-section";
import { ConsultationCtaBlock } from "@/components/consultation-cta-block";

export default function BeforeAfterPage() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-4 pt-16 lg:px-12">
        <h1 className="font-display text-4xl font-semibold text-black">Before &amp; After</h1>
        <p className="mt-6 leading-relaxed text-zinc-600">
          Explore representative outcomes by treatment category. Every plan starts with a consultation
          matched to your anatomy, skin type, and goals.
        </p>
      </div>
      <BeforeAfterSection />
      <ConsultationCtaBlock
        headingId="before-after-book-heading"
        heading="Ready to discuss your goals?"
        description="Book a consultation to learn which treatments may be appropriate for you."
        openOptions={{ goal: "help" }}
      />
    </>
  );
}
