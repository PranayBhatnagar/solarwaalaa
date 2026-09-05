import type { Lead } from "@/data/types";

/**
 * Typed submit-function abstraction for lead capture (spec section 14:
 * "abstract the submit handler behind a typed API function so the UI can
 * later connect to CRM, email, WhatsApp or a backend without rewriting
 * form components").
 *
 * No CRM/email/backend is named in the spec, so this is a stub that
 * resolves successfully after a short delay. Replace the body of
 * `submitLead()` with a real API call/CRM integration later — every form
 * in the app already calls this one function.
 */
export async function submitLead(lead: Lead): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    // TODO (integration): replace with a real endpoint, e.g.
    // const res = await fetch("/api/leads", { method: "POST", body: JSON.stringify(lead) });
    if (process.env.NODE_ENV !== "production") {
      console.debug("[leads] submitted (stub, not sent anywhere yet):", {
        ...lead,
        phone: "«redacted in log»",
        email: lead.email ? "«redacted in log»" : undefined,
      });
    }
    await new Promise((resolve) => setTimeout(resolve, 400));
    return { ok: true };
  } catch {
    return { ok: false, error: "Something went wrong. Please try again or call us directly." };
  }
}
