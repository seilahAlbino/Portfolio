/**
 * Returns true if the user has enabled reduced motion.
 */
export const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;