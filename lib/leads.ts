import type { Lead } from "@/data/types";

/**
 * Typed submit-function abstraction for lead capture (spec section 14:
 * "abstract the submit handler behind a typed API function so the UI can
 * later connect to CRM, email, WhatsApp or a backend without rewriting
 * form components").
 *
 * The site is a static export (GitHub Pages hosting, no server), so leads
 * are delivered via Formspree — a third-party form-to-email service. Every
 * submission is emailed to the inbox configured on the Formspree form
 * itself (set up by the business, not stored in this codebase).
 *
 * `honeypot` is a hidden field (see LeadForm's `_gotcha` input) that real
 * visitors never fill in; if a bot fills it, Formspree silently discards
 * the submission instead of emailing it.
 */
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xljelqrv";

export async function submitLead(
  lead: Lead,
  honeypot?: string
): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    if (honeypot) {
      // Bot filled the hidden field — pretend success, send nothing further.
      return { ok: true };
    }

    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name: lead.name,
        phone: lead.phone,
        email: lead.email,
        city: lead.city,
        propertyType: lead.propertyType,
        monthlyBill: lead.monthlyBill,
        message: lead.message,
        consent: lead.consent,
        source: lead.source ?? "unknown",
        _subject: `New Solarwaala lead — ${lead.name} (${lead.propertyType}, ${lead.city})`,
        _replyto: lead.email || undefined,
      }),
    });

    if (!res.ok) {
      return { ok: false, error: "Something went wrong. Please try again or call us directly." };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: "Something went wrong. Please try again or call us directly." };
  }
}
