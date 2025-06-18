import React from 'react';
import { Container } from 'react-bootstrap';
import { FaBicycle } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <Container className="text-center">
        <div className="d-flex align-items-center justify-content-center mb-2">
          <FaBicycle className="text-info me-2" size={20} />
          <span className="fw-light">
            © {new Date().getFullYear()} <span className="fw-bold">CYCLO-NEX</span>
          </span>
        </div>
        <p className="mb-0 small">
          Developed by <span className="text-info fw-bold">RAKHI KRISHNA A R</span>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;