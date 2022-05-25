import React, { useEffect, useRef } from "react";

import {
  lessonsPageData, lessonsData
} from "./Data";

import TitleSection from "../../components/Sections/TitleSection/TitleSection";
import Section from "../../components/Sections/Section/Section";

const LessonsPage = ({ isMobile }) => {

  return (
    <>
      <TitleSection {...lessonsPageData} />
      <Section {...lessonsData}></Section>
    </>
  );
};

export default LessonsPage;

