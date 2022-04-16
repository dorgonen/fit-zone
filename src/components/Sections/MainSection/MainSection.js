import React from 'react';
import './MainSection.css';
import { Button } from '../../Button/Button';
import { Link } from 'react-router-dom';

function MainSection({
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart
}) {
  return (
    <>
      <div
        className={'main-section'}
      >
        <div className='container'>
            <div className='col'>
              <div className='main-section-text-wrapper'>
                <div className='top-line'>{topLine}</div>
                <h1 className="main-section-heading">
                  {headline}
                </h1>
                <p
                  className="main-section-subtitle"
                >
                  {description}
                </p>
                <Link to='/sign-up'>
                  <Button buttonSize='btn--wide' buttonStyle='btn--outline'>
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default MainSection;
