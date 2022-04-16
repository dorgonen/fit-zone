import React, { useEffect, useRef } from 'react';

import Section from '../../components/Sections/Section/Section'
import MainSection from '../../components/Sections/MainSection/MainSection'

import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, sliderItems } from './Data';
import Slider from '../../components/Slider/Slider';
import CardsSection from '../../components/Sections/CardsSection/CardsSection';
// import Review from '../../components/Review/Review';

const Home = () => {
  const handleSlideChange = () => { }

  const cardsItems = [
    {
      text: "abrakadabra",
      title: "kukuriku",
      img: 'images/main-pic.png'
    }
  ]
  return (
    <>
      <MainSection {...homeObjOne} />
      <Section {...homeObjTwo} />
      <Section {...homeObjThree} />
      <Slider slides={sliderItems} onSlideChange={handleSlideChange}></Slider>
      <CardsSection items={cardsItems}></CardsSection>

    </>
  );
}

export default Home;
