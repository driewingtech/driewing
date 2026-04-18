import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheckCircle,
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Saravanan",
    role: "Owner, Priyam Digital Studio",
    company: "Photography Studio Platform",
    content:
      "Working with this team completely elevated our digital presence. From branding to website design, every detail was crafted with creativity and precision. The modern UI, smooth animations, and performance-focused development truly set our studio apart.",
  },
  {
    name: "Michael Chen",
    role: "Founder, Elevate Fitness",
    company: "Growth-focused Product Website",
    content:
      "The team moved fast, communicated clearly, and delivered a polished product that felt far more premium than our previous site. The new experience gave us stronger positioning and a much better first impression with customers.",
  },
  {
    name: "Emma Rossi",
    role: "Marketing Director, Lumiere",
    company: "Brand and Conversion Refresh",
    content:
      "They took scattered ideas and turned them into a cohesive digital experience. The design quality, responsiveness, and calm delivery process made the entire project feel organized from start to finish.",
  },
  {
    name: "Liam O'Brien",
    role: "Founder, Nexus Labs",
    company: "Product Launch Build",
    content:
      "What stood out most was the balance between visual polish and technical clarity. The site felt custom, fast, and launch-ready, and the collaboration never felt heavy or overcomplicated.",
  },
];

const trustPoints = [
  "Clear communication from kickoff to launch, so clients always know what is happening and what comes next.",
  "Fast iterations with premium execution, helping ideas move forward without losing quality or trust.",
  "Design and development aligned in one flow, creating a smoother process and a stronger final product.",
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  const goToSlide = (index) => setActiveIndex(index);
  const goPrev = () =>
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
  const goNext = () =>
    setActiveIndex((current) => (current + 1) % testimonials.length);

  return (
    <section id="testimonials" className="testimonials-carousel-section">
      <div className="testimonials-bg-glow"></div>

      <div className="container">
        <div className="portfolio-header">
          <div>
            <motion.h2
              className="card-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Client Confidence<span className="period">.</span>
            </motion.h2>
            <motion.p
              className="portfolio-subtitle testimonial-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Strong client feedback does more than decorate a portfolio. It
              shows prospects that the work feels organized, premium, and worth
              trusting.
            </motion.p>
          </div>
        </div>

        <div className="testimonial-shell">
          <div className="testimonial-carousel-card">
            <div className="testimonial-carousel-top">
              <span className="testimonial-badge">Client Testimonials</span>
              <div className="testimonial-controls">
                <button
                  type="button"
                  className="testimonial-nav-btn"
                  onClick={goPrev}
                  aria-label="Previous testimonial"
                >
                  <FaArrowLeft />
                </button>
                <button
                  type="button"
                  className="testimonial-nav-btn"
                  onClick={goNext}
                  aria-label="Next testimonial"
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>

            <div className="testimonial-viewport">
              <motion.div
                className="testimonial-track"
                animate={{ x: `-${activeIndex * 100}%` }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {testimonials.map((item) => (
                  <article
                    key={`${item.name}-${item.company}`}
                    className="testimonial-slide"
                  >
                    <div className="testimonial-quote-mark">
                      <FaQuoteLeft />
                    </div>
                    <div className="testimonial-stars">
                      {[...Array(5)].map((_, index) => (
                        <FaStar key={index} className="star-icon" />
                      ))}
                    </div>
                    <p className="testimonial-copy">"{item.content}"</p>
                    <div className="testimonial-meta">
                      <div className="testimonial-author">
                        <h3>{item.name}</h3>
                        <span>{item.role}</span>
                      </div>
                      <div className="testimonial-company">{item.company}</div>
                    </div>
                  </article>
                ))}
              </motion.div>
            </div>

            <div className="testimonial-pagination">
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  className={`testimonial-dot${index === activeIndex ? " active" : ""}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="testimonial-side-panel">
            <span className="panel-kicker">Why clients choose us</span>
            <h3>We make delivery feel clear, fast, and reassuring from day one.</h3>
            <div className="trust-points-list">
              {trustPoints.map((point) => (
                <div key={point} className="trust-point-item">
                  <FaCheckCircle />
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <div className="testimonial-side-footer">
              <strong>More than a beautiful final result</strong>
              <span>
                Clients remember the calm process, fast communication, and the
                confidence that their project is in good hands.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
