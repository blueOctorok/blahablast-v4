import { ArrowLink } from "@/components/arrow-link";
import { HighlightList } from "@/components/highlight-list";
import { MediaFrame } from "@/components/media-frame";
import { ProjectMedia } from "@/components/project-media";
import { ProjectTitle } from "@/components/project-title";
import { TagList } from "@/components/tag-list";
import type { Project } from "@/content/projects";

type ClientProjectProps = {
  project: Project;
};

/** A smaller entry for work done for someone else: picture beside the text. */
export function ClientProject({ project }: ClientProjectProps) {
  return (
    <article className="reveal grid gap-10 border-t border-line py-16 sm:py-20 lg:grid-cols-12 lg:gap-12">
      <MediaFrame className="self-start lg:col-span-5">
        {/* The screenshot is tall, so only its top is shown. */}
        <ProjectMedia
          media={project.media}
          sizes="(min-width: 64rem) 32rem, 100vw"
          className="aspect-[16/10] w-full object-cover object-top"
        />
      </MediaFrame>

      <div className="space-y-8 lg:col-span-7">
        <ProjectTitle project={project} size="small" />
        <p className="text-lg leading-relaxed text-soft">{project.summary}</p>
        <HighlightList highlights={project.highlights} />
        <TagList tags={project.stack} label={`${project.name} stack`} />
        {project.link && (
          <ArrowLink href={project.link.href}>{project.link.label}</ArrowLink>
        )}
      </div>
    </article>
  );
}
