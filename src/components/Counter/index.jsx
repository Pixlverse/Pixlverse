import React, { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

/**
 * Splits a display figure into the parts we can and can't count.
 * "25+" -> ["", 25, "+"] · "24h" -> ["", 24, "h"] · "100%" -> ["", 100, "%"]
 */
function parse(value) {
  const m = String(value).match(/^(\D*)([\d.,]+)(.*)$/);
  if (!m) return null;
  const digits = m[2];
  const n = Number(digits.replace(/,/g, ""));
  if (!Number.isFinite(n)) return null;
  return {
    prefix: m[1],
    target: n,
    suffix: m[3],
    grouped: digits.includes(","),
    decimals: (digits.split(".")[1] || "").length,
  };
}

/**
 * Counter — rolls a stat up from zero the first time it scrolls into view.
 * Anything we can't parse as a number (or a visitor who asked for reduced
 * motion) just gets the value printed as-is.
 */
export default function Counter({ value, duration = 1.6, className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const parsed = parse(value);
  const [n, setN] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!parsed || !inView || reduceMotion) return;
    setStarted(true);
    const controls = animate(0, parsed.target, {
      duration,
      ease: [0.16, 0.84, 0.24, 1],
      onUpdate: setN,
    });
    return () => controls.stop();
    // parsed is derived from `value`; re-running on the object identity would
    // restart the count on every render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduceMotion, value, duration]);

  if (!parsed) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  // Until the stat has scrolled in we print the real figure, so the markup a
  // crawler (or a reader with reduced motion) sees is never a placeholder zero.
  const shown = !started
    ? parsed.target
    : parsed.decimals
    ? Number(n.toFixed(parsed.decimals))
    : Math.round(n);

  const text = parsed.grouped ? shown.toLocaleString("en-US") : String(shown);

  return (
    // the animated digits are decorative churn; assistive tech gets the figure
    <span ref={ref} className={className} aria-label={String(value)}>
      <span aria-hidden="true">
        {parsed.prefix}
        {text}
        {parsed.suffix}
      </span>
    </span>
  );
}
