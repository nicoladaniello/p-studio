import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import classnames from "classnames";
import "./styles.scss";
import Layout from "../../../components/layout/Layout";
import Section from "../../../components/layout/Section";
import Picture from "../../../components/layout/Picture";
import Title from "../../../components/typography/Title";
import Link from "../../../components/layout/Link";
import { content } from "./content";
// import Marquee from "../../../components/Marquee";

const BFPlusSizeHero = () => {
  const { hero, marquee, shopBySize, block2 } = content;

  return (
    <Layout id="studio-8" className="black-friday">
      <Section fluid className="text-uppercase text-center mb-3">
        <Card className="friday-hero">
          <Picture images={hero.images} />
          <Card.ImgOverlay className="d-flex justify-content-center p-0">
            <div className="d-flex flex-column align-items-center h-100">
              <Title chronicle size="h1" className="uptitle mt-auto">
                Black Friday
              </Title>
              <Title chronicle size="display-2" className="text-friday">
                25% Off
              </Title>
              <Title
                chronicle
                size="display-5 mb-4"
                className="font-weight-normal"
              >
                Everything
              </Title>
              <Link stretched link={hero.link} className="btn btn-friday w-75">
                Shop Now
              </Link>
              <p
                className="small mt-auto mb-2"
                style={{ textTransform: "none" }}
              >
                Online & In Store. T&C's Apply
              </p>
            </div>
          </Card.ImgOverlay>
        </Card>
      </Section>
      {/* <Section fluid>
        <Marquee link={marquee.link}>{marquee.title}</Marquee>
      </Section> */}
      <Col id="cta" xs="11" md="10" xl="8" className="text-center mb-5">
        <Col xs="12" className="cta-title mb-4">
          <Title className="text-friday">{shopBySize.title}</Title>
        </Col>
        <Row className="text-center">
          {shopBySize.cta.map(cta => (
            <Col xs="6" md className="mb-3">
              <Link link={cta.link} className="btn btn-friday btn-block">
                {cta.title}
              </Link>
            </Col>
          ))}
          <Col xs="12" md="3">
            <Link link={shopBySize.link} className="btn btn-friday btn-block">
              All Clothing
            </Link>
          </Col>
        </Row>
      </Col>
      <Col md="11">
        <Row>
          {block2.map((card, idx) => (
            <Col
              md="4"
              className={classnames({ "d-none d-md-block": idx === 1 })}
            >
              <Card className="text-center text-uppercase mb-3">
                <Picture images={card.images} />
                <Card.ImgOverlay className="d-flex align-items-end p-0">
                  <Card.Body className="bg-friday text-white">
                    <Title size="h4" chronicle>
                      {card.title}
                    </Title>
                    <Link stretched link={card.link} className="text-white">
                      <u>Shop Now</u>
                    </Link>
                  </Card.Body>
                </Card.ImgOverlay>
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
    </Layout>
  );
};

export default BFPlusSizeHero;
