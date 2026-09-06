import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/data/config";

export const metadata = buildMetadata({
  title: "Terms & Disclaimer",
  description: `Terms of use and disclaimer for the ${siteConfig.name} website.`,
  path: "/terms",
});

/**
 * Placeholder terms/disclaimer (spec section 18). TODO (business): have
 * legal counsel review and finalize before public launch. Includes the
 * required indicative-estimate disclaimer (spec 5.14).
 */
export default function TermsPage() {
  return (
    <Container className="py-16 sm:py-24 max-w-3xl flex flex-col gap-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-ink">Terms &amp; Disclaimer</h1>
      <p className="rounded-control border border-dashed border-line bg-cloud p-4 text-sm text-ink/70">
        TODO (business/legal): this is placeholder text. Have these terms reviewed and finalized by
        legal counsel before public launch.
      </p>

      <section className="flex flex-col gap-3 text-ink/80 leading-relaxed">
        <h2 className="text-lg font-bold text-ink">Use of this website</h2>
        <p>
          This website is provided by {siteConfig.name} to share information about our solar
          installation services and to let you request a consultation.
        </p>

        <h2 className="mt-4 text-lg font-bold text-ink">Indicative information only</h2>
        <p>
          Figures, estimates and outcomes shown or discussed on this website, including anything
          produced by the &ldquo;Could Solar Work for You?&rdquo; check, are indicative only.
          Final system sizing, pricing and expected performance are confirmed only after a formal
          site assessment.
        </p>

        <h2 className="mt-4 text-lg font-bold text-ink">Government schemes &amp; financing offers</h2>
        <p>
          Any &ldquo;zero upfront cost,&rdquo; subsidy, or financing offer referenced on this website
          is subject to eligibility, loan approval, and specific terms and conditions confirmed with
          our sales team before purchase. Government subsidy amounts and bank loan terms are set by
          third parties, may change, and are not guaranteed by {siteConfig.name}.
        </p>

        <h2 className="mt-4 text-lg font-bold text-ink">Contact</h2>
        <p>
          Questions about these terms can be sent to{" "}
          <a href={`mailto:${siteConfig.contact.email}`} className="text-deep underline">
            {siteConfig.contact.email}
          </a>
          .
        </p>
      </section>
    </Container>
  );
}
