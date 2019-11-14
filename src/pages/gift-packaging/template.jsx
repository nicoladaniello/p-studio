import React from "react";
import Layout from "../../components/layout/Layout";
import Section from "../../components/layout/Section";
import { Row, Col, Card, Button } from "react-bootstrap";
import Title from "../../components/typography/Title";
import Picture from "../../components/layout/Picture";

const GiftPackagingTemplate = ({content}) => {
    const { block1, block2, block3 } = content;

  return (
    <Layout>
      <Section>
        <Row className="align-items-stretch">
          <Col lg="6" className="mb-3">
            <Card id="packaging" className="text-center h-100 mb-3">
              <Card.Body className="d-flex">
                <div className="my-auto">
                  <Title
                    chronicle
                    gold
                    dangerouslySetInnerHTML={{ __html: block2.title }}
                  ></Title>
                  <Card.Text
                    dangerouslySetInnerHTML={{ __html: block2.text }}
                  ></Card.Text>
                  <Button variant="gold" className="w-50">Buy Now</Button>
                </div>
              </Card.Body>
              <Picture images={block2.images}></Picture>
            </Card>
          </Col>
          <Col lg="6" className="mb-3 mt-auto order-lg-first">
            <Card id="gifting">
              <Picture images={block1.images}></Picture>
            </Card>
          </Col>
        </Row>
      </Section>

      <Section>
        <Card
          id="product"
          className="text-center"
          style={{ backgroundColor: "#ece8e5" }}
        >
          <Picture
            images={block3.images}
            className="d-none d-lg-block"
          ></Picture>
          <Card.ImgOverlay className="d-none d-lg-flex align-items-center">
            <div className="offset-lg-5 offset-xl-6">
              <Title size="h2" color="gold" inner={block3.title}></Title>
              <Card.Text
                dangerouslySetInnerHTML={{ __html: block3.text }}
              ></Card.Text>
              <Button variant="gold" className="w-50">Buy Now</Button>
            </div>
          </Card.ImgOverlay>
          <Card.Body className="d-lg-none py-6">
            <Title color="gold" inner={block3.title}></Title>
            <Card.Text
              dangerouslySetInnerHTML={{ __html: block3.text }}
            ></Card.Text>
            <Button className="btn-gold w-50">Buy Now</Button>
          </Card.Body>
        </Card>
      </Section>
    </Layout>
  );
};

export default GiftPackagingTemplate;
