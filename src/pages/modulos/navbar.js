import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

export default function Menu() {
  return (
    <Navbar expand="sn" className="bg-info">
      <Container>
        <Navbar.Brand className="text-white" href="#home">6A</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}