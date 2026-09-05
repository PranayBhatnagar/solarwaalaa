import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { TrackedContactLink } from "@/components/ui/TrackedContactLink";
import { siteConfig } from "@/data/config";
import { NAV_LINKS } from "./nav-links";

/**
 * Footer (spec 5.14): logo, service-area statement, navigation, contact
 * placeholders, social links, privacy/terms, copyright, indicative-estimate
 * disclaimer.
 */
export function Footer() {
  const year = new Date().getFullYear();
  const socialEntries = Object.entries(siteConfig.social).filter(([, url]) => Boolean(url));

  return (
    <footer className="bg-ink text-white">
      <Container className="py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Image
              src="/logo/solarwaala-logo.png"
              alt="Solarwaala"
              width={168}
              height={58}
              // self-start: without it, the flex-col parent's default
              // align-items:stretch stretches this w-auto image to the
              // column's full width, breaking its aspect ratio.
              className="h-9 w-auto self-start"
            />
            <p className="text-sm text-white/70">{siteConfig.serviceArea}</p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/50">Navigate</h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/80 hover:text-lime">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/50">Contact</h2>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-white/80">
              <li>
                <TrackedContactLink type="phone" href={`tel:${siteConfig.contact.phone}`} className="hover:text-lime">
                  {siteConfig.contact.phoneDisplay}
                </TrackedContactLink>
              </li>
              <li>
                <TrackedContactLink type="email" href={`mailto:${siteConfig.contact.email}`} className="hover:text-lime">
                  {siteConfig.contact.email}
                </TrackedContactLink>
              </li>
              <li>
                {siteConfig.city}, {siteConfig.state}
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/50">Legal</h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li>
                <Link href="/privacy" className="text-sm text-white/80 hover:text-lime">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-white/80 hover:text-lime">
                  Terms &amp; Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/photo-credits" className="text-sm text-white/80 hover:text-lime">
                  Photo Credits
                </Link>
              </li>
            </ul>
            {socialEntries.length > 0 ? (
              <ul className="mt-4 flex gap-3">
                {socialEntries.map(([platform, url]) => (
                  <li key={platform}>
                    <a href={url ?? undefined} className="text-sm text-white/80 hover:text-lime capitalize">
                      {platform}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col gap-3 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <p className="max-w-2xl">
            Figures and estimates shown on this site are indicative only. Final system sizing and
            financial outcomes require a site assessment.
          </p>
        </div>
      </Container>
    </footer>
  );
}
