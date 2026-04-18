import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiMongodb,
  SiSpringboot,
  SiMysql,
  SiFirebase,
  SiSupabase,
} from "react-icons/si";
import logoBrand from "../assets/brand_logo.png";
import heroImg from "../assets/hero-agency.png";
import WordReveal from "./WordReveal";
import Magnetic from "./Magnetic";
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
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePos({ x: clientX, y: clientY });
  };

  return (
    <section id="hero" className="hero-section" onMouseMove={handleMouseMove}>
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
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="floating-shape shape-3"
        animate={{ y: [0, -15, 0], x: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div
        className="hero-interactive-blob"
        style={{
          transform: `translate(${mousePos.x - 250}px, ${mousePos.y - 250}px)`,
        }}
      ></div>
      <div className="container hero-container">
        <div className="hero-text-side">
          <Magnetic strength={0.2}>
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <img src={logoBrand} alt="Driewing" className="badge-logo" />
              <span className="badge-text" style={{ fontWeight: "600" }}>
                Driewing
              </span>
            </motion.div>
          </Magnetic>

          <div className="hero-title-container">
            <h1 className="hero-title">
              Expert <span className="highlight">Web Development</span> Agency for Scalable Digital Solutions
            </h1>
          </div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We craft high-performance web experiences that drive results.
            Specialized in React, Node.js, and strategic digital growth, we
            transform your vision into a competitive advantage.
          </motion.p>

          <motion.div
            className="service-tags"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <span className="service-tag">Web Apps</span>
            <span className="service-tag">Cloud Architecture</span>
            <span className="service-tag">UI/UX Design</span>
            <span className="service-tag">SEO Strategy</span>
          </motion.div>

          <motion.div
            className="hero-btns"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={200}
            >
              <Magnetic strength={0.3}>
                <button className="btn-primary">Book a Call</button>
              </Magnetic>
            </Link>
          </motion.div>
        </div>

        <div className="hero-image-side">
          <motion.div
            className="hero-image-wrapper"
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          >
            <div className="image-glow"></div>
            <img src={heroImg} alt="Agency Innovation" className="hero-main-img" />

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
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <SiNodedotjs color="#339933" />
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
    </section>
  );
};

export default Hero;
