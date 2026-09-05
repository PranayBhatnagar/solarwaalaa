import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { proofCards } from "./proof-cards";

/**
 * Why Solarwaala (spec 5.4): asymmetric split, copy on left, proof cards on
 * right acting as the "visual/interactive stack". Proof values are
 * qualitative and safe-to-publish (see proof-cards.ts); numeric stats stay
 * hidden until verified (siteConfig.flags.hasProofStats — see data/config.ts).
 */
export function WhySolarwaala() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      {/* Decorative background glow — purely visual, no content. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-action/10 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-eco/10 blur-3xl" />
      </div>

      <Container className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-10 lg:gap-16 items-start">
        <Reveal>
          <SectionHeading
            eyebrow="Why Solarwaala"
            title="Clean Energy. Smart Investment. Long-Term Impact."
            subtitle="Solar is a long-term decision. We start every project with a real site assessment so your system is designed around your property, not a one-size-fits-all package."
          />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {proofCards.map((card, index) => (
            <Reveal key={card.id} delayMs={index * 80}>
              <div className="group relative h-full overflow-hidden rounded-card border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-action/40 hover:shadow-xl hover:shadow-action/10">
                {/* Gradient accent bar that sweeps in on hover. */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-action to-eco transition-transform duration-300 group-hover:scale-x-100"
                />
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-action to-deep text-white shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                >
                  <card.icon size={22} strokeWidth={2} />
                </span>
                <h3 className="mt-4 font-semibold text-ink">{card.title}</h3>
                <p className="mt-2 text-sm text-ink/70 leading-relaxed">{card.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
