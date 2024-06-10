import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Mynav.css';  // Import the custom CSS file

export function Mynav() {
  return (
    <>
      <Navbar bg="dark" className="custom-navbar">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Products</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
