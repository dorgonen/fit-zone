import React, { useEffect, useRef } from "react";

import {
  fittingPageData, cardsItems, bikeFittingData, fittingPhotos, splitSectionData , fittingProcessData
} from "./Data";

import Slider from "../../components/Slider/Slider";
import CardsSection from "../../components/Sections/CardsSection/CardsSection";
import TitleSection from "../../components/Sections/TitleSection/TitleSection";
import SplitSection from "../../components/Sections/SplitSection/SplitSection";
import SubSection from "../../components/Sections/SubSection/SubSection";

const FittingPage = ({ isMobile }) => {
  return (
    <>
      <TitleSection {...fittingPageData} />
      <SplitSection {...splitSectionData}></SplitSection>
      <SubSection {...bikeFittingData}></SubSection>
      <SubSection {...fittingProcessData}></SubSection>

      <CardsSection items={cardsItems}></CardsSection>
      <Slider className="photo-gallery-slider" slides={fittingPhotos} slidesPerView={window.innerWidth <= 960 ? 1.5 : 4} spaceBetween={20} backgroundColor="white" pagination={true} navigation={false}></Slider>
    </>
  );
};

export default FittingPage;
