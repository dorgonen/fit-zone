import React, { useEffect, useRef } from "react";
import { photos, filters } from "./Data";

import PhotoGallery from "../../components/PhotoGallery/PhotoGallery";

const PhotoGalleryPage = () => {
  return (
    <>
    <div style={{height: "200px"}}></div>
      <PhotoGallery photos={photos} filters={filters}></PhotoGallery>
    </>
  );
};

export default PhotoGalleryPage;
