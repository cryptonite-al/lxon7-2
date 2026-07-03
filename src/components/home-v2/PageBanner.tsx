import { motion, useReducedMotion } from "framer-motion";

/**
 * Slim recurring brand ribbon shown at the top of inner pages — echoes the
 * homepage "Intelligence, rendered into cinema." lockup in the same two-tone
 * style, kept compact so it never competes with the page's own H1.
 * Pass a page-specific `accent` phrase.
 */
export function PageBanner({
  lead = "Intelligence,",
  accent = "rendered into cinema.",
}: {
  lead?: string;
  accent?: string;
}) {
  const reduce = useReducedMotion();

  const line = (
    <p className="font-display text-center text-xs uppercase tracking-[0.35em] md:text-sm">
      <span className="text-foreground">{lead} </span>
      <span className="text-gradient-signal">{accent}</span>
    </p>
  );

  return (
    <div className="relative z-10 border-b border-violet-glow/15 bg-void/50 backdrop-blur-sm">
      <div className="mx-auto max-w-[1400px] px-4 py-3 md:px-8">
        {reduce ? (
          line
        ) : (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {line}
          </motion.div>
        )}
      </div>
    </div>
  );
}
