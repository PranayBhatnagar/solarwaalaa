import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/config";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

/**
 * Project Showcase (spec 5.9). Fully built against the `Project` type, but
 * gated on `siteConfig.flags.hasProjects` — renders nothing on the homepage
 * until real, verified project entries exist in data/projects.ts (spec
 * section 3: "Do not invent... number of projects"). The dedicated
 * /projects page (Phase 4) shows a "coming soon" state instead of hiding
 * entirely, since visitors navigate there directly.
 */
export function ProjectShowcase() {
  if (!siteConfig.flags.hasProjects || projects.length === 0) return null;

  return (
    <section className="py-16 sm:py-24 bg-cloud">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <SectionHeading eyebrow="Projects" title="Recent Installations" />
          <Button href="/projects" variant="secondary">
            View all projects
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
