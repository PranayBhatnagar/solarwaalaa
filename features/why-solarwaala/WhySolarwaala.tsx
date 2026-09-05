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
    <section className="py-16 sm:py-24">
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
              <div className="h-full rounded-card border border-line bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-ink">{card.title}</h3>
                <p className="mt-2 text-sm text-ink/70 leading-relaxed">{card.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
