import { profile } from "@/content/profile";

const sectionLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

/**
 * The bar that stays at the top. It holds four short links, which fit on a
 * phone as they are, so there is no menu button and no JavaScript.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-ink/80 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="shell flex h-16 items-center justify-between"
      >
        <a
          href="#top"
          aria-label={`${profile.name}, back to top`}
          // The padding makes the link easier to tap, and the equal negative
          // margin stops that padding from moving anything.
          className="eyebrow -m-2 flex items-center gap-2.5 p-2 text-paper"
        >
          <span aria-hidden className="size-2 bg-signal" />
          {/* The name does not fit beside the links on a phone. */}
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        {/* The tight gap and padding are what fit a 320px-wide phone. */}
        <ul className="eyebrow flex items-center gap-3.5 text-soft sm:gap-8">
          {sectionLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                // The underline is always there, squeezed to no width. On
                // hover it grows back out from its left end.
                className="relative py-1 transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-signal after:transition-transform after:duration-300 hover:text-paper hover:after:scale-x-100"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              // A green panel waits below the button and slides up behind
              // the word on hover. "isolate" keeps that panel, which sits
              // behind the text, from slipping behind the header as well.
              className="relative isolate block overflow-hidden border border-line-strong px-2.5 py-2 text-paper transition-colors duration-300 before:absolute before:inset-0 before:-z-10 before:translate-y-full before:bg-signal before:transition-transform before:duration-300 hover:border-signal hover:text-ink hover:before:translate-y-0 sm:px-3"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
      <div
        aria-hidden
        className="scroll-progress absolute inset-x-0 -bottom-px h-px bg-signal"
      />
    </header>
  );
}
