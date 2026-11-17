import { ArrowLink } from "@/components/arrow-link";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/content/profile";

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-line">
      {/* @container: the email is sized from this column, like the name in the hero. */}
      <div className="shell @container py-20 sm:py-28">
        <SectionHeading index="03" title="Contact" />

        <p className="reveal mt-12 max-w-2xl text-xl leading-relaxed text-soft">
          Have a product to build, a role to fill or a question about my work?
          Email is the fastest way to reach me.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="reveal display mt-10 block w-fit text-[6.2cqw] whitespace-nowrap transition-colors hover:text-signal"
        >
          {profile.email}
        </a>

        <div className="reveal mt-12 flex flex-wrap gap-x-10 gap-y-4">
          <ArrowLink href={profile.github}>GitHub</ArrowLink>
          <ArrowLink href={profile.resume}>Resume</ArrowLink>
        </div>
      </div>
    </section>
  );
}
