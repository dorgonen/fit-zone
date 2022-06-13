import React from 'react';
import './Footer.css';
import { Button } from '../Buttons/Button/Button';
import RoundButton from '../Buttons/RoundButton/RoundButton';
import { Link } from 'react-router-dom';

import { footerData, mobileFooterData } from './Data'

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-subscription'>
        <div>
          <p className='footer-subscription-text'>
            צרו איתנו קשר ונגנוב לכם את הכסף
          </p>
        </div>
        <div className='footer-subscription-buttons'>
          <Button buttonColor='white' route="/contact">צרו קשר</Button>
          <Button buttonStyle='btn--outline' route="/contact">מי אנחנו</Button>
        </div>
      </div>
      <div className='footer-links'>
        {footerData.map((column, columnIndex) =>
          <div key={columnIndex} className='footer-link-wrapper'>
            {column.map((linkItems, linkIndex) =>
              <div key={linkIndex} className='footer-link-items' >
                <h2>{linkItems.title}</h2>
                {linkItems.links.map((linkItem, linkItemIndex) =>
                  <Link key={linkItemIndex} to={linkItem.link}
                    className={linkItem.className}
                    target={linkItem.target}>
                    {linkItem.icon}
                    {" "}
                    {linkItem.label}
                  </Link>)}
              </div>)}
          </div>)}
      </div>

      {mobileFooterData.map((mobileSection, mobileSectionIndex) => {
        return <section className='social-media' key={mobileSectionIndex}>
          <div className='social-media-wrap'>
            <div className='container mobile-centered' style={{ flexDirection: 'column' }}>
              <h2 className='footer-title'>{mobileSection.headline}</h2>
              <div className='social-media-buttons-wrapper'>
                {mobileSection.items.map((item, index) => {
                  return (
                    <div key={index} className="social-media-button" >
                      {item.icon &&
                        <div className='split-section-btn' key={index}>
                          <RoundButton link={item.link}>
                            <i className={item.icon}></i>
                          </RoundButton>
                        </div>
                      }
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      })}
      <p className='footer-copyright'>Fitzone © 2022</p>
    </div >
  );
}

export default Footer;
