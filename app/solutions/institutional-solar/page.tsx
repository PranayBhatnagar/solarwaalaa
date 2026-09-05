import { JsonLd } from "@/components/ui/JsonLd";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";
import { buildMetadata } from "@/lib/metadata";
import { SolutionDetail } from "@/features/solutions/SolutionDetail";
import { solutions } from "@/data/solutions";

const solution = solutions.find((s) => s.id === "institutional")!;

export const metadata = buildMetadata({
  title: "Institutional Solar",
  description: solution.description,
  path: solution.href,
});

export default function InstitutionalSolarPage() {
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
