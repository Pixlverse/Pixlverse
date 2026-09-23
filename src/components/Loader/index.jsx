import React, { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";
import "./loader.css";

/* A true lemniscate of Bernoulli, sampled from the curve and smoothed into
   cubics, rather than two ovals butted together — that read as a pair of
   squashed circles. One continuous closed path, so a single dash can travel
   the whole figure-eight without a seam. Bounds are 100 x 44.4. */
const INFINITY =
  "M 100.0,22.22 C 100.0,26.58 98.47,31.84 96.45,35.31 C 94.44,38.78 90.96,41.53 87.91,43.05 C 84.86,44.57 81.24,44.72 78.15,44.44 C 75.06,44.16 72.05,42.81 69.35,41.38 C 66.65,39.95 64.25,37.9 61.97,35.88 C 59.7,33.86 57.7,31.54 55.7,29.26 C 53.71,26.98 51.9,24.57 50.0,22.22 C 48.1,19.87 46.29,17.46 44.3,15.18 C 42.3,12.9 40.3,10.58 38.03,8.56 C 35.76,6.54 33.35,4.5 30.65,3.07 C 27.95,1.64 24.94,0.28 21.85,0.0 C 18.76,-0.28 15.14,-0.13 12.09,1.39 C 9.04,2.91 5.56,5.67 3.55,9.14 C 1.53,12.61 0.0,17.86 0.0,22.22 C 0.0,26.58 1.53,31.84 3.55,35.31 C 5.56,38.78 9.04,41.53 12.09,43.05 C 15.14,44.57 18.76,44.72 21.85,44.44 C 24.94,44.16 27.95,42.81 30.65,41.38 C 33.35,39.95 35.76,37.9 38.03,35.88 C 40.3,33.86 42.3,31.54 44.3,29.26 C 46.29,26.98 48.1,24.57 50.0,22.22 C 51.9,19.87 53.71,17.46 55.7,15.18 C 57.7,12.9 59.7,10.58 61.97,8.56 C 64.25,6.54 66.65,4.5 69.35,3.07 C 72.05,1.64 75.06,0.28 78.15,0.0 C 81.24,-0.28 84.86,-0.13 87.91,1.39 C 90.96,2.91 94.44,5.67 96.45,9.14 C 98.47,12.61 100.0,17.86 100.0,22.22 Z";

/**
 * Loader — the brand mark drawn as a glowing arc that chases itself around an
 * infinity loop.
 *
 * Two paths share the geometry: a dim full-length track, and a lit segment on
 * top whose dash offset animates, which is what reads as "filling". The glow
 * is a pair of drop-shadows on the lit path rather than an SVG blur filter, so
 * it costs nothing to composite.
 */
export default function Loader({ label = "Loading", size = 190, inline = false }) {
  const reduceMotion = useReducedMotion();
  const uid = useId().replace(/:/g, "");
  const gradId = `loader-grad-${uid}`;

  return (
    <div
      className={`loader${inline ? " loader--inline" : ""}`}
      role="status"
      aria-live="polite"
    >
      <svg
        className="loader-mark"
        /* the path's own bounds (100 x 44.4) plus room for the stroke and its
           glow, so `size` is the size of the mark itself */
        viewBox="-6 -6 112 56"
        width={size}
        height={(size * 56) / 112}
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="45%" stopColor="#c9a6ff" />
            <stop offset="100%" stopColor="#b43f8f" />
          </linearGradient>
        </defs>

        <path className="loader-track" d={INFINITY} />

        <motion.path
          className="loader-head"
          d={INFINITY}
          stroke={`url(#${gradId})`}
          pathLength="1"
          strokeDasharray="0.3 0.7"
          /* the dash walks the full path length once per cycle */
          animate={reduceMotion ? { opacity: [0.35, 1, 0.35] } : { strokeDashoffset: [0, -1] }}
          transition={{
            duration: reduceMotion ? 1.6 : 2.1,
            repeat: Infinity,
            ease: reduceMotion ? "easeInOut" : "linear",
          }}
        />
      </svg>

      {label && <span className="loader-label">{label}</span>}
    </div>
  );
}
