import React, { useEffect, useState } from "react";

import "./TitleSection.css";

function TitleSection({
  bgImg,
  headline,
  description,
}) {

  return (
    <>
      <div className="title-section" style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="container">
          <div className="row title-section-row">
            <div className="title-section-text-wrapper">
              <div className="title-section-heading">
                <h1>{headline}</h1>
              </div>
              <p className="title-section-subtitle">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TitleSection;
