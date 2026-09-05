"use client";

import { useEffect, useState } from "react";

/**
 * Returns 0-1 scroll progress through a given element (or the whole
 * document if no ref supplied). Backs the "Solar Ray Scroll Progress" motif
 * and the Solar Journey progress line (spec section 6) — must not cause
 * layout shift or block content, so it only ever reads scroll position.
 */
export function useScrollProgress(target?: React.RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const rect = target?.current
        ? target.current.getBoundingClientRect()
        : { top: -window.scrollY, height: document.documentElement.scrollHeight };

      const viewportH = window.innerHeight;
      const total = target?.current ? rect.height + viewportH : rect.height - viewportH;
      const scrolled = target?.current ? viewportH - rect.top : -rect.top;

      const ratio = total > 0 ? scrolled / total : 0;
      setProgress(Math.min(1, Math.max(0, ratio)));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target?.current]);

  return progress;
}
