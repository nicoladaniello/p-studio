import React from "react";
import { Card } from "react-bootstrap";

const lgBreakpoint = "992px";

const TFGHero = ({ hero, children, ...rest }) => {
  const { images, title } = hero;
  const { desktop, mobile } = images;

  return (
    <Card className="border-0" {...rest}>
      <div className="position-relative mb-5">
        <picture className="text-center">
          <source media={`(max-width: ${lgBreakpoint})`} srcSet={mobile.src} />
          <img className="img-fluid" alt={desktop.alt} src={desktop.src} />
        </picture>
        <Card.ImgOverlay className="d-flex justify-content-center align-items-end">
          <h1 className="text-white">{title}</h1>
        </Card.ImgOverlay>
      </div>
      <Card.Body>{children}</Card.Body>
    </Card>
  );
};

export default TFGHero;
