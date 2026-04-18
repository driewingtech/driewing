import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './FAQ.css';

const faqData = [
  {
    question: "What is your typical process?",
    answer: "We start with a discovery call to understand your goals. Then we move into design mockups, followed by development, rigorous testing, and finally launch. We keep you updated at every step."
  },
  {
    question: "How long does a project take?",
    answer: "A standard landing page takes 1-2 weeks. More complex web applications, booking systems, or trading platforms can take 4-8 weeks depending on the features required."
  },
  {
    question: "Do you offer ongoing support and hosting?",
    answer: "Yes! We offer monthly retainers for hosting, routine maintenance, and feature updates to ensure your website remains fast, secure, and up-to-date."
  },
  {
    question: "What technologies do you use?",
    answer: "We specialize in modern, high-performance tech stacks. For the frontend we use React and Next.js. For the backend, we use Node.js or Spring Boot, paired with MongoDB, Supabase, or PostgreSQL."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-wrapper">
      <div className="container">
        <div className="card-container faq-container">
          <div className="portfolio-header">
            <h2 className="card-title">FAQ<span className="period">.</span></h2>
            <p className="portfolio-subtitle">Common questions about working together.</p>
          </div>

          <div className="faq-list">
            {faqData.map((item, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question">
                  <h3>{item.question}</h3>
                  <span className="faq-icon">
                    {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </div>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div 
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
