"use client";

import { useCallback, useState } from "react";
import { cn } from "@/lib/utils";

const experienceSteps = [
  {
    id: "warm-welcome",
    label: "Warm welcome",
    description:
      "You’re greeted without rush, seated comfortably, and oriented to today’s agenda so logistics feel effortless before clinical conversation begins.",
  },
  {
    id: "consultation",
    label: "Consultation",
    description:
      "We listen first, balancing your goals with anatomy and skin health, and review candidacy openly so priorities and timing stay realistic.",
  },
  {
    id: "treatment-plan",
    label: "Treatment plan",
    description:
      "Options are narrowed to medically appropriate modalities with clear sequencing: what we recommend now, what can wait, and how maintenance supports results.",
  },
  {
    id: "procedure",
    label: "Procedure",
    description:
      "Technique honors consent, comfort checkpoints, and precision dosing or settings. Throughout, we narrate milestones so nothing feels opaque in the chair.",
  },
  {
    id: "aftercare",
    label: "Aftercare",
    description:
      "You leave with written guidance, timelines for tenderness or flushing, skincare guardrails, and how to reach us if something feels unusual.",
  },
  {
    id: "follow-up",
    label: "Follow-up",
    description:
      "Check-ins affirm healing, tweak plans if pigment or texture evolves, and help you anchor long-term upkeep so achievements last beyond a single appointment.",
  },
] as const;

function StepChevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden
      className={cn(
        "mt-0.5 size-5 shrink-0 text-zinc-400 transition-transform duration-200 ease-out",
        open && "-rotate-180",
      )}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function MedicalTrustSection() {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(() => new Set());

  const toggleStep = useCallback((id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  return (
    <section
      className="border-t border-zinc-200 bg-gradient-to-b from-zinc-50/90 via-white to-white"
      aria-labelledby="clinical-care-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-12 lg:py-24">
        <div className="relative mt-px lg:grid lg:grid-cols-2 lg:gap-0 lg:divide-x lg:divide-zinc-200/90">
          <div className="relative pb-px lg:border-0 lg:pb-0 lg:pr-10 xl:pr-16">
            <div className="absolute -bottom-px left-0 right-0 h-px bg-zinc-200/90 lg:hidden" aria-hidden />
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Clinical care &amp; experience
            </p>
            <h2
              id="clinical-care-heading"
              className="mt-6 font-display text-[1.875rem] font-medium leading-snug tracking-[-0.02em] text-black sm:text-[2.125rem] lg:text-[2.25rem] lg:leading-[1.12]"
            >
              Rigorous medicine, with a calm path{" "}
              <span className="text-zinc-700 lg:text-black">through every appointment</span>
            </h2>
            <p className="mt-8 leading-relaxed text-zinc-600">
              Decisions reflect sound indications and anatomical judgment. Technique stays individualized, nothing
              prefab when it comes to dosing, placement, or device settings, and you&apos;re welcome to dig into
              who&apos;s treating you and what recovery realistically looks like. Safety, facial balance, and
              natural-looking refinement stay at the heart of everything we schedule.
            </p>
          </div>

          <div className="pt-12 lg:mt-0 lg:border-0 lg:pl-10 lg:pt-0 xl:pl-16">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
              The experience flow
            </p>
            <ol className="mt-6 list-none" role="list">
              {experienceSteps.map((step, index) => {
                const expanded = expandedIds.has(step.id);
                const headingId = `experience-step-${step.id}-heading`;
                const panelId = `experience-step-${step.id}-panel`;

                return (
                  <li key={step.id} className="border-b border-zinc-100 last:border-b-0">
                    <button
                      type="button"
                      id={headingId}
                      className="flex w-full items-start gap-4 py-5 text-left text-black outline-none transition-colors hover:text-zinc-800 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                      aria-expanded={expanded}
                      aria-controls={panelId}
                      onClick={() => toggleStep(step.id)}
                    >
                      <span
                        aria-hidden
                        className="w-9 shrink-0 text-right font-display text-lg font-semibold tabular-nums text-zinc-300 lg:text-xl"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 pt-0.5 text-[17px] font-medium leading-snug">{step.label}</span>
                      <StepChevron open={expanded} />
                    </button>

                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={headingId}
                      hidden={!expanded}
                      className="border-t border-zinc-50"
                    >
                      <p className="pb-6 pt-3 pl-[3.25rem] text-[15px] leading-relaxed text-zinc-600 lg:pb-8">
                        {step.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
