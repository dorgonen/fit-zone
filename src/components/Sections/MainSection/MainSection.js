import React, { useEffect, useState } from "react";
import "./MainSection.css";
import { Button } from "../../Button/Button";
import { Link } from "react-router-dom";

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
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((cnt) => (cnt === headlineMiddle.length - 1 ? 0 : cnt + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="main-section">
        <div className="container">
          <div className="col">
            <div className="main-section-text-wrapper">
              <div className="top-line">{topLine}</div>
              <div className="main-section-heading">
                <h1>{headlineUpper}</h1>
                <h1 className="typewriter">{headlineMiddle[index]}</h1>
                <h1>{headlineFooter}</h1>
              </div>
              <p className="main-section-subtitle">{description}</p>
              <Link to="/sign-up">
                <Button buttonSize="btn--wide">{buttonLabel}</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainSection;
