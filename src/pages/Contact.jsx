import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { FaRegClock, FaGlobe, FaEnvelopeOpenText } from 'react-icons/fa';

const Contact = () => {
  const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mbdaonzk", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <Container className="py-5" id="contact" style={{ maxWidth: '1100px' }}>
      <h2 className="mb-5 text-center heading-xl" style={{ color: 'white', letterSpacing: '-0.02em', fontWeight: 700 }}>Get in <span style={{ color: 'var(--accent-primary, #38bdf8)' }}>Touch</span></h2>
      
      <Row className="mb-5 justify-content-center" style={{ gap: '20px 0' }}>
        <Col md={4}>
          <div style={{
            background: 'rgba(15, 23, 42, 0.4)', 
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '24px',
            padding: '32px 24px',
            color: 'white',
            height: '100%',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', height: '80px', background: 'radial-gradient(ellipse at top, rgba(45, 212, 191, 0.2) 0%, transparent 70%)', zIndex: 0 }}></div>
            <div style={{
              background: 'rgba(30, 41, 59, 0.6)',
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '40px',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              boxShadow: 'inset 0 0 20px rgba(59, 130, 246, 0.1)',
              position: 'relative',
              zIndex: 1
            }}>
              <FaRegClock size={20} color="#cbd5e1" />
            </div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '1.5px', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '12px' }}>
                Reply Rhythm
              </p>
              <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#f8fafc', margin: 0, lineHeight: '1.3' }}>
                Within 24<br/>hours
              </h3>
            </div>
          </div>
        </Col>

        <Col md={4}>
          <div style={{
            background: 'rgba(15, 23, 42, 0.4)', 
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '24px',
            padding: '32px 24px',
            color: 'white',
            height: '100%',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', height: '80px', background: 'radial-gradient(ellipse at top, rgba(59, 130, 246, 0.2) 0%, transparent 70%)', zIndex: 0 }}></div>
            <div style={{
              background: 'rgba(30, 41, 59, 0.6)',
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '40px',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              boxShadow: 'inset 0 0 20px rgba(59, 130, 246, 0.1)',
              position: 'relative',
              zIndex: 1
            }}>
              <FaGlobe size={20} color="#cbd5e1" />
            </div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '1.5px', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '12px' }}>
                Working Style
              </p>
              <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#f8fafc', margin: 0, lineHeight: '1.3' }}>
                Remote
              </h3>
            </div>
          </div>
        </Col>

        <Col md={4}>
          <div style={{
            background: 'rgba(15, 23, 42, 0.4)', 
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '24px',
            padding: '32px 24px',
            color: 'white',
            height: '100%',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', height: '80px', background: 'radial-gradient(ellipse at top, rgba(139, 92, 246, 0.2) 0%, transparent 70%)', zIndex: 0 }}></div>
            <div style={{
              background: 'rgba(30, 41, 59, 0.6)',
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '40px',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              boxShadow: 'inset 0 0 20px rgba(59, 130, 246, 0.1)',
              position: 'relative',
              zIndex: 1
            }}>
              <FaEnvelopeOpenText size={20} color="#cbd5e1" />
            </div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '1.5px', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '12px' }}>
                Best First Message
              </p>
              <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#f8fafc', margin: 0, lineHeight: '1.3' }}>
                Goal,<br/>scope,<br/>timeline
              </h3>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={8}>
          <div className="card-handmade">
            {status === 'success' && (
              <Alert variant="success">Message sent successfully!</Alert>
            )}
            {status === 'error' && (
              <Alert variant="danger">
                Failed to send message. Please try again.
              </Alert>
            )}

            <Form onSubmit={sendEmail}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  style={{
                    border: 'var(--border-style)',
                    borderRadius: '5px 5px 25px 5px',
                    background: 'transparent',
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  required
                  style={{
                    border: 'var(--border-style)',
                    borderRadius: '5px 25px 5px 25px',
                    background: 'transparent',
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={3}
                  required
                  style={{
                    border: 'var(--border-style)',
                    borderRadius: '5px 5px 5px 25px',
                    background: 'transparent',
                  }}
                />
              </Form.Group>

              <Button
                variant="light"
                type="submit"
                className="btn-handmade w-100"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
