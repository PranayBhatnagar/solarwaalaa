"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

/**
 * Cycles through `count` indices every `intervalMs`, for background image
 * slideshows. Under prefers-reduced-motion, auto-advance is skipped
 * entirely and the first slide is shown as a static equivalent (spec
 * section 12: "provide static equivalents for all animated content").
 */
export function useSlideshow(count: number, intervalMs = 3000) {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || count <= 1) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, intervalMs);

    return () => clearInterval(id);
  }, [reduced, count, intervalMs]);

  return reduced ? 0 : index;
}
