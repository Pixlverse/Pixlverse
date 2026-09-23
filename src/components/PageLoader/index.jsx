import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "../Loader";
import "./pageloader.css";

/**
 * PageLoader — the full-screen curtain shown while the site settles on first
 * load. It lifts by expanding the mark toward the viewer while the ground
 * fades a beat behind it.
 *
 * It covers the viewport rather than replacing the page, so the route
 * underneath renders and lays out behind it; when the curtain lifts everything
 * is already in place.
 */
export default function PageLoader({ show }) {
  // a scrollbar behind the curtain is both pointless and a way to lose your
  // place, so the page is pinned while it is up
  useEffect(() => {
    if (!show) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="page-loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          /* the ground holds a beat longer than the mark, so the expansion is
             visible against it before everything clears */
          transition={{ duration: 0.5, delay: 0.16, ease: [0.16, 0.84, 0.24, 1] }}
        >
          <motion.div
            className="page-loader-mark"
            initial={{ scale: 0.88, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            /* accelerating out of frame rather than easing to a stop — it
               should read as the mark rushing past the viewer */
            exit={{ scale: 2.6, opacity: 0 }}
            transition={{
              duration: 0.55,
              ease: [0.55, 0, 0.9, 0.2],
              opacity: { duration: 0.42, ease: "easeIn" },
            }}
          >
            <Loader label="Loading" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
