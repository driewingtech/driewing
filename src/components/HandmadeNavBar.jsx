import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const HandmadeNavBar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar expand="lg" className="fixed-top" style={{
      borderBottom: '2px solid var(--ink-color)',
      padding: '1rem 0',
      backgroundColor: 'var(--paper-color)',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    }}>
      <Container>
        <Navbar.Brand
          onClick={() => scrollToSection('home')}
          style={{ fontSize: '2rem', fontWeight: 'bold', cursor: 'pointer' }}
        >
          My Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ border: '2px solid var(--ink-color)' }} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>Home</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('about')} style={{ cursor: 'pointer' }}>About</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('projects')} style={{ cursor: 'pointer' }}>Projects</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('contact')} style={{ cursor: 'pointer' }}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HandmadeNavBar;
