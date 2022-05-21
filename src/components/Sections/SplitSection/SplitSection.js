import React from 'react';
import './SplitSection.css';
import { Button } from '../../Button/Button';
import { Link } from 'react-router-dom';
import RoundButton from '../../RoundButton/RoundButton';

function SplitSection({
  items,
  bgImg,
  headline
  // topLine,
  // lightText,
  // lightTextDesc,
  // headline,
  // description,
  // buttonLabel,
  // img,
  // alt,
  // imgStart
}) {
  return (
    <>
      <div className='background-section'
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        {/* <div className='backgroung-section-bg-img'
        >
        </div> */}
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <h1 className='heading dark'>
              {headline}
            </h1>
            <div className='split-section-row'>
              {items.map((item, index) => {
                return (
                  <div key={index} className="split-section-col">
                    <div className='split-section-img-wrapper'>
                      <img src={item.img} alt={item.alt} className='split-section-img' />
                    </div>
                    <div className='split-section-text'>
                      <h3 className='heading-secondary dark'>
                        {item.headline}
                      </h3>
                      <p
                        className={
                          item.lightTextDesc
                            ? 'split-section-subtitle'
                            : 'split-section-subtitle dark'
                        }
                      >
                        {item.description}
                      </p>
                    </div>
                    <div className='split-section-btn'>
                    <Button buttonStyle='btn--outline' buttonColor='red'>קראו עוד</Button>
                      {/* <RoundButton>
                        <i className={item.icon}></i>
                      </RoundButton> */}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SplitSection;
