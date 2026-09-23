import React from "react";
import Reveal from "../Reveal";
import Counter from "../Counter";
import "./statcircles.css";

/* Outline, filled, outline, filled-dark — the alternation is what gives the
   row its rhythm, and it is why the filled ones are lifted above their
   neighbours where the circles overlap. */
const TONE = ["outline", "brand", "outline", "deep"];

/**
 * StatCircles — the trust figures as a row of overlapping discs.
 *
 * Each carries a sonar ring that expands and fades on its own stagger, so the
 * row is never entirely still but nothing moves fast enough to pull focus off
 * the numbers.
 */
export default function StatCircles({ items }) {
  return (
    <div className="stat-rings">
      {items.map((s, i) => {
        const tone = TONE[i % TONE.length];
        return (
          <Reveal
            key={s.label}
            className={`stat-ring stat-ring--${tone}`}
            direction="up"
            delay={i * 0.09}
            amount={0.3}
            /* the pulse reads as one travelling wave rather than four
               unrelated blinks */
            style={{ "--i": i }}
          >
            <span className="stat-ring-pulse" aria-hidden="true" />
            <span className="stat-ring-inner">
              <Counter className="stat-ring-value" value={s.value} />
              <span className="stat-ring-label">{s.label}</span>
              {s.note && <span className="stat-ring-note">{s.note}</span>}
            </span>
          </Reveal>
        );
      })}
    </div>
  );
}
