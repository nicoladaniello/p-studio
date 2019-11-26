import React from "react";
import { Nav } from "react-bootstrap";

const LinkedIn = ({ ...rest }) => {
  return (
    <Nav.Link {...rest}>
      <img
        width="30px"
        className="d-inline-block align-top"
        alt="LinkedIn"
        src="https://damselinadress.images.blucommerce.com/damselinadress/webImages/TFG/Linkedin.png?auto=format%2Ccompress&bluhash=510901654c59db99d13eba4ad8d800aa&w=48&h=48&fit=fillmax&fill=solid&s=8a0892be032fbf7b66351eb48413942c"
      />
    </Nav.Link>
  );
};

export default LinkedIn;
