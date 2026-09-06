import type { Project } from "./types";

/**
 * Real, verified completed-project entries only (spec section 3, Non-Goals:
 * "Do not invent installed capacity, number of projects... or years of
 * experience"). Intentionally empty at launch - the Project Showcase (5.9)
 * and before/after slider components are fully built and will render
 * automatically as soon as entries are added here.
 *
 * TODO (business): add real project entries, e.g.
 * {
 *   id: "lko-residential-001",
 *   title: "Rooftop system, Gomti Nagar",
 *   city: "Lucknow",
 *   segment: "Residential",
 *   systemSize: "5 kW",
 *   application: "Rooftop, on-grid",
 *   annualGeneration: undefined, // omit until measured/verified
 *   completionDate: "2026-XX",
 *   image: "/images/projects/lko-residential-001.jpg",
 *   alt: "Rooftop solar panel array on a residential home in Gomti Nagar, Lucknow",
 * }
 */
export const projects: Project[] = [];
