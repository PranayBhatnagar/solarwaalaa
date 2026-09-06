"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type AnimatedCounterProps = {
  /** Final numeric value. Only pass verified numbers (spec 5.11 / 6). */
  value: number;
  suffix?: string;
  prefix?: string;
  durationMs?: number;
  className?: string;
};

/**
 * Count-up-on-view metric. Counts up only while visible and only ever
 * displays a value the caller supplies (never fabricates one) - callers
 * are responsible for gating this behind verified data (see
 * data/config.ts flags). Reduced-motion users see the final value
 * immediately, no animation.
 */
export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  durationMs = 1200,
  className = "",
}: AnimatedCounterProps) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.4 });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    // Reduced-motion users see the final value immediately - handled by
    // the render below, not by writing state here.
    if (!inView || reduced) return;

    let frame: number;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(1, elapsed / durationMs);
      setDisplay(Math.round(progress * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduced, value, durationMs]);

  const shown = reduced ? value : display;

  return (
    <span ref={ref} className={className}>
      {prefix}
      {shown.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}
