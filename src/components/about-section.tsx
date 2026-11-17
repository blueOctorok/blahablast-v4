import { FactList } from "@/components/fact-list";
import { SectionHeading } from "@/components/section-heading";
import { TagList } from "@/components/tag-list";
import { background, bio, companies, toolGroups } from "@/content/profile";

export function AboutSection() {
  return (
    <section id="about" className="border-t border-line">
      <div className="shell py-20 sm:py-28">
        <SectionHeading index="02" title="About" />

        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <div className="reveal space-y-6 text-lg leading-relaxed text-soft sm:text-xl sm:leading-relaxed lg:col-span-6">
            {bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="reveal space-y-8 lg:col-span-5 lg:col-start-8">
            {toolGroups.map((group) => (
              <div key={group.name}>
                <h3 className="eyebrow text-quiet">{group.name}</h3>
                <div className="mt-3">
                  <TagList tags={group.tools} label={`${group.name} tools`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <FactList title="Shipped software at" facts={companies} />
          <FactList title="Background" facts={background} />
        </div>
      </div>
    </section>
  );
}
