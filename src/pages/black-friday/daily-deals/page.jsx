import React from "react";
import BFDailyDealTemplate from "./template";
import { content } from "./content";
import "./styles.scss";
import "../../../p8-styles.scss";

const BFDailyDealPage = () => {
  return <BFDailyDealTemplate content={content} activeDeals={6}></BFDailyDealTemplate>;
};

export default BFDailyDealPage;
