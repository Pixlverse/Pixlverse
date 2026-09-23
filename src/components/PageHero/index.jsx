import React from "react";
import Reveal from "../Reveal";
import "./pagehero.css";

export default function PageHero({ eyebrow, title, subtitle, children }) {
  return (
    <section className="page-hero">
      <div className="page-hero-bg" aria-hidden="true">
        <span className="ph-blob ph-blob-1"></span>
        <span className="ph-blob ph-blob-2"></span>
        <span className="ph-grid"></span>
      </div>
      <div className="container page-hero-inner">
        <Reveal direction="up">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="page-hero-title">{title}</h1>
          {subtitle && <p className="page-hero-sub">{subtitle}</p>}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
