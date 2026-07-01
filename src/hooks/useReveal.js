import { useEffect, useCallback } from "react";

export const useReveal = ({
  revealClass = "reveal",
  revealedClass = "revealed",
  revealOnceClass = "revealOnce",
  enabled = true,
} = {}) => {
  const resetRevealClasses = useCallback(() => {
    if (typeof document === "undefined") return;

    const revealElements = document.getElementsByClassName(revealClass);

    Array.from(revealElements).forEach((element) => {
      element.classList.remove(revealedClass);
    });
  }, [revealClass, revealedClass]);

  const assignRevealClasses = useCallback(() => {
    if (typeof document === "undefined") return;

    const revealElements = document.getElementsByClassName(revealClass);

    Array.from(revealElements).forEach((element) => {
      const rect = element.getBoundingClientRect();
      const inViewport =
        rect.bottom >= 0 &&
        rect.top <=
          (window.innerHeight || document.documentElement.clientHeight);

      if (inViewport) {
        element.classList.add(revealedClass);
      } else if (!element.classList.contains(revealOnceClass)) {
        element.classList.remove(revealedClass);
      }
    });
  }, [revealClass, revealedClass, revealOnceClass]);

  useEffect(() => {
    if (!enabled) {
      resetRevealClasses();
      return undefined;
    }

    assignRevealClasses();

    window.addEventListener("scroll", assignRevealClasses, { passive: true });
    window.addEventListener("resize", assignRevealClasses);

    return () => {
      window.removeEventListener("scroll", assignRevealClasses);
      window.removeEventListener("resize", assignRevealClasses);
    };
  }, [assignRevealClasses, enabled, resetRevealClasses]);
};
