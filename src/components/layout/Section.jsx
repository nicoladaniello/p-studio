import React from "react";
import { Col } from "react-bootstrap";
import classnames from "classnames";

const Section = ({ className, fluid = false, children, rest }) => {
  const attr = !fluid
    ? {
        md: "11",
        xl: "9"
      }
    : {
        xs: "12"
      };

  return (
    <Col className={classnames("section", className)} {...attr} {...rest}>
      {children}
    </Col>
  );
};

export default Section;
