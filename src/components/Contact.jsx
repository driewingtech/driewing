import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Magnetic from "./Magnetic";
import {
  FaArrowRight,
  FaEnvelopeOpenText,
  FaGlobe,
  FaRegClock,
} from "react-icons/fa";
import {
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaFacebook,
} from "react-icons/fa6";
import "./Contact.css";

// ─────────────────────────────────────────────
//  EMAILJS CREDENTIALS — fill these in once
//  1. Go to https://emailjs.com and log in
//  2. Email Services → copy your Service ID
//  3. Email Templates → copy your Template ID
//  4. Account → API Keys → copy your Public Key
// ─────────────────────────────────────────────
const EMAILJS_SERVICE_ID = "service_6mpnj3r"; // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "template_bc7mo7p"; // e.g. "template_xyz789"
const EMAILJS_PUBLIC_KEY = "7xZrt6fHRZWZZ7hDO"; // e.g. "A1B2C3D4E5F6G7H8"

// ─────────────────────────────────────────────
//  EMAILJS TEMPLATE VARIABLES (use these in
//  your template on emailjs.com dashboard)
//
//  {{user_name}}     → sender's name
//  {{user_email}}    → sender's email
//  {{service_type}}  → selected service
//  {{message}}       → project details
//  {{reply_to}}      → auto reply-to email
// ─────────────────────────────────────────────

const contactHighlights = [
  {
    icon: <FaRegClock />,
    label: "Reply rhythm",
    value: "Within 24 hours",
    // note: "Fast first response with a clear next step.",
  },
  {
    icon: <FaGlobe />,
    label: "Working style",
    value: "Remote",
    // note: "Flexible across time zones and project stages.",
  },
  {
    icon: <FaEnvelopeOpenText />,
    label: "Best first message",
    value: "Goal, scope, timeline",
    // note: "A few specifics help us guide the conversation faster.",
  },
];

const footerSocialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/driewing-technologies",
    icon: <FaLinkedinIn />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/driewingtech",
    icon: <FaInstagram />,
  },
  {
    label: "FaceBook",
    href: "https://www.facebook.com/share/1AmABpQcPs/",
    icon: <FaFacebook />,
  },
  {
    label: "Email",
    href: "mailto:driewingtech@gmail.com",
    icon: <FaEnvelope />,
  },
];

const Contact = () => {
  const formRef = useRef();
  const [userEmail, setUserEmail] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(false);
    setIsSent(false);

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setIsSent(true);
          setError(false);
          setIsLoading(false);
          setUserEmail("");
          formRef.current.reset();
          setTimeout(() => setIsSent(false), 5000);
        },
        (err) => {
          console.error("EmailJS error:", err);
          setError(true);
          setIsLoading(false);
        },
      );
  };

  return (
    <section id="contact" className="agency-contact-section">
      <div className="container">
        <div className="contact-dashboard">
          <div className="dashboard-grid">
            {/* Left Side: The Pitch */}
            <div className="contact-pitch">
              <div className="availability-wrapper">
                <span className="pulse-dot"></span>
                <span className="availability-text">
                  Actively accepting new projects
                </span>
              </div>

              <span className="contact-kicker">Start the conversation</span>

              <h2 className="dashboard-title">
                Let's Build Together. <br />
                <span className="gradient-text">Got an idea?</span>
              </h2>

              <p className="dashboard-desc">
                Share the product idea, current pain point, or growth goal. We
                will reply with the clearest next step, whether you need a new
                site, a mobile app, or a complete product partner.
              </p>

              <div className="contact-details-row">
                <div className="contact-detail-item">
                  <span className="detail-label">Office</span>
                  <span className="detail-value">Remote</span>
                </div>
                <div className="contact-detail-item">
                  <span className="detail-label">Inquiries</span>
                  <span className="detail-value">driewingtech@gmail.com</span>
                </div>
              </div>

              <div className="contact-highlights-grid">
                {contactHighlights.map((item, index) => (
                  <div key={item.label} className="contact-highlight-card">
                    <div className="contact-highlight-top">
                      <div className="contact-highlight-icon">{item.icon}</div>
                    </div>
                    <div className="contact-highlight-copy">
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                      {/* <p>{item.note}</p> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: The Form */}
            <div className="contact-form-card">
              <div className="contact-form-intro">
                <span className="contact-form-badge">Project inquiry</span>
                <h3>Tell us what you are building and where you feel stuck.</h3>
                <p>
                  A strong first message is enough. We can help shape the scope,
                  priorities, and next move from there.
                </p>
              </div>

              <form ref={formRef} onSubmit={sendEmail} className="minimal-form">
                <div className="form-row">
                  <div className="input-group">
                    <input
                      type="text"
                      name="user_name"
                      required
                      placeholder=" "
                      id="name"
                    />
                    <label htmlFor="name">Your Name</label>
                  </div>
                  <div className="input-group">
                    <input
                      type="email"
                      name="user_email"
                      required
                      placeholder=" "
                      id="email"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                    />
                    <label htmlFor="email">Email Address</label>
                  </div>
                </div>

                <div className="input-group">
                  <select
                    name="service_type"
                    required
                    id="service"
                    className="minimal-select"
                    defaultValue=""
                  >
                    <option value="" disabled hidden></option>
                    <option value="Web Platform / SaaS">
                      Web Platform / SaaS
                    </option>
                    <option value="Mobile App (iOS & Android)">
                      Mobile App (iOS & Android)
                    </option>
                    <option value="Blockchain & Web3">Blockchain & Web3</option>
                    <option value="Growth & SEO">Growth & SEO</option>
                    <option value="Not sure yet — let's talk">
                      Not sure yet — let's talk
                    </option>
                  </select>
                  <label htmlFor="service">Service you need</label>
                </div>

                <div className="input-group">
                  <textarea
                    name="message"
                    rows="5"
                    required
                    placeholder=" "
                    id="message"
                  ></textarea>
                  <label htmlFor="message">Project Details</label>
                </div>

                {/* Hidden field — enables reply-to in EmailJS template */}
                <input type="hidden" name="reply_to" value={userEmail} />

                <Magnetic strength={0.2}>
                  <button
                    type="submit"
                    className="dashboard-send-btn"
                    disabled={isLoading}
                  >
                    <span>
                      {isLoading ? "Sending..." : "Launch Project Inquiry"}
                    </span>
                    {!isLoading && <FaArrowRight />}
                  </button>
                </Magnetic>

                {isSent && (
                  <div className="form-success">
                    Inquiry sent! We'll get back to you within 24 hours.
                  </div>
                )}
                {error && (
                  <div className="form-error">
                    Something went wrong. Please email us directly at
                    driewingtech@gmail.com
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer className="agency-footer">
        <div className="container footer-bottom">
          <div className="footer-left">
            <span className="footer-brand">Driewing Technologies</span>
            <span className="footer-copy">
              &copy; {new Date().getFullYear()} Modern Digital Excellence.
            </span>
          </div>
          <div className="footer-right">
            <div className="footer-socials" aria-label="Social links">
              {footerSocialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="footer-social-link"
                  aria-label={item.label}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noreferrer noopener"
                      : undefined
                  }
                >
                  {item.icon}
                </a>
              ))}
            </div>
            <a href="#services">Capabilities</a>
            <a href="#portfolio">Work</a>
            <a href="#about">Story</a>
            <a href="#testimonials">Reviews</a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
