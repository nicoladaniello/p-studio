import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Picture from "../../components/layout/Picture";
import "./styles.scss";
import TFGHero from "./components/hero";

const TFGTemplate = ({ content }) => {
  const { hero, body, grid } = content;

  return (
    <Container fluid>
      <Row noGutters className="justify-content-center">
        <Col xs="12" className="text-center mb-4">
          <TFGHero hero={hero} style={{ backgroundColor: "#f1f1f1" }}>
            <Row className="justify-content-center">
              <Col md="10" className="mb-5">
                <p>{body}</p>
              </Col>
            </Row>
            <Container>
              <Row className="justify-content-center mb-5">
                <Col md="2">
                  <div className="mx-2">
                    <img
                      className="img-fluid"
                      alt="TFG Employees"
                      src="https://damselinadress.images.blucommerce.com/damselinadress/webImages/TFG/icon-employees.png?auto=format%2Ccompress&bluhash=55aaa5800bd34eda2eee4163aaf66903&w=201&h=249&fit=fillmax&fill=solid&s=634e267cfbc843d7b829284c0b7ef969"
                    />
                    <h4 className="mb-0">10,000</h4>
                    <h6>Employees</h6>
                  </div>
                </Col>
                <Col md="2">
                  <div className="mx-2">
                    <img
                      className="img-fluid"
                      alt="TFG Brands"
                      src="https://damselinadress.images.blucommerce.com/damselinadress/webImages/TFG/icon-brands.png?auto=format%2Ccompress&bluhash=30905cd4571c5286723fcc21a093ff10&w=201&h=249&fit=fillmax&fill=solid&s=d522ae9574bd7b064f3a64304736f666"
                    />
                    <h4 className="mb-0">6</h4>
                    <h6>Brands</h6>
                  </div>
                </Col>
                <Col md="2">
                  <div className="mx-2">
                    <img
                      className="img-fluid"
                      alt="TFG Customers"
                      src="https://damselinadress.images.blucommerce.com/damselinadress/webImages/TFG/icon-customers.png?auto=format%2Ccompress&bluhash=621ceed834653cfa0945f92c7cc03148&w=201&h=249&fit=fillmax&fill=solid&s=32d8eff0d2a0abb8226afd7e12a8a8b6"
                    />
                    <h4 className="mb-0">10.3M</h4>
                    <h6>Customers</h6>
                  </div>
                </Col>
              </Row>
            </Container>
          </TFGHero>
        </Col>
        <Col xs="12" className="text-center mb-5">
          <h2 className="h4 text-capitalize mb-4">Get to know our brands</h2>
          <Row noGutters>
            {grid.map(c => {
              const {
                col,
                title,
                href,
                images: { desktop, mobile }
              } = c;
              return (
                <Col className="mb-2" {...col}>
                  <a title={title} href={href}>
                    <source srcSet={mobile.src} />
                    <img
                      className="img-fluid"
                      alt={desktop.alt}
                      src={desktop.src}
                    />
                  </a>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default TFGTemplate;
