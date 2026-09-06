"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useInView } from "@/hooks/useInView";
import { serviceLocations } from "@/data/locations";

/**
 * Uttar Pradesh Coverage (spec 5.8): a real, geographically-accurate map of
 * Uttar Pradesh (public/images/up-map.svg - traced from an open-licensed
 * state outline, see /photo-credits) with sequenced pulse-on-first-view
 * nodes at each city's actual position. Hover/focus reveals "Serving this
 * region" - never a claim of offices/completed projects in that city (spec
 * 3 / 5.8). Includes a textual list equivalent for the map image (spec
 * section 12: "Map/canvas visuals must have a textual equivalent").
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
          subtitle="Solarwaalaa is based in Lucknow and works with residential, commercial, industrial and institutional customers across Uttar Pradesh."
        />

        <div ref={ref} className="relative mx-auto aspect-square w-full max-w-md">
          <Image
            src="/images/up-map.svg"
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, 80vw"
            className="object-contain"
          />

          <div className="absolute inset-0">
            {serviceLocations.map((loc, index) => {
              const isLucknow = loc.id === "lucknow";
              return (
                <div
                  key={loc.id}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                >
                  {/* Sequenced pulse ring on first viewport entry. */}
                  {inView ? (
                    <span
                      aria-hidden="true"
                      className={`absolute inset-0 -z-10 rounded-full motion-safe:animate-ping ${
                        isLucknow ? "bg-eco/40" : "bg-action/40"
                      }`}
                      style={{ animationDelay: `${index * 150}ms` }}
                    />
                  ) : null}

                  <button
                    type="button"
                    onMouseEnter={() => setActiveId(loc.id)}
                    onMouseLeave={() => setActiveId((id) => (id === loc.id ? null : id))}
                    onFocus={() => setActiveId(loc.id)}
                    onBlur={() => setActiveId((id) => (id === loc.id ? null : id))}
                    aria-label={`${loc.city}, serving this region`}
                    className="relative flex h-6 w-6 items-center justify-center rounded-full focus-visible:outline-action"
                  >
                    <span
                      aria-hidden="true"
                      className={`block rounded-full ring-2 ring-white ${
                        isLucknow ? "h-3.5 w-3.5 bg-eco" : "h-2.5 w-2.5 bg-action"
                      }`}
                    />
                  </button>

                  {activeId === loc.id ? (
                    <span
                      aria-hidden="true"
                      className="absolute left-1/2 top-full mt-1 w-max -translate-x-1/2 rounded-control bg-ink px-2.5 py-1 text-xs text-white shadow-lg"
                    >
                      {loc.city}, serving this region
                    </span>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>

        {/* Textual equivalent of the map image, for assistive tech / SEO. */}
        <ul className="sr-only">
          {serviceLocations.map((loc) => (
            <li key={loc.id}>{loc.city}, serving this region</li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
