import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import LinkedIn from "./LinkedIn";

const TFGFooter = ({ footer }) => {
  const { links } = footer;

  return (
    <Navbar id="footer" bg="dark" variant="dark">
      <Container fluid>
        <Nav>
          <Navbar.Text className="px-4">Copyright 2019 The Foschini Group</Navbar.Text>
        </Nav>
        <Nav className="ml-auto">
          {links.map((link, idx) => (
            <React.Fragment>
              <Nav.Link className="text-capitalize" {...link.props}>
                {link.title}
              </Nav.Link>
              {idx < links.length-1 && <span className="nav-link">|</span>}
            </React.Fragment>
          ))}
          <LinkedIn className="mx-4" />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default TFGFooter;
