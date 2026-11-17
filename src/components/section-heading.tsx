type SectionHeadingProps = {
  /** The section's place on the page, as it is printed: "01". */
  index: string;
  title: string;
};

export function SectionHeading({ index, title }: SectionHeadingProps) {
  return (
    <div className="reveal">
      <p className="eyebrow text-signal">{index}</p>
      <h2 className="display mt-4 text-4xl sm:text-6xl">{title}</h2>
    </div>
  );
}
