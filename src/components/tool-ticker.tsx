import { toolGroups } from "@/content/profile";

const tools = toolGroups.flatMap((group) => group.tools);

/**
 * A strip of tool names that slides sideways forever.
 *
 * The list is drawn twice, side by side, and the pair slides left by half
 * its width. At that moment the second copy sits exactly where the first
 * began, so jumping back to the start cannot be seen. Each copy is at least
 * as wide as the window, so the pair never runs out on a wide screen.
 *
 * It is decoration: the About section lists the same tools for real, so a
 * screen reader skips this.
 */
export function ToolTicker() {
  return (
    <div
      aria-hidden
      className="fade-edges overflow-hidden border-b border-line py-4"
    >
      <div className="flex w-max motion-safe:animate-ticker">
        {["first", "second"].map((copy) => (
          <ul
            key={copy}
            className="eyebrow flex min-w-screen shrink-0 justify-around text-quiet"
          >
            {tools.map((tool) => (
              <li key={tool} className="flex items-center whitespace-nowrap">
                {tool}
                <span className="mx-6 size-1 bg-signal" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
