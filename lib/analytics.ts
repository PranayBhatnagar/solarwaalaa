/**
 * Typed analytics event abstraction (spec section 15).
 *
 * No analytics platform is named in the spec, so this is a console-backed
 * stub today. To wire a real provider (GA4, etc.) later, replace the body
 * of `track()` only — every call site in the app already uses this typed
 * function, so no component changes are needed.
 *
 * Privacy rule (spec section 15): never pass raw phone numbers, emails or
 * other sensitive lead fields as event properties — only funnel signals.
 */

export type AnalyticsEvent =
  | { name: "hero_cta_click"; props?: { cta: "consultation" | "explore-solutions" } }
  | { name: "header_quote_click" }
  | { name: "solution_card_click"; props: { segment: string } }
  | { name: "estimator_started" }
  | { name: "estimator_completed" }
  | { name: "lead_form_started"; props: { source: string } }
  | { name: "lead_form_submitted"; props: { source: string } }
  | { name: "lead_form_error"; props: { source: string; reason: string } }
  | { name: "project_opened"; props: { projectId: string } }
  | { name: "faq_opened"; props: { faqId: string } }
  | { name: "phone_click" }
  | { name: "email_click" };
// Note: `whatsapp_click` is intentionally omitted — spec 5.11/15 says only
// track it once a real WhatsApp number exists (data/config.ts: contact.whatsapp).

export function track(event: AnalyticsEvent): void {
  if (process.env.NODE_ENV !== "production") {
    console.debug("[analytics]", event.name, "props" in event ? event.props : undefined);
  }
  // TODO (integration): forward to a real analytics provider here, e.g.:
  // window.gtag?.("event", event.name, "props" in event ? event.props : undefined);
}
