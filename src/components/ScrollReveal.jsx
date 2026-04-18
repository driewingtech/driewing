import React from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({ children, animation = 'fade', duration = 1.2, delay = 0, once = false, offset = 0.1 }) => {
  const variants = {
    fade: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
    },
    zoomIn: {
      initial: { opacity: 0, scale: 0.7, z: -200 },
      animate: { opacity: 1, scale: 1, z: 0 },
    },
    zoomOut: {
      initial: { opacity: 0, scale: 1.3, z: 200 },
      animate: { opacity: 1, scale: 1, z: 0 },
    },
    depth: {
      initial: { opacity: 0, scale: 0.5, rotateX: 45, z: -500 },
      animate: { opacity: 1, scale: 1, rotateX: 0, z: 0 },
    },
    slideshow: {
      initial: { opacity: 0, scale: 0.8, x: '20%' },
      animate: { opacity: 1, scale: 1, x: 0 },
    },
    flip: {
      initial: { opacity: 0, rotateY: 90 },
      animate: { opacity: 1, rotateY: 0 },
    },
    slideUp: {
      initial: { opacity: 0, y: 100 },
      animate: { opacity: 1, y: 0 },
    },
  };

  const selectedVariant = variants[animation] || variants.fade;

  return (
    <div style={{ perspective: '2000px', width: '100%' }}>
      <motion.div
        initial={selectedVariant.initial}
        whileInView={selectedVariant.animate}
        viewport={{ once: once, amount: offset }}
        transition={{ 
          duration: duration, 
          delay: delay, 
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: duration * 0.8 },
          scale: { duration: duration },
          z: { duration: duration },
        }}
        style={{ transformStyle: 'preserve-3d', width: '100%' }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollReveal;
