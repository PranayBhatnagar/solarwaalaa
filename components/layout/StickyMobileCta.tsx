"use client";

import { Button } from "@/components/ui/Button";
import { track } from "@/lib/analytics";
import { useQuoteDrawer } from "@/features/lead-form/QuoteDrawerContext";

/**
 * Fixed bottom mobile CTA (spec 5.1/6): "Get a Quote", hidden on desktop,
 * reserves safe-area-inset-bottom padding so it never covers content.
 */
export function StickyMobileCta() {
  const { open } = useQuoteDrawer();

  return (
    <div
      className="lg:hidden fixed inset-x-0 bottom-0 z-30 border-t border-line bg-white/95 backdrop-blur-sm px-4 pt-3"
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <Button
        size="lg"
        className="w-full"
        onClick={() => {
          track({ name: "header_quote_click" });
          open("header");
        }}
      >
        Get a Quote
      </Button>
    </div>
  );
}
