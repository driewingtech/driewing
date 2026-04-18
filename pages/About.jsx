import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaReact, FaNodeJs, FaJava } from 'react-icons/fa';
import { SiMongodb, SiSolana, SiRust, SiWeb3Dotjs, SiExpress, SiSpringboot } from 'react-icons/si';

const About = () => {
  return (
    <Container className="py-5">
      <h2 className="mb-4">About Me</h2>
      <Row>
        <Col md={8}>
          <div className="card-handmade mb-4">
            <h3>Experience</h3>
            <div className="mb-3">
              <h4>Software Developer</h4>
              <p className="text-muted">January 2023 - present | Tamil Nadu, India</p>
              <ul>
                <li>Designed and developed RESTful APIs using JavaScript and Java/Spring Boot.</li>
                <li>Built backend services for blockchain and NFT-related applications.</li>
                {/* <li>Integrated MongoDB for scalable data storage and optimized queries.</li> */}
                <li>Worked on Fully on-chain E-commerce platform.</li>
                <li>Solana - Rust Programming for Solan on-chain projects.</li>
                <li>Worked on the full MERN stack, ensuring robust authentication and dashboards.</li>
                <li>Collaborated with teams to deliver production-ready features and improve application stability.</li>
                <li>Work with NFC and RFID based applications for real world Products.</li>
              </ul>
            </div>
          </div>

          <Row>
            <Col md={6}>
              <div className="card-handmade mb-4 h-100">
                <h3>Education</h3>
                <p><strong>Bachelor's degree, Computer Science</strong><br />The Madura College, Madurai (June 2019 - April 2022)</p>
              </div>
            </Col>
            <Col md={6}>
              <div className="card-handmade mb-4 h-100">
                <h3>Certifications</h3>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <strong>Full Stack Web Development</strong>
                    <br />
                    <span className="text-muted">Udemy - 2023</span>
                  </li>
                  <li>
                    <strong>Blockchain Fundamentals</strong>
                    <br />
                    <span className="text-muted">Coursera - 2024</span>
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
                { name: "Node.js", icon: <FaNodeJs size={24} color="#339933" /> },
                { name: "Java", icon: <FaJava size={24} color="#007396" /> },
                { name: "Spring Boot", icon: <SiSpringboot size={24} color="#007396" /> },
                { name: "MongoDB", icon: <SiMongodb size={24} color="#47A248" /> },
                { name: "Express", icon: <SiExpress size={24} color="#000000" /> },
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
            <p>I bridge the gap between Web2 and Web3!</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
