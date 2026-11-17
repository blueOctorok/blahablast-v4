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
                className="transition-colors hover:text-signal"
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
              className="border border-line-strong px-2.5 py-2 text-paper transition-colors hover:border-signal hover:text-signal sm:px-3"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
