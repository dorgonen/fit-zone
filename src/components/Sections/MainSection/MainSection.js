import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

import "./MainSection.css";
import { Button } from "../../Buttons/Button/Button";
import { Link } from "react-router-dom";
import { IconButton } from "../../Buttons/IconButton/IconButton";

function MainSection({
  topLine,
  lightText,
  lightTextDesc,
  headlineFooter,
  headlineMiddle,
  headlineUpper,
  buttonLabel,
  description,
  img,
  alt,
  imgStart,
  route
}) {

  return (
    <>
      <div className="main-section">
        <div className="container">
          <div className="col">
            <div className="main-section-text-wrapper">
              <div className="main-section-heading">
                <h1>{headlineUpper}</h1>
                <Typewriter
                  options={{
                    strings: headlineMiddle,
                    autoStart: true,
                    loop: true,
                  }}
                />
                <h1>{headlineFooter}</h1>
              </div>
              <p className="main-section-subtitle">{description}</p>
              <IconButton buttonStyle="transparent-white" route={route}>{buttonLabel}</IconButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainSection;
