import React from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaHandshake,
  FaRegClock,
  FaRocket,
} from "react-icons/fa";
import "./About.css";
import aboutImg from "../assets/agency_about_bg_1775404043431.png";

const operatingPrinciples = [
  "Small team, direct communication, and no bloated handoffs between departments.",
  "Every build is designed for mobile, performance, clarity, and business trust.",
  "We care about how your brand feels to users, not just whether the code works.",
];

const trustReasons = [
  {
    icon: <FaHandshake />,
    title: "Direct collaboration",
    description:
      "Clients work closely with the people actually shaping the product.",
  },
  {
    icon: <FaRegClock />,
    title: "Fast response rhythm",
    description:
      "Questions, feedback, and iterations move quickly instead of stalling momentum.",
  },
  {
    icon: <FaRocket />,
    title: "Launch-focused execution",
    description:
      "Everything is built to reach a polished release, not endless internal revisions.",
  },
];

const deliverySteps = [
  {
    title: "Strategy first",
    description:
      "We refine scope, priorities, user flow, and positioning before expensive build decisions happen.",
  },
  {
    title: "Design with intent",
    description:
      "We create interfaces that feel premium and guide users toward inquiry, sign-up, or purchase.",
  },
  {
    title: "Ship with confidence",
    description:
      "We support launch, polish the details, and make sure the product feels ready for real users.",
  },
];

const quickTrust = [
  "Premium presentation",
  "Fast communication",
  "Launch-ready builds",
];

const About = () => {
  return (
    <section id="about" className="section-wrapper about-section">
      <div className="container">
        <div className="card-container about-shell">
          <div className="portfolio-header about-header">
            <div>
              <span className="about-section-badge">About Driewing</span>
              <h2 className="card-title">
                Built To Make Clients Feel Confident
                <span className="period">.</span>
              </h2>
              <p className="portfolio-subtitle about-subtitle">
                We are a lean product partner for founders and businesses that
                want premium execution, fast communication, and a final result
                that looks as strong as it performs.
              </p>
            </div>
          </div>

          <div className="about-cinematic-grid">
            <motion.div
              className="about-visual-panel"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="about-image-wrapper">
                <img
                  src={aboutImg}
                  alt="Driewing Agency"
                  className="about-main-img"
                  loading="lazy"
                  decoding="async"
                />
                <div className="about-img-overlay">
                  <div className="about-badge">Premium digital delivery</div>
                  <h3 className="about-img-title">
                    Design, development, and launch support
                  </h3>
                </div>
              </div>

              <div className="about-visual-summary">
                <span className="about-visual-kicker">
                  Why clients stay confident
                </span>
                <h3>
                  Everything is built to look strong, feel clear, and launch
                  well.
                </h3>
                <div className="about-visual-points">
                  {quickTrust.map((item) => (
                    <span key={item} className="about-visual-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="manifesto-footer">
                <div className="manifesto-tags">
                  {[
                    "WEB PLATFORMS",
                    "MOBILE APPS",
                    "UI/UX SYSTEMS",
                    "LAUNCH SUPPORT",
                  ].map((tag) => (
                    <span key={tag} className="manifesto-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="about-content-panel"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="manifesto-heading">
                Small team. Senior attention. Stronger first impressions.
              </h3>

              <p className="manifesto-p manifesto-lead">
                We work best with founders and operators who want a responsive
                partner, not layers of account management. You get thoughtful
                execution, fast communication, and a product that feels custom
                from the first screen to the final deployment.
              </p>

              <p className="manifesto-p">
                Our process combines product thinking, visual polish, and
                engineering discipline so your site or app does more than exist.
                It helps you win trust quickly and present your business at a
                higher level.
              </p>

              <div className="about-stats-row">
                <div className="stat-item">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Projects Delivered</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">Founder-led</span>
                  <span className="stat-label">Direct Collaboration</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">24h</span>
                  <span className="stat-label">Reply Window</span>
                </div>
              </div>

              <div className="about-trust-grid">
                {trustReasons.map((item) => (
                  <div key={item.title} className="about-trust-card">
                    <div className="about-trust-icon">{item.icon}</div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
