import React from "react";
import { motion } from "framer-motion";

const EASE = [0.16, 0.84, 0.24, 1];

const DIRECTIONS = {
  up: { y: 32, x: 0 },
  down: { y: -32, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
};

/**
 * Reveal — classic fade + slide on scroll into view (once).
 * Content is always in the DOM (good for SEO/crawlers); only visually animated.
 */
export default function Reveal({
  children,
  as = "div",
  direction = "up",
  delay = 0,
  duration = 0.6,
  amount = 0.2,
  className,
  ...rest
}) {
  const M = motion[as] || motion.div;
  const offset = DIRECTIONS[direction] || DIRECTIONS.up;

  return (
    <M
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </M>
  );
}
