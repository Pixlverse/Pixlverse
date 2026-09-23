import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Reveal from "../Reveal";
import ProjectThumb from "../ProjectThumb";
import { hostOf } from "../SiteFrame";
import "./projectindex.css";

/**
 * ProjectIndex — the full body of work as one list, a project per row.
 *
 * Deliberately not another grid of framed cards: the home page already runs
 * big alternating showcase rows, and ten identical browser chromes stacked
 * down a page stop reading as ten sites and start reading as wallpaper. Here
 * the screenshot is a thumbnail that earns its size on hover, and the row
 * itself is the link.
 */
export default function ProjectIndex({ projects }) {
  return (
    <ol className="proj-index">
      {projects.map((p, i) => {
        const host = hostOf(p.url);
        const Row = p.url ? "a" : "div";

        return (
          <Reveal
            as="li"
            key={p.name}
            className="proj-row"
            direction="up"
            delay={(i % 3) * 0.05}
            amount={0.2}
          >
            <Row
              className={`proj-link${p.url ? " proj-link--live" : ""}`}
              {...(p.url && {
                href: p.url,
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": `${p.name} — open the live site in a new tab`,
              })}
            >
              <span className="proj-num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>

              <span className="proj-main">
                <span className="proj-head">
                  <h2>{p.name}</h2>
                  <span className="proj-tags">
                    <span className="proj-tag">{p.category}</span>
                    {p.location && (
                      <span className="proj-tag proj-tag--muted">
                        {p.location}
                      </span>
                    )}
                    {p.partner && (
                      /* the tag that replaced the standalone partner section */
                      <span className="proj-tag proj-tag--partner">
                        Built with {p.partner}
                      </span>
                    )}
                  </span>
                </span>
                <p className="proj-blurb">{p.blurb}</p>
                {host && <span className="proj-host">{host}</span>}
              </span>

              <span className="proj-shot">
                <ProjectThumb name={p.name} image={p.image} />
              </span>

              <span className="proj-go" aria-hidden="true">
                <FaArrowRight />
              </span>
            </Row>
          </Reveal>
        );
      })}
    </ol>
  );
}
