import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./about.css";

const About = () => {
  return (
    <div>
      <Navbar />
      <section className="bubble-bg">
        <section className="about-section reveal" style={{ marginTop: "60px" }}>
          <div className="about-content">
            <div className="text">
              <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
                Building With{" "}
                <span className="" style={{ color: "#bc3aab" }}>
                  Purpose
                </span>
              </h2>
              <p style={{ lineHeight: "1.6" }}>
                At{" "}
                <span
                  className=""
                  style={{ color: "#bc3aab", fontWeight: "600" }}
                >
                  Pixlverse
                </span>
                , we specialize in crafting elegant, high-performing websites
                that do more than just look good — they work hard for your
                business. Every project is built with a balance of clean,
                maintainable code and thoughtful, user-centric design, ensuring
                a smooth, fast, and memorable experience for your visitors.
              </p>
              <p style={{ lineHeight: "1.6" }}>
                <span
                  className=""
                  style={{ color: "#bc3aab", fontWeight: "600" }}
                >
                  Since 2023
                </span>
                , we’ve been partnering with clients from around the globe,
                transforming ideas into digital realities that drive results.
                Whether you need a brand-new website or want to elevate your
                existing one, our commitment goes beyond launch — we provide
                continuous support to keep your online presence{" "}
                <span
                  className=""
                  style={{ color: "#bc3aab", fontWeight: "600" }}
                >
                  secure, relevant,
                </span>{" "}
                and{" "}
                <span
                  className=""
                  style={{ color: "#bc3aab", fontWeight: "600" }}
                >
                  {" "}
                  ahead of the curve .
                </span>
              </p>
            </div>
            <div className="image">
              <img src="/images/sl3.jpg" alt="Web development illustration" />
            </div>
          </div>
        </section>

        {/* Why Pixlverse */}
  <section className="about-section reverse reveal">
          <div className="about-content">
            <div className="text">
              <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
                Why{" "}
                <span className="" style={{ color: "#bc3aab" }}>
                  Pixlverse?
                </span>
              </h2>
              <p style={{ lineHeight: "1.6" }}>
                We believe your website isn’t just a collection of pages — it’s
                your digital brochure, the first impression that can take your
                brand to the next level. Our goal is to ensure that every
                website we deliver reflects your unique vision while effectively
                communicating your value to the world.
              </p>
              <p className="slogan">
                <span
                  className=""
                  style={{ color: "#bc3aab", fontWeight: "600" }}
                >
                  Your Idea.{" "}
                </span>
                We turn it into a{" "}
                <span
                  className=""
                  style={{ color: "#bc3aab", fontWeight: "600" }}
                >
                  digital brochure.
                </span>
              </p>
            </div>
            <div className="image">
              <img src="/images/sl5.jpg" alt="Creative design illustration" />
            </div>
          </div>
        </section>
      </section>

      {/* Achievements */}
  <section className="achievements reveal">
        <h2 style={{ fontSize: "2.1rem", marginBottom: "20px" }}>
          What We’ve{" "}
          <span className="" style={{ color: "#bc3aab" }}>
            Achieved
          </span>
        </h2>
        <div className="achievements-grid">
          <div className="achievement-card">
            <img
              src="images/project-management.png"
              style={{ width: "80px", height: "80px" }}
              alt="Projects Icon"
            />
            <p>
              Successfully delivered{" "}
              <strong style={{ color: "#bc3aab" }}>10+ projects</strong> with
              measurable impact
            </p>
          </div>
          <div className="achievement-card">
            <img
              src="images/online-analytical.png"
              style={{ width: "80px", height: "80px" }}
              alt="Industries Icon"
            />
            <p>
              <strong style={{ color: "#bc3aab" }}>Trusted </strong> by
              businesses in tech, finance, healthcare, education, consulting,
              logistics, and more
            </p>
          </div>
          <div className="achievement-card">
            <img
              src="images/map.png"
              style={{ width: "80px", height: "80px" }}
              alt="Countries Icon"
            />
            <p>
              Serving clients internationally across{" "}
              <strong style={{ color: "#bc3aab" }}>3+ countries</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Not Sure Where to Start */}
      <section className="cta-section">
        <div className="cta-box">
          <div className="cta-text">
            <h2>
              Not Sure <span style={{ color: "#bc3aab" }}>Where to Start?</span>
            </h2>
            <p>
              We know planning a website can feel overwhelming — but that’s
              where we come in. Our process is designed to help you:
            </p>
            <ul>
              <li>✔ Identify your business goals and target audience</li>
              <li>✔ Create a strategy that aligns with your vision</li>
              <li>✔ Build a website that grows with your business</li>
            </ul>
            <p>
              Let’s turn your ideas into a powerful online presence. We’ll guide
              you every step of the way.
            </p>
            <a href="/contact" className="cta-contact-btn">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
