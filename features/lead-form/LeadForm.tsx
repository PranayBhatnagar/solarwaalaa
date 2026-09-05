"use client";

import { useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { track } from "@/lib/analytics";
import { submitLead } from "@/lib/leads";
import { validateLeadForm, type FieldErrors, type LeadFormFields } from "@/lib/validation";
import type { Lead } from "@/data/types";

type LeadFormProps = {
  source: Lead["source"];
  /** Compact = fewer optional fields, used in the Final CTA / Quote Drawer. */
  compact?: boolean;
  className?: string;
};

const PROPERTY_TYPES: { value: Lead["propertyType"]; label: string }[] = [
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
  { value: "industrial", label: "Industrial" },
  { value: "institutional", label: "Institutional" },
];

/**
 * The short lead form (spec 5.7/5.13/14): Name, Phone, City, Property Type,
 * optional Monthly Bill/Message, consent checkbox. Reused by the Quote
 * Drawer, Final CTA and /contact page.
 */
export function LeadForm({ source, compact = false, className = "" }: LeadFormProps) {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    propertyType: "",
    monthlyBill: "",
    message: "",
    consent: false,
  });
  // Honeypot: hidden from real visitors, only a bot autofills this. If set,
  // submitLead() silently drops the submission instead of emailing it.
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<FieldErrors<LeadFormFields>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const startedRef = useRef(false);

  const markStarted = () => {
    if (!startedRef.current) {
      startedRef.current = true;
      track({ name: "lead_form_started", props: { source: source ?? "unknown" } });
    }
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fieldErrors = validateLeadForm(values);
    setErrors(fieldErrors);

    if (Object.keys(fieldErrors).length > 0) {
      track({ name: "lead_form_error", props: { source: source ?? "unknown", reason: "validation" } });
      return;
    }

    setStatus("submitting");
    setServerError(null);

    const lead: Lead = {
      name: values.name,
      phone: values.phone,
      email: values.email || undefined,
      city: values.city,
      propertyType: values.propertyType as Lead["propertyType"],
      monthlyBill: values.monthlyBill ? Number(values.monthlyBill) : undefined,
      message: values.message || undefined,
      consent: values.consent,
      source,
    };

    const result = await submitLead(lead, honeypot);
    if (result.ok) {
      setStatus("success");
      track({ name: "lead_form_submitted", props: { source: source ?? "unknown" } });
    } else {
      setStatus("error");
      setServerError(result.error);
      track({ name: "lead_form_error", props: { source: source ?? "unknown", reason: "submit" } });
    }
  }

  if (status === "success") {
    return (
      <div role="status" className={`rounded-card border border-line bg-cloud p-6 ${className}`}>
        <p className="font-semibold text-ink">Thanks — we&apos;ve received your request.</p>
        <p className="mt-1 text-ink/70">
          Solarwaala will contact you using the details provided.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} onFocus={markStarted} noValidate className={`flex flex-col gap-4 ${className}`}>
      {/* Honeypot — visually hidden from real users, not just display:none (some bots skip that). */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor={`${source}-company`}>Company</label>
        <input
          id={`${source}-company`}
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <Field label="Name" error={errors.name} htmlFor={`${source}-name`}>
        <input
          id={`${source}-name`}
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          className={inputClass(!!errors.name)}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? `${source}-name-error` : undefined}
        />
      </Field>

      <Field label="Phone" error={errors.phone} htmlFor={`${source}-phone`}>
        <input
          id={`${source}-phone`}
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="+91 XXXXX XXXXX"
          value={values.phone}
          onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
          className={inputClass(!!errors.phone)}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? `${source}-phone-error` : undefined}
        />
      </Field>

      <Field label="City" error={errors.city} htmlFor={`${source}-city`}>
        <input
          id={`${source}-city`}
          type="text"
          autoComplete="address-level2"
          value={values.city}
          onChange={(e) => setValues((v) => ({ ...v, city: e.target.value }))}
          className={inputClass(!!errors.city)}
          aria-invalid={!!errors.city}
          aria-describedby={errors.city ? `${source}-city-error` : undefined}
        />
      </Field>

      <Field label="Property type" error={errors.propertyType} htmlFor={`${source}-property`}>
        <select
          id={`${source}-property`}
          value={values.propertyType}
          onChange={(e) => setValues((v) => ({ ...v, propertyType: e.target.value }))}
          className={inputClass(!!errors.propertyType)}
          aria-invalid={!!errors.propertyType}
          aria-describedby={errors.propertyType ? `${source}-property-error` : undefined}
        >
          <option value="">Select one</option>
          {PROPERTY_TYPES.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </Field>

      {!compact && (
        <Field label="Monthly electricity bill (optional)" htmlFor={`${source}-bill`}>
          <input
            id={`${source}-bill`}
            type="number"
            inputMode="numeric"
            min={0}
            placeholder="e.g. 4000"
            value={values.monthlyBill}
            onChange={(e) => setValues((v) => ({ ...v, monthlyBill: e.target.value }))}
            className={inputClass(false)}
          />
        </Field>
      )}

      {!compact && (
        <Field label="Message (optional)" htmlFor={`${source}-message`}>
          <textarea
            id={`${source}-message`}
            rows={3}
            value={values.message}
            onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
            className={inputClass(false)}
          />
        </Field>
      )}

      <label htmlFor={`${source}-consent`} className="flex items-start gap-2.5 text-sm text-ink/75">
        <input
          id={`${source}-consent`}
          type="checkbox"
          checked={values.consent}
          onChange={(e) => setValues((v) => ({ ...v, consent: e.target.checked }))}
          className="mt-0.5 h-5 w-5 shrink-0 accent-action"
          aria-describedby={errors.consent ? `${source}-consent-error` : undefined}
        />
        <span>I consent to Solarwaala contacting me about this enquiry.</span>
      </label>
      {errors.consent ? (
        <p id={`${source}-consent-error`} className="-mt-2 text-sm text-red-600">
          {errors.consent}
        </p>
      ) : null}

      {status === "error" && serverError ? (
        <p role="alert" className="text-sm text-red-600">
          {serverError}
        </p>
      ) : null}

      <Button type="submit" size="lg" disabled={status === "submitting"} className="mt-1 w-full">
        {status === "submitting" ? "Sending…" : "Request a Solar Consultation"}
      </Button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${htmlFor}-error`} role="alert" className="text-sm text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return `min-h-[44px] rounded-control border px-3.5 py-2.5 text-ink bg-white focus-visible:outline-none ${
    hasError ? "border-red-500" : "border-line focus:border-action"
  }`;
}
