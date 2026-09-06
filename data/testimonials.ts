import type { Certification, Testimonial } from "./types";

/**
 * Real customer testimonials and certifications only - empty at launch.
 * The Trust/Evidence section (spec 5.11) is fully built and gated by
 * `siteConfig.flags.hasTestimonials` / `hasCertifications` in data/config.ts,
 * so it renders nothing (rather than a fabricated placeholder) until real
 * entries are added here.
 *
 * TODO (business): add real testimonials/certifications, e.g.
 * { id: "t1", quote: "...", author: "...", role: "Homeowner", city: "Lucknow" }
 */
export const testimonials: Testimonial[] = [];

export const certifications: Certification[] = [];
