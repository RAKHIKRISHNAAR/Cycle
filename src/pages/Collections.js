



import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Collections() {
  const cycles = [
    { id: 1, img: "./c1.jpg", name: "Thunder Roadster", price: "10,000 Rs" },
    { id: 2, img: "./c2.jpg", name: "Urban Glider", price: "11,000 Rs" },
    { id: 3, img: "./c3.jpg", name: "Trail Blazer", price: "10,500 Rs" },
    { id: 4, img: "./c4.jpg", name: "Velocity X1", price: "12,000 Rs" },
    { id: 5, img: "./c5.jpg", name: "Eco Cruiser", price: "11,000 Rs" },
    { id: 6, img: "./c6.jpg", name: "Alpine Climber", price: "13,000 Rs" },
    { id: 7, img: "./c7.jpg", name: "Steel Phantom", price: "9,000 Rs" },
    { id: 8, img: "./c8.jpg", name: "Pegasus Pro", price: "8,000 Rs" },
    { id: 9, img: "./c9.jpg", name: "Junior Sprinter", price: "13,000 Rs" },
    { id: 10, img: "./c10.jpg", name: "Carbon Flash", price: "13,600 Rs" },
    { id: 11, img: "./c11.jpg", name: "Desert Rider", price: "18,000 Rs" },
    { id: 12, img: "./c12.jpg", name: "Folding Ninja", price: "16,000 Rs" }
  ];

  return (
    <Container fluid className="p-3 p-md-4 p-lg-5" style={{ backgroundColor: '#f8f9fa' }}>
      <h2 className="text-center mb-4 mb-md-5" style={{ 
        color: '#2c3e50',
        fontWeight: '700',
        fontSize: 'clamp(1.5rem, 4vw, 2.2rem)'
      }}>
        Our Cycle Collection
      </h2>
      
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {cycles.map((cycle) => (
          <Col key={cycle.id} className="d-flex justify-content-center">
            <Card style={{ 
              width: '100%',
              maxWidth: '20rem',
              border: 'none',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }} className="h-100">
              <div style={{ 
                height: '200px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Card.Img 
                  variant="top" 
                  src={cycle.img} 
                  style={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }} 
                />
              </div>
              <Card.Body className="text-center d-flex flex-column">
                <Card.Title style={{ 
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#2c3e50',
                  marginBottom: '0.5rem'
                }}>
                  {cycle.name}
                </Card.Title>
                <Card.Text style={{ 
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  color: '#e74c3c',
                  marginBottom: '1rem'
                }}>
                  {cycle.price}
                </Card.Text>
             
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <style>{`
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.15);
        }
        
        .card:hover img {
          transform: scale(1.05);
        }
        
        button:hover {
          background-color: #2980b9 !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
      `}</style>
    </Container>
  );
}

export default Collections;