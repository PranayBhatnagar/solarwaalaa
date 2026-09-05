"use client";

import { ModalDrawer } from "@/components/ui/ModalDrawer";
import { LeadForm } from "./LeadForm";
import { useQuoteDrawer } from "./QuoteDrawerContext";

/** Single instance rendered once in the root layout (spec section 6, Quote Drawer). */
export function QuoteDrawer() {
  const { isOpen, source, close } = useQuoteDrawer();

  return (
    <ModalDrawer open={isOpen} onClose={close} title="Get a Quote">
      <p className="mb-5 text-sm text-ink/70">
        Share a few details and Solarwaala will get in touch to arrange a site assessment.
      </p>
      <LeadForm source={source} compact />
    </ModalDrawer>
  );
}
