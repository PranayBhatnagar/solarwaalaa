"use client";

import type { ReactNode } from "react";
import { track } from "@/lib/analytics";

type TrackedContactLinkProps = {
  type: "phone" | "email";
  href: string;
  className?: string;
  children: ReactNode;
};

/** `tel:`/`mailto:` link that fires the `phone_click`/`email_click` analytics events (spec 15). */
export function TrackedContactLink({ type, href, className, children }: TrackedContactLinkProps) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => track({ name: type === "phone" ? "phone_click" : "email_click" })}
    >
      {children}
    </a>
  );
}
