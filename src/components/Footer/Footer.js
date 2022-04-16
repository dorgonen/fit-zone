import React from 'react';
import './Footer.css';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
// import {
//   FaFacebook,
//   FaInstagram,
//   FaYoutube,
//   FaTwitter,
//   FaLinkedin
// } from 'react-icons/fa';
// import { MdFingerprint } from 'react-icons/md';

import { footerData } from './Data'

function Footer() {
  return (
    <div className='footer-container'>
      {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join our exclusive membership to receive the latest news and trends
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section> */}
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
