"use client";

import { useId, useState } from "react";

export type AccordionEntry = {
  id: string;
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionEntry[];
  onOpen?: (id: string) => void;
  className?: string;
};

/**
 * Accessible accordion for the FAQ section (spec 5.12). Native
 * button + aria-expanded/aria-controls pattern - fully keyboard operable,
 * no hidden-behind-hover content (spec section 12).
 */
export function Accordion({ items, onOpen, className = "" }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const baseId = useId();

  return (
    <div className={`divide-y divide-line rounded-card border border-line bg-white ${className}`}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        const buttonId = `${baseId}-${item.id}-button`;
        const panelId = `${baseId}-${item.id}-panel`;

        return (
          <div key={item.id}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => {
                  const next = isOpen ? null : item.id;
                  setOpenId(next);
                  if (next) onOpen?.(item.id);
                }}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 text-left font-semibold text-ink hover:text-action min-h-[44px]"
              >
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className={`shrink-0 transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 sm:px-6 pb-5 sm:pb-6 text-ink/75 leading-relaxed"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
