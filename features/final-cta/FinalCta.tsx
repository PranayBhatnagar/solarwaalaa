import { Phone, Mail, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TrackedContactLink } from "@/components/ui/TrackedContactLink";
import { LeadForm } from "@/features/lead-form/LeadForm";
import { siteConfig } from "@/data/config";

const REASSURANCES = [
  "Starts with a real site assessment",
  "Clear process from enquiry to installation",
  "Serving homes and businesses across Uttar Pradesh",
  "Eligible for government subsidy and easy financing",
];

/**
 * Final CTA (spec 5.13): dark blue/blue-green visual block, short form,
 * phone/email using real supplied contact details.
 */
export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-deep to-ink py-16 sm:py-24">
      {/* Decorative glow — purely visual, matches the "Why Solarwaala" treatment. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-action/20 blur-3xl" />
        <div className="absolute -right-16 -bottom-24 h-80 w-80 rounded-full bg-eco/20 blur-3xl" />
      </div>

      <Container className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
        <div className="flex flex-col gap-6 text-white">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Ready to explore solar?</h2>
            <p className="text-white/80 max-w-md">
              Share a few details and Solarwaala will get in touch to arrange a site assessment.
            </p>
          </div>

          <ul className="flex flex-col gap-2.5">
            {REASSURANCES.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-white/85">
                <CheckCircle2 aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-lime" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-2 text-sm border-t border-white/15 pt-5">
            <TrackedContactLink
              type="phone"
              href={`tel:${siteConfig.contact.phone}`}
              className="inline-flex items-center gap-2 text-white/85 hover:text-lime"
            >
              <Phone aria-hidden="true" size={16} className="shrink-0" />
              {siteConfig.contact.phoneDisplay}
            </TrackedContactLink>
            <TrackedContactLink
              type="email"
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center gap-2 text-white/85 hover:text-lime"
            >
              <Mail aria-hidden="true" size={16} className="shrink-0" />
              {siteConfig.contact.email}
            </TrackedContactLink>
          </div>
        </div>

        <div className="rounded-card bg-white p-6 sm:p-8 shadow-2xl shadow-black/20">
          <h3 className="font-bold text-ink">Request a Consultation</h3>
          <p className="mt-1 mb-5 text-sm text-ink/70">Takes less than a minute.</p>
          <LeadForm source="final-cta" compact />
        </div>
      </Container>
    </section>
  );
}
