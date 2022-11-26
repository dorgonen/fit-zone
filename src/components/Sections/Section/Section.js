import React, { useState, useEffect } from 'react';
import './Section.css';
import { Button } from '../../Buttons/Button/Button';
import RoundButton from '../../Buttons/RoundButton/RoundButton';
import { Link } from 'react-router-dom';
import { IconButton } from '../../Buttons/IconButton/IconButton';
import ReactPlayer from "react-player"
import AOS from 'aos';
import 'aos/dist/aos.css';

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
  additionalDescriptions = [],
  route
}) {
  const [isExpandedArray, setIsExpandedArray] = useState(Array.from({ length: additionalDescriptions.length }), false);

  const handleExpandedClick = (paragraphIndex) => {
    const newArray = [...isExpandedArray]
    newArray[paragraphIndex] = !newArray[paragraphIndex]
    setIsExpandedArray(newArray)
  }

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <div className={`section-container ${lightBg ? "lightBg" : "darkBg"}`}>
        <div className='container mobile-centered'>
          <div
            className={`row section-row ${imgStart ? 'img-start' : ''}`}
          >
            <div className='col'>
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
                className='section-text-wrapper'>
                <div className='top-line'>{topLine}</div>
                <h1 className={`heading ${lightText ? "" : "dark"}`}>
                  {headline}
                </h1>
                <p className={`section-subtitle ${lightTextDesc ? '' : 'dark'}`}>
                  {(Array.isArray(description) ? description : [description]).map((item, index) =>
                    <React.Fragment key={index}>
                      <br />{item}
                    </React.Fragment>
                  )
                  }
                </p>
                {buttonLabel &&
                  <IconButton dataAos="zoom-in" dataAosDelay={800} buttonSize='btn--wide' route={route} >
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
          {(additionalDescriptions).map((paragraph, paragraphIndex) =>
            <div key={paragraphIndex} className="row section-row">
              <div className='additional-description-text-wrapper'>
                {paragraph.headline &&
                  <h5 className={`sub-heading ${lightText ? "" : "dark"}`}>
                    {paragraph.headline}
                  </h5>
                }
                {isExpandedArray[paragraphIndex] ?
                  paragraph.descriptions.map((description, innerIndex) =>
                    <p key={innerIndex} className={`additional-description-subtitle ${lightTextDesc ? '' : 'dark'}`}>
                      {description}
                    </p>) :
                  <p className={`additional-description-subtitle ${lightTextDesc ? '' : 'dark'}`}>
                    {`${paragraph.descriptions[0].substring(0, 400)}...`}
                  </p>
                }
                <div style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
                  <RoundButton size='small' active={isExpandedArray[paragraphIndex]} onClick={() => handleExpandedClick(paragraphIndex)}>
                    <i className={isExpandedArray[paragraphIndex] ? 'fa-solid fa-angle-down icon-expanded' : 'fa-solid fa-angle-down'} ></i>
                  </RoundButton>
                  {isExpandedArray[paragraphIndex] ?
                    <h5 className='dark'>צמצם</h5>
                    :
                    <h5 className='dark'>המשך לקרוא</h5>
                  }
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
}

export default Section;
