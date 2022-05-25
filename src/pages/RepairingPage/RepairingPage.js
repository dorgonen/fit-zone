import React, { useEffect, useRef } from "react";

import {
  repairingPageData, repairingData
} from "./Data";

import TitleSection from "../../components/Sections/TitleSection/TitleSection";
import Section from "../../components/Sections/Section/Section";

const RepairingPage = ({ isMobile }) => {

  return (
    <>
      <TitleSection {...repairingPageData} />
      <Section {...repairingData}></Section>
    </>
  );
};

export default RepairingPage;