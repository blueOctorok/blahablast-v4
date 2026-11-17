"use client";

import { useEffect, useRef } from "react";

import { useInView } from "@/hooks/use-in-view";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type LoopVideoProps = {
  /** The file in /public/media, without its ending. The still has the same name. */
  name: string;
  width: number;
  height: number;
  /** What the clip shows, for someone who cannot see it. */
  label: string;
  className?: string;
};

/**
 * A silent clip that plays while it is on screen.
 *
 * Off screen it is paused, so the browser is not decoding video nobody is
 * watching. For a visitor who asked for less movement it shows its still,
 * with a play button.
 */
export function LoopVideo({
  name,
  width,
  height,
  label,
  className,
}: LoopVideoProps) {
  const video = useRef<HTMLVideoElement>(null);
  const inView = useInView(video);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const element = video.current;
    if (!element) return;
    if (reducedMotion || !inView) {
      element.pause();
      return;
    }
    // A browser refuses to start a clip that might make sound. React sets
    // `muted` late on a first render, so it is set here too.
    element.muted = true;
    // play() fails if the clip is paused again before it starts, which is
    // what scrolling straight past does. There is nothing to recover.
    element.play().catch(() => {});
  }, [inView, reducedMotion]);

  return (
    <video
      ref={video}
      className={className}
      width={width}
      height={height}
      poster={`/media/${name}.jpg`}
      preload="none"
      aria-label={label}
      controls={reducedMotion}
      muted
      loop
      playsInline
    >
      <source src={`/media/${name}.mp4`} type="video/mp4" />
    </video>
  );
}
