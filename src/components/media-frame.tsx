import type { ReactNode } from "react";

import { PointerArea } from "@/components/pointer-area";

type MediaFrameProps = {
  className?: string;
  children: ReactNode;
};

/**
 * The bordered frame around a project's picture. It leans toward the mouse,
 * and a soft light follows the mouse across it.
 */
export function MediaFrame({ className, children }: MediaFrameProps) {
  return (
    <PointerArea className={`group ${className ?? ""}`}>
      <div className="tilt relative border border-line bg-panel p-1.5 sm:p-2">
        {/*
          Clips the picture while it is still zoomed in on the way in.
          It has to be "clip" and not "hidden": a hidden box counts as its
          own scroll area, and the picture's scroll animation would then
          watch that box, which never scrolls, and not the page.
        */}
        <div className="overflow-clip">{children}</div>
        <div
          aria-hidden
          className="spotlight pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-25"
        />
      </div>
    </PointerArea>
  );
}
