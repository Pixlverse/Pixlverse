import React from "react";
import Reveal from "../Reveal";
import ServiceIcon from "../ServiceIcon";
import "./faqgrid.css";

/**
 * FaqGrid — every question and answer visible at once, two to a row.
 *
 * Replaces an accordion. Nobody opens six panels to find the one that matters,
 * and an accordion hides the answers behind a click for crawlers and for
 * anyone using find-in-page. Laid out flat, the whole thing is scannable and
 * the FAQ rich result has the text it needs sitting in the markup.
 */
export default function FaqGrid({ items }) {
  return (
    <ul className="faq-grid">
      {items.map((f, i) => (
        <Reveal
          as="li"
          key={f.q}
          className="faq-item"
          direction="up"
          delay={(i % 2) * 0.07}
          amount={0.15}
        >
          <span className="faq-item-icon" aria-hidden="true">
            <ServiceIcon name={f.icon} />
          </span>
          <div className="faq-item-body">
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
