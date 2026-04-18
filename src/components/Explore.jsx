import React from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaInfoCircle,
  FaLayerGroup,
  FaRocket,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";
import "./Explore.css";
import priyamImg from "../assets/priyam.png";

const valueProps = [
  {
    icon: <FaCheckCircle />,
    title: "Clear product thinking",
    description:
      "We shape structure, flow, and messaging before the build starts so the output feels intentional.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Premium visual execution",
    description:
      "We design interfaces that feel polished, trustworthy, and aligned with the client’s positioning.",
  },
  {
    icon: <FaRocket />,
    title: "Launch-ready delivery",
    description:
      "Every engagement moves toward a usable, responsive, and client-ready release instead of endless iteration.",
  },
];

const portfolioData = [
  {
    title: "Priyam Digital Studio",
    eyebrow: "Featured case study",
    desc: "A refined digital storefront for a photography studio that needed stronger presentation, smoother browsing, and a site that could evolve without constant developer overhead.",
    imgUrl: priyamImg,
    tags: ["Next.js", "Google Drive API", "UI/UX Design", "React"],
    projectUrl: "https://priyam-digital-stilllifestudio.netlify.app/",
    outcome:
      "Elegant portfolio browsing with streamlined gallery updates and a stronger premium brand feel.",
    impact: [
      { value: "Responsive", label: "portfolio experience" },
      { value: "Automated", label: "gallery workflow" },
      { value: "Premium", label: "brand presentation" },
    ],
    highlights: [
      "Responsive gallery experience built for visual storytelling",
      "Automated image management workflow for easier client updates",
      "Performance-focused front-end delivery with a cleaner premium feel",
    ],
  },
];

const Explore = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    if (portfolioData.length <= 1) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % portfolioData.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  if (portfolioData.length === 0) {
    return (
      <section id="portfolio" className="marquee-section">
        <div className="container">
          <div className="portfolio-header">
            <div>
              <h2 className="card-title">
                Selected Work<span className="period">.</span>
              </h2>
              <p className="portfolio-subtitle">
                A look at how we turn visual quality and engineering discipline
                into business-ready digital experiences.
              </p>
            </div>
          </div>
          <div className="no-projects-wrapper">
            <p>
              Exciting new projects are currently under construction. Check back
              soon!
            </p>
          </div>
        </div>
      </section>
    );
  }

  const goPrev = () =>
    setActiveIndex((current) =>
      current === 0 ? portfolioData.length - 1 : current - 1,
    );
  const goNext = () =>
    setActiveIndex((current) => (current + 1) % portfolioData.length);

  return (
    <section id="portfolio" className="marquee-section">
      <div className="container">
        <div className="portfolio-header">
          <div>
            <h2 className="card-title">
              Explore Our Works<span className="period">.</span>
            </h2>
            <p className="portfolio-subtitle">
              A stronger way to present what we do: strategy, execution, and
              outcomes in one focused case-study carousel.
            </p>
          </div>
        </div>

        <div className="value-props-grid">
          {valueProps.map((item) => (
            <div key={item.title} className="value-prop-card">
              <div className="value-prop-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="explore-carousel-shell">
          <div className="explore-carousel-header">
            <span className="explore-carousel-badge">Owl-style showcase</span>
            {portfolioData.length > 1 && (
              <div className="explore-carousel-controls">
                <button
                  type="button"
                  className="explore-nav-btn"
                  onClick={goPrev}
                  aria-label="Previous project"
                >
                  <FaArrowLeft />
                </button>
                <button
                  type="button"
                  className="explore-nav-btn"
                  onClick={goNext}
                  aria-label="Next project"
                >
                  <FaArrowRight />
                </button>
              </div>
            )}
          </div>

          <div className="explore-carousel-viewport">
            <motion.div
              className="explore-carousel-track"
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              {portfolioData.map((project) => (
                <article
                  key={`${project.title}-${project.projectUrl}`}
                  className="featured-case-study explore-carousel-slide"
                >
                  <div className="featured-case-media">
                    <img
                      src={project.imgUrl}
                      className="featured-case-image"
                      alt={project.title}
                      draggable="false"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="featured-case-badge">
                      <span>{project.eyebrow}</span>
                      <strong>{project.title}</strong>
                    </div>
                  </div>

                  <div className="featured-case-content">
                    <div className="marquee-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="marquee-tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3>{project.title}</h3>
                    <p className="featured-case-description">{project.desc}</p>

                    <div className="project-outcome featured-outcome">
                      {project.outcome}
                    </div>

                    <div className="case-impact-grid">
                      {project.impact.map((item) => (
                        <div key={item.label} className="case-impact-card">
                          <strong>{item.value}</strong>
                          <span>{item.label}</span>
                        </div>
                      ))}
                    </div>

                    <div className="case-highlight-list">
                      {project.highlights.map((item) => (
                        <div key={item} className="case-highlight-item">
                          <FaCheckCircle />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="featured-case-footer">
                      <Magnetic strength={0.1}>
                        <a
                          href={project.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="marquee-btn"
                        >
                          Explore Project <FaExternalLinkAlt size={10} />
                        </a>
                      </Magnetic>

                      <div className="featured-case-note">
                        <span>Strategy, design, and front-end delivery</span>
                        <FaArrowRight size={12} />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>
          </div>

          {portfolioData.length > 1 && (
            <div className="explore-carousel-dots">
              {portfolioData.map((project, index) => (
                <button
                  key={project.title}
                  type="button"
                  className={`explore-carousel-dot${index === activeIndex ? " active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Explore;
