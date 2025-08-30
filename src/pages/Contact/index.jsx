// Contact.jsx
import React from "react";
import "./contact.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Contact = () => {
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

            <form className="contact-form">
              <div className="form-row">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
              <input type="email" placeholder="Email Address" />
              <textarea placeholder="Leave us a message"></textarea>

              <button type="submit" className="contactt-btn">
                Send Message
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
