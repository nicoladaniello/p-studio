import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "../friday.scss";
import Layout from "../../../components/layout/Layout";
import Section from "../../../components/layout/Section";
import Picture from "../../../components/layout/Picture";
import Link from "../../../components/layout/Link";
import Title from "../../../components/typography/Title";

const BFDailyDealFridayTemplate = ({ content }) => {
  return (
    <Layout className="black-friday">
      <Section className="text-uppercase text-center">
        <Row noGutters className="justify-content-center mb-3">
          {content.map((deal, i) => {
            return <DailyDealActive key={i} deal={deal}></DailyDealActive>;
          })}
        </Row>
        <Row className="mb-3 d-none d-md-block">
          <Col>
            <Title size="h3" class="text-friday">
              Shop all deals
            </Title>
          </Col>
        </Row>
      </Section>
    </Layout>
  );
};

const DailyDealActive = ({ deal }) => {
  const { images, title, link } = deal;
  return (
    <Col xs="6" md="4">
      <Card className="mb-1 m-md-2 border-0">
        <Picture images={images}></Picture>
        <Card.ImgOverlay className="d-none d-md-flex align-items-end p-0">
          <div className="w-100 btn-friday px-1 py-4">
            <Title size="h6">{title}</Title>
            <Link stretched link={link.href} className="text-white small">
              <span dangerouslySetInnerHTML={{ __html: link.value }} />
            </Link>
          </div>
        </Card.ImgOverlay>
        <Card.Body className="btn-friday px-1 d-md-none">
          <p className="mb-0">
            <b>50% Off*</b>
          </p>
          <Link
            stretched
            link={{ id: "deals" }}
            className="text-white text-uppercase"
          >
            <span dangerouslySetInnerHTML={{ __html: link.value }} />
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BFDailyDealFridayTemplate;
