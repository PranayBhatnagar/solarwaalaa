"use client";

import type { ElementType, ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delayMs?: number;
};

/**
 * Scroll-reveal wrapper (fade + slight rise) used across sections.
 * Content is present in static HTML regardless (spec 5.6: "keep content
 * accessible in static HTML") — only the transition is animated, and it's
 * skipped entirely under prefers-reduced-motion (spec section 12).
 */
export function Reveal({ children, as: As = "div", className = "", delayMs = 0 }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });
  const reduced = useReducedMotion();

  const visible = reduced || inView;

  return (
    <As
      ref={ref}
      className={`${className} ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } transition-[opacity,transform] duration-500 ease-out`}
      style={{ transitionDelay: visible ? `${delayMs}ms` : "0ms" }}
    >
      {children}
    </As>
  );
}
