import { Landmark, Building2, Percent, Wallet, Zap, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Government Schemes & Financing",
  description:
    "Central and Uttar Pradesh state solar subsidies, plus collateral-free bank loan options, for residential solar installation.",
  path: "/financing",
});

/**
 * /financing — customer-facing summary of government subsidy schemes and
 * loan/financing options, based on the September 2026 research pass
 * against official sources (see data/schemes.ts). Figures are indicative
 * and were correct as of research time; scheme terms and interest rates
 * change, so this page carries an explicit "confirm before relying on
 * this" disclaimer throughout (spec section 17, Content Rules) rather
 * than presenting government figures as permanently fixed.
 */
export default function FinancingPage() {
  return (
    <Container className="py-16 sm:py-24 flex flex-col gap-16">
      <JsonLd data={buildBreadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Financing", path: "/financing" }])} />

      <SectionHeading
        as="h1"
        eyebrow="Government Schemes & Financing"
        title="Solar Is More Affordable Than You Think"
        subtitle="Central government subsidy, an additional Uttar Pradesh state subsidy, and collateral-free bank loans — here's how they add up."
        align="center"
        className="mx-auto"
      />

      {/* Zero Upfront Cost — brief, by design; full details are handled by our sales team. */}
      <section className="rounded-card border border-eco/40 bg-gradient-to-br from-eco/10 to-lime/10 p-6 sm:p-10 text-center flex flex-col items-center gap-4">
        <span aria-hidden="true" className="flex h-14 w-14 items-center justify-center rounded-full bg-eco text-white">
          <Zap size={26} strokeWidth={2} />
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-ink">Zero Upfront Cost*</h2>
        <p className="text-ink/70 max-w-md">
          For eligible customers, we can structure your solar installation with no upfront cost.
          Talk to our team to see what&apos;s possible for your property.
        </p>
        <Button href="/contact" size="lg">
          Ask Us How
        </Button>
        <p className="text-xs text-ink/70">*T&amp;C apply.</p>
      </section>

      {/* Central government subsidy */}
      <section className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 items-start">
        <span aria-hidden="true" className="flex h-12 w-12 items-center justify-center rounded-full bg-deep text-white shrink-0">
          <Landmark size={22} strokeWidth={2} />
        </span>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold text-ink">Central Government Subsidy — PM Surya Ghar Muft Bijli Yojana</h2>
          <p className="text-ink/70 leading-relaxed">
            Residential rooftop solar customers can access a central government subsidy of up to{" "}
            <strong className="text-ink">₹78,000</strong>, structured as ₹30,000/kW for the first 2kW and
            ₹18,000/kW for the 3rd kW, capped at ₹78,000 for systems 3kW and above.
          </p>
          <ul className="flex flex-col gap-2 text-sm text-ink/70">
            <li className="flex items-start gap-2">
              <CheckCircle2 aria-hidden="true" size={16} className="mt-0.5 shrink-0 text-eco" />
              Applied for directly on the official pmsuryaghar.gov.in portal
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 aria-hidden="true" size={16} className="mt-0.5 shrink-0 text-eco" />
              Requires DISCOM feasibility approval and net-metering commissioning
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 aria-hidden="true" size={16} className="mt-0.5 shrink-0 text-eco" />
              We handle the application and paperwork as part of your installation
            </li>
          </ul>
        </div>
      </section>

      {/* UP state subsidy */}
      <section className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 items-start">
        <span aria-hidden="true" className="flex h-12 w-12 items-center justify-center rounded-full bg-action text-white shrink-0">
          <Building2 size={22} strokeWidth={2} />
        </span>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold text-ink">Uttar Pradesh State Subsidy</h2>
          <p className="text-ink/70 leading-relaxed">
            On top of the central subsidy, Uttar Pradesh offers an additional state subsidy of{" "}
            <strong className="text-ink">₹15,000 per kW, capped at ₹30,000 per consumer</strong>, for
            private residential rooftop solar — paid on a reimbursement basis after installation and
            net-metering commissioning, via UPNEDA (the state&apos;s nodal renewable energy agency).
          </p>
        </div>
      </section>

      {/* Financing */}
      <section className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 items-start">
        <span aria-hidden="true" className="flex h-12 w-12 items-center justify-center rounded-full bg-deep text-white shrink-0">
          <Percent size={22} strokeWidth={2} />
        </span>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold text-ink">Collateral-Free Solar Loans</h2>
          <p className="text-ink/70 leading-relaxed">
            Under the PM Surya Ghar loan facility, participating banks offer collateral-free solar loans
            starting around <strong className="text-ink">5.75% p.a.</strong> for loans up to ₹2 lakh, with
            financing available for up to <strong className="text-ink">90% of your project cost</strong>,
            up to ₹6 lakh, over tenures of up to 10 years.
          </p>
          <div className="flex items-start gap-3 mt-2">
            <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-full bg-cloud text-deep shrink-0">
              <Wallet size={18} strokeWidth={2} />
            </span>
            <p className="text-sm text-ink/70">
              We can help connect you with participating banks and guide you through the loan
              application process.
            </p>
          </div>
        </div>
      </section>

      <div className="rounded-card border border-dashed border-line p-6 text-center text-sm text-ink/70">
        Figures above are indicative, based on published government and bank sources, and are subject
        to change. Final eligibility, subsidy amounts, and loan terms are confirmed at the time of
        application — our team will walk you through your specific numbers.
      </div>

      <div className="text-center">
        <Button href="/contact" size="lg">
          Request a Solar Consultation
        </Button>
      </div>
    </Container>
  );
}
