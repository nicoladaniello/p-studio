import React from 'react';
import BFDailyDealTemplate from './template';
import { BFDailyDealsContent as content } from "./deal6";
import  "./styles.scss";

const BFDailyDealPage = () => {
    return ( 
        <BFDailyDealTemplate content={content}></BFDailyDealTemplate>
     );
}
 
export default BFDailyDealPage;