type HighlightListProps = {
  highlights: string[];
};

export function HighlightList({ highlights }: HighlightListProps) {
  return (
    <ul className="space-y-4">
      {highlights.map((highlight) => (
        <li key={highlight} className="flex gap-3 text-soft">
          {/* The marker is nudged down to sit on the first line of text. */}
          <span aria-hidden className="mt-2.5 size-1.5 shrink-0 bg-signal" />
          {highlight}
        </li>
      ))}
    </ul>
  );
}
