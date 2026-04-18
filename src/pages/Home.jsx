import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
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
          <h1 className="display-3 fw-bold">Driewing Technologies</h1>
          <p className="lead mb-4" style={{ fontSize: '1.4rem' }}>
            Turning ideas into scalable digital products.
          </p>
          <p className="mb-4" style={{ fontSize: '1.1rem', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 'bold', color: 'gray' }}>
            Web • Mobile • Blockchain • SEO
          </p>
          <div className="mt-4">
            <Button onClick={() => scrollToSection('projects')} variant="light" className="btn-handmade me-3">
              See Our Work
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
            <h2 style={{ fontFamily: 'var(--font-hand)', margin: 0, opacity: 0.8 }}>Driewing<br/>Studio</h2>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
