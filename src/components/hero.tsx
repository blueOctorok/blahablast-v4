import { PointerArea } from "@/components/pointer-area";
import { disciplines, profile } from "@/content/profile";

export function Hero() {
  return (
    <section id="top" className="overflow-clip border-b border-line">
      <PointerArea className="relative">
        {/*
          Three layers behind the text: the grid, the same grid in green
          shown only around the mouse, and a cloud that trails after it.
        */}
        <div aria-hidden className="grid-lines fade-down absolute inset-0" />
        <div
          aria-hidden
          className="grid-lines pointer-mask absolute inset-0 opacity-40 [--grid-line:var(--color-signal)]"
        />
        <div
          aria-hidden
          className="aurora follow-pointer absolute top-0 left-0 motion-safe:animate-breathe"
        />

        <div className="shell relative pt-20 pb-16 sm:pt-28 sm:pb-20">
          <p className="eyebrow text-signal motion-safe:animate-rise">
            {profile.location}
          </p>

          {/*
            The name is drawn one letter at a time so each can climb in a
            beat after the one before. The heading clips them, so a letter
            is hidden until it rises past the bottom of its line. A screen
            reader gets the name once, as a whole word.
          */}
          <h1 className="display mt-5 overflow-clip text-5xl sm:text-7xl">
            <span className="sr-only">{profile.name}</span>
            <span aria-hidden>
              {[...profile.name].map((letter, index) => (
                <span
                  key={index}
                  className="inline-block whitespace-pre motion-safe:animate-letter"
                  style={{ animationDelay: `${120 + index * 45}ms` }}
                >
                  {letter}
                </span>
              ))}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-soft motion-safe:animate-rise motion-safe:[animation-delay:500ms]">
            {profile.pitch}
          </p>

          {/*
            The 1px lines between the cells are 1px gaps, with this box's
            background showing through. Borders on the cells would double up
            where two cells meet. It also means a light placed behind the
            cells shows as the lines themselves glowing near the mouse.
          */}
          <PointerArea className="group relative mt-16 bg-line motion-safe:animate-rise motion-safe:[animation-delay:650ms]">
            <div
              aria-hidden
              className="spotlight absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
            <ul className="relative grid gap-px p-px sm:grid-cols-3">
              {disciplines.map((discipline, index) => (
                <li
                  key={discipline.name}
                  // Not quite solid, so a little of the light comes through.
                  className="bg-ink/95 p-6 transition-colors duration-500 hover:bg-ink/85"
                >
                  <p className="eyebrow text-signal">{`0${index + 1}`}</p>
                  <h2 className="mt-3 text-lg font-medium">
                    {discipline.name}
                  </h2>
                  <p className="mt-2 text-soft">{discipline.detail}</p>
                </li>
              ))}
            </ul>
          </PointerArea>
        </div>
      </PointerArea>
    </section>
  );
}
