import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TrackedContactLink } from "@/components/ui/TrackedContactLink";
import { JsonLd } from "@/components/ui/JsonLd";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";
import { buildMetadata } from "@/lib/metadata";
import { LeadForm } from "@/features/lead-form/LeadForm";
import { siteConfig } from "@/data/config";

export const metadata = buildMetadata({
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} to request a solar site assessment in ${siteConfig.state}.`,
  path: "/contact",
});

/**
 * /contact (spec 5.13/14). No Google Maps embed - the spec doesn't name a
 * maps API/key, so this uses the same stylized coverage graphic pattern
 * instead of introducing an external API dependency; swap in a real embed
 * later once an API key is available.
 */
export default function ContactPage() {
  return (
    <Container className="py-16 sm:py-24">
      <JsonLd data={buildBreadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
      <SectionHeading
        as="h1"
        eyebrow="Contact"
        title="Get a Quote"
        subtitle="Share a few details and Solarwaalaa will get in touch to arrange a site assessment."
        align="center"
        className="mx-auto"
      />

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16">
        <div className="flex flex-col gap-6">
          <div className="rounded-card border border-line bg-white p-6 sm:p-8 flex flex-col gap-4">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-ink/70">Phone</h2>
              <TrackedContactLink type="phone" href={`tel:${siteConfig.contact.phone}`} className="mt-1 block text-lg font-semibold text-ink hover:text-action">
                {siteConfig.contact.phoneDisplay}
              </TrackedContactLink>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-ink/70">Email</h2>
              <TrackedContactLink type="email" href={`mailto:${siteConfig.contact.email}`} className="mt-1 block text-lg font-semibold text-ink hover:text-action">
                {siteConfig.contact.email}
              </TrackedContactLink>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-ink/70">Service Area</h2>
              <p className="mt-1 text-ink/80">
                {siteConfig.city}, {siteConfig.state} ({siteConfig.serviceArea})
              </p>
            </div>
          </div>

          <p className="text-xs text-ink/70 leading-relaxed">
            Figures and estimates shared during a first conversation are indicative only. Final
            system sizing and pricing require a site assessment.
          </p>
        </div>

        <div className="rounded-card border border-line bg-white p-6 sm:p-8">
          <LeadForm source="contact-page" />
        </div>
      </div>
    </Container>
  );
}
