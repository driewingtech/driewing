import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';

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
    <Container className="py-5" id="contact">
      <h2 className="mb-4 text-center">Get in Touch</h2>
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
