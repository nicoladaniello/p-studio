import React from "react";
import TFGTemplate from "./template";
import TFGNavbar from "./navbar.jsx";
import TFGFooter from "./footer";

import navbar from "./navbar-content.json";
import content from "./home-content.json";
import footer from "./footer-content.json";

const TFGHomePage = () => {
  return (
    <React.Fragment>
      <TFGNavbar navbar={navbar} />
      <TFGTemplate content={content} />
      <TFGFooter footer={footer} />
    </React.Fragment>
  );
};

export default TFGHomePage;
