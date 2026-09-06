"use client";

import { useEffect, useRef, useState } from "react";

type Options = {
  /** Fire once and stop observing (default true) - cheap for reveal/counter animations. */
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
};

const supportsIntersectionObserver = typeof IntersectionObserver !== "undefined";

/**
 * IntersectionObserver-backed "has this element scrolled into view" hook.
 * Used for scroll-reveal, count-up metrics and the coverage-map pulse
 * animation (spec section 11: "Use IntersectionObserver for counters,
 * reveal animations and expensive visualizations").
 *
 * Initial state is always `false` on both server and client (so hydration
 * matches); the IntersectionObserver-unsupported fallback reveals content
 * via a deferred (rAF) state update rather than synchronously in the
 * effect body.
 */
export function useInView<T extends HTMLElement>({
  once = true,
  threshold = 0.2,
  rootMargin = "0px",
}: Options = {}) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (!supportsIntersectionObserver) {
      // Fail open (visible) for browsers without IntersectionObserver -
      // deferred so we're not setting state synchronously in the effect body.
      const frame = requestAnimationFrame(() => setInView(true));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, threshold, rootMargin]);

  return { ref, inView };
}
