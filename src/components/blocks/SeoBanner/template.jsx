import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Picture from "../../layout/Picture";
import Link from "../../layout/Link";

let defOptions = {
  color: "#000",
  bgColor: "#f3f3f3",
  col: {
    md: "8",
    xl: "5"
  }
};

const SeoBanner = ({ content, options, children }) => {
  const { images, title } = content;

  options = Object.assign(defOptions, options);
  const { color } = options;

  return (
    <Container fluid className="p-0 text-center">
      <Row className="d-md-none">
        <Col xs="12">
          <h1 className=" search-header__category-name">{title}</h1>
        </Col>
      </Row>
      <Row className="d-none d-md-flex">
        <Col xs="12">
          <Card className="border-0" style={{ color: color }}>
            {!!images ? (
              <SeoBannerOverlay images={images} options={options}>
                <SeoBannerContent content={content}>
                  {children}
                </SeoBannerContent>
              </SeoBannerOverlay>
            ) : (
              <SeoBannerBody options={options}>
                <SeoBannerContent content={content}>
                  {children}
                </SeoBannerContent>
              </SeoBannerBody>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const SeoBannerContent = ({ content, children }) => {
  const { title, body, list } = content;
  return (
    <React.Fragment>
      {!!title && (
        <h1 className="text-center search-header__category-name">{title}</h1>
      )}
      <div dangerouslySetInnerHTML={{ __html: body }} />
      {!!list && <SeoBannerList list={list} />}
      {children}
    </React.Fragment>
  );
};

const SeoBannerBody = ({ options, children }) => {
  const { bgColor } = options;
  return (
    <Card.Body
      className="d-flex justify-content-center"
      style={{ backgroundColor: bgColor }}
    >
      <Col md="6">{children}</Col>
    </Card.Body>
  );
};

const SeoBannerOverlay = ({ images, options, children }) => {
  const { col } = options;
  return (
    <React.Fragment>
      <Picture images={images} />
      <Card.ImgOverlay className="d-flex justify-content-xl-center align-items-center">
        <Col {...col}>{children}</Col>
      </Card.ImgOverlay>
    </React.Fragment>
  );
};

const SeoBannerList = ({ list }) => {
  return (
    <ul className="list-inline d-none d-xl-block">
      {list.map((item, idx) => {
        const { link, title } = item;
        return (
          <React.Fragment>
            <li className="list-inline-item">
              <Link link={link} className="text-capitalize" style={{ color: "inherit" }}>
                <u>{title}</u>
              </Link>
            </li>
            {idx < list.length - 1 && <li class="list-inline-item">|</li>}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default SeoBanner;
