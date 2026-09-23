import React from "react";
import Reveal from "../Reveal";
import "./processsteps.css";

/**
 * ProcessSteps — the four steps as an evenly aligned row, each sitting on its
 * own oversized number.
 *
 * The number is aria-hidden: it is set as artwork here, and the <ol> already
 * carries the ordering for assistive tech, so announcing "zero one" before
 * every heading would only repeat what the list structure says.
 */
export default function ProcessSteps({ steps }) {
  return (
    <ol className="process-steps">
      {steps.map((s, i) => (
        <Reveal
          as="li"
          key={s.step}
          className="ps-step"
          direction="up"
          delay={i * 0.09}
          amount={0.25}
        >
          <span className="ps-num" aria-hidden="true">
            {s.step}
          </span>
          <h3>{s.title}</h3>
          <p>{s.descShort}</p>
        </Reveal>
      ))}
    </ol>
  );
}
