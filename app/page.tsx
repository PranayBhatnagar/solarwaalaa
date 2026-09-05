import { Hero } from "@/features/hero/Hero";
import { ValueStrip } from "@/features/value-strip/ValueStrip";
import { WhySolarwaala } from "@/features/why-solarwaala/WhySolarwaala";
import { SolutionsGrid } from "@/features/solutions/SolutionsGrid";
import { SolarJourney } from "@/features/process/SolarJourney";
import { Estimator } from "@/features/estimator/Estimator";
import { Coverage } from "@/features/coverage/Coverage";
import { ProjectShowcase } from "@/features/projects/ProjectShowcase";
import { Trust } from "@/features/trust/Trust";
import { Faq } from "@/features/faq/Faq";
import { FinalCta } from "@/features/final-cta/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueStrip />
      <WhySolarwaala />
      <SolutionsGrid />
      <SolarJourney />
      <Estimator />
      <Coverage />
      <ProjectShowcase />
      <Trust />
      <Faq />
      <FinalCta />
    </>
  );
}
