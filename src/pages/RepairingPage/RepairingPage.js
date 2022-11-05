import React, { useEffect, useRef } from "react";

import {
  repairingPageData, repairingData, repairingAdditionalData
} from "./Data";

import TitleSection from "../../components/Sections/TitleSection/TitleSection";
import Section from "../../components/Sections/Section/Section";
import SubSection from "../../components/Sections/SubSection/SubSection";

const RepairingPage = ({ isMobile }) => {

  return (
    <>
      <TitleSection {...repairingPageData} />
      <SubSection {...repairingData}></SubSection>
      <SubSection {...repairingAdditionalData}></SubSection>
    </>
  );
};

export default RepairingPage;