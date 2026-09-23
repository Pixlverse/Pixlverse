import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";
import ServiceIcon from "../../components/ServiceIcon";
import ServiceArt from "../../components/ServiceArt";
import CtaRadar from "../../components/CtaRadar";
import SEO from "../../components/SEO";
import "./servicedetail.css";
import { SERVICES, PROCESS, SITE } from "../../data/site";
import { serviceSchema, breadcrumbSchema } from "../../seo/schema";

/**
 * ServiceDetail — one page per service at /services/<slug>.
 *
 * Six services previously shared a single URL, which meant one title, one
 * description and one canonical competing for six different searches. Split
 * out, each can target its own.
 */
export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);

  /* An unknown slug is a 404 in spirit; sending it to the index keeps a bad
     link from becoming a dead end. */
  if (!service) return <Navigate to="/services" replace />;

  const others = SERVICES.filter((s) => s.slug !== slug);

  return (
    <>
      <SEO
        title={`${service.seoTitle} | ${SITE.name}`}
        description={service.seoDescription}
        path={`/services/${service.slug}`}
        jsonLd={[
          serviceSchema(service),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${service.slug}` },
          ]),
        ]}
      />

      <main>
        <PageHero title={service.heading} subtitle={service.blurb} />

        <section className="section section--flush-top">
          <div className="container sd-grid">
            <Reveal className="sd-art" direction="right">
              <ServiceArt name={service.slug} />
            </Reveal>

            <Reveal className="sd-body" direction="left" delay={0.08}>
              <span className="sd-kicker">
                <ServiceIcon name={service.icon} />
                {service.title}
              </span>
              <h2>What&rsquo;s included</h2>
              <ul className="sd-points">
                {service.points.map((p) => (
                  <li key={p}>
                    <FaCheck aria-hidden="true" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <p className="sd-best">
                <strong>Best for:</strong> {service.bestFor}
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section section--soft">
          <div className="container">
            <Reveal className="section-head">
              <h2>How we deliver it</h2>
              <p>
                The same four steps on every project, so you always know what
                is happening and what comes next.
              </p>
            </Reveal>
            <ol className="sd-steps">
              {PROCESS.map((p, i) => (
                <Reveal as="li" key={p.step} className="sd-step" delay={i * 0.07}>
                  <span className="sd-step-num" aria-hidden="true">
                    {p.step}
                  </span>
                  <h3>{p.title}</h3>
                  <p>{p.descShort}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Reveal className="section-head">
              <h2>Other things we do</h2>
            </Reveal>
            <ul className="sd-others">
              {others.map((s, i) => (
                <Reveal as="li" key={s.slug} delay={(i % 3) * 0.06}>
                  <Link to={`/services/${s.slug}`} className="sd-other">
                    <span className="sd-other-icon">
                      <ServiceIcon name={s.icon} />
                    </span>
                    <span className="sd-other-body">
                      <strong>{s.title}</strong>
                      <span>{s.card}</span>
                    </span>
                    <FaArrowRight aria-hidden="true" />
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Reveal className="cta-box" direction="up">
              <CtaRadar />
              <h2>Ready to get started?</h2>
              <p>
                Tell us what you need. We&rsquo;ll reply within 24 hours with
                honest advice and a transparent quote.
              </p>
              <div className="btn-row">
                <Link to="/contact" className="btn btn--primary">
                  Get your free quote <FaArrowRight />
                </Link>
                <Link to="/projects" className="btn btn--light">
                  See our work
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
