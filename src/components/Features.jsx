import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaLink, FaChartLine } from "react-icons/fa";
import "./Features.css";

const Features = () => {
  return (
    <section id="services" className="services-bento-section">
      <div className="container">
        <div className="portfolio-header">
          <div>
            <h2 className="card-title">
              Our Services<span className="period">.</span>
            </h2>
            <p className="portfolio-subtitle">
              We turn complex ideas into clean, scalable digital products across
              Web, Mobile, and Web3.
            </p>
          </div>
        </div>

        <div className="master-bento-grid">
          {/* Box 1: Web Engineering (Massive Hero Box) */}
          <motion.div
            className="bento-box box-web"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="bento-glow orb-blue top-left"></div>
            <div className="bento-content">
              <FaLaptopCode className="bento-icon mega-icon text-cyan" />
              <div>
                <span className="bento-id">01</span>
                <h3 className="bento-title big-title">Web Platforms & SaaS</h3>
                <p className="bento-desc">
                  We build fast, scalable web apps and SaaS dashboards — clean
                  in design, solid in architecture, and ready to grow with your
                  business.
                </p>

                <div className="bento-tech-list">
                  <span className="bento-tech">React</span>
                  <span className="bento-tech">Next.js</span>
                  <span className="bento-tech">Node.js</span>
                  <span className="bento-tech">PHP</span>
                  <span className="bento-tech">Java</span>
                  <span className="bento-tech">SpringBoot</span>
                  <span className="bento-tech">Laravel</span>
                  <span className="bento-tech">MongoDB</span>
                  <span className="bento-tech">Mysql</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Box 2: Mobile Applications (Top Right Small Square) */}
          <motion.div
            className="bento-box box-mobile"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bento-glow orb-purple bottom-right"></div>
            <div className="bento-content flex-column-between">
              <div className="bento-header-split">
                <span className="bento-id">02</span>
                <FaMobileAlt className="bento-icon mini-icon text-purple" />
              </div>
              <div>
                <h3 className="bento-title">Mobile Apps</h3>
                <p className="bento-desc small-desc">
                  Native iOS & Android apps built for real users — fast,
                  offline-ready, and designed to keep people coming back.
                </p>
                <div className="bento-tech-list">
                  <span className="bento-tech">React Native</span>
                  <span className="bento-tech">Flutter</span>
                  <span className="bento-tech">Firebase</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Box 3: Growth & SEO (Bottom Right Small Square) */}
          <motion.div
            className="bento-box box-seo"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bento-glow orb-cyan top-right"></div>
            <div className="bento-content flex-column-between">
              <div className="bento-header-split">
                <span className="bento-id">03</span>
                <FaChartLine className="bento-icon mini-icon text-cyan" />
              </div>
              <div>
                <h3 className="bento-title">Growth & SEO</h3>
                <p className="bento-desc small-desc">
                  We handle technical SEO so your product gets found — faster
                  indexing, cleaner architecture, and more organic traffic over
                  time.
                </p>
                <div className="bento-tech-list">
                  <span className="bento-tech">Analytics</span>
                  <span className="bento-tech">Technical SEO</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Box 4: Blockchain & Web3 (Panoramic Bottom Banner) */}
          <motion.div
            className="bento-box box-web3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bento-glow orb-purple bottom-left"></div>
            <div className="bento-glow orb-cyan right-center"></div>

            <div className="bento-content row-layout">
              <div className="bento-text-side">
                <span className="bento-id">04</span>
                <h3 className="bento-title big-title">Blockchain & Web3</h3>
                <p className="bento-desc">
                  We build audited smart contracts, DeFi platforms, and Web3
                  products across EVM and Solana ecosystems — secure,
                  gas-optimized, and production-ready.
                </p>
              </div>

              <div className="bento-visual-side">
                <FaLink className="bento-icon float-anim text-white" />
                <div className="bento-tech-list wrap-right">
                  <span className="bento-tech">Solidity</span>
                  <span className="bento-tech">Rust</span>
                  <span className="bento-tech">Web3.js</span>
                  <span className="bento-tech">Solana</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
