import React from "react";
import classnames from "classnames";
import Layout from "../../../components/layout/Layout";
import Section from "../../../components/layout/Section";
import { Card, Row, Col } from "react-bootstrap";
import Picture from "../../../components/layout/Picture";
import Link from "../../../components/layout/Link";
import Title from "../../../components/typography/Title";

const BFDailyDealTemplate = ({ content, activeDeals = 1 }) => {
  const inactiveDeals = 6 - activeDeals;

  return (
    <Layout className="black-friday">
      <Section className="text-uppercase text-center text-white">
        <Row className="mb-2">
          <Col className="d-sm-none">
            <h4 class="text-friday ">Today's Deal</h4>
          </Col>
        </Row>
        <Row className="justify-content-center d-sm-none">
          <DailyDealActive deal={content[activeDeals - 1]} />
        </Row>
        <Row className="d-none d-sm-flex mb-3">
          {content.slice(0, activeDeals).map(deal => (
            <DailyDealActive deal={deal} />
          ))}
          {content.slice(activeDeals, 6).map(deal => (
            <DailyDealInactive deal={deal}></DailyDealInactive>
          ))}
        </Row>
      </Section>
    </Layout>
  );
};

const DailyDealActive = ({ deal }) => {
  const { images, title, link } = deal;
  return (
    <Col xs="11" sm="6" md="4">
      <Card className="border-0 mb-3 mx-auto" style={{ maxWidth: "547px" }}>
        <Picture images={images}></Picture>
        <Card.ImgOverlay className="d-none d-sm-flex align-items-end p-0">
          <Card.Body className="w-100 px-1 btn-friday">
            <Title size="h6">{title}</Title>
            <p className="small mb-2">
              <Link stretched link={link.href} className="text-white">
                {link.value}
              </Link>
            </p>
          </Card.Body>
        </Card.ImgOverlay>
        <Card.Body className="btn-friday px-1 d-sm-none">
          <Card.Title>
            <b>50% Off*</b>
            <br />
            {link.value}
          </Card.Title>
          <Link stretched link={{ id: "deals" }} className="text-white">
            <u>Shop all deals</u>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

const DailyDealInactive = ({ deal }) => {
  const { images, revealed } = deal;
  images.styles = {
    filter: "grayscale(100%)"
  };

  return (
    <Col sm="6" md="4">
      <Card className="border-0 mb-3">
        <Picture images={images}></Picture>
        <Card.ImgOverlay className="d-flex align-items-end p-0">
          <div
            className="card-body px-1"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <Title size="h6">Revealed On</Title>
            <p className="small mb-2">{revealed}</p>
          </div>
        </Card.ImgOverlay>
      </Card>
    </Col>
  );
};

export default BFDailyDealTemplate;
