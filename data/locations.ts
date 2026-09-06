import type { ServiceLocation } from "./types";

/**
 * Service-area examples for the Uttar Pradesh Coverage section (spec 5.8).
 * These are general geographic reference points for "we serve this state",
 * NOT claims of offices or completed projects in each city - the spec is
 * explicit that such claims require verification (section 3, 5.8).
 *
 * Coordinates are real geographic positions (percent of the map SVG's
 * viewBox, public/images/up-map.svg - viewBox 0 0 1000 1000), derived by
 * linearly mapping each city's published lat/long onto Uttar Pradesh's
 * geographic bounding box (lon 77.0-84.65E, lat 23.85-30.4N) against the
 * map shape's own pixel bounding box. This is an approximation (no
 * projection correction) adequate for a stylized locator map, not a
 * survey-grade one.
 *
 * Noida/Meerut are nudged a couple of percent apart from their literal
 * computed positions - real-geography they sit close enough that their
 * touch targets would overlap (WCAG 2.5.8 target-size), which a "stylized"
 * map (spec 5.8) doesn't need to reproduce exactly.
 */
export const serviceLocations: ServiceLocation[] = [
  { id: "lucknow", city: "Lucknow", x: 51.5, y: 53.3 },
  { id: "kanpur", city: "Kanpur", x: 44.4, y: 58.1 },
  { id: "varanasi", city: "Varanasi", x: 75.5, y: 71.7 },
  { id: "agra", city: "Agra", x: 16.7, y: 49.3 },
  { id: "noida", city: "Noida", x: 10.5, y: 36.5 },
  { id: "prayagraj", city: "Prayagraj", x: 62.2, y: 70.1 },
  { id: "gorakhpur", city: "Gorakhpur", x: 80.2, y: 54.4 },
  { id: "meerut", city: "Meerut", x: 11.5, y: 23.5 },
];
