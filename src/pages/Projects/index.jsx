import React from "react";
import { Link } from "react-router-dom";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";
import CtaRadar from "../../components/CtaRadar";
import SEO from "../../components/SEO";
import ProjectIndex from "../../components/ProjectIndex";
import "./projects.css";
import { FaArrowRight, FaInfoCircle } from "react-icons/fa";
import { PROJECTS, PARTNER, SITE } from "../../data/site";
import { breadcrumbSchema } from "../../seo/schema";

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Pixlverse Portfolio",
  description:
    "Websites designed and developed by Pixlverse for clients in India, the UK, Qatar and Dubai.",
  hasPart: PROJECTS.map((p) => ({
    "@type": "CreativeWork",
    name: p.name,
    ...(p.url ? { url: p.url } : {}),
    creator: { "@id": `${SITE.url}/#organization` },
  })),
};

const Projects = () => {
  return (
    <>
      <SEO
        title="Web Design Portfolio | Clients in India, UK, Qatar & Dubai"
        description="Browse 25+ websites by Pixlverse for clients in India, the UK, Qatar and Dubai: law, real estate, e-commerce, restaurants, education and more."
        keywords="web design portfolio Kerala, website examples, client websites, restaurant website design, web development company Kerala"
        path="/projects"
        jsonLd={[
          portfolioSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
          ]),
        ]}
      />

      <main>
        <PageHero
          title="Our Work: Websites We've Designed and Built"
          subtitle="25+ projects across four countries and many industries. Every project below is live."
        />

        <section className="section section--flush-top">
          <div className="container">
            {/* Sites go down for reasons that have nothing to do with the
                build — an expired domain, a lapsed host. Saying so up front is
                better than a visitor hitting a dead link and drawing their own
                conclusion about the work. */}
            <Reveal className="proj-notice" direction="up">
              <span className="proj-notice-icon" aria-hidden="true">
                <FaInfoCircle />
              </span>
              <p>
                Every site below is one we designed and built. If a link
                doesn't open, the client's domain or hosting may have lapsed or
                be mid-renewal — once a project is handed over, that sits with
                them rather than with us.
              </p>
            </Reveal>

            <ProjectIndex projects={PROJECTS} />

            {/* the standalone "Built Together" section said this at section
                length and repeated two projects already listed above */}
            <Reveal className="proj-partner" direction="up" delay={0.1}>
              <div className="proj-partner-lockup">
                <span className="proj-partner-eyebrow">Creative partner</span>
                <p className="proj-partner-names">
                  <span>{SITE.name}</span>
                  <span className="proj-partner-x" aria-hidden="true">
                    &times;
                  </span>
                  <span className="proj-partner-other">{PARTNER.name}</span>
                </p>
              </div>

              <div className="proj-partner-copy">
                <p>{PARTNER.note}</p>
                <p className="proj-partner-legend">
                  Projects marked
                  <span className="proj-tag proj-tag--partner">
                    Built with {PARTNER.name}
                  </span>
                  above were delivered together.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===================== CTA ===================== */}
        <section className="section">
          <div className="container">
            <Reveal className="cta-box" direction="up">
              <CtaRadar />
              <h2>Want a Website Like These for Your Business?</h2>
              <p>
                From first idea to launch, we'll build a website that puts your
                brand in front of the right customers.
              </p>
              <Link to="/contact" className="btn btn--primary">
                Start your project <FaArrowRight />
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

    </>
  );
};

export default Projects;
