import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaMobileAlt, FaChartLine } from 'react-icons/fa';
import './Services.css';

const servicesData = [
  {
    icon: <FaLaptopCode />,
    title: 'Websites & SPAs',
    description: 'Custom, high-performance websites and single-page applications built with React.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Mobile Apps',
    description: 'Cross-platform mobile applications with beautiful UI and seamless UX.',
  },
  {
    icon: <FaChartLine />,
    title: 'Trading Sites',
    description: 'Complex financial dashboards and trading platforms with real-time data integration.',
  }
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Our <span className="text-gradient">Services</span></h2>
          <p className="section-subtitle">Solutions we can provide for your success</p>
        </motion.div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <motion.div 
              className="service-card glass"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
