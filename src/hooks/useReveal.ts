import { useEffect, useState, type CSSProperties } from "react";

/** True when motion should be skipped entirely and content shown immediately. */
function revealImmediately(): boolean {
  if (typeof window === "undefined") return true;
  if (typeof IntersectionObserver === "undefined") return true;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
}

/**
 * One-shot scroll reveal. Attach `ref` to a container, add `.reveal` plus the
 * returned `revealClass`, and give children `.reveal-item` with `stagger(i)`.
 *
 * IntersectionObserver rather than `animation-timeline: view()` on purpose:
 * scroll timelines ignore `animation-delay`, so per-item stagger is not
 * expressible there, and view timelines replay on every re-entry.
 */
export function useReveal<T extends HTMLElement = HTMLElement>() {
  // Callback ref (stable identity) so containers that mount late — e.g. the
  // projects grid, which only exists once the GitHub fetch resolves — are
  // still observed.
  const [element, setElement] = useState<T | null>(null);
  const [isRevealed, setIsRevealed] = useState(revealImmediately);

  useEffect(() => {
    if (!element || isRevealed) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -12% 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [element, isRevealed]);

  return {
    ref: setElement,
    isRevealed,
    revealClass: isRevealed ? "is-revealed" : "",
  };
}

/** Inline stagger index consumed by `transition-delay: calc(var(--i) * 60ms)`. */
export function stagger(index: number): CSSProperties {
  return { "--i": index } as CSSProperties;
}
