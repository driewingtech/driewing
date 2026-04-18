import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  SiAndroid,
  SiApple,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiMongodb,
  SiSpringboot,
  SiMysql,
  SiPhp,
  SiLaravel,
  SiFirebase,
  SiSupabase,
} from "react-icons/si";
import heroImg from "../assets/hero-agency.png";
import Magnetic from "./Magnetic";
import { PopupModal } from "react-calendly";
import "./Hero.css";

const heroStats = [
  { value: "10+", label: "projects shipped" },
  { value: "Web + Mobile", label: "product execution" },
  { value: "24h", label: "average response time" },
];

const engagementPoints = [
  "Discovery and product strategy",
  "UI/UX design that supports conversion",
  "Fast engineering and launch support",
];

const TechLogos = () => (
  <>
    <div className="slide">
      <SiReact size={30} color="#61DAFB" />
      <span>React</span>
    </div>
    <div className="slide">
      <SiNodedotjs size={30} color="#339933" />
      <span>Node.js</span>
    </div>
    <div className="slide">
      <SiNextdotjs size={30} color="#fff" />
      <span>Next.js</span>
    </div>
    <div className="slide">
      <SiMongodb size={30} color="#47A248" />
      <span>MongoDB</span>
    </div>
    <div className="slide">
      <SiSpringboot size={30} color="#6DB33F" />
      <span>Spring Boot</span>
    </div>
    <div className="slide">
      <SiMysql size={30} color="#4479A1" />
      <span>MySQL</span>
    </div>
    <div className="slide">
      <SiPhp size={30} color="#777BB4" />
      <span>PHP</span>
    </div>
    <div className="slide">
      <SiLaravel size={30} color="#FF2D20" />
      <span>Laravel</span>
    </div>
    <div className="slide">
      <SiFirebase size={30} color="#FFCA28" />
      <span>Firebase</span>
    </div>
    <div className="slide">
      <SiSupabase size={30} color="#3ECF8E" />
      <span>Supabase</span>
    </div>
  </>
);

const Hero = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = React.useState(false);
  const heroRef = React.useRef(null);
  const blobRef = React.useRef(null);
  const frameRef = React.useRef(null);

  const handleMouseMove = (e) => {
    if (!heroRef.current || !blobRef.current) return;

    const bounds = heroRef.current.getBoundingClientRect();
    const nextX = e.clientX - bounds.left - 250;
    const nextY = e.clientY - bounds.top - 250;

    if (frameRef.current) {
      window.cancelAnimationFrame(frameRef.current);
    }

    frameRef.current = window.requestAnimationFrame(() => {
      blobRef.current?.style.setProperty(
        "transform",
        `translate3d(${nextX}px, ${nextY}px, 0)`,
      );
    });
  };

  const handleMouseLeave = () => {
    if (frameRef.current) {
      window.cancelAnimationFrame(frameRef.current);
    }
  };

  React.useEffect(() => {
    if (isCalendlyOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [isCalendlyOpen]);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="hero-section"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="hero-noise-overlay"></div>
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>
      <div className="hero-grid-bg"></div>

      {/* Floating Elements */}
      <motion.div
        className="floating-shape shape-1"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="floating-shape shape-2"
        animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="floating-shape shape-3"
        animate={{ y: [0, -15, 0], x: [0, 20, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div
        ref={blobRef}
        className="hero-interactive-blob"
      ></div>
      <div className="container hero-container">
        <div className="hero-text-side">
          {/* <motion.span
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Web and mobile app development agency
          </motion.span> */}
          <div className="hero-title-container">
            <h1 className="hero-title">
              Design, build, and launch digital products clients remember.
              <span className="highlight"> Driewing Technologies</span>
            </h1>
          </div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We help startups, studios, and growing businesses turn rough ideas
            into polished web platforms and mobile apps that look premium,
            perform fast, and move people to act.
          </motion.p>

          <motion.div
            className="service-tags"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <span className="service-tag">SaaS Platforms</span>
            <span className="service-tag">Mobile Apps</span>
            <span className="service-tag">Conversion-focused Websites</span>
            <span className="service-tag">UI/UX Systems</span>
            <span className="service-tag">Launch Support</span>
          </motion.div>

          <motion.div
            className="hero-btns"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Magnetic strength={0.3}>
              <button
                className="btn-primary"
                onClick={() => setIsCalendlyOpen(true)}
              >
                Book a Call
              </button>
            </Magnetic>
            <Link to="portfolio" spy smooth offset={-100} duration={250}>
              <button className="btn-ghost">See Case Study</button>
            </Link>
          </motion.div>

          {/* <motion.div
            className="hero-proof-strip"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="hero-proof-copy">
              <p className="hero-proof-title">
                Founder-friendly delivery from strategy to launch
              </p>
              <div className="hero-proof-list">
                {engagementPoints.map((point) => (
                  <span key={point} className="hero-proof-item">
                    {point}
                  </span>
                ))}
              </div>
            </div>
            <div className="hero-stats-grid">
              {heroStats.map((stat) => (
                <div key={stat.label} className="hero-stat-card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div> */}
        </div>

        <div className="hero-image-side">
          <motion.div
            className="hero-image-wrapper"
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          >
            <div className="image-glow"></div>
            <img
              src={heroImg}
              alt="Agency Innovation"
              className="hero-main-img"
              fetchPriority="high"
              decoding="async"
            />

            {/* Decorative Elements */}
            <motion.div
              className="tech-badge react"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <SiReact color="#61DAFB" />
            </motion.div>
            <motion.div
              className="tech-badge node"
              animate={{ y: [0, 15, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <SiNodedotjs color="#339933" />
            </motion.div>
            <motion.div
              className="floating-insight insight-top"
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
            >
              <span>Client-ready UX</span>
              <strong>Web + Mobile</strong>
            </motion.div>
            <motion.div
              className="floating-insight insight-bottom"
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.7 }}
            >
              <div className="platform-icons">
                <SiApple />
                <SiAndroid />
              </div>
              <span>Built to scale from first release</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="hero-slider-container">
        <div className="hero-slide-track">
          <div className="slide-group">
            <TechLogos />
          </div>
          <div className="slide-group">
            <TechLogos />
          </div>
        </div>
      </div>

      <PopupModal
        url="https://calendly.com/driewingtech"
        onModalClose={() => setIsCalendlyOpen(false)}
        open={isCalendlyOpen}
        rootElement={document.getElementById("root")}
      />
    </section>
  );
};

export default Hero;
