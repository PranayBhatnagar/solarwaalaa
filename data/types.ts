/**
 * Shared typed data models.
 * Source: spec section 10 (Suggested TypeScript Models), extended slightly
 * (Testimonial/Certification) to support the Trust/Evidence section (5.11),
 * which the spec describes but doesn't fully model.
 */

export type Segment = "Residential" | "Commercial" | "Industrial" | "Institutional";

export type Solution = {
  id: string;
  title: string;
  segment: Segment;
  description: string;
  outcome: string; // one-line outcome shown on the card
  image: string;
  imageAlt: string;
  href: string;
  icon: string;
};

export type Project = {
  id: string;
  title: string;
  city: string;
  segment: Segment;
  systemSize?: string;
  application?: string;
  annualGeneration?: string;
  completionDate?: string;
  image: string;
  alt: string;
  beforeImage?: string; // for the before/after slider - only when real photos exist
};

export type Lead = {
  name: string;
  phone: string;
  email?: string;
  city: string;
  propertyType: "residential" | "commercial" | "industrial" | "institutional";
  monthlyBill?: number;
  message?: string;
  consent: boolean;
  /** Which on-page entry point produced this lead - for analytics only, no PII. */
  source?: "header" | "hero" | "estimator" | "final-cta" | "contact-page";
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role?: string;
  city?: string;
};

export type Certification = {
  id: string;
  name: string;
  issuer?: string;
  image?: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type ServiceLocation = {
  id: string;
  city: string;
  /** Approximate position on the stylized UP map, in percent (0-100) of the map's viewBox. */
  x: number;
  y: number;
};
