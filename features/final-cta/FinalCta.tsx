import { Container } from "@/components/ui/Container";
import { TrackedContactLink } from "@/components/ui/TrackedContactLink";
import { LeadForm } from "@/features/lead-form/LeadForm";
import { siteConfig } from "@/data/config";

/**
 * Final CTA (spec 5.13): dark blue/blue-green visual block, short form,
 * phone/email using real supplied contact details.
 */
export function FinalCta() {
  return (
    <section className="bg-gradient-to-br from-deep to-ink py-16 sm:py-24">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="flex flex-col gap-4 text-white">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Ready to explore solar?</h2>
          <p className="text-white/80 max-w-md">
            Share a few details and Solarwaala will get in touch to arrange a site assessment.
          </p>
          <div className="mt-2 flex flex-col gap-1.5 text-white/85 text-sm">
            <TrackedContactLink type="phone" href={`tel:${siteConfig.contact.phone}`} className="hover:text-lime">
              📞 {siteConfig.contact.phoneDisplay}
            </TrackedContactLink>
            <TrackedContactLink type="email" href={`mailto:${siteConfig.contact.email}`} className="hover:text-lime">
              ✉️ {siteConfig.contact.email}
            </TrackedContactLink>
          </div>
        </div>

        <div className="rounded-card bg-white p-6 sm:p-8">
          <LeadForm source="final-cta" />
        </div>
      </Container>
    </section>
  );
}
