"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useInView } from "@/hooks/useInView";
import { serviceLocations } from "@/data/locations";

/**
 * Uttar Pradesh Coverage (spec 5.8): stylized map (hand-built shape, not a
 * screenshot) with sequenced pulse-on-first-view nodes. Hover/focus reveals
 * "Serving this region" — never a claim of offices/completed projects in
 * that city (spec 3 / 5.8). Includes a textual list equivalent for the
 * decorative SVG (spec section 12: "Map/canvas visuals must have a textual
 * equivalent").
 */
export function Coverage() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="py-16 sm:py-24">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <SectionHeading
          eyebrow="Coverage"
          title="Lucknow Based. Uttar Pradesh Focused."
          subtitle="Solarwaala is based in Lucknow and works with residential, commercial, industrial and institutional customers across Uttar Pradesh."
        />

        <div ref={ref} className="relative">
          <svg
            viewBox="0 0 100 100"
            aria-hidden="true"
            className="w-full h-auto max-w-md mx-auto"
          >
            <defs>
              <linearGradient id="upFill" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0D8BFF" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#4CAF16" stopOpacity="0.14" />
              </linearGradient>
            </defs>
            {/* Stylized (non-geographic) state silhouette */}
            <path
              d="M14 30 Q 10 18 24 14 Q 40 6 58 12 Q 78 10 86 24 Q 92 34 84 46 Q 90 58 78 68 Q 74 82 58 84 Q 42 92 28 82 Q 12 78 10 62 Q 4 46 14 30 Z"
              fill="url(#upFill)"
              stroke="#0A4FB3"
              strokeWidth="0.6"
            />
            {serviceLocations.map((loc, index) => (
              <g key={loc.id}>
                {inView ? (
                  <circle
                    cx={loc.x}
                    cy={loc.y}
                    r={2.4}
                    className="fill-action/40 motion-safe:animate-ping"
                    style={{ animationDelay: `${index * 150}ms`, transformOrigin: `${loc.x}px ${loc.y}px` }}
                  />
                ) : null}
                <circle
                  cx={loc.x}
                  cy={loc.y}
                  r={loc.id === "lucknow" ? 2.2 : 1.6}
                  className={loc.id === "lucknow" ? "fill-eco" : "fill-action"}
                />
              </g>
            ))}
          </svg>

          {/* Invisible, positioned focus/hover targets over each node, plus visible tooltip. */}
          <div className="absolute inset-0">
            {serviceLocations.map((loc) => (
              <button
                key={loc.id}
                type="button"
                onMouseEnter={() => setActiveId(loc.id)}
                onMouseLeave={() => setActiveId((id) => (id === loc.id ? null : id))}
                onFocus={() => setActiveId(loc.id)}
                onBlur={() => setActiveId((id) => (id === loc.id ? null : id))}
                aria-label={`${loc.city} — serving this region`}
                className="absolute h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full focus-visible:outline-action"
                style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
              >
                {activeId === loc.id ? (
                  <span className="absolute left-1/2 top-full mt-1 w-max -translate-x-1/2 rounded-control bg-ink px-2.5 py-1 text-xs text-white shadow-lg">
                    {loc.city} — serving this region
                  </span>
                ) : null}
              </button>
            ))}
          </div>
        </div>

        {/* Textual equivalent of the decorative map, for assistive tech / SEO. */}
        <ul className="sr-only">
          {serviceLocations.map((loc) => (
            <li key={loc.id}>{loc.city} — serving this region</li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
