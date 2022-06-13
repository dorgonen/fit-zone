import React from 'react';
import './Footer.css';
import { Button } from '../Buttons/Button/Button';
import { Link } from 'react-router-dom';

import { footerData } from './Data'

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-subscription'>
        {/* <p className='footer-subscription-heading'>
        צרו איתנו קשר ונגנוב לכם את הכסף
        </p> */}
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

      <section className='social-media'>
        <div className='social-media-wrap'>
          <small className='website-rights'>FITZOZE © 2022</small>
        </div>
      </section>
    </div >
  );
}

export default Footer;
