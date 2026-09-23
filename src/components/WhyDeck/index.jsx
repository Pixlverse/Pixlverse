import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import ServiceIcon from "../ServiceIcon";
import "./whydeck.css";

/* Spread: the gap between card centres once the deck is dealt. Set so five
   cards land edge to edge inside the container with nothing overlapping —
   every card readable in one look. */
const SPREAD_X = 232;

/**
 * WhyDeck — the five differentiators as a deck of cards.
 *
 * Out of view they sit in a tight, squared-up pile in the middle. Scroll the
 * section in and they deal outwards into a full row; scroll it back out and
 * they gather into the pile again. Driven by one useInView on the list rather
 * than per-card whileInView, so all five always agree on which state they are
 * in and the deal reads as a single gesture.
 */
export default function WhyDeck({ points }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  /* no `once` — leaving the section has to put the deck back together */
  const inView = useInView(ref, { amount: 0.35 });
  const mid = (points.length - 1) / 2;

  return (
    <ul className="why-deck" ref={ref}>
      {points.map((w, i) => {
        const offset = i - mid;
        const dist = Math.abs(offset);

        const dealt = {
          x: offset * SPREAD_X,
          /* a shallow arc, outer cards riding lower — it is this silhouette
             the curved top of the section below picks up */
          y: dist * 12,
          rotate: 0,
          scale: 1,
          opacity: 1,
        };
        const piled = {
          x: offset * 9,
          y: dist * 4,
          rotate: offset * 3.5,
          scale: 0.94,
          /* the back of the pile sits well down, so the closed deck reads as
             one object rather than five stacked rectangles */
          opacity: 1 - dist * 0.22,
        };

        return (
          <motion.li
            key={w.title}
            className="why-card"
            style={{
              "--accent": w.color,
              /* piled, the middle card is the one on top */
              zIndex: 10 - Math.round(dist * 2),
            }}
            initial={false}
            animate={reduceMotion ? dealt : inView ? dealt : piled}
            transition={{
              type: "spring",
              stiffness: 110,
              damping: 18,
              /* dealt from the middle outwards, gathered in the same order */
              delay: reduceMotion ? 0 : dist * 0.07,
            }}
            whileHover={reduceMotion ? undefined : { y: dist * 12 - 10 }}
          >
            <span className="why-card-mark" aria-hidden="true">
              <ServiceIcon name={w.icon} />
            </span>
            <div className="why-card-body">
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </div>
          </motion.li>
        );
      })}
    </ul>
  );
}
