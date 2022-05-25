import React from 'react';

import {
  contactPageData, contactItems, mapData
} from "./Data";

import TitleSection from "../../components/Sections/TitleSection/TitleSection";
import SplitSection from '../../components/Sections/SplitSection/SplitSection';
import Map from '../../components/Map/Map';

function ContactPage() {
  return (
    <>
      <TitleSection {...contactPageData} />
      <SplitSection items={contactItems.items} headline={contactItems.headline} lightBgColor></SplitSection>
      <Map {...mapData}></Map>
    </>
  );
}

export default ContactPage;
