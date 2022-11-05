import React from 'react';
import './SubSection.css';
import { Button } from '../../Buttons/Button/Button';
import { Link } from 'react-router-dom';
import { IconButton } from '../../Buttons/IconButton/IconButton';
import ReactPlayer from "react-player"

function SubSection({
  isMobile,
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  descriptions,
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
          {headline &&
            <div className={`row section-row`}>
              <h1 className={`heading ${lightText ? "" : "dark"}`}>
                {headline}
              </h1>
            </div>
          }
          <div
            className={`row section-row ${imgStart ? 'img-start' : ''}`}
          >
            <div className='top-line'>{topLine}</div>
            <div className={`col section-text-wrapper ${img || video ? 'col' : 'text-only'}`}>
              {descriptions}
              {buttonLabel &&
                <IconButton buttonSize='btn--wide' route={route} >
                  {buttonLabel}
                </IconButton>
              }
            </div>
            {(img || video) &&
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
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default SubSection;
