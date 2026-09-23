import React from "react";
import { Link } from "react-router-dom";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";
import ProcessSteps from "../../components/ProcessSteps";
import ServiceShowcase from "../../components/ServiceShowcase";
import CtaRadar from "../../components/CtaRadar";
import SEO from "../../components/SEO";
import "./services.css";
import { FaArrowRight } from "react-icons/fa";
import { SERVICES, PROCESS } from "../../data/site";
import { servicesSchema, breadcrumbSchema } from "../../seo/schema";

const Services = () => {
  return (
    <>
      <SEO
        title="Web Design, Development & SEO Services in Kerala | Pixlverse"
        description="Website design, web development, SEO, redesigns, hosting and ongoing support from a Kerala studio. Fast, secure sites built to bring in customers."
        path="/services"
        jsonLd={[
          servicesSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />

      <main>
        <PageHero
          title="Web Design, Development & SEO Services in Kerala"
          subtitle="Six services, one accountable team. From your first idea to long-term growth, we build websites that get found, load fast and turn visitors into customers."
        />

        {/* Services list */}
        <section className="section section--flush-top">
          <div className="container">
            <ServiceShowcase services={SERVICES} />
          </div>
        </section>

        {/* Process */}
        <section className="section section--dark">
          <div className="container">
            <Reveal className="section-head">
              <h2>From First Idea to Successful Launch</h2>
              <p>
                A clear, collaborative process that keeps you in the loop at
                every step.
              </p>
            </Reveal>
            <ProcessSteps steps={PROCESS} />
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="container">
            <Reveal className="cta-box" direction="up">
              <CtaRadar />
              <h2>Ready to Start Your Project?</h2>
              <p>
                Tell us what you have in mind. We'll send a transparent quote
                within 24 hours.
              </p>
              <Link to="/contact" className="btn btn--primary">
                Get a free quote <FaArrowRight />
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

    </>
  );
};

export default Services;
