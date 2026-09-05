/**
 * Proof cards for the "Why Solarwaala" section (spec 5.4). Qualitative
 * claims about how Solarwaala works — not quantitative stats, so they don't
 * require the verification gate that project counts/certifications do.
 * Numeric metrics (project counts etc.) stay hidden until
 * `siteConfig.flags.hasProofStats` is true — see WhySolarwaala.tsx.
 */
export const proofCards = [
  {
    id: "site-assessed",
    title: "Site-Assessed Design",
    body: "Every system is designed around your actual roof, shading and electricity usage — not a generic package.",
  },
  {
    id: "transparent-process",
    title: "Transparent Process",
    body: "Understand, assess, design, install — a clear four-step journey explained before you commit to anything.",
  },
  {
    id: "locally-based",
    title: "Locally Based",
    body: "Based in Lucknow, working directly with customers across Uttar Pradesh.",
  },
  {
    id: "built-to-last",
    title: "Engineering-Focused",
    body: "Installations are engineered with safety, structural fit and long-term performance in mind.",
  },
];
