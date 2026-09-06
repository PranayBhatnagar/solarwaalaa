import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";
import { buildMetadata } from "@/lib/metadata";
import { ProjectCard } from "@/features/projects/ProjectCard";
import { projects } from "@/data/projects";

export const metadata = buildMetadata({
  title: "Projects",
  description: "Verified Solarwaalaa solar installations across Uttar Pradesh.",
  path: "/projects",
});

/**
 * /projects (spec 5.9). Unlike the homepage Project Showcase (which hides
 * entirely with no data), this dedicated page shows a "coming soon" state
 * since visitors arrive here directly expecting a projects page to exist.
 * The grid below is fully wired to data/projects.ts and lights up the
 * moment real, verified entries are added there.
 */
export default function ProjectsPage() {
  const hasProjects = projects.length > 0;

  return (
    <Container className="py-16 sm:py-24">
      <JsonLd data={buildBreadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Projects", path: "/projects" }])} />
      <SectionHeading as="h1" eyebrow="Projects" title="Our Installations" align="center" className="mx-auto" />

      {hasProjects ? (
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="mt-10 mx-auto max-w-lg text-center rounded-card border border-line bg-cloud p-10">
          <p className="font-semibold text-ink">Project gallery coming soon.</p>
          <p className="mt-2 text-sm text-ink/70">
            We&apos;re preparing verified project details to share here. In the meantime, get in
            touch to discuss your own site.
          </p>
          <Button href="/contact" size="lg" className="mt-6">
            Get a Quote
          </Button>
        </div>
      )}
    </Container>
  );
}
