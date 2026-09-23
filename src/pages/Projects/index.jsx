import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";
import SEO from "../../components/SEO";
import "./projects.css";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import { PROJECTS, SITE } from "../../data/site";
import { breadcrumbSchema } from "../../seo/schema";

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Pixlverse Portfolio",
  description: "Websites designed and developed by Pixlverse.",
  hasPart: PROJECTS.map((p) => ({
    "@type": "CreativeWork",
    name: p.name,
    url: p.url,
    creator: { "@id": `${SITE.url}/#organization` },
  })),
};

const Projects = () => {
  return (
    <>
      <SEO
        title="Our Work | Website Design & Development Portfolio | Pixlverse Kerala"
        description="Explore websites designed and developed by Pixlverse for clients across India and the UK — e-commerce, real estate, legal, education and non-profit projects."
        keywords="Pixlverse portfolio, website design portfolio Kerala, web development examples India, web development company Kerala"
        path="/projects"
        jsonLd={[
          portfolioSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
          ]),
        ]}
      />
      <Navbar />

      <main>
        <PageHero
          eyebrow="Our creations"
          title="Work we're proud to share"
          subtitle="A showcase of the websites we've designed and built for clients across industries and continents."
        >
          {/* <div className="ph-stats">
            <div className="ph-stat"><b>{PROJECTS.length}+</b><span>Websites delivered</span></div>
            <div className="ph-stat"><b>3+</b><span>Countries served</span></div>
            <div className="ph-stat"><b>7</b><span>Industries</span></div>
          </div> */}
        </PageHero>

        <section className="section section--flush-top">
          <div className="container projects-grid">
            {PROJECTS.map((p, i) => (
              <Reveal
                key={p.name}
                className="project-card card"
                delay={(i % 2) * 0.08}
              >
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-media"
                >
                  <img
                    src={p.image}
                    alt={`${p.name} website built by Pixlverse`}
                    loading="lazy"
                  />
                  <span className="project-cat">{p.category}</span>
                  <span className="project-overlay">
                    <FaExternalLinkAlt />
                  </span>
                </a>
                <div className="project-body">
                  <h2>
                    <a href={p.url} target="_blank" rel="noopener noreferrer">
                      {p.name}
                    </a>
                  </h2>
                  <p>{p.blurb}</p>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Visit live site <FaArrowRight />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section section--dark">
          <div className="container">
            <Reveal className="projects-cta" direction="up">
              <h2>Ready to transform your online presence?</h2>
              <p>
                From idea to execution, we'll create a powerful digital presence
                that puts your brand at the forefront.
              </p>
              <Link to="/contact" className="btn btn--primary">
                Start your project <FaArrowRight />
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Projects;
