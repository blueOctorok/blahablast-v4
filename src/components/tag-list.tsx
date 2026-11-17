type TagListProps = {
  tags: string[];
  /** What the tags are, for a screen reader: "Stack", "Web tools". */
  label: string;
};

export function TagList({ tags, label }: TagListProps) {
  return (
    <ul aria-label={label} className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className="eyebrow border border-line-strong px-2.5 py-1.5 text-soft"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
