import React, { useEffect, useRef } from "react";
import { photos, filters } from "./Data";

import PhotoGallery from "../../components/PhotoGallery/PhotoGallery";
import MainSection from "../../components/Sections/MainSection/MainSection";

const PhotoGalleryPage = () => {
  return (
    <>
      <MainSection></MainSection>
      <PhotoGallery photos={photos} filters={filters}></PhotoGallery>
    </>
  );
};

export default PhotoGalleryPage;
