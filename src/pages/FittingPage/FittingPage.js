import React, { useEffect, useRef } from "react";

import {
  fittingPageData, cardsItems, bikeFittingData, fittingPhotos
} from "./Data";

import Slider from "../../components/Slider/Slider";
import CardsSection from "../../components/Sections/CardsSection/CardsSection";
import TitleSection from "../../components/Sections/TitleSection/TitleSection";
import Section from "../../components/Sections/Section/Section";

const FittingPage = ({ isMobile }) => {
  return (
    <>
      <TitleSection {...fittingPageData} />
      <Section {...bikeFittingData}></Section>
      <CardsSection items={cardsItems}></CardsSection>
      <Slider className="photo-gallery-slider" slides={fittingPhotos} slidesPerView={window.innerWidth <= 960 ? 1.5 : 4} spaceBetween={20} backgroundColor="white" pagination={true} navigation={false}></Slider>
    </>
  );
};

export default FittingPage;
