import type { Metadata } from "next";
import Image from "next/image";
import { ConsultationCtaBlock } from "@/components/consultation-cta-block";

export const metadata: Metadata = {
  title: "About Us | Your Brand Med Spa",
  description:
    "Learn about our clinic story, licensed providers, core values, and our commitment to bringing out your natural radiance.",
};

export default function AboutPage() {
  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-white" aria-labelledby="about-hero-title">
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-16 lg:px-12 lg:pt-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
                Our Story
              </p>
              <h1
                id="about-hero-title"
                className="mt-4 font-display text-4xl font-normal tracking-tight text-black lg:text-5xl lg:leading-[1.15]"
              >
                A Modern Approach to Aesthetic Wellness
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-zinc-600">
                At Your Brand, we believe that aesthetic care is a collaborative journey. Our practice is
                founded on clinical expertise, state-of-the-art technology, and a deep appreciation for
                individual, natural beauty.
              </p>
              <p className="mt-4 text-base leading-relaxed text-zinc-500">
                We design highly personalized treatment plans that respect your unique features and align with
                your lifestyle. From medical-grade skincare to advanced laser and injectable treatments, our
                mission is to deliver results that help you look and feel like the best version of yourself.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100 border border-zinc-200 shadow-sm rounded-sm sm:aspect-[16/10] lg:aspect-[3/4]">
                <Image
                  src="/about-clinic.jpg"
                  alt="Your Brand Med Spa Reception Area"
                  fill
                  unoptimized
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="border-t border-zinc-200 bg-zinc-50/50 py-16 lg:py-24" aria-labelledby="philosophy-title">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 id="philosophy-title" className="font-display text-3xl font-semibold text-black lg:text-[2rem]">
              Our Philosophy
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-zinc-600">
              We do not believe in one-size-fits-all beauty. Our work focuses on subtle enhancements that restore
              balance, refresh your skin, and preserve your natural expressions. Every treatment is backed by
              science and executed by licensed medical professionals.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border border-zinc-200 bg-white p-8 rounded-sm">
              <span className="font-display text-2xl font-medium text-zinc-400">01</span>
              <h3 className="mt-4 font-display text-xl font-semibold text-black">Medical Expertise</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-zinc-600">
                All treatments are performed or supervised by highly trained, licensed medical practitioners
                adhering to the highest standards of safety and efficacy.
              </p>
            </div>
            <div className="border border-zinc-200 bg-white p-8 rounded-sm">
              <span className="font-display text-2xl font-medium text-zinc-400">02</span>
              <h3 className="mt-4 font-display text-xl font-semibold text-black">Natural Radiance</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-zinc-600">
                We believe the best work is undetectable. Our goal is to leave you looking refreshed, rested, and
                completely natural.
              </p>
            </div>
            <div className="border border-zinc-200 bg-white p-8 rounded-sm">
              <span className="font-display text-2xl font-medium text-zinc-400">03</span>
              <h3 className="mt-4 font-display text-xl font-semibold text-black">Bespoke Journeys</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-zinc-600">
                No two faces or bodies are identical. We provide complimentary, comprehensive consultations to
                craft a treatment roadmap tailored uniquely to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="border-t border-zinc-200 bg-white py-16 lg:py-24" aria-labelledby="values-title">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 id="values-title" className="font-display text-3xl font-semibold text-black">
                Our Core Values
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-zinc-600">
                These principles guide every patient interaction, treatment selection, and clinic standard at our practice.
              </p>
            </div>
            <div className="lg:col-span-8 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="font-display text-lg font-semibold text-black">Patient Advocacy</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  Your safety, comfort, and ultimate satisfaction are our primary focus. We will never recommend a
                  treatment we do not believe is right for you.
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-black">Scientific Integrity</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  We invest exclusively in FDA-approved devices, medical-grade products, and clinically validated
                  treatment methodologies.
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-black">Continuing Education</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  Aesthetics is a rapidly evolving field. Our providers regularly undergo advanced training to
                  offer the latest, most effective techniques.
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-black">Artistry & Precision</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  Aesthetic medicine is where science meets art. We approach every treatment with an eye for
                  balance, symmetry, and detail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ConsultationCtaBlock
        headingId="about-consultation-heading"
        heading="Experience the Difference"
        description="Ready to begin your personalized journey? Book a comprehensive consultation with one of our licensed providers today."
        openOptions={{ goal: "help" }}
        showExplore
      />
    </article>
  );
}
