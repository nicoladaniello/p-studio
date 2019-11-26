import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import LinkedIn from "./LinkedIn";

const TFGNavbar = ({ navbar }) => {
  const { logo, links } = navbar;

  return (
    <Navbar id="navbar" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img className="brand-logo img-fluid" alt={logo.alt} src={logo.src} />
        </Navbar.Brand>
        <Navbar.Toggle className="ml-auto" aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="mx-auto">
            {links.map(link => (
              <Nav.Link className="text-capitalize" {...link.props}>
                {link.title}
              </Nav.Link>
            ))}
          </Nav>
          <Nav>
            <LinkedIn />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TFGNavbar;
