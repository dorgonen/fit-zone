import React from 'react';
import './Section.css';
import { Button } from '../../Buttons/Button/Button';
import { Link } from 'react-router-dom';
import { IconButton } from '../../Buttons/IconButton/IconButton';
import ReactPlayer from "react-player"

function Section({
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
      <div
        className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
      >
        <div className='container mobile-centered'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: window.innerWidth <= 960 ? '' : imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <div className='top-line'>{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
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
                  <img src={img} alt={alt} className='home__hero-img' />
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
