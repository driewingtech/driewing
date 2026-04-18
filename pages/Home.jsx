import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaDev, FaMedium } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import dinaprof from '../assets/dinaprof.png';


const Home = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col md={6}>
          <h1 className="display-3">We are a Full-Service Freelance Team</h1>
          <p className="lead">
            Full Stack Developer specializing in MERN & Web3 Technologies.
          </p>
          <p>
            I build scalable web applications and integrate blockchain solutions. Welcome to my digital workspace.
          </p>
          <div className="mt-4">
            <Button onClick={() => scrollToSection('projects')} variant="light" className="btn-handmade me-3">
              See My Work
            </Button>
            <Button onClick={() => scrollToSection('contact')} variant="light" className="btn-handmade">
              Say Hello
            </Button>
          </div>
        </Col>
        <Col md={6} className="text-center d-none d-md-block">
          {/* Placeholder for a profile image or doodle */}
          <div style={{
            width: '300px',
            height: '300px',
            borderRadius: '50% 40% 60% 50% / 50% 60% 40% 50%',
            backgroundColor: 'var(--highlight-color)',
            border: '2px solid var(--ink-color)',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img
              src={dinaprof}
              alt="Dinesh Babu"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: 'inherit',
                // filter: 'grayscale(100%) contrast(1.1) sepia(0.2)',
                // mixBlendMode: 'multiply'
              }}
            />
          </div>
        </Col>
      </Row>


      <Row className="mt-5 justify-content-center">
        <Col md={10}>
          <div className="d-flex justify-content-center flex-wrap gap-4">
            {[
              { name: "LinkedIn", icon: <FaLinkedin size={30} />, link: "#" },
              { name: "GitHub", icon: <FaGithub size={30} />, link: "#" },
              // { name: "Dev.to", icon: <FaDev size={30} />, link: "#" },
              // { name: "Medium", icon: <FaMedium size={30} />, link: "#" },
              { name: "Leetcode", icon: <SiLeetcode size={30} />, link: "#" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none text-dark"
                style={{
                  width: '120px',
                  height: '100px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: 'var(--border-style)',
                  borderRadius: '10px 5px 10px 5px',
                  background: 'white',
                  transition: 'transform 0.2s',
                  boxShadow: '3px 3px 0px rgba(0,0,0,0.1)'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px) rotate(-2deg)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0) rotate(0)'}
              >
                <div className="mb-2">{social.icon}</div>
                <div style={{ fontFamily: 'var(--font-hand)', fontWeight: 'bold' }}>{social.name}</div>
              </a>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
