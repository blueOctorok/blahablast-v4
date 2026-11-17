import { disciplines, profile } from "@/content/profile";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div aria-hidden className="grid-lines absolute inset-0" />

      {/*
        @container makes this column the thing the headline measures itself
        against. A size in "cqw" is a percent of the column's width, where
        "vw" is a percent of the window's. The column stops growing at 80rem,
        so the name fills it edge to edge at every window size with no
        breakpoints.
      */}
      <div className="shell @container relative pt-20 pb-16 sm:pt-28 sm:pb-20">
        <p className="eyebrow text-signal motion-safe:animate-rise">
          {profile.location}
        </p>

        <h1 className="display mt-6 text-[13.2cqw] whitespace-nowrap motion-safe:animate-rise motion-safe:[animation-delay:80ms]">
          {profile.name}
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-relaxed text-soft motion-safe:animate-rise motion-safe:[animation-delay:160ms] sm:text-2xl sm:leading-relaxed">
          {profile.pitch}
        </p>

        {/*
          The 1px lines between the cells are the list's own background
          showing through a 1px gap. Borders on the cells would double up
          where two cells meet.
        */}
        <ul className="mt-16 grid gap-px border border-line bg-line motion-safe:animate-rise motion-safe:[animation-delay:240ms] sm:grid-cols-3">
          {disciplines.map((discipline, index) => (
            <li key={discipline.name} className="bg-ink p-6">
              <p className="eyebrow text-signal">{`0${index + 1}`}</p>
              <h2 className="mt-4 text-xl font-semibold">{discipline.name}</h2>
              <p className="mt-2 text-soft">{discipline.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
