import React from "react";
import GiftPackagingTemplate from "./template";
import { giftPackagingContent } from "./content";

const GiftPackagingPage = () => {
  return (
    <GiftPackagingTemplate content={giftPackagingContent}></GiftPackagingTemplate>
  );
};

export default GiftPackagingPage;
