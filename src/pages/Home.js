

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
    const styles={
          button: {
      background: 'linear-gradient(45deg, #051f48, #72b710)',
      color: 'white',
      border: 'none',
      padding: '0.8rem 2rem',
      fontSize: '1.1rem',
      fontWeight: 600,
      borderRadius: '50px',
      transition: 'all 0.3s ease',
      display: 'inline-flex',
      alignItems: 'center',
      marginTop: '1.5rem'
    },
    buttonHover: {
      transform: 'translateY(-3px)',
      boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
    }
  
    }
  return (
    <Container className="my-5">
      <Row className="align-items-center"> {/* This aligns columns vertically in center */}
        {/* Image Column */}
        <Col lg={6} className="mb-4 mb-lg-0"> {/* Bottom margin on mobile only */}
          <img 
            src="./cycbg.jpg" 
            alt="Cycling scene" 
            className="img-fluid rounded shadow" 
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
        </Col>
        
        {/* Text Column */}
         <Col lg={6}>
          <div className="px-3">
            <h2 className="mb-4">About CYCLO-NEX</h2>
            <p className="lead">
              Discover the ultimate cycling experience with our premium collection of bikes and accessories.
            </p>
            <p>
              Whether you're a casual rider or a professional cyclist, we have the perfect equipment to match your needs. Our products combine cutting-edge technology with ergonomic design for maximum performance and comfort.
            </p>
            <p>
              Founded in 2023, CYCLO-NEX has quickly become a leader in the cycling industry, known for our innovative designs and exceptional customer service.
            </p>
            <Link to="/collections">
             <button 
              style={styles.button}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
            >
              <i className="fas fa-arrow-right" style={{ marginRight: '0.5rem' }}></i>
              Explore Our Collection
            </button>
            </Link>
          </div>
        </Col> 

      </Row>    

<div class="feature-section py-5">
  <div class="container text-center">
    <h1 class="display-4 mb-4 fw-bold text-dark">Explore Bicycle Features</h1>
    <p class="lead mb-5">Discover what makes our bikes stand out—engineered for performance, comfort, and style.</p>
    
    <div class="row g-4">
      <div class="col-lg-3 col-md-6">
        <div class="feature-card p-4 h-100 shadow-sm rounded-3 bg-white">
          <div class="icon-wrapper mb-3">
            <i class="fas fa-bicycle fa-3x text-danger"></i>
          </div>
          <h3 class="h4 mb-3">Frames</h3>
          <ul class="text-start list-unstyled">
            <li class="mb-2"><strong>Material:</strong> Steel, Aluminum, Carbon Fiber</li>
            <li class="mb-2"><strong>Type:</strong> Hardtail, Full-Suspension</li>
            <li class="mb-2"><strong>Size:</strong> XS to XL (or cm/inches)</li>
            <li><strong>Weight:</strong> Lightweight or heavy-duty</li>
          </ul>
        </div>
      </div>
      
      <div class="col-lg-3 col-md-6">
        <div class="feature-card p-4 h-100 shadow-sm rounded-3 bg-white">
          <div class="icon-wrapper mb-3">
            <i class="fas fa-cogs fa-3x text-success"></i>
          </div>
          <h3 class="h4 mb-3">Gears & Drivetrain</h3>
          <ul class="text-start list-unstyled">
            <li class="mb-2"><strong>Gears:</strong> 1-speed to 21-speed</li>
            <li class="mb-2"><strong>Derailleur:</strong> Shimano, SRAM</li>
            <li><strong>Shifters:</strong> Trigger, Twist, Electronic</li>
          </ul>
        </div>
      </div>
      
   
      
      <div class="col-lg-3 col-md-6">
  <div class="feature-card p-4 h-100 shadow-sm rounded-3 bg-white">
    <div class="icon-wrapper mb-3">
      <i class="fas fa-circle-notch fa-3x text-dark"></i> 
    </div>
    <h3 class="h4 mb-3">Wheels & Tires</h3>
    <ul class="text-start list-unstyled">
      <li class="mb-2"><strong>Size:</strong> 20" to 29", 700c</li>
      <li class="mb-2"><strong>Type:</strong> Road, MTB, Hybrid</li>
      <li class="mb-2"><strong>Tread:</strong> Slick, Knobby</li>
      <li><strong>Tubeless:</strong> Yes/No</li>
    </ul>
  </div>
</div>
      <div class="col-lg-3 col-md-6">
        <div class="feature-card p-4 h-100 shadow-sm rounded-3 bg-white">
          <div class="icon-wrapper mb-3">
            <i class="fas fa-tag fa-3x text-info"></i>
          </div>
          <h3 class="h4 mb-3">Price & Availability</h3>
          <ul class="text-start list-unstyled">
            <li class="mb-2"><strong>Budget:</strong> Entry to Premium</li>
            <li><strong>Stock:</strong> Available / Pre-order</li>
          </ul>
        </div>
      </div>
    </div>
    
    <img src="./cyc.png" class="img-fluid mt-5 rounded-3 shadow" alt="Premium Bicycle Features" />
  </div>
</div>


    </Container>

  );
}

export default Home;



