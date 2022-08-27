import React from 'react';
import './Section.css';
import { Button } from '../../Buttons/Button/Button';
import { Link } from 'react-router-dom';
import { IconButton } from '../../Buttons/IconButton/IconButton';
import ReactPlayer from "react-player"

function Section({
  isMobile,
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  video,
  route
}) {
  return (
    <>
      <div className={`section-container ${lightBg ? "lightBg" : "darkBg"}`}>
        <div className='container mobile-centered'>
          <div
            className={`row section-row ${imgStart ? 'img-start' : ''}`}
          >
            <div className='col'>
              <div className='section-text-wrapper'>
                <div className='top-line'>{topLine}</div>
                <h1 className={`heading ${lightText ? "" : "dark"}`}>
                  {headline}
                </h1>
                <p className={`section-subtitle ${lightTextDesc ? '' : 'dark'}`}>
                  {description}
                </p>
                {buttonLabel &&
                  <IconButton buttonSize='btn--wide' route={route} >
                    {buttonLabel}
                  </IconButton>
                }
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                {img &&
                  <img
                    loading="lazy"
                    src={img}
                    alt={alt} className='home__hero-img' />
                }
                {video &&
                  <ReactPlayer
                    url={video}
                    controls
                    height={window.innerWidth <= 960 ? "300px" : "320px"}
                    width={window.innerWidth <= 960 ? "330px" : "420px"}
                    playing
                    muted
                  ></ReactPlayer>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;
