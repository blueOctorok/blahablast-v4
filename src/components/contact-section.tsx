import { ArrowLink } from "@/components/arrow-link";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/content/profile";

export function ContactSection() {
  return (
    <section
      id="contact"
      // "clip", not "hidden", so the scroll animations inside still follow
      // the page. See MediaFrame.
      className="relative overflow-clip border-t border-line"
    >
      <div
        aria-hidden
        className="aurora absolute -bottom-72 -left-40 motion-safe:animate-breathe"
      />
      <div className="shell relative py-20 sm:py-28">
        <SectionHeading index="03" title="Contact" />

        <p className="reveal mt-10 max-w-xl leading-relaxed text-soft">
          Have a product to build, a role to fill or a question about my work?
          Email is the fastest way to reach me.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="reveal sweep mt-8 block w-fit text-xl font-medium break-all sm:text-2xl"
        >
          {profile.email}
        </a>

        {/*
          No "reveal" here. It finishes 200px after a block comes on screen,
          and the page ends before these links can travel that far on a
          short window, which would leave them slightly faded for good.
        */}
        <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
          <ArrowLink href={profile.github}>GitHub</ArrowLink>
          <ArrowLink href={profile.resume}>Resume</ArrowLink>
        </div>
      </div>
    </section>
  );
}
