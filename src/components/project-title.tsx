import type { Project } from "@/content/projects";

const nameSizes = {
  large: "text-5xl sm:text-8xl",
  small: "text-3xl sm:text-5xl",
};

type ProjectTitleProps = {
  project: Project;
  size: keyof typeof nameSizes;
};

/** The label, name and role that open every project. */
export function ProjectTitle({ project, size }: ProjectTitleProps) {
  return (
    <div>
      <p className="eyebrow text-signal">{project.kind}</p>
      <h3 className={`display mt-4 ${nameSizes[size]}`}>{project.name}</h3>
      <p className="eyebrow mt-4 text-quiet">{project.role}</p>
    </div>
  );
}
