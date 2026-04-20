import React from "react";
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
import DeferredCalendlyModal from "./DeferredCalendlyModal";
import "./Hero.css";

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
  const enablePointerEffects = React.useRef(false);

  React.useEffect(() => {
    enablePointerEffects.current =
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const handleMouseMove = (e) => {
    if (!enablePointerEffects.current || !heroRef.current || !blobRef.current) {
      return;
    }

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
      <div className="floating-shape shape-1" />
      <div className="floating-shape shape-2" />
      <div className="floating-shape shape-3" />

      <div ref={blobRef} className="hero-interactive-blob"></div>
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

          <p className="hero-description">
            We help startups, studios, and growing businesses turn rough ideas
            into polished web platforms and mobile apps that look premium,
            perform fast, and move people to act.
          </p>

          <div className="service-tags">
            <span className="service-tag">SaaS Platforms</span>
            <span className="service-tag">Mobile Apps</span>
            <span className="service-tag">Conversion-focused Websites</span>
            <span className="service-tag">UI/UX Systems</span>
            <span className="service-tag">Launch Support</span>
          </div>

          <div className="hero-btns">
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
          </div>

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
          <div className="hero-image-wrapper">
            <div className="image-glow"></div>
            <img
              src={heroImg}
              alt="Agency Innovation"
              className="hero-main-img"
              fetchPriority="high"
              decoding="async"
              width="600"
              height="600"
              loading="eager"
            />

            {/* Decorative Elements */}
            <div className="tech-badge react">
              <SiReact color="#61DAFB" />
            </div>
            <div className="tech-badge node">
              <SiNodedotjs color="#339933" />
            </div>
            <div className="floating-insight insight-top">
              <span>Client-ready UX</span>
              <strong>Web + Mobile</strong>
            </div>
            <div className="floating-insight insight-bottom">
              <div className="platform-icons">
                <SiApple />
                <SiAndroid />
              </div>
              <span>Built to scale from first release</span>
            </div>
          </div>
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

      <DeferredCalendlyModal
        url="https://calendly.com/driewingtech"
        onClose={() => setIsCalendlyOpen(false)}
        isOpen={isCalendlyOpen}
      />
    </section>
  );
};

export default Hero;
