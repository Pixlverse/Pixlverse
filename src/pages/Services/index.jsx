import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";
import SEO from "../../components/SEO";
import ServiceIcon from "../../components/ServiceIcon";
import "./services.css";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import { SERVICES, PROCESS } from "../../data/site";
import { servicesSchema, breadcrumbSchema } from "../../seo/schema";

const Services = () => {
  return (
    <>
      <SEO
        title="Web Design, Development & SEO Services in Kerala, India | Pixlverse"
        description="Explore Pixlverse's full suite of web services — website design, web development, SEO optimization, maintenance, revamps, and domain & hosting — for businesses in Kerala and across India."
        keywords="website design services Kerala, web development services India, SEO services Kerala, website maintenance, website revamp, domain hosting Kerala, web design company Kerala"
        path="/services"
        jsonLd={[servicesSchema, breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])]}
      />
      <Navbar />

      <main>
        <PageHero
          eyebrow="Our services"
          title="Elevate your digital experience"
          subtitle="A full suite of web services designed for impact, performance and growth — from first pixel to long-term partnership."
        >
          <div className="page-hero-meta">
            {SERVICES.map((s) => (
              <span key={s.title} className="ph-chip">
                <ServiceIcon name={s.icon} /> {s.title}
              </span>
            ))}
          </div>
        </PageHero>

        {/* Services list */}
        <section className="section section--flush-top">
          <div className="container services-stack">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} className="service-row card" delay={(i % 2) * 0.06}>
                <div className="service-row-head">
                  <span className="service-row-icon">
                    <ServiceIcon name={s.icon} />
                  </span>
                  <div>
                    <h2>{s.title}</h2>
                    <p className="service-row-tagline">{s.tagline}</p>
                  </div>
                </div>
                <p className="service-row-blurb">{s.blurb}</p>
                <ul className="service-points">
                  {s.points.map((p) => (
                    <li key={p}><FaCheck /> {p}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="section section--dark">
          <div className="container">
            <Reveal className="section-head">
              <span className="eyebrow">How we work</span>
              <h2>From first idea to successful launch</h2>
              <p>A clear, collaborative process that keeps you in the loop at every step.</p>
            </Reveal>
            <div className="svc-process">
              {PROCESS.map((p, i) => (
                <Reveal key={p.step} className="svc-process-card" delay={i * 0.08}>
                  <span className="svc-step">{p.step}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="container">
            <Reveal className="cta-box" direction="up">
              <h2>Ready to start your project?</h2>
              <p>Tell us what you have in mind — we'll send a transparent quote within 24 hours.</p>
              <Link to="/contact" className="btn btn--primary">
                Get a free quote <FaArrowRight />
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Services;
