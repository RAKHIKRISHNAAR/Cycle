



import React from 'react';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';

function Contact() {
  return (
    <Container className="py-5">
      <div className="p-4 rounded-3 shadow" style={{ background: 'white', maxWidth: '800px', margin: '0 auto' }}>
        <h2 className="text-center mb-4" style={{ color: '#2c3e50' }}>Contact Us</h2>
        
        <Form>
          <Row className="mb-3">
            <Col md={6} className="mb-3 mb-md-0">
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter your name" 
                  required 
                  className="py-2"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Enter your email" 
                  required 
                  className="py-2"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6} className="mb-3 mb-md-0">
              <Form.Group controlId="formPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control 
                  type="tel" 
                  placeholder="Enter your phone number" 
                  className="py-2"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formPlace">
                <Form.Label>Place</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter your location" 
                  className="py-2"
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-4" controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={4} 
              placeholder="Your message here..." 
              required 
              className="py-2"
            />
          </Form.Group>

          <div className="d-grid">
            <Button 
              variant="primary" 
              type="submit" 
              size="lg"
              className="fw-bold py-2"
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
}

export default Contact;

