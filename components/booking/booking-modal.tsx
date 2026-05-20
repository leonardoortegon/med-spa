"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { businessLocation } from "@/lib/business-location";
import {
  BOOKING_PROGRESS_LABELS,
  bookingConcerns,
  consultationTypes,
  getConcernById,
  getConsultationById,
  getServiceById,
  getServicesForCategory,
  mockTimeSlots,
  policyCopy,
  providers,
  serviceCategories,
} from "@/lib/booking/data";
import type {
  BookingDetails,
  BookingGoal,
  BookingStep,
  ClientType,
  TimePeriod,
} from "@/lib/booking/types";
import { useBooking } from "@/components/booking/booking-context";
import { cn } from "@/lib/utils";

const emptyDetails: BookingDetails = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  dateOfBirth: "",
  clientType: "new",
};

const stepOrder: BookingStep[] = ["goal", "appointment", "provider", "time", "details", "policy", "confirm"];

function stepIndex(step: BookingStep) {
  if (step === "policy") return 4;
  if (step === "confirm") return 5;
  return stepOrder.indexOf(step);
}

function CardOption({
  title,
  description,
  onClick,
  selected,
}: {
  title: string;
  description: string;
  onClick: () => void;
  selected?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "w-full rounded-[5px] border p-5 text-left transition-colors",
        selected
          ? "border-black bg-zinc-50"
          : "border-zinc-200 bg-white hover:border-zinc-400 hover:bg-zinc-50/80",
      )}
    >
      <span className="font-display text-lg font-semibold text-black">{title}</span>
      <p className="mt-2 text-[15px] leading-relaxed text-zinc-600">{description}</p>
    </button>
  );
}

export function BookingModal() {
  const { isOpen, openOptions, closeBooking } = useBooking();
  const [step, setStep] = useState<BookingStep>("goal");
  const [goal, setGoal] = useState<BookingGoal | null>(null);
  const [consultationId, setConsultationId] = useState<string | null>(null);
  const [categoryId, setCategoryId] = useState<string | null>(null);
  const [serviceId, setServiceId] = useState<string | null>(null);
  const [concernId, setConcernId] = useState<string | null>(null);
  const [providerId, setProviderId] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [timePeriod, setTimePeriod] = useState<TimePeriod | null>(null);
  const [timeSlot, setTimeSlot] = useState<string | null>(null);
  const [details, setDetails] = useState<BookingDetails>(emptyDetails);
  const [mobileTimeView, setMobileTimeView] = useState<"period" | "slots">("period");

  const reset = useCallback(() => {
    setStep("goal");
    setGoal(null);
    setConsultationId(null);
    setCategoryId(null);
    setServiceId(null);
    setConcernId(null);
    setProviderId(null);
    setSelectedDate("");
    setTimePeriod(null);
    setTimeSlot(null);
    setDetails(emptyDetails);
    setMobileTimeView("period");
  }, []);

  useEffect(() => {
    if (!isOpen) {
      reset();
      return;
    }

    const opts = openOptions;
    if (!opts) return;

    if (opts.goal) setGoal(opts.goal);
    if (opts.consultationId) {
      setConsultationId(opts.consultationId);
      setGoal(opts.goal ?? "new");
      setStep("appointment");
    }
    if (opts.categoryId) {
      setCategoryId(opts.categoryId);
      setGoal(opts.goal ?? "known");
    }
    if (opts.serviceId) {
      setServiceId(opts.serviceId);
      const svc = getServiceById(opts.serviceId);
      if (svc) setCategoryId(svc.categoryId);
      setGoal(opts.goal ?? "known");
      setStep("appointment");
    }
    if (opts.concernId) {
      setConcernId(opts.concernId);
      setGoal("help");
      setStep("appointment");
    }
  }, [isOpen, openOptions, reset]);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeBooking();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, closeBooking]);

  const appointmentLabel = useMemo(() => {
    if (consultationId) return getConsultationById(consultationId)?.title;
    if (serviceId) return getServiceById(serviceId)?.label;
    return null;
  }, [consultationId, serviceId]);

  const activePolicy = useMemo(() => {
    if (consultationId) return getConsultationById(consultationId)?.policy ?? "paid-credited";
    if (serviceId && details.clientType === "returning") return "card-on-file";
    return "none";
  }, [consultationId, serviceId, details.clientType]);

  const progressStep = step === "policy" ? 4 : step === "confirm" ? 5 : stepIndex(step);

  const goNext = () => {
    const idx = stepOrder.indexOf(step);
    if (idx < stepOrder.length - 1) {
      const next = stepOrder[idx + 1];
      if (next === "policy" && activePolicy === "none") {
        setStep("confirm");
        return;
      }
      setStep(next);
    }
  };

  const goBack = () => {
    const idx = stepOrder.indexOf(step);
    if (idx > 0) {
      let prev = stepOrder[idx - 1];
      if (prev === "policy" && activePolicy === "none") prev = "details";
      setStep(prev);
    }
  };

  const selectGoal = (g: BookingGoal) => {
    setGoal(g);
    setConsultationId(null);
    setCategoryId(null);
    setServiceId(null);
    setConcernId(null);
    setStep("appointment");
  };

  const canContinueAppointment =
    (goal === "new" && consultationId) ||
    (goal === "known" && (consultationId || serviceId)) ||
    (goal === "help" && concernId && (consultationId || serviceId));

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <button
        type="button"
        className="absolute inset-0 bg-black/40"
        aria-label="Close booking"
        onClick={closeBooking}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-dialog-title"
        className="relative flex max-h-[min(88dvh,100%)] w-full max-w-2xl flex-col overflow-hidden rounded-[5px] border border-zinc-200 bg-white shadow-[0_24px_80px_-24px_rgba(0,0,0,0.35)]"
      >
        <div className="flex items-center justify-between border-b border-zinc-100 px-5 py-4 sm:px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
              {step === "goal" ? "Book consultation" : "Scheduling"}
            </p>
            <h2 id="booking-dialog-title" className="mt-1 font-display text-xl font-semibold text-black">
              {step === "confirm" ? "You're booked" : step === "goal" ? "Start your visit" : "Continue booking"}
            </h2>
          </div>
          <button
            type="button"
            onClick={closeBooking}
            className="flex h-10 w-10 items-center justify-center rounded-[5px] text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-black"
            aria-label="Close"
          >
            <span className="text-2xl leading-none">&times;</span>
          </button>
        </div>

        {step !== "goal" && step !== "confirm" && (
          <div className="border-b border-zinc-100 px-5 py-3 sm:px-6">
            <ol className="flex gap-2 overflow-x-auto text-[11px] font-medium uppercase tracking-wider text-zinc-400">
              {BOOKING_PROGRESS_LABELS.map((label, i) => (
                <li
                  key={label}
                  className={cn(
                    "shrink-0 whitespace-nowrap",
                    i <= progressStep ? "text-black" : "text-zinc-400",
                  )}
                >
                  {i + 1}. {label}
                </li>
              ))}
            </ol>
          </div>
        )}

        <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-6">
          {step === "goal" && (
            <div className="space-y-6">
              <p className="text-[15px] leading-relaxed text-zinc-600">
                Choose the option that best fits where you are in your aesthetic journey.
              </p>
              <div className="space-y-3">
                <CardOption
                  title="I'm New Here"
                  description="Get a personalized consultation and treatment plan."
                  onClick={() => selectGoal("new")}
                />
                <CardOption
                  title="I Know What I Want"
                  description="Book a specific service or follow-up appointment."
                  onClick={() => selectGoal("known")}
                />
                <CardOption
                  title="Help Me Choose"
                  description="Browse by concern and find the best starting point."
                  onClick={() => selectGoal("help")}
                />
              </div>
            </div>
          )}

          {step === "appointment" && goal === "new" && (
            <div className="space-y-4">
              <p className="text-[15px] text-zinc-600">Select a consultation type.</p>
              <div className="space-y-3">
                {consultationTypes.map((c) => (
                  <CardOption
                    key={c.id}
                    title={c.title}
                    description={c.description}
                    selected={consultationId === c.id}
                    onClick={() => setConsultationId(c.id)}
                  />
                ))}
              </div>
            </div>
          )}

          {step === "appointment" && goal === "known" && serviceId && (
            <div className="space-y-4">
              <p className="text-[15px] text-zinc-600">You selected:</p>
              <CardOption
                title={getServiceById(serviceId)?.label ?? "Service"}
                description={
                  consultationId
                    ? "Includes recommended consultation"
                    : "Ready to choose provider and time"
                }
                selected
                onClick={() => {}}
              />
              {consultationId && (
                <p className="text-sm text-zinc-500">
                  Consultation: {getConsultationById(consultationId)?.title}
                </p>
              )}
            </div>
          )}

          {step === "appointment" && goal === "known" && !categoryId && !serviceId && (
            <div className="space-y-4">
              <p className="text-[15px] text-zinc-600">Choose a service category.</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {serviceCategories.map((cat) => (
                  <CardOption
                    key={cat.id}
                    title={cat.title}
                    description="View services in this category"
                    onClick={() => {
                      setCategoryId(cat.id);
                      setServiceId(null);
                      setConsultationId(null);
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {step === "appointment" &&
            goal === "known" &&
            categoryId &&
            !serviceId &&
            categoryId !== "consultations" && (
            <div className="space-y-4">
              <button
                type="button"
                className="text-sm font-medium text-zinc-500 hover:text-black"
                onClick={() => setCategoryId(null)}
              >
                ← Categories
              </button>
              <p className="text-[15px] text-zinc-600">Choose a service.</p>
              <div className="space-y-3">
                {getServicesForCategory(categoryId).map((s) => (
                  <CardOption
                    key={s.id}
                    title={s.label}
                    description={
                      s.bookingMode === "consultation"
                        ? "Consultation recommended"
                        : "Direct booking"
                    }
                    selected={serviceId === s.id}
                    onClick={() => {
                      setServiceId(s.id);
                      if (s.bookingMode === "consultation" && s.consultationId) {
                        setConsultationId(s.consultationId);
                      } else {
                        setConsultationId(null);
                      }
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {step === "appointment" && goal === "known" && categoryId === "consultations" && (
            <div className="space-y-4">
              <p className="text-[15px] text-zinc-600">Select a consultation.</p>
              <div className="space-y-3">
                {consultationTypes.map((c) => (
                  <CardOption
                    key={c.id}
                    title={c.title}
                    description={c.description}
                    selected={consultationId === c.id}
                    onClick={() => {
                      setConsultationId(c.id);
                      setServiceId(null);
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {step === "appointment" && goal === "help" && !concernId && (
            <div className="space-y-4">
              <p className="text-[15px] text-zinc-600">What would you like to improve?</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {bookingConcerns.map((c) => (
                  <CardOption
                    key={c.id}
                    title={c.title}
                    description="See recommended starting points"
                    onClick={() => setConcernId(c.id)}
                  />
                ))}
              </div>
            </div>
          )}

          {step === "appointment" && goal === "help" && concernId && (
            <div className="space-y-4">
              <button
                type="button"
                className="text-sm font-medium text-zinc-500 hover:text-black"
                onClick={() => {
                  setConcernId(null);
                  setConsultationId(null);
                  setServiceId(null);
                }}
              >
                ← Concerns
              </button>
              <p className="font-display text-lg font-semibold text-black">
                {getConcernById(concernId)?.title}
              </p>
              <p className="text-[15px] text-zinc-600">Recommended starting points:</p>
              <div className="space-y-3">
                {getConcernById(concernId)?.recommendations.map((rec) => (
                  <CardOption
                    key={`${rec.type}-${rec.id}`}
                    title={rec.label}
                    description={rec.note ?? (rec.type === "consultation" ? "Consultation first" : "May book directly")}
                    selected={
                      rec.type === "consultation"
                        ? consultationId === rec.id
                        : serviceId === rec.id
                    }
                    onClick={() => {
                      if (rec.type === "consultation") {
                        setConsultationId(rec.id);
                        setServiceId(null);
                      } else {
                        setServiceId(rec.id);
                        const svc = getServiceById(rec.id);
                        if (svc?.bookingMode === "consultation" && svc.consultationId) {
                          setConsultationId(svc.consultationId);
                        } else {
                          setConsultationId(null);
                        }
                      }
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {step === "provider" && (
            <div className="space-y-4">
              <p className="text-[15px] text-zinc-600">Choose a provider.</p>
              <div className="space-y-3">
                {providers.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setProviderId(p.id)}
                    className={cn(
                      "flex w-full gap-4 rounded-[5px] border p-4 text-left transition-colors",
                      providerId === p.id
                        ? "border-black bg-zinc-50"
                        : "border-zinc-200 hover:border-zinc-400",
                    )}
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-zinc-200 text-xs font-semibold text-zinc-600">
                      {p.name
                        .split(" ")
                        .map((w) => w[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-black">{p.name}</p>
                      <p className="text-sm text-zinc-500">
                        {p.role} · {p.specialty}
                      </p>
                      <p className="mt-1 text-sm text-zinc-600">Next: {p.nextAvailable}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === "time" && (
            <div className="space-y-6">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div>
                  <label className="text-sm font-medium text-black">Date</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => {
                      setSelectedDate(e.target.value);
                      setTimeSlot(null);
                    }}
                    className="mt-2 w-full rounded-[5px] border border-zinc-200 px-3 py-2.5 text-sm"
                  />
                </div>
                <div className="hidden lg:block">
                  <p className="text-sm font-medium text-black">Available times</p>
                  {selectedDate ? (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {Object.values(mockTimeSlots)
                        .flat()
                        .map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setTimeSlot(slot)}
                            className={cn(
                              "rounded-[5px] border px-3 py-2 text-sm",
                              timeSlot === slot
                                ? "border-black bg-black text-white"
                                : "border-zinc-200 hover:border-zinc-400",
                            )}
                          >
                            {slot}
                          </button>
                        ))}
                    </div>
                  ) : (
                    <p className="mt-2 text-sm text-zinc-500">Select a date to see times.</p>
                  )}
                </div>
              </div>

              <div className="lg:hidden">
                {!selectedDate ? (
                  <p className="text-sm text-zinc-500">Select a date first.</p>
                ) : mobileTimeView === "period" ? (
                  <div className="grid grid-cols-3 gap-2">
                    {(["morning", "afternoon", "evening"] as TimePeriod[]).map((period) => (
                      <button
                        key={period}
                        type="button"
                        onClick={() => {
                          setTimePeriod(period);
                          setMobileTimeView("slots");
                        }}
                        className="rounded-[5px] border border-zinc-200 py-3 text-sm font-medium capitalize hover:border-zinc-400"
                      >
                        {period}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div>
                    <button
                      type="button"
                      className="mb-3 text-sm font-medium text-zinc-500"
                      onClick={() => setMobileTimeView("period")}
                    >
                      ← {timePeriod}
                    </button>
                    <div className="flex flex-wrap gap-2">
                      {(timePeriod ? mockTimeSlots[timePeriod] : []).map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setTimeSlot(slot)}
                          className={cn(
                            "rounded-[5px] border px-3 py-2 text-sm",
                            timeSlot === slot
                              ? "border-black bg-black text-white"
                              : "border-zinc-200",
                          )}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {step === "details" && (
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <p className="text-[15px] text-zinc-600">A few details to hold your appointment.</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-black">First name</label>
                  <input
                    required
                    value={details.firstName}
                    onChange={(e) => setDetails({ ...details, firstName: e.target.value })}
                    className="mt-1 w-full rounded-[5px] border border-zinc-200 px-3 py-2.5 text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-black">Last name</label>
                  <input
                    required
                    value={details.lastName}
                    onChange={(e) => setDetails({ ...details, lastName: e.target.value })}
                    className="mt-1 w-full rounded-[5px] border border-zinc-200 px-3 py-2.5 text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-black">Phone</label>
                <input
                  required
                  type="tel"
                  value={details.phone}
                  onChange={(e) => setDetails({ ...details, phone: e.target.value })}
                  className="mt-1 w-full rounded-[5px] border border-zinc-200 px-3 py-2.5 text-sm"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-black">Email</label>
                <input
                  required
                  type="email"
                  value={details.email}
                  onChange={(e) => setDetails({ ...details, email: e.target.value })}
                  className="mt-1 w-full rounded-[5px] border border-zinc-200 px-3 py-2.5 text-sm"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-black">Date of birth (optional)</label>
                <input
                  type="date"
                  value={details.dateOfBirth}
                  onChange={(e) => setDetails({ ...details, dateOfBirth: e.target.value })}
                  className="mt-1 w-full rounded-[5px] border border-zinc-200 px-3 py-2.5 text-sm"
                />
              </div>
              <fieldset>
                <legend className="text-sm font-medium text-black">Client type</legend>
                <div className="mt-2 flex gap-4">
                  {(["new", "returning"] as ClientType[]).map((type) => (
                    <label key={type} className="flex items-center gap-2 text-sm text-zinc-700">
                      <input
                        type="radio"
                        name="clientType"
                        checked={details.clientType === type}
                        onChange={() => setDetails({ ...details, clientType: type })}
                      />
                      {type === "new" ? "New client" : "Returning client"}
                    </label>
                  ))}
                </div>
              </fieldset>
            </form>
          )}

          {step === "policy" && (
            <div className="space-y-4 rounded-[5px] border border-zinc-200 bg-zinc-50 p-5">
              <h3 className="font-display text-lg font-semibold text-black">
                {policyCopy[activePolicy].title}
              </h3>
              <p className="text-[15px] leading-relaxed text-zinc-600">
                {policyCopy[activePolicy].body}
              </p>
              <p className="text-sm text-zinc-500">
                No-show and cancellation policies apply. Medical history is collected after booking via
                intake form.
              </p>
            </div>
          )}

          {step === "confirm" && (
            <div className="space-y-6">
              <p className="text-[15px] leading-relaxed text-zinc-600">
                Your appointment is confirmed. Complete intake before your visit.
              </p>
              <dl className="space-y-3 rounded-[5px] border border-zinc-200 p-5 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-zinc-500">Appointment</dt>
                  <dd className="text-right font-medium text-black">{appointmentLabel}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-zinc-500">Date & time</dt>
                  <dd className="text-right font-medium text-black">
                    {selectedDate} · {timeSlot}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-zinc-500">Provider</dt>
                  <dd className="text-right font-medium text-black">
                    {providers.find((p) => p.id === providerId)?.name}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-zinc-500">Location</dt>
                  <dd className="text-right font-medium text-black">
                    {businessLocation.streetAddress}, {businessLocation.addressLocality}
                  </dd>
                </div>
              </dl>
              <div>
                <p className="text-sm font-medium text-black">Before your visit</p>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-600">
                  <li>Complete your intake form</li>
                  <li>Arrive 10 minutes early</li>
                  <li>Bring questions or inspiration photos</li>
                  <li>Follow any prep instructions we send</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-[5px] bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-800"
                >
                  Complete intake
                </Link>
                <a
                  href={`tel:${businessLocation.phoneTel}`}
                  className="rounded-[5px] border border-zinc-200 px-5 py-2.5 text-sm font-medium text-black hover:bg-zinc-50"
                >
                  Call us
                </a>
              </div>
            </div>
          )}
        </div>

        {step !== "confirm" && (
          <div className="flex items-center justify-between gap-3 border-t border-zinc-100 px-5 py-4 sm:px-6">
            {step !== "goal" ? (
              <button
                type="button"
                onClick={goBack}
                className="text-sm font-medium text-zinc-600 hover:text-black"
              >
                Back
              </button>
            ) : (
              <span />
            )}
            {step !== "goal" && (
              <button
                type="button"
                onClick={() => {
                  if (step === "details") {
                    if (activePolicy === "none") setStep("confirm");
                    else setStep("policy");
                    return;
                  }
                  if (step === "policy") {
                    setStep("confirm");
                    return;
                  }
                  goNext();
                }}
                disabled={
                  (step === "appointment" && !canContinueAppointment) ||
                  (step === "provider" && !providerId) ||
                  (step === "time" && (!selectedDate || !timeSlot)) ||
                  (step === "details" &&
                    (!details.firstName ||
                      !details.lastName ||
                      !details.phone ||
                      !details.email))
                }
                className="rounded-[5px] bg-black px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {step === "policy" ? "Confirm booking" : "Continue"}
              </button>
            )}
          </div>
        )}

        {step === "confirm" && (
          <div className="border-t border-zinc-100 px-5 py-4 sm:px-6">
            <button
              type="button"
              onClick={closeBooking}
              className="w-full rounded-[5px] bg-black py-3 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
