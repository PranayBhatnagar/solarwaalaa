/**
 * Central business-facts config.
 *
 * Per the spec's non-goals (section 3) Claude must not invent business facts —
 * every value here is either a real, user-supplied fact or an explicitly
 * `null`/empty placeholder. Components must treat `null`/empty as "hide this",
 * never render a fabricated fallback.
 *
 * TODO (business): supply real values for every field still `null` below
 * before public launch (see spec section 18, Launch Acceptance Criteria).
 */

export const siteConfig = {
  name: "Solarwaala",
  legalName: "Solarwaala",
  tagline: "Power Your Future with Solar.",
  city: "Lucknow",
  state: "Uttar Pradesh",
  serviceArea: "Serving Uttar Pradesh",
  // Canonical production URL — apex domain, no "www" (www.solarwaalaa.com
  // redirects to this via DNS/GitHub Pages). Used for canonical URLs, OG
  // tags, sitemap, and JSON-LD.
  url: "https://solarwaalaa.com",

  contact: {
    phone: "+91-9918901250",
    phoneDisplay: "+91 99189 01250",
    email: "info@solarwaalaa.com",
    // No WhatsApp Business number supplied yet — omit the WhatsApp CTA and
    // the `whatsapp_click` analytics event entirely until one exists.
    whatsapp: null as string | null,
    address: null as string | null, // TODO (business): street address, if one should be public.
  },

  social: {
    instagram: null as string | null,
    linkedin: null as string | null,
    facebook: null as string | null,
    youtube: null as string | null,
  },

  /**
   * Feature flags gating sections/components that depend on verified,
   * business-supplied data. Flip to `true` only once the corresponding
   * data file (data/projects.ts, data/testimonials.ts) has real entries.
   */
  flags: {
    hasProjects: false,
    hasTestimonials: false,
    hasCertifications: false,
    hasProofStats: false,
  },
} as const;

export type SiteConfig = typeof siteConfig;
