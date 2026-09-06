import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/ui/JsonLd";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";
import { buildMetadata } from "@/lib/metadata";
import { SolarJourney } from "@/features/process/SolarJourney";
import { EnergyFlow } from "@/features/process/EnergyFlow";

export const metadata = buildMetadata({
  title: "How It Works",
  description: "How a Solarwaalaa solar installation works, from initial enquiry to commissioning.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "How It Works", path: "/how-it-works" }])} />
      <SolarJourney headingAs="h1" />

      <section className="py-16 sm:py-24 bg-cloud">
        <Container className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="The Basics"
            title="How Solar Power Actually Flows"
            subtitle="A simplified look at how solar energy moves from your roof to your property, with any surplus exported to the grid."
            align="center"
            className="mx-auto"
          />
          <EnergyFlow />
        </Container>
      </section>
    </>
  );
}
