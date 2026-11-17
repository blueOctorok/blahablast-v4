import { ClientProject } from "@/components/client-project";
import { FeaturedProject } from "@/components/featured-project";
import { SectionHeading } from "@/components/section-heading";
import { clientProjects, featuredProjects } from "@/content/projects";

export function WorkSection() {
  return (
    <section id="work" className="shell py-20 sm:py-28">
      <SectionHeading index="01" title="Selected work" />

      <div className="mt-12">
        {featuredProjects.map((project) => (
          <FeaturedProject key={project.name} project={project} />
        ))}
        {clientProjects.map((project) => (
          <ClientProject key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
