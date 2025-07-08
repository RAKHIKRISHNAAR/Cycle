
import React, { useState } from 'react';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import axios from "axios"

function Contact() {

  const[formData ,setFormData]=useState({
    name:"",
    email:"",
    phone:"",
    place:"",
    message:""
  })

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  };

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
      // const res=await axios.post("http://localhost:8000/api/contact",formData)
            const res=await axios.post("https://cycle-5klv.onrender.com/api/contact",formData)

      alert(res.data.message)
      setFormData({name:"",email:"",phone:"",place:"",message:""})
    }catch(error){
      alert("something went wrong")
    }
  }
  return (
    <Container className="py-5">
      <div className="p-4 rounded-3 shadow" style={{ background: 'white', maxWidth: '800px', margin: '0 auto' }}>
        <h2 className="text-center mb-4" style={{ color: '#2c3e50' }}>Contact Us</h2>
        
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={6} className="mb-3 mb-md-0">
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                name="name"
                  type="text" 
                  placeholder="Enter your name" 
                  required 
                  className="py-2"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                name="email"
                  type="email" 
                  placeholder="Enter your email" 
                  required 
                  className="py-2"
                  value={formData.email}
                  onChange={handleChange}

                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6} className="mb-3 mb-md-0">
              <Form.Group controlId="formPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                name="phone" 
                  type="tel" 
                  placeholder="Enter your phone number" 
                  className="py-2"
                  value={formData.phone}
                   onChange={handleChange}

                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formPlace">
                <Form.Label>Place</Form.Label>
                <Form.Control 
                name="place"
                  type="text" 
                  placeholder="Enter your location" 
                  className="py-2"
                  value={formData.place}
                 onChange={handleChange}

                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-4" controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control 
              as="textarea" 
              name="message"
              rows={4} 
              placeholder="Your message here..." 
              required 
              className="py-2"
              value={formData.message}
              onChange={handleChange}

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

