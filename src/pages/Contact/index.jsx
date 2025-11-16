// Contact.jsx
import React, { useState } from "react";
import "./contact.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

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
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("success");
        e.target.reset();
        setTimeout(() => setFormStatus(""), 3000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus(""), 3000);
      }
    } catch (error) {
      console.error("Error:", error);
      setFormStatus("error");
      setTimeout(() => setFormStatus(""), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <section className="contact-section reveal">
        <div className="contact-container">
          {/* Left - Contact Form */}
          <div className="contact-form-box">
            <h4 className="contact-subtitle">Get in Touch</h4>
            <h2 className="contact-title">Let’s Chat, Reach Out to Us</h2>
            <p className="contact-text">
              Have questions or feedback? We’re here to help. Send us a message,
              and we’ll respond within 24 hours.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input 
                  type="text" 
                  name="firstName"
                  placeholder="First Name" 
                  required
                />
                <input 
                  type="text" 
                  name="lastName"
                  placeholder="Last Name" 
                  required
                />
              </div>
              <input 
                type="email" 
                name="email"
                placeholder="Email Address" 
                required
              />
              <input 
                type="tel" 
                name="phone"
                placeholder="Contact Number" 
                required
              />
              <textarea 
                name="message"
                placeholder="Leave us a message"
                required
              ></textarea>

              {formStatus === "success" && (
                <p className="form-success">✓ Message sent successfully! We'll get back to you soon.</p>
              )}
              {formStatus === "error" && (
                <p className="form-error">✗ Oops! Something went wrong. Please try again.</p>
              )}

              <button 
                type="submit" 
                className="contactt-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div className="contact-info-box">
            <div className="contact-image">
              <img src="/images/sl1.jpg" alt="Contact Person" />
            </div>

            <div className="contact-info">
              <div className="info-item">
                <span className="info-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:explore.pixlverse@gmail.com">
                      {" "}
                      explore.pixlverse@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
