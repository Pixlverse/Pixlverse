import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Wraps a routed page so navigation crossfades instead of cutting. Mounted
 * under an <AnimatePresence mode="wait">, keyed on the pathname — the outgoing
 * page finishes its exit before the incoming one mounts, which is also what
 * lets <ScrollToTop> inside it reset the scroll at the right moment rather
 * than yanking the page we're still looking at.
 */
export default function PageTransition({ children }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return <>{children}</>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.32, ease: [0.16, 0.84, 0.24, 1] }}
    >
      {children}
    </motion.div>
  );
}
