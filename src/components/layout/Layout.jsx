import React from "react";
import { Container, Row } from "react-bootstrap";
import classnames from "classnames";

const Layout = ({ className, children, ...rest }) => {
  return (
    <Container fluid className={classnames("p8-style p-0", className)} {...rest}>
      <Row noGutters className="justify-content-center">
        {children}
      </Row>
    </Container>
  );
};

export default Layout;
