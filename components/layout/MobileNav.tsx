"use client";

import Link from "next/link";
import { ModalDrawer } from "@/components/ui/ModalDrawer";
import { Button } from "@/components/ui/Button";
import { useQuoteDrawer } from "@/features/lead-form/QuoteDrawerContext";
import { NAV_LINKS } from "./nav-links";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNav({ open, onClose }: MobileNavProps) {
  const { open: openQuoteDrawer } = useQuoteDrawer();

  return (
    <ModalDrawer open={open} onClose={onClose} title="Menu" side="left">
      <nav aria-label="Mobile">
        <ul className="flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onClose}
                className="block min-h-[44px] rounded-control px-3 py-2.5 text-base font-medium text-ink hover:bg-cloud hover:text-action"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Button
        size="lg"
        className="mt-6 w-full"
        onClick={() => {
          onClose();
          openQuoteDrawer("header");
        }}
      >
        Get a Quote
      </Button>
    </ModalDrawer>
  );
}
