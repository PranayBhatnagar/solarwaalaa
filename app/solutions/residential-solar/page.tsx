import { JsonLd } from "@/components/ui/JsonLd";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";
import { buildMetadata } from "@/lib/metadata";
import { SolutionDetail } from "@/features/solutions/SolutionDetail";
import { solutions } from "@/data/solutions";

const solution = solutions.find((s) => s.id === "residential")!;

export const metadata = buildMetadata({
  title: "Residential Solar",
  description: solution.description,
  path: solution.href,
});

export default function ResidentialSolarPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions" },
          { name: solution.title, path: solution.href },
        ])}
      />
      <SolutionDetail solution={solution} />
    </>
  );
}
