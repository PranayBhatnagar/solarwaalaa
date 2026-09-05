import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/data/config";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses and protects information submitted through this website.`,
  path: "/privacy",
});

/**
 * Placeholder privacy policy (spec section 18: "Privacy... present before
 * public launch"). TODO (business): have legal counsel review and finalize
 * this content before public launch — do not publish as-is.
 */
export default function PrivacyPage() {
  return (
    <Container className="py-16 sm:py-24 max-w-3xl flex flex-col gap-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-ink">Privacy Policy</h1>
      <p className="rounded-control border border-dashed border-line bg-cloud p-4 text-sm text-ink/70">
        TODO (business/legal): this is placeholder text. Have this policy reviewed and finalized by
        legal counsel before public launch.
      </p>

      <section className="flex flex-col gap-3 text-ink/80 leading-relaxed">
        <h2 className="text-lg font-bold text-ink">Information we collect</h2>
        <p>
          When you submit a form on this website (for example, to request a solar consultation),
          we collect the details you provide, such as your name, phone number, email address, city
          and property type.
        </p>

        <h2 className="mt-4 text-lg font-bold text-ink">How we use it</h2>
        <p>
          We use the information you submit to respond to your enquiry and, where relevant, to
          arrange a site assessment or provide a quote.
        </p>

        <h2 className="mt-4 text-lg font-bold text-ink">Contact</h2>
        <p>
          Questions about this policy can be sent to{" "}
          <a href={`mailto:${siteConfig.contact.email}`} className="text-deep underline">
            {siteConfig.contact.email}
          </a>
          .
        </p>
      </section>
    </Container>
  );
}
