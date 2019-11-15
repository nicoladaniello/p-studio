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
          <div className="bg-black d-flex flex-column justify-content-around">
            <Title size="h1" chronicle className="uptitle">
              {uptitle}
              <span className="title d-block mt-3">{title}</span>
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
          </div>
        </Card.ImgOverlay>
      </Card>
    </Layout>
  );
};

export default DailyDealsHeroTemplate;
