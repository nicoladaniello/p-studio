import React from "react";
import DailyDealsHeroTemplate from "./template";
import "./styles.scss";

const content = {
  uptitle: "black friday",
  title: "25% Off everything",
  link: {
    href: {
      id: "dresses"
    },
    value: "dresses"
  },
  images: {
    desktop: {
      src: "/images/2019/landing_page/black-friday/wk39/hero.jpg",
      alt: ""
    },
    mobile: {
      src: "/images/2019/landing_page/black-friday/wk39/m-hero.jpg"
    }
  },
  list: [
    {
      href: {
        id: "dresses"
      },
      value: "dresses"
    },
    {
      href: {
        id: "knitwear"
      },
      value: "knitwear"
    },
    {
      href: {
        id: "coats"
      },
      value: "coats"
    },
    {
      href: {
        id: "clothing"
      },
      value: "all clothing"
    }
  ]
};

const DailyDealsHeroPage = () => {
  return <DailyDealsHeroTemplate content={content}></DailyDealsHeroTemplate>;
};

export default DailyDealsHeroPage;
