import type { ReactNode } from "react";

type ArrowLinkProps = {
  href: string;
  children: ReactNode;
};

/** A link that leaves the page: another site, or a PDF. Opens a new tab. */
export function ArrowLink({ href, children }: ArrowLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group eyebrow inline-flex items-center gap-2 border-b border-signal pb-1 text-paper transition-colors hover:text-signal"
    >
      {children}
      <span
        aria-hidden
        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      >
        ↗
      </span>
    </a>
  );
}
