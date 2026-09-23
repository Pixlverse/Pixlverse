import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import "./backtotop.css";

/**
 * A floating jump-to-top control that springs in once you're a screen or so
 * down the page. The ring around it tracks read progress.
 */
export default function BackToTop() {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();
  const [show, setShow] = useState(false);

  const ring = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          className="back-to-top"
          aria-label="Back to top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: reduceMotion ? "auto" : "smooth",
            })
          }
          initial={{ opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 16 }}
          whileHover={reduceMotion ? undefined : { scale: 1.09, y: -3 }}
          whileTap={{ scale: 0.93 }}
          transition={{ type: "spring", stiffness: 340, damping: 22 }}
        >
          {/* the ring is drawn inside the button, over the gradient — outside it
              the white arc vanished against the light sections */}
          <svg className="back-to-top-ring" viewBox="0 0 44 44" aria-hidden="true">
            <circle cx="22" cy="22" r="18.6" />
            <motion.circle
              cx="22"
              cy="22"
              r="18.6"
              className="back-to-top-ring-fill"
              style={{ pathLength: reduceMotion ? scrollYProgress : ring }}
            />
          </svg>
          <FaArrowUp aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
