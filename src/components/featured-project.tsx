import { ArrowLink } from "@/components/arrow-link";
import { HighlightList } from "@/components/highlight-list";
import { MediaFrame } from "@/components/media-frame";
import { ProjectMedia } from "@/components/project-media";
import { ProjectTitle } from "@/components/project-title";
import { TagList } from "@/components/tag-list";
import type { Project } from "@/content/projects";

type FeaturedProjectProps = {
  project: Project;
};

/** A project given the full width of the page: title, picture, then detail. */
export function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <article className="border-t border-line py-16 sm:py-20">
      <header className="reveal flex flex-wrap items-end justify-between gap-6">
        <ProjectTitle project={project} size="large" />
        {project.link && (
          <ArrowLink href={project.link.href}>{project.link.label}</ArrowLink>
        )}
      </header>

      <MediaFrame className="unveil mt-10">
        <ProjectMedia
          media={project.media}
          sizes="(min-width: 80rem) 76rem, 100vw"
          className="zoom-out h-auto w-full"
        />
      </MediaFrame>

      <div className="reveal mt-10 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="text-lg leading-relaxed text-soft">
            {project.summary}
          </p>
          <div className="mt-8">
            <TagList tags={project.stack} label={`${project.name} stack`} />
          </div>
        </div>
        <div className="lg:col-span-5">
          <HighlightList highlights={project.highlights} />
        </div>
      </div>
    </article>
  );
}
