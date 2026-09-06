"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { track } from "@/lib/analytics";
import { solutions } from "@/data/solutions";

type SolutionsGridProps = {
  /** Use "h1" when this is the page's primary heading (e.g. /solutions), "h2" when embedded (e.g. homepage). */
  headingAs?: "h1" | "h2";
  showHeading?: boolean;
};

/**
 * Solutions grid (spec 5.5): four large visual cards - image, one-line
 * outcome, short description, arrow. Hover: image zooms subtly, gradient
 * veil appears, arrow shifts 4-6px (durations 150-300ms per spec section 6).
 */
export function SolutionsGrid({ headingAs = "h2", showHeading = true }: SolutionsGridProps = {}) {
  // Card titles must be one level below whatever this section's own heading
  // renders as, so the hierarchy never skips a level (spec section 12) -
  // h1 (dedicated /solutions page) -> h2 cards; h2 (embedded, e.g. homepage) -> h3 cards.
  const CardTitle = headingAs === "h1" ? "h2" : "h3";

  return (
    <section className="py-16 sm:py-24 bg-cloud">
      <Container className="flex flex-col gap-10">
        {showHeading ? (
          <SectionHeading
            as={headingAs}
            eyebrow="Solutions"
            title="Solar Solutions for Every Need"
            align="center"
            className="mx-auto"
          />
        ) : null}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {solutions.map((solution, index) => (
            <Reveal key={solution.id} delayMs={index * 80}>
              <Link
                href={solution.href}
                onClick={() => track({ name: "solution_card_click", props: { segment: solution.segment } })}
                className="group relative flex h-full flex-col overflow-hidden rounded-card border border-line bg-white"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={solution.imageAlt}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-1.5 p-6">
                  <CardTitle className="text-lg font-bold text-ink">{solution.title}</CardTitle>
                  <p className="font-medium text-deep">{solution.outcome}</p>
                  <p className="mt-1 text-sm text-ink/70">{solution.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
                    Learn more
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1.5"
                    >
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
