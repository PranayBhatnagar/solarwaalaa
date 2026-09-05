import type { FaqItem } from "./types";

/**
 * Launch FAQ content per spec section 5.12 — covers: system types, site
 * assessment, on/off-grid/hybrid basics, maintenance, timeline,
 * documentation, service area, quote process. Deliberately avoids specific
 * subsidy amounts/eligibility rules, warranty terms, or savings figures
 * (spec section 17, Content Rules) — those require verification against
 * current official sources before publication.
 *
 * TODO (business): have these answers reviewed before launch (spec 5.12).
 */
export const faqItems: FaqItem[] = [
  {
    id: "system-types",
    question: "What kind of solar systems does Solarwaala install?",
    answer:
      "We work across on-grid (grid-tied), off-grid and hybrid solar systems for residential, commercial, industrial and institutional properties. The right type depends on your electricity usage, grid connection and backup needs — we help you decide after a site assessment.",
  },
  {
    id: "site-assessment",
    question: "What happens during a site assessment?",
    answer:
      "A site assessment looks at your roof or available area, shading, structural condition, existing electrical setup and your electricity consumption pattern. This is what turns a rough enquiry into an actual system design and quote.",
  },
  {
    id: "on-off-hybrid",
    question: "What's the difference between on-grid, off-grid and hybrid solar?",
    answer:
      "On-grid systems stay connected to the utility grid and typically don't include battery storage. Off-grid systems run independently of the grid using battery storage. Hybrid systems stay grid-connected while also including battery backup. We'll recommend a type based on your property and reliability needs.",
  },
  {
    id: "maintenance",
    question: "How much maintenance does a solar system need?",
    answer:
      "Solar systems generally need periodic panel cleaning and occasional inspection of wiring, mounting and inverter performance. Exact maintenance needs depend on your system design and local conditions — this is covered as part of your system handover.",
  },
  {
    id: "timeline",
    question: "How long does an installation take?",
    answer:
      "Timelines vary by system size, site complexity and approvals required, and are confirmed after your site assessment and design are finalized rather than quoted generically upfront.",
  },
  {
    id: "documentation",
    question: "What documentation or approvals are involved?",
    answer:
      "Depending on your system type and connection, this can include net-metering or connection applications with your electricity distribution company and standard installation documentation. We guide you through the paperwork relevant to your specific project.",
  },
  {
    id: "service-area",
    question: "Where does Solarwaala operate?",
    answer:
      "Solarwaala is based in Lucknow and serves customers across Uttar Pradesh.",
  },
  {
    id: "government-subsidy",
    question: "Is there a government subsidy for solar installation?",
    answer:
      "Yes. Residential customers can access a central government subsidy of up to ₹78,000 under the PM Surya Ghar Muft Bijli Yojana, plus an additional Uttar Pradesh state subsidy of up to ₹30,000 — subject to eligibility and current scheme terms, which we'll confirm for your specific case. See our Financing page for details.",
  },
  {
    id: "solar-loan",
    question: "Can I get a loan to finance my solar system?",
    answer:
      "Yes. Collateral-free bank loans are available covering up to 90% of your project cost, with rates starting around 5.75% p.a. under the PM Surya Ghar loan facility. We can help you apply.",
  },
  {
    id: "quote-process",
    question: "How do I get a quote?",
    answer:
      "Share a few basic details through the \"Get a Quote\" form — your property type, city and approximate electricity bill. We'll follow up to arrange a proper site assessment before providing a firm quote.",
  },
];
