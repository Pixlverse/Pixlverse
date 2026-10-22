import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Reveal from "../Reveal";
import ServiceIcon from "../ServiceIcon";
import "./faqgrid.css";

/* Matches the breakpoint in faqgrid.css where the answers collapse. */
const COLLAPSE_QUERY = "(max-width: 600px)";

/**
 * FaqGrid — every question and answer visible at once, two to a row.
 *
 * Laid out flat on wider screens: nobody opens six panels to find the one that
 * matters, and the whole thing stays scannable. On phones, where the six
 * answers ran to several screens, it becomes an accordion — but only in CSS.
 * The answers are always in the markup, so crawlers, find-in-page and the FAQ
 * rich result still have the full text.
 */
export default function FaqGrid({ items }) {
  const [open, setOpen] = useState(null);
  /* false on the server and on first paint, so the prerendered markup and the
     hydrated markup agree; the accordion switches on after mount */
  const [collapsible, setCollapsible] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(COLLAPSE_QUERY);
    const sync = () => setCollapsible(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <ul className="faq-grid">
      {items.map((f, i) => {
        const isOpen = open === i;
        const answerId = `faq-answer-${i}`;

        return (
          <Reveal
            as="li"
            key={f.q}
            className={`faq-item${isOpen ? " is-open" : ""}`}
            direction="up"
            delay={(i % 2) * 0.07}
            amount={0.15}
          >
            <span className="faq-item-icon" aria-hidden="true">
              <ServiceIcon name={f.icon} />
            </span>
            <div className="faq-item-body">
              <h3>
                <button
                  type="button"
                  className="faq-q"
                  onClick={() => setOpen(isOpen ? null : i)}
                  /* a plain heading on wide screens: not focusable, no state */
                  tabIndex={collapsible ? 0 : -1}
                  aria-expanded={collapsible ? isOpen : undefined}
                  aria-controls={collapsible ? answerId : undefined}
                >
                  {f.q}
                  <FaChevronDown className="faq-q-chevron" aria-hidden="true" />
                </button>
              </h3>
              <div className="faq-a" id={answerId}>
                <div className="faq-a-inner">
                  <p>{f.a}</p>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </ul>
  );
}
