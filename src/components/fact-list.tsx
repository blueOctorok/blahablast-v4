import { ArrowLink } from "@/components/arrow-link";
import type { Fact } from "@/content/profile";

type FactListProps = {
  title: string;
  facts: Fact[];
};

/**
 * A titled list of ruled rows: a name on the left, what it was on the right.
 * Every row uses the same two columns, so the right-hand text lines up down
 * the list however long each name is.
 */
export function FactList({ title, facts }: FactListProps) {
  return (
    <div className="reveal">
      <h3 className="eyebrow text-quiet">{title}</h3>
      <dl className="mt-4 border-t border-line">
        {facts.map((fact) => (
          <div
            key={fact.label}
            className="grid items-baseline gap-x-8 gap-y-1 border-b border-line py-4 sm:grid-cols-[2fr_3fr]"
          >
            <dt className="font-semibold">{fact.label}</dt>
            <dd className="flex flex-wrap items-baseline gap-x-4 gap-y-2 text-soft">
              {fact.detail}
              {fact.link && (
                <ArrowLink href={fact.link.href}>{fact.link.label}</ArrowLink>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
