import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaExternalLinkAlt, FaCheckCircle, FaSearch, FaFilter } from "react-icons/fa";
import { SiReact, SiVercel, SiNodedotjs, SiMongodb, SiNextdotjs, SiEthereum, SiSolana, SiRust, SiExpress } from "react-icons/si";
import { projects } from "../data/projects";
import "./Blog.css";
import Navbar from "../components/Navbar";

const Blog = ({ onBack, onContactClick }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(projects.map(p => p.category))];
  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedId]);

  const selectedProject = projects.find(p => p.id === selectedId);

  const renderIcon = (tag) => {
    switch (tag.toLowerCase()) {
      case 'react.js': case 'react': return <SiReact />;
      case 'vercel': return <SiVercel />;
      case 'node.js': return <SiNodedotjs />;
      case 'mongodb': return <SiMongodb />;
      case 'next.js': return <SiNextdotjs />;
      case 'ethereum': return <SiEthereum />;
      case 'solana': return <SiSolana />;
      case 'rust': return <SiRust />;
      case 'express': return <SiExpress />;
      default: return null;
    }
  };

  if (selectedProject) {
    return (
      <div className="blog-page">
        <div className="container">
          <button onClick={() => setSelectedId(null)} className="btn-ghost" style={{ marginBottom: '32px', gap: '8px' }}>
            <FaArrowLeft /> Back to List
          </button>

          <div className="blog-container">
            <div className="blog-meta-grid">
              <div className="meta-item">
                <label>Client</label>
                <span>{selectedProject.client}</span>
              </div>
              <div className="meta-item">
                <label>Category</label>
                <span>{selectedProject.category}</span>
              </div>
              <div className="meta-item">
                <label>Timeline</label>
                <span>{selectedProject.timeline}</span>
              </div>
            </div>

            <section className="blog-content-section">
              <span className="section-label">Overview</span>
              <p className="blog-overview-text">
                {selectedProject.overview}
              </p>
            </section>

            <section className="blog-content-section">
              <span className="section-label">What We Built</span>
              <div className="feature-grid">
                {selectedProject.highlights.map((h, i) => (
                  <div key={i} className="feature-card">
                    <h4>{h.split(' ')[0]}</h4>
                    <p>{h}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="blog-content-section">
              <span className="section-label">Tech Stack</span>
              <div className="tech-pill-container">
                {selectedProject.tags.map(tag => (
                  <span key={tag} className="tech-pill">
                    {renderIcon(tag)} {tag}
                  </span>
                ))}
              </div>
            </section>

            <section className="blog-content-section">
              <span className="section-label">Our Approach</span>
              <p className="blog-overview-text">
                {selectedProject.approach}
              </p>
            </section>

            <section className="blog-footer-cta">
              <h2>Ready to see it in action?</h2>
              {(
                <button className="btn-primary" onClick={onContactClick}>Contact Us for Demo</button>
              )}
              <p style={{ marginTop: '24px', color: 'var(--text-secondary)' }}>
                Building high-performance digital products for modern brands.
              </p>
            </section>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-page">
      <div className="container">
        <header className="blog-list-header">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="heading-xl"
          >
            Project Index<span style={{ color: 'var(--accent-primary)' }}>.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted"
          >
            A documented history of digital architecture, product engineering, and visual systems.
          </motion.p>
        </header>

        <div className="category-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-pill ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="project-list-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="project-item-card"
                onClick={() => setSelectedId(project.id)}
              >
                <div className="project-item-img-wrapper">
                  <img src={project.imgUrl} alt={project.title} loading="lazy" decoding="async" className="project-item-img" />
                  <div className="project-item-overlay">
                    <span className="project-item-category">{project.category}</span>
                    <h3 className="project-item-title">{project.title}</h3>
                  </div>
                </div>
                <div className="project-item-content">
                  <p className="project-item-desc">{project.description}</p>
                  <div className="project-item-tags">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="project-mini-tag">{tag}</span>
                    ))}
                    {project.tags.length > 3 && <span className="project-mini-tag">+{project.tags.length - 3}</span>}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Blog;
