"use client";

import { type RefObject, useEffect, useState } from "react";

/**
 * Says whether the element in [ref] is on screen.
 *
 * The browser does the watching (IntersectionObserver) and calls back only
 * when the answer changes, so nothing here runs while the page scrolls.
 */
export function useInView(ref: RefObject<Element | null>): boolean {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref]);

  return inView;
}
