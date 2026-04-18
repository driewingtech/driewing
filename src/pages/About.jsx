import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaReact, FaNodeJs, FaJava, FaPython, FaPhp } from 'react-icons/fa';
import { SiMongodb, SiSolana, SiRust, SiWeb3Dotjs, SiExpress, SiSpringboot, SiFlutter, SiNextdotjs } from 'react-icons/si';

const About = () => {
  return (
    <Container className="py-5">
      <h2 className="mb-4">About Our Team</h2>
      <Row>
        <Col md={8}>
          <div className="card-handmade mb-4">
            <h3>Our Expertise</h3>
            <div className="mb-3">
              <p className="text-muted">Over 3-4 years building scalable web and mobile apps</p>
              <ul>
                <li><strong>Web & Mobile Development:</strong> End-to-end full stack web applications and cross-platform mobile apps.</li>
                <li><strong>Blockchain & Trading:</strong> Fully on-chain platforms, smart contracts, NFT applications, and Web3 integration.</li>
                <li><strong>E-commerce & SaaS:</strong> Architecting high-performance portals and Software-as-a-Service platforms.</li>
                <li><strong>SEO & Content:</strong> Optimizing digital presence to drive organic growth.</li>
              </ul>
            </div>
          </div>

          <Row>
            <Col md={12}>
              <div className="card-handmade mb-4 h-100">
                <h3>Our Team</h3>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <strong>3 Full-Stack Developers</strong>
                    <br />
                    <span className="text-muted">MERN stack, PHP, Solidity, Rust, Web3, Java, Python.</span>
                  </li>
                  <li className="mb-3">
                    <strong>1 Frontend / UI Developer</strong>
                    <br />
                    <span className="text-muted">React.js, Next.js, and React-Vite.</span>
                  </li>
                  <li className="mb-3">
                    <strong>1 Mobile App Developer</strong>
                    <br />
                    <span className="text-muted">React Native and Flutter.</span>
                  </li>
                  <li>
                    <strong>1 UI/UX Designer</strong>
                    <br />
                    <span className="text-muted">Crafting seamless, intuitive, and modern experiences.</span>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <div className="card-handmade mb-4">
            <h3>Skills & Tech</h3>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              {[
                { name: "React", icon: <FaReact size={24} color="#61DAFB" /> },
                { name: "Next.js", icon: <SiNextdotjs size={24} color="#000000" /> },
                { name: "Node.js", icon: <FaNodeJs size={24} color="#339933" /> },
                { name: "Flutter", icon: <SiFlutter size={24} color="#02569B" /> },
                { name: "Java", icon: <FaJava size={24} color="#007396" /> },
                { name: "Python", icon: <FaPython size={24} color="#3776AB" /> },
                { name: "PHP", icon: <FaPhp size={24} color="#777BB4" /> },
                { name: "MongoDB", icon: <SiMongodb size={24} color="#47A248" /> },
                { name: "Web3.js", icon: <SiWeb3Dotjs size={24} color="#F16822" /> },
                { name: "Solana", icon: <SiSolana size={24} color="#9945FF" /> },
                { name: "Rust", icon: <SiRust size={24} color="#000000" /> },
              ].map((skill, index) => (
                <div
                  key={index}
                  className="d-flex flex-column align-items-center justify-content-center"
                  style={{
                    width: '80px',
                    height: '80px',
                    border: 'var(--border-style)',
                    borderRadius: '50% 40% 60% 50% / 50% 60% 40% 50%',
                    background: 'white',
                    boxShadow: '2px 2px 0px rgba(0,0,0,0.1)',
                    transition: 'transform 0.2s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1) rotate(0deg)'}
                  title={skill.name}
                >
                  {skill.icon}
                  <small style={{ fontSize: '0.7rem', marginTop: '2px' }}>{skill.name}</small>
                </div>
              ))}
            </div>
          </div>
          <div className="card-handmade" style={{ transform: 'rotate(2deg)' }}>
            <h4>Fun Fact</h4>
            <p>We bridge the gap between imagination and scalable products across any domain!</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
