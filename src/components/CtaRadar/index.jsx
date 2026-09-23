import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import "./ctaradar.css";

const RINGS = [0, 1, 2, 3, 4];
const CYCLE = 7;

/**
 * CtaRadar — concentric rings pushing out from a bright core on the right of
 * the CTA panel, like a signal being picked up.
 *
 * Each ring runs the same 7s expand-and-fade on a staggered delay, so at any
 * moment several are on screen at different radii and the whole thing reads as
 * the static banded artwork it is modelled on — it just happens to be moving.
 */
export default function CtaRadar() {
  const reduceMotion = useReducedMotion();

  return (
    <span className="cta-radar" aria-hidden="true">
      {RINGS.map((i) => (
        <motion.span
          key={i}
          className="cta-radar-ring"
          initial={false}
          animate={
            reduceMotion
              ? /* a still set of bands rather than a frozen single ring */
                { scale: 0.3 + i * 0.17, opacity: 0.2 }
              : { scale: [0.2, 1], opacity: [0, 0.32, 0] }
          }
          transition={
            reduceMotion
              ? { duration: 0 }
              : {
                  duration: CYCLE,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: (i * CYCLE) / RINGS.length,
                  /* quick to appear, long slow fade on the way out */
                  times: [0, 0.22, 1],
                }
          }
        />
      ))}
      <span className="cta-radar-core" />
    </span>
  );
}
