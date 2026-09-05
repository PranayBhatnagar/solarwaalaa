import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/data/config";
import { founder } from "@/data/team";

export const metadata = buildMetadata({
  title: "About",
  description: `${siteConfig.name} is a solar plant installation company based in ${siteConfig.city}, serving customers across ${siteConfig.state}.`,
  path: "/about",
});

/**
 * /about (spec section 4/13). Only states facts that are verified
 * (Lucknow-based, Uttar Pradesh-focused) — no invented history, team bios,
 * certifications or awards (spec section 3, Non-Goals), except the
 * Founder & CEO note below, which is real, business-supplied content
 * (see data/team.ts).
 *
 * TODO (business): add further team bios/photos and any certifications
 * once supplied — do not fill these with placeholder claims.
 */
export default function AboutPage() {
  return (
    <Container className="py-16 sm:py-24 flex flex-col gap-16">
      <JsonLd data={buildBreadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />
      <SectionHeading
        as="h1"
        eyebrow="About"
        title={`About ${siteConfig.name}`}
        subtitle={`${siteConfig.name} is a solar plant installation company based in ${siteConfig.city}, working with residential, commercial, industrial and institutional customers across ${siteConfig.state}.`}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="rounded-card border border-line bg-white p-6 sm:p-8">
          <h2 className="font-bold text-ink">How we work</h2>
          <p className="mt-3 text-ink/70 leading-relaxed">
            Every project starts with a site assessment rather than a generic package — we look at
            your roof or available area, shading, electrical setup and usage before recommending a
            system design.
          </p>
        </div>
        <div className="rounded-card border border-line bg-white p-6 sm:p-8">
          <h2 className="font-bold text-ink">Where we work</h2>
          <p className="mt-3 text-ink/70 leading-relaxed">
            {siteConfig.name} is based in {siteConfig.city} and serves customers across{" "}
            {siteConfig.state} for residential, commercial, industrial and institutional solar
            installations.
          </p>
        </div>
      </div>

      <section className="rounded-card border border-line bg-cloud p-6 sm:p-10">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-deep">A note from our founder</h2>
        <div className="mt-6 flex flex-col sm:flex-row gap-6 sm:gap-8 items-center sm:items-start">
          <Image
            src={founder.photo}
            alt={`${founder.name}, ${founder.title} of ${siteConfig.name}`}
            width={160}
            height={160}
            className="h-32 w-32 sm:h-40 sm:w-40 shrink-0 rounded-full object-cover ring-4 ring-white shadow-md"
          />
          <div className="flex flex-col gap-3 text-center sm:text-left">
            <blockquote className="text-ink/80 leading-relaxed text-pretty">
              &ldquo;{founder.note}&rdquo;
            </blockquote>
            <footer className="text-sm">
              <span className="font-bold text-ink">{founder.name}</span>
              <span className="text-ink/70"> — {founder.title}</span>
            </footer>
          </div>
        </div>
      </section>

      <div className="text-center">
        <Button href="/contact" size="lg">
          Get in Touch
        </Button>
      </div>
    </Container>
  );
}
