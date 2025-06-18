
import { Nav, Navbar, Container } from 'react-bootstrap';
import { FaBicycle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  const navbarStyle = {
    background: 'linear-gradient(to right, #051f48 0%, #72b710 100%)',
    padding: '0.5rem 0'
  };

  const brandStyle = {
    color: 'white',
    fontSize: '1.8rem',
    fontStyle: 'italic',
    fontWeight: '600',
    letterSpacing: '1px',
    marginLeft: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    textDecoration: 'none'
  };

  const linkStyle = {
    color: 'white',
    fontSize: '1.2rem',
    fontStyle: 'italic',
    fontWeight: '500',
    padding: '0.5rem 1.5rem',
    margin: '0 0.2rem',
    transition: 'all 0.3s ease',
    textDecoration: 'none'
  };

  return (
    <Navbar expand="lg" style={navbarStyle} collapseOnSelect>
      <Container fluid>

        <Link to="/" style={brandStyle}>
          <FaBicycle style={{ fontSize: '1.5em' }} />
          CYCLO-NEX
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ borderColor: 'white' }}>
          <span style={{ color: 'white', fontSize: '1.5rem' }}>☰</span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" style={{ alignItems: 'center' }}>
            <Link to="/" style={linkStyle}>
              Home
            </Link>
            <Link to="/collections" style={linkStyle}>
              Collections
            </Link>
            <Link to="/contact" style={linkStyle}>
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
