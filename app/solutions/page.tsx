import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";
import { buildMetadata } from "@/lib/metadata";
import { SolutionsGrid } from "@/features/solutions/SolutionsGrid";

export const metadata = buildMetadata({
  title: "Solar Solutions",
  description:
    "Residential, commercial, industrial and institutional solar solutions from Solarwaalaa, serving Uttar Pradesh.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Solutions", path: "/solutions" }])} />
      <Container className="pt-12 sm:pt-16 max-w-2xl text-center mx-auto">
        <p className="text-ink/70">
          Every solution starts with a site assessment. The right system depends on your
          property, usage and goals.
        </p>
      </Container>
      <SolutionsGrid headingAs="h1" />
    </>
  );
}
