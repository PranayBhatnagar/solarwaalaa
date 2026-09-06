"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { journeySteps } from "./journey-steps";

type SolarJourneyProps = {
  headingAs?: "h1" | "h2";
};

/**
 * Solar Journey (spec 5.6): four-step flow, horizontal on desktop, vertical
 * on mobile, with a progress-line animation tied to scroll. All step
 * content is always present in static HTML (spec: "keep content accessible
 * in static HTML") - only the fill-line animates, and it's frozen at 100%
 * for reduced-motion users rather than skipped.
 */
export function SolarJourney({ headingAs = "h2" }: SolarJourneyProps = {}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(sectionRef);
  const reduced = useReducedMotion();
  const fill = reduced ? 1 : progress;
  // Step titles must be one level below this section's own heading, so the
  // hierarchy never skips a level (spec section 12) - h1 (dedicated
  // /how-it-works page) -> h2 steps; h2 (embedded, e.g. homepage) -> h3 steps.
  const StepTitle = headingAs === "h1" ? "h2" : "h3";

  return (
    <section className="py-16 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          as={headingAs}
          eyebrow="How It Works"
          title="Your Journey to Solar, Simplified."
          align="center"
          className="mx-auto"
        />

        <div ref={sectionRef} className="relative">
          {/* Desktop: horizontal progress line behind the steps */}
          <div className="hidden lg:block absolute left-0 right-0 top-[38px] h-0.5 bg-line" aria-hidden="true">
            <div
              className="h-full bg-action transition-[width] duration-150 ease-out"
              style={{ width: `${Math.round(fill * 100)}%` }}
            />
          </div>
          {/* Mobile/tablet: vertical progress line */}
          <div
            className="lg:hidden absolute left-[19px] top-2 bottom-2 w-0.5 bg-line"
            aria-hidden="true"
          >
            <div
              className="w-full bg-action transition-[height] duration-150 ease-out"
              style={{ height: `${Math.round(fill * 100)}%` }}
            />
          </div>

          <ol className="relative grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-6">
            {journeySteps.map((step) => (
              <li key={step.number} className="flex lg:flex-col gap-4 lg:gap-4 pl-14 lg:pl-0">
                <span className="absolute lg:static left-0 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-deep bg-white text-sm font-bold text-deep">
                  {step.number}
                </span>
                <div>
                  <StepTitle className="font-bold text-ink">{step.title}</StepTitle>
                  <p className="mt-1.5 text-sm text-ink/70 leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
