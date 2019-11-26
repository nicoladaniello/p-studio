import React from "react";
import { Card } from "react-bootstrap";
import Layout from "../../../components/layout/Layout";
import Picture from "../../../components/layout/Picture";
import Title from "../../../components/typography/Title";
import Link from "../../../components/layout/Link";

const DailyDealsHeroTemplate = ({ content }) => {
  const { list, link, images, uptitle, title } = content;
  return (
    <Layout id="home-main-top" className="black-friday">
      <Card className="hero bg-black text-white text-uppercase text-center">
        <Picture images={images}></Picture>
        <Link stretched link={link.href}></Link>
        <Card.ImgOverlay className="d-flex align-items-end justify-content-center">
          <div className="hero-content">
            <Title size="h2" chronicle className="uptitle">
              {uptitle}
            </Title>
            <Title size="h1" chronicle className="title">
              {title}
            </Title>
            <ul className="list-unstyled">
              {list.map(link => {
                return (
                  <li>
                    <Link link={link.href}>{link.value}</Link>
                  </li>
                );
              })}
            </ul>
            <div className="terms">
              <p className="mb-0 small">
                <small>
                  T&C's Apply
                </small>
              </p>
            </div>
          </div>
        </Card.ImgOverlay>
      </Card>
    </Layout>
  );
};

export default DailyDealsHeroTemplate;
