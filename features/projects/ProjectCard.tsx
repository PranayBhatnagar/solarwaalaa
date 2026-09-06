"use client";

import Image from "next/image";
import { track } from "@/lib/analytics";
import type { Project } from "@/data/types";

/**
 * Shared project card, used by both the homepage Project Showcase and the
 * /projects page. Fires `project_opened` (spec 15) on click - currently a
 * no-op destination since no project detail view exists yet; wire a real
 * lightbox/detail page here once real project entries (with more than a
 * thumbnail) are added to data/projects.ts.
 */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-card border border-line bg-white overflow-hidden">
      <button
        type="button"
        onClick={() => track({ name: "project_opened", props: { projectId: project.id } })}
        className="block w-full text-left"
      >
        <div className="relative aspect-[4/3]">
          <Image
            src={project.image}
            alt={project.alt}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="p-5 flex flex-col gap-1">
          <h3 className="font-semibold text-ink">{project.title}</h3>
          <p className="text-sm text-ink/70">
            {project.city} • {project.segment}
          </p>
          {project.systemSize ? <p className="text-sm text-ink/70">{project.systemSize}</p> : null}
        </div>
      </button>
    </article>
  );
}
