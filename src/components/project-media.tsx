import Image from "next/image";

import { LoopVideo } from "@/components/loop-video";
import type { Media } from "@/content/projects";

type ProjectMediaProps = {
  media: Media;
  /**
   * How wide the picture is drawn, in the words the browser understands
   * ("100vw", "(min-width: 64rem) 40vw, 100vw"). It uses this to download
   * a file no bigger than it needs.
   */
  sizes: string;
  className?: string;
};

/** Draws a project's picture or clip, whichever the project lists. */
export function ProjectMedia({ media, sizes, className }: ProjectMediaProps) {
  if (media.kind === "video") {
    return (
      <LoopVideo
        name={media.name}
        width={media.width}
        height={media.height}
        label={media.label}
        className={className}
      />
    );
  }

  return (
    <Image
      src={media.src}
      width={media.width}
      height={media.height}
      alt={media.alt}
      sizes={sizes}
      className={className}
    />
  );
}
