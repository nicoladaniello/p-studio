import React from "react";
import classnames from "classnames";
import Layout from "../../../components/layout/Layout";
import Section from "../../../components/layout/Section";
import { Card, Row, Col } from "react-bootstrap";
import Picture from "../../../components/layout/Picture";
import Link from "../../../components/layout/Link";

const BFDailyDealTemplate = ({ content }) => {
  const { activeDeals, inactiveDeals } = content;

  return (
    <Layout className="black-friday">
      <Section>
        <Row>
          <Col className="d-sm-none">
            <h4 class="text-friday text-uppercase text-center">Today's Deal</h4>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {activeDeals.map((deal, i) => {
            return (
              <DailyDealActive
                key={i}
                deal={deal}
                current={i === activeDeals.length - 1}
              ></DailyDealActive>
            );
          })}
          {inactiveDeals.map((deal, i) => {
            return (
              <DailyDealInactive key={i + 10} deal={deal}></DailyDealInactive>
            );
          })}
        </Row>
      </Section>
    </Layout>
  );
};

const DailyDealActive = ({ deal, current }) => {
  const { images, title, link } = deal;
  return (
    <Col
      xs="11"
      sm="6"
      md="4"
      className={classnames("card-friday daily-deal deal-active", {
        "current-deal": current
      })}
    >
      <Card>
        <Picture images={images}></Picture>
        <Card.ImgOverlay>
          <div className="w-100 bg-friday">
            <Card.Title>{title}</Card.Title>
            <p className="card-link">
              <Link stretched link={link.href}>
                {link.value}
              </Link>
            </p>
          </div>
        </Card.ImgOverlay>
      </Card>
    </Col>
  );
};

const DailyDealInactive = ({ deal }) => {
  const { images, revealed } = deal;
  return (
    <Col xs="12" sm="6" md="4" className="card-friday daily-deal">
      <Card>
        <Picture images={images}></Picture>
        <Card.ImgOverlay>
          <div className="w-100 bg-friday">
            <Card.Title>Revealed On</Card.Title>
            <p className="card-link">
              <Link className="h4">{revealed}</Link>
            </p>
          </div>
        </Card.ImgOverlay>
      </Card>
    </Col>
  );
};

export default BFDailyDealTemplate;
