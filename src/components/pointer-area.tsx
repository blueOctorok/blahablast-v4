"use client";

import type { PointerEvent, ReactNode } from "react";

type PointerAreaProps = {
  className?: string;
  children: ReactNode;
};

/**
 * A box that reports where the mouse is over it, and does nothing else.
 *
 * The position is written to CSS variables on the box, so anything inside
 * can use it from a stylesheet: a glow that follows the mouse, a card that
 * leans toward it. Writing to the element directly, and not to React state,
 * means a mouse move never re-renders anything.
 *
 *   --pointer-x, --pointer-y    distance from the box's top left, in pixels
 *   --pointer-fx, --pointer-fy  the same as a fraction, from -0.5 to 0.5,
 *                               with 0 at the middle
 */
export function PointerArea({ className, children }: PointerAreaProps) {
  function follow(event: PointerEvent<HTMLDivElement>) {
    // A finger dragging to scroll is not pointing at anything.
    if (event.pointerType !== "mouse") return;

    const area = event.currentTarget;
    const box = area.getBoundingClientRect();
    const x = event.clientX - box.left;
    const y = event.clientY - box.top;

    area.style.setProperty("--pointer-x", `${x}px`);
    area.style.setProperty("--pointer-y", `${y}px`);
    area.style.setProperty("--pointer-fx", `${x / box.width - 0.5}`);
    area.style.setProperty("--pointer-fy", `${y / box.height - 0.5}`);
  }

  // The fractions are dropped so a leaning card settles flat. The pixel
  // position is kept so a glow stays where the mouse left it.
  function settle(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.style.removeProperty("--pointer-fx");
    event.currentTarget.style.removeProperty("--pointer-fy");
  }

  return (
    <div className={className} onPointerMove={follow} onPointerLeave={settle}>
      {children}
    </div>
  );
}
