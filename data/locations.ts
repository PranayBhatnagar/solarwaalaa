import type { ServiceLocation } from "./types";

/**
 * Service-area examples for the Uttar Pradesh Coverage section (spec 5.8).
 * These are general geographic reference points for "we serve this state",
 * NOT claims of offices or completed projects in each city — the spec is
 * explicit that such claims require verification (section 3, 5.8).
 *
 * Coordinates are approximate positions (percent of viewBox) on the
 * simplified UP map SVG in features/coverage — tune visually once the map
 * is drawn, not geographically precise.
 */
export const serviceLocations: ServiceLocation[] = [
  { id: "lucknow", city: "Lucknow", x: 50, y: 52 },
  { id: "kanpur", city: "Kanpur", x: 38, y: 55 },
  { id: "varanasi", city: "Varanasi", x: 72, y: 62 },
  { id: "agra", city: "Agra", x: 20, y: 40 },
  { id: "noida", city: "Noida", x: 18, y: 28 },
  { id: "prayagraj", city: "Prayagraj", x: 58, y: 66 },
  { id: "gorakhpur", city: "Gorakhpur", x: 78, y: 45 },
  { id: "meerut", city: "Meerut", x: 22, y: 18 },
];
