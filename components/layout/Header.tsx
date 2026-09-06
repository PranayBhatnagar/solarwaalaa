"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { track } from "@/lib/analytics";
import { useQuoteDrawer } from "@/features/lead-form/QuoteDrawerContext";
import { NAV_LINKS } from "./nav-links";

// Code-split: renders nothing until the mobile menu button is pressed, and
// is irrelevant on desktop viewports entirely - no need in every route's
// initial JS.
const MobileNav = dynamic(() => import("./MobileNav").then((m) => m.MobileNav), { ssr: false });

/**
 * Sticky header (spec 5.1): logo left, nav + "Get a Quote" CTA on desktop,
 * logo + menu button + compact CTA on mobile. Becomes elevated/blurred
 * after scroll.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { open: openQuoteDrawer } = useQuoteDrawer();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white/0"
      }`}
    >
      <Container className="flex h-16 sm:h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 min-h-[44px]" aria-label="Solarwaalaa home">
          <Image
            src="/logo/solarwaala-logo.png"
            alt="Solarwaalaa"
            width={168}
            height={58}
            priority
            className="h-8 sm:h-10 w-auto"
          />
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-control px-3.5 py-2.5 text-sm font-medium transition-colors ${
                  isActive ? "text-deep" : "text-ink/80 hover:text-action"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            size="md"
            className="hidden sm:inline-flex"
            onClick={() => {
              track({ name: "header_quote_click" });
              openQuoteDrawer("header");
            }}
          >
            Get a Quote
          </Button>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
            className="lg:hidden flex min-h-[44px] min-w-[44px] items-center justify-center rounded-control text-ink hover:bg-cloud"
          >
            <span aria-hidden="true" className="text-xl leading-none">
              ☰
            </span>
          </button>
        </div>
      </Container>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
