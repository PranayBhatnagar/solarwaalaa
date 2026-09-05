import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import type { solutions } from "@/data/solutions";

type SolutionDetailProps = {
  solution: (typeof solutions)[number];
};

/** Shared template for the four /solutions/[segment] pages (spec 5.5 / section 13). */
export function SolutionDetail({ solution }: SolutionDetailProps) {
  return (
    <>
      <section className="relative flex min-h-[360px] items-end overflow-hidden bg-deep">
        <Image src={solution.image} alt="" fill sizes="100vw" className="object-cover" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/85 to-ink/20" />
        <Container className="relative z-10 py-12">
          <span className="text-xs font-semibold tracking-[0.14em] uppercase text-lime">
            Solutions • {solution.title}
          </span>
          <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance">
            {solution.outcome}
          </h1>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16">
          <div className="flex flex-col gap-4">
            <p className="text-lg text-ink/80 leading-relaxed">{solution.bodyIntro}</p>
            <p className="text-ink/70 leading-relaxed">{solution.description}</p>
          </div>

          <div className="rounded-card border border-line bg-cloud p-6 sm:p-8 flex flex-col gap-4">
            <h2 className="font-semibold text-ink">Well suited for</h2>
            <ul className="flex flex-col gap-2">
              {solution.bestFor.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-ink/80">
                  <span aria-hidden="true" className="text-eco">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Button href="/contact" size="lg" className="mt-2 w-full">
              Request a Solar Consultation
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
