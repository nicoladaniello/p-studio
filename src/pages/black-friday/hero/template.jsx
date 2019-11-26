import React from "react";
import { Card } from "react-bootstrap";
import "../friday.scss";
import "./styles.scss";
import Layout from "../../../components/layout/Layout";
import Section from "../../../components/layout/Section";
import Title from "../../../components/typography/Title";
import Link from "../../../components/layout/Link";

const BFHeroTemplate = ({ content }) => {
  const { links } = content;

  return (
    <Layout id="home-main-top" className="black-friday">
      <Section fluid className="mb-2 mb-md-0">
        <Card className="black-friday-hero">
          <div className="card-embed">
            <div className="card-embed-container">
              <iframe
                className="embed-video"
                allowfullscreen=""
                frameborder="0"
                allow="autoplay; fullscreen"
                src="https://player.vimeo.com/video/371163414?background=1"
                onload="this.width=screen.width;this.height=screen.height;"
              ></iframe>
            </div>
          </div>
          <Card.ImgOverlay className="d-flex flex-column align-items-center">
            <div className="mt-auto position-md-relative text-uppercase">
              <Title size="h3">Black Friday</Title>
              <Title chronicle size="display-4" className="text-friday">
                25% Off
              </Title>
              <Title chronicle size="h2" className="mb-4">
                Everything
              </Title>
              <p className="mb-5">
                <Link
                  className="btn btn-friday btn-block stretched-link"
                  link={{ id: "clothing" }}
                >
                  Shop Now
                </Link>
              </p>
            </div>
            <div className="mb-auto text-uppercase">
              <ul className="list-inline small d-none d-md-block">
                {links.map(link => (
                  <li className="list-inline-item mx-3">
                    <Link className="link-friday" link={link}>
                      <u>{link.title}</u>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <p
              className="small text-right"
              style={{ position: "absolute", right: "1rem", bottom: "1rem" }}
            >
              Online & In Store
              <small className="d-block">Selected lines only. T&Cs Apply</small>
            </p>
          </Card.ImgOverlay>
        </Card>
      </Section>
    </Layout>
  );
};

export default BFHeroTemplate;
