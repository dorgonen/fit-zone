import React, { useState } from "react";

import "./MainSection.css";
import { IconButton } from "../../Buttons/IconButton/IconButton";
import AnimatedTitle from "../../AnimatedTitle/AnimatedTitle";

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

  const [stringIndex, setStringIndex] = useState(0)

  // useEffect(() => {
  //   const stringInterval = setInterval(() => {
  //     setStringIndex(index => index === headlineMiddle.length - 1 ? 0 : index + 1)
  //   }, 2000)
  //   return () => { clearInterval(stringInterval) }
  // }, [])

  return (
    <>
      <div className="main-section">
        <div className="container">
          <div className="col">
            <div className="main-section-text-wrapper">
              <div className="main-section-heading">
                <h1>{headlineUpper}</h1>
                <AnimatedTitle strings={headlineMiddle}
                  stringIndex={stringIndex}
                  setStringIndex={setStringIndex} />
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
