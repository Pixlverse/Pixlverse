import React, { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Reveal from "../Reveal";
import HeroNetwork from "../HeroNetwork";
import "./pagehero.css";

/**
 * PageHero — the banner for every page except Home.
 *
 * It runs the same dark stage and node network as the Home hero, so arriving
 * on an inner page feels like the same site rather than a different one. The
 * backdrop lags the scroll slightly and the copy lags a little more, which
 * reads as depth behind the title.
 */
export default function PageHero({ title, subtitle, children }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const fade = useTransform(scrollYProgress, [0, 0.95], [1, 0]);

  return (
    <section className="page-hero" ref={ref}>
      <motion.div
        className="page-hero-bg"
        aria-hidden="true"
        style={reduceMotion ? undefined : { y: bgY }}
      >
        <HeroNetwork />
      </motion.div>

      <motion.div
        className="container page-hero-inner"
        style={reduceMotion ? undefined : { y: copyY, opacity: fade }}
      >
        <Reveal direction="up">
          <h1 className="page-hero-title">{title}</h1>
          {subtitle && <p className="page-hero-sub">{subtitle}</p>}
          {children}
        </Reveal>
      </motion.div>
    </section>
  );
}
