import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Fade-and-rise reveal on scroll. Wrap any block to animate it in the first
 * time it enters the viewport. Use `delay` to stagger siblings.
 * Respects prefers-reduced-motion (renders statically).
 */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
