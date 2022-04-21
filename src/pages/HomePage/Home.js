import React, { useEffect, useRef } from "react";

import Section from "../../components/Sections/Section/Section";
import MainSection from "../../components/Sections/MainSection/MainSection";

import {
  AboutUs,
  homeObjFour,
  homeObjOne,
  reviews,
  splitSectionData,
  photos
} from "./Data";
import Slider from "../../components/Slider/Slider";
import CardsSection from "../../components/Sections/CardsSection/CardsSection";
import SplitSection from "../../components/Sections/SplitSection/SplitSection";
// import Review from '../../components/Review/Review';

const Home = ({ isMobile }) => {
  const handleSlideChange = () => { };

  const cardsItems = [
    {
      text: "abrakadabra",
      title: "kukuriku",
      img: "images/main-pic.png",
    },
  ];


  return (
    <>
      <MainSection {...homeObjOne} />
      <Section {...AboutUs}></Section>
      <SplitSection {...splitSectionData}></SplitSection>
      <Slider className="photo-gallery-slider" slides={photos} slidesPerView={window.innerWidth <= 960 ? 2 : 4} spaceBetween={20} backgroundColor="white" pagination={true} navigation={false} onSlideChange={handleSlideChange}></Slider>
      <Slider slides={reviews} pagination={false} navigation={true} onSlideChange={handleSlideChange}></Slider>
      {/* <CardsSection items={cardsItems}></CardsSection> */}
    </>
  );
};

export default Home;
