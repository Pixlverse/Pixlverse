import React, { useState } from "react";
import "./contact.css";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";
import TiltCard from "../../components/TiltCard";
import Loader from "../../components/Loader";
import SEO from "../../components/SEO";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaCheck,
} from "react-icons/fa";
import { SITE, ENQUIRY_TYPES, NEXT_STEPS } from "../../data/site";
import { organizationSchema, breadcrumbSchema } from "../../seo/schema";

const Contact = () => {
  const [formStatus, setFormStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus("");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mblqpgkg", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setFormStatus("success");
        e.target.reset();
        setTimeout(() => setFormStatus(""), 4000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus(""), 4000);
      }
    } catch (error) {
      console.error("Error:", error);
      setFormStatus("error");
      setTimeout(() => setFormStatus(""), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Get a Free Website Quote | Contact Pixlverse, Kerala"
        description="Tell us about your project and get a free, no-obligation website quote from Pixlverse within 24 hours. Kerala-based, serving India and beyond."
        keywords="get a website quote Kerala, free website quote, hire web developer Kerala, contact Pixlverse"
        path="/contact"
        jsonLd={[
          organizationSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />

      <main>
        <PageHero
          title="Get a Free Website Quote: Let's Talk About Your Project"
          subtitle="Have an idea, a question or an outdated website that needs fixing? Send us a message and we'll reply within 24 hours on business days."
        >
          <div className="page-hero-meta">
            <span className="ph-chip">
              <FaCheck /> 24-hour response
            </span>
            <span className="ph-chip">
              <FaCheck /> Free, no-obligation quote
            </span>
            <span className="ph-chip">
              <FaCheck /> Kerala · India · UK · Qatar · Dubai
            </span>
          </div>
        </PageHero>

        <section className="section section--flush-top contact-section">
          <div className="container contact-grid">
            <Reveal className="contact-form-box card" direction="right">
              <h2>Tell Us About Your Project</h2>
              <p className="contact-form-lead">
                Share a few details and we'll take it from there.
              </p>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <label className="field">
                    <span>First name</span>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Jane"
                      required
                    />
                  </label>
                  <label className="field">
                    <span>Last name</span>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Doe"
                      required
                    />
                  </label>
                </div>
                <label className="field">
                  <span>Email address</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                  />
                </label>
                <label className="field">
                  <span>Contact number</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 00000 00000"
                    required
                  />
                </label>
                <label className="field field--select">
                  <span>What do you need?</span>
                  <select name="enquiryType" defaultValue="" required>
                    <option value="" disabled>
                      Choose an option
                    </option>
                    {ENQUIRY_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="field">
                  <span>Tell us about your project</span>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="What does your business do, and what would you like your website to achieve?"
                    required
                  ></textarea>
                </label>

                {formStatus === "success" && (
                  <p className="form-feedback form-success">
                    ✓ Message sent successfully! We'll get back to you soon.
                  </p>
                )}
                {formStatus === "error" && (
                  <p className="form-feedback form-error">
                    ✗ Oops! Something went wrong. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  className="btn btn--primary contact-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    /* the same mark as the page curtain, at button scale */
                    <Loader inline size={30} label="Sending…" />
                  ) : (
                    <>
                      Send my request <FaPaperPlane />
                    </>
                  )}
                </button>
              </form>
            </Reveal>

            <Reveal className="contact-aside" direction="left" delay={0.1}>
              <div className="contact-card card">
                <span className="contact-icon">
                  <FaEnvelope />
                </span>
                <h3>Email us</h3>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </div>
              <div className="contact-card card">
                <span className="contact-icon">
                  <FaMapMarkerAlt />
                </span>
                <h3>Where we are</h3>
                <p>
                  Based in Kerala, India, serving clients across India, the UK,
                  Qatar, Dubai and internationally.
                </p>
              </div>
              <div className="contact-card card">
                <span className="contact-icon">
                  <FaClock />
                </span>
                <h3>Response time</h3>
                <p>We typically reply within 24 hours on business days.</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ WHAT HAPPENS NEXT ============ */}
        <section className="section section--dark">
          <div className="container">
            <Reveal className="section-head">
              <h2>What Happens After You Send Your Message</h2>
            </Reveal>

            <ol className="next-steps">
              {NEXT_STEPS.map((s, i) => (
                <TiltCard
                  key={s.step}
                  as="li"
                  className="next-step card"
                  delay={i * 0.08}
                >
                  <span className="next-step-num">{s.step}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </TiltCard>
              ))}
            </ol>
          </div>
        </section>
      </main>

    </>
  );
};

export default Contact;
