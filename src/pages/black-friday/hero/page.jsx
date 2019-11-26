import React from "react";
import BFHeroTemplate from "./template";

const content = {
  links: [
    {
      id: "dresses",
      title: "dresses"
    },
    {
      id: "knitwear",
      title: "knitwear"
    },
    {
      id: "coats",
      title: "coats"
    },
    {
      id: "tops",
      title: "tops"
    }
  ]
};

const BFHeroPage = () => {
  return <BFHeroTemplate content={content}></BFHeroTemplate>;
};

export default BFHeroPage;
