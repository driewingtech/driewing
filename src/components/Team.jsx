import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaLinkedinIn, FaXTwitter, FaGithub } from 'react-icons/fa6';
import './Team.css';

const teamData = [
  {
    name: 'Alex D.',
    role: 'Lead Full-Stack Engineer',
    imgUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    tags: ['Architecture', 'Scaling'],
    socials: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Sarah M.',
    role: 'Senior Full-Stack Engineer',
    imgUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
    tags: ['Cloud', 'DevOps'],
    socials: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'James K.',
    role: 'Full-Stack Engineer',
    imgUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    tags: ['Back-end', 'API Design'],
    socials: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Elena R.',
    role: 'Lead Mobile Engineer',
    imgUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    tags: ['React Native', 'Flutter'],
    socials: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Jason T.',
    role: 'Lead Frontend Engineer',
    imgUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
    tags: ['Motion', 'UX/UI Design'],
    socials: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Mia S.',
    role: 'Lead UI/UX Designer',
    imgUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    tags: ['Brand', 'Strategy'],
    socials: { linkedin: '#', twitter: '#', github: '#' }
  }
];

const TeamCard = ({ member, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="elite-card-wrapper"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="elite-card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <div className="elite-img-box" style={{ transform: "translateZ(75px)" }}>
          <img src={member.imgUrl} alt={member.name} className="elite-img" />
          <div className="elite-img-filter"></div>
          
          <div className="elite-socials">
            <motion.a href={member.socials.linkedin} className="social-link" whileHover={{ scale: 1.2, y: -5 }}><FaLinkedinIn /></motion.a>
            <motion.a href={member.socials.twitter} className="social-link" whileHover={{ scale: 1.2, y: -5 }}><FaXTwitter /></motion.a>
            <motion.a href={member.socials.github} className="social-link" whileHover={{ scale: 1.2, y: -5 }}><FaGithub /></motion.a>
          </div>

          <div className="elite-hover-content">
            <div className="elite-tags">
              {member.tags.map((tag, i) => (
                <span key={i} className="elite-tag-pill">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="elite-info-box" style={{ transform: "translateZ(50px)" }}>
          <h3 className="elite-name">{member.name}</h3>
          <p className="elite-role">{member.role}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Team = () => {
  return (
    <section id="team" className="team-section">
      <div className="team-bg-glows">
        <div className="glow-1"></div>
        <div className="glow-2"></div>
      </div>
      
      <div className="container">
        <div className="portfolio-header center-text">
          <motion.h2 
            className="card-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Elite Collective<span className="period">.</span>
          </motion.h2>
          <motion.p 
            className="portfolio-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            6 engineering specialists. Hundreds of high-performance products.
          </motion.p>
        </div>

        <div className="team-grid-layout">
          {teamData.map((member, index) => (
            <TeamCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
