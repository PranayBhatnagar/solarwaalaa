"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import type { Lead } from "@/data/types";

type QuoteDrawerContextValue = {
  isOpen: boolean;
  source: Lead["source"];
  open: (source: Lead["source"]) => void;
  close: () => void;
};

const QuoteDrawerContext = createContext<QuoteDrawerContextValue | null>(null);

/**
 * App-wide open/close state for the Quote Drawer (spec section 6: "CTA
 * opens a side drawer/modal with the short lead form without navigating
 * away"). Any CTA anywhere in the tree can call `open(source)`; the drawer
 * itself is rendered once in the root layout.
 */
export function QuoteDrawerProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState<Lead["source"]>(undefined);

  const open = useCallback((nextSource: Lead["source"]) => {
    setSource(nextSource);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ isOpen, source, open, close }), [isOpen, source, open, close]);

  return <QuoteDrawerContext.Provider value={value}>{children}</QuoteDrawerContext.Provider>;
}

export function useQuoteDrawer() {
  const ctx = useContext(QuoteDrawerContext);
  if (!ctx) throw new Error("useQuoteDrawer must be used within QuoteDrawerProvider");
  return ctx;
}
