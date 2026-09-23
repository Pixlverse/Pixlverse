import React from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import "./scrollprogress.css";

/**
 * A brand-gradient rule pinned to the top of the viewport that fills as the
 * page scrolls. Driven straight off scroll position, softened by a spring so
 * it glides instead of tracking the wheel one-to-one.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();

  const smooth = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="scroll-progress"
      aria-hidden="true"
      style={{ scaleX: reduceMotion ? scrollYProgress : smooth }}
    />
  );
}
