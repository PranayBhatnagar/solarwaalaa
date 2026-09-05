"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { track } from "@/lib/analytics";
import { useQuoteDrawer } from "@/features/lead-form/QuoteDrawerContext";
import { siteConfig } from "@/data/config";

/**
 * Hero (spec 5.2): full-viewport-ish desktop hero, premium solar photograph
 * with controlled contrast, eyebrow/H1/subhead/CTAs, location trust pill.
 * No carousel. Real openly-licensed photography (see /photo-credits) —
 * placeholder until Solarwaala's own project photography is available
 * (spec section 16).
 */
export function Hero() {
  const { open } = useQuoteDrawer();

  return (
    <section className="relative isolate flex min-h-[560px] sm:min-h-[700px] lg:min-h-[820px] items-center overflow-hidden bg-deep">
      <Image
        src="/images/hero.webp"
        alt=""
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/45 to-transparent"
      />

      <Container className="relative z-10 py-20 sm:py-28">
        <div className="max-w-xl flex flex-col gap-6">
          <span className="text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase text-lime">
            {siteConfig.name.toUpperCase()} • {siteConfig.city.toUpperCase()}, {siteConfig.state.toUpperCase()}
          </span>

          <h1 className="text-[clamp(2.25rem,5vw,3.75rem)] font-bold leading-[1.05] tracking-tight text-white text-balance">
            {siteConfig.tagline}
          </h1>

          <p className="text-base sm:text-lg text-white/85 max-w-md text-pretty">
            Clean, reliable solar energy solutions for homes and businesses across{" "}
            {siteConfig.state}.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button
              size="lg"
              onClick={() => {
                track({ name: "hero_cta_click", props: { cta: "consultation" } });
                open("hero");
              }}
            >
              Get a Solar Consultation
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="/solutions"
              className="bg-white/10 text-white border-white/30 hover:bg-white hover:text-ink"
              onClick={() => track({ name: "hero_cta_click", props: { cta: "explore-solutions" } })}
            >
              Explore Solutions
            </Button>
          </div>

          <p className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-sm">
            <MapPin aria-hidden="true" size={16} className="shrink-0" />
            Based in {siteConfig.city} • {siteConfig.serviceArea}
          </p>
        </div>
      </Container>
    </section>
  );
}
