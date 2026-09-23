import React from "react";
import { Link } from "react-router-dom";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";
import CtaRadar from "../../components/CtaRadar";
import SectorMarquee from "../../components/SectorMarquee";
import StatCircles from "../../components/StatCircles";
import ServiceIcon from "../../components/ServiceIcon";
import TiltCard from "../../components/TiltCard";
import SEO from "../../components/SEO";
import "./about.css";
import { FaArrowRight } from "react-icons/fa";
import { STATS, VALUES, SECTORS } from "../../data/site";
import { organizationSchema, breadcrumbSchema } from "../../seo/schema";

const About = () => {
  return (
    <>
      <SEO
        title="About Pixlverse | Web Design Studio in Kerala, India"
        description="Meet Pixlverse, a Kerala web design studio building fast, SEO-ready websites for clients in India, the UK, Qatar and Dubai since 2023."
        keywords="web design studio Kerala, website design company India, web design for UK and Gulf businesses, about Pixlverse"
        path="/about"
        jsonLd={[
          organizationSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />

      <main>
        <PageHero
          title="About Pixlverse: A Web Design Studio Built on Craft and Care"
          subtitle="We build websites that work as hard as you do. They look sharp, load fast and bring in customers."
        />

        {/* Story */}
        <section className="section section--flush-top">
          <div className="container about-split">
            <Reveal className="about-media" direction="right">
              <img
                src="/images/sl3.jpg"
                alt="The Pixlverse team designing a website in Kerala"
              />
            </Reveal>
            <Reveal className="about-text" direction="left" delay={0.1}>
              <h2>A Studio Built on Craft and Care</h2>
              <p>
                Pixlverse began in <strong>2023</strong> with a simple belief: a
                website should be both well-designed and well-built. Too many
                agencies do one and neglect the other. So every project we take
                on balances clean, maintainable code with thoughtful, user-first
                design, giving your visitors a smooth, fast and memorable
                experience.
              </p>
              <p>
                Since then, we've worked with clients across India, the UK,
                Qatar and Dubai, turning ideas into websites that drive real
                results. Whether you need a brand-new site or want to improve an
                existing one, our work doesn't end at launch. We keep your
                website secure, current and ahead of the curve.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Philosophy */}
        <section className="section section--dark">
          <div className="container about-split about-split--reverse">
            <Reveal className="about-media" direction="left">
              <img
                src="/images/sl5.jpg"
                alt="Pixlverse web design and development work"
              />
            </Reveal>
            <Reveal className="about-text" direction="right" delay={0.1}>
              <h2>Your Website Is Your Digital Brochure</h2>
              <p>
                For most customers, your website is the first impression. It's
                your digital brochure, working 24/7 to show what you do and why
                you're the right choice. Our job is to make sure it reflects
                your vision and communicates your value clearly to the people
                you want to reach.
              </p>
              <p className="about-quote">
                "Your idea. We turn it into a digital brochure."
              </p>
            </Reveal>
          </div>
        </section>

        {/* Impact */}
        <section className="section">
          <div className="container">
            <Reveal className="section-head">
              <h2>Trusted by Businesses Near and Far</h2>
              <p>
                Our clients span technology, finance, healthcare, education,
                consulting, logistics, real estate, legal, restaurants, travel
                and e-commerce, across four countries.
              </p>
            </Reveal>

            <StatCircles items={STATS} />

            <SectorMarquee items={SECTORS} />
          </div>
        </section>

        {/* Values */}
        <section className="section section--soft">
          <div className="container">
            <Reveal className="section-head">
              <h2>The Values Behind Every Build</h2>
            </Reveal>
            <div className="about-values">
              {VALUES.map((v, i) => (
                <TiltCard
                  key={v.title}
                  /* no `card` class — that carries the white fill the dark
                     bands override it to, and these are glass */
                  className="value-card"
                  delay={i * 0.08}
                  style={{ "--accent": v.color }}
                >
                  <div className="value-head">
                    <span className="value-icon">
                      <ServiceIcon name={v.icon} />
                    </span>
                    <h3>{v.title}</h3>
                  </div>
                  <p>{v.text}</p>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="container">
            <Reveal className="cta-box" direction="up">
              <CtaRadar />
              <h2>Not Sure Where to Start? We'll Help.</h2>
              <p>
                Planning a website can feel overwhelming. Tell us about your
                business and we'll help you set clear goals, shape a strategy
                and build a site that grows with you.
              </p>
              <Link to="/contact" className="btn btn--primary">
                Talk to our team <FaArrowRight />
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
