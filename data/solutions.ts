import type { Solution } from "./types";

/**
 * Copy per spec section 5.5 (Solutions) and section 17 (Content Rules) —
 * confident, simple, no unverified claims. Extended with per-segment body
 * copy for the dedicated /solutions/[segment] pages (section 13, descriptive
 * URLs: /solutions/residential-solar etc.).
 *
 * Images are real, openly-licensed photography (see data/photo-credits.ts
 * and /photo-credits) — placeholders until Solarwaala's own project
 * photography is available, per spec section 16.
 */
export const solutions: (Solution & { slug: string; bodyIntro: string; bestFor: string[] })[] = [
  {
    id: "residential",
    slug: "residential-solar",
    title: "Residential",
    segment: "Residential",
    outcome: "Solar for your home.",
    description: "Rooftop solar systems designed around your home's roof, shading and electricity usage.",
    bodyIntro:
      "A home solar system is sized around your roof, your household's electricity usage, and how your local connection is set up. Solarwaala starts every residential enquiry with a site assessment rather than a generic package.",
    bestFor: ["Independent houses", "Bungalows", "Farmhouses", "Gated-community villas"],
    image: "/images/solutions/residential.webp",
    imageAlt: "Rooftop solar panels installed on a home amid a dense Indian residential neighbourhood",
    href: "/solutions/residential-solar",
    icon: "home",
  },
  {
    id: "commercial",
    slug: "commercial-solar",
    title: "Commercial",
    segment: "Commercial",
    outcome: "Solar for your business.",
    description: "Rooftop solar for offices, hotels, schools, retail and warehouse buildings.",
    bodyIntro:
      "Commercial rooftops — offices, hotels, schools, retail and warehouse spaces — usually have more usable roof area and steadier daytime consumption, which changes how a system should be designed and sized.",
    bestFor: ["Offices", "Hotels", "Schools & institutions", "Retail & warehouses"],
    image: "/images/solutions/commercial.webp",
    imageAlt: "Rows of solar panels mounted on a commercial office building rooftop",
    href: "/solutions/commercial-solar",
    icon: "building",
  },
  {
    id: "industrial",
    slug: "industrial-solar",
    title: "Industrial",
    segment: "Industrial",
    outcome: "Solar for your facility.",
    description: "Large rooftop and ground-mount solar for factories and industrial facilities.",
    bodyIntro:
      "Industrial sites often combine large rooftops with adjacent land, higher and more consistent loads, and specific engineering/safety requirements. These projects are engineered around your facility's actual load profile.",
    bestFor: ["Manufacturing plants", "Warehousing & logistics parks", "Processing facilities"],
    image: "/images/solutions/industrial.webp",
    imageAlt: "Aerial view of a large ground-mounted solar farm with rows of panels beside a facility",
    href: "/solutions/industrial-solar",
    icon: "factory",
  },
  {
    id: "institutional",
    slug: "institutional-solar",
    title: "Institutional",
    segment: "Institutional",
    outcome: "Solar for your institution.",
    description: "Solar for educational campuses, hospitals, government and community buildings.",
    bodyIntro:
      "Educational campuses, healthcare facilities, government and community buildings each have their own approval processes, usage patterns and budget cycles — Solarwaala works through these alongside your facilities team.",
    bestFor: ["Schools & colleges", "Hospitals & clinics", "Government buildings", "Community institutions"],
    image: "/images/solutions/institutional.webp",
    imageAlt: "Solar panels installed on the rooftop of a school building",
    href: "/solutions/institutional-solar",
    icon: "landmark",
  },
];
