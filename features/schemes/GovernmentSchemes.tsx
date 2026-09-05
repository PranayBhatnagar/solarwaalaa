import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { schemeStats } from "@/data/schemes";

/**
 * Government Schemes & Financing (homepage teaser). Full detail lives on
 * /financing — this section is a short, attention-grabbing summary, not
 * the complete breakdown (spec-style: indicative figures, verify before
 * quoting — see data/schemes.ts).
 */
export function GovernmentSchemes() {
  return (
    <section className="py-16 sm:py-24 bg-cloud">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Government Schemes & Financing"
          title="The Government Wants You on Solar. Here's What That's Worth."
          subtitle="Central and Uttar Pradesh state subsidies, plus collateral-free bank loans — solar is more affordable than most people realize."
          align="center"
          className="mx-auto"
        />

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {schemeStats.map((stat, index) => (
            <Reveal key={stat.id} delayMs={index * 80} className={stat.featured ? "col-span-2 lg:col-span-1" : ""}>
              <div
                className={`h-full flex flex-col items-center text-center gap-2 rounded-card border p-5 sm:p-6 ${
                  stat.featured
                    ? "border-eco/40 bg-gradient-to-br from-eco/10 to-lime/10"
                    : "border-line bg-white"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`flex h-11 w-11 items-center justify-center rounded-full ${
                    stat.featured ? "bg-eco text-white" : "bg-cloud text-deep"
                  }`}
                >
                  <stat.icon size={20} strokeWidth={2} />
                </span>
                <p className={`font-bold ${stat.featured ? "text-eco text-lg" : "text-ink text-2xl"}`}>
                  {stat.value}
                </p>
                <p className="text-sm text-ink/70">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="text-xs text-ink/70 text-center">*T&amp;C apply.</p>

        <div className="text-center">
          <Button href="/financing" size="lg">
            See Full Scheme &amp; Loan Details
          </Button>
        </div>
      </Container>
    </section>
  );
}
