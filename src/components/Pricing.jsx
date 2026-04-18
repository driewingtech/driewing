import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import Magnetic from './Magnetic';
import './Pricing.css';

const pricingData = [
  {
    title: 'Growth',
    desc: 'The perfect package to launch your brand with a high-performance landing page.',
    type: 'STARTING AT',
    price: '₹24,999',
    features: ['Custom design', 'Conversion optimized', 'Lead capture form', 'Mobile responsive'],
    isPopular: false,
    btnText: 'Get Started'
  },
  {
    title: 'Professional',
    desc: 'A full-scale digital presence with multiple pages and advanced SEO strategy.',
    type: 'STARTING AT',
    price: '₹59,999',
    features: ['Multi-page structure', 'Strategic SEO core', 'Performance optimized', 'Domain & Hosting setup'],
    isPopular: true,
    btnText: 'Partner With Us'
  },
  {
    title: 'Custom Solution',
    desc: 'Scalable web applications, e-commerce, and complex technical architectures.',
    type: 'ENTERPRISE',
    price: 'Variable',
    features: ['Fullstack development', 'Third-party integrations', 'Database architecture', 'Ongoing partnership'],
    isPopular: false,
    btnText: 'Let\'s Consult'
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-wrapper">
      <div className="container">
        <div className="card-container">
          <div className="portfolio-header">
            <h2 className="card-title">Pricing<span className="period">.</span></h2>
            <p className="portfolio-subtitle">Transparent costs. High quality approach.</p>
          </div>

          <div className="pricing-grid">
            {pricingData.map((tier, index) => (
              <motion.div 
                className={`pricing-card ${tier.isPopular ? 'popular' : ''}`}
                key={index}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                {tier.isPopular && <div className="popular-badge">MOST POPULAR</div>}
                <h3 className="pricing-title">{tier.title}</h3>
                <div className="pricing-price">{tier.price} {tier.price !== 'Variable' && <span>/ fix</span>}</div>
                <p className="pricing-desc">{tier.desc}</p>
                <ul className="pricing-features">
                  {tier.features.map((feature, i) => (
                    <li key={i}>
                      <FaCheck className="check-icon" /> {feature}
                    </li>
                  ))}
                </ul>
                <Magnetic strength={0.2}>
                  <button className={tier.isPopular ? 'btn-accent-blue' : 'btn-accent'}>
                    {tier.btnText}
                  </button>
                </Magnetic>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
