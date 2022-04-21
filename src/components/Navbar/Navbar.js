import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
// import { MdFingerprint } from 'react-icons/md';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { IconContext } from 'react-icons/lib';

import "./Navbar.css";

const logoLinks = {
  white: "images/fitzonelogo.png",
  black: "images/fitzonelogoblack.png",
};

function Navbar({ isScrolled }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleMobileMenuClick = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* <IconContext.Provider value={{ color: '#fff' }}> */}
      <nav className={["navbar", isScrolled ? "scroll" : ""].join(" ")}>
        <div className="navbar-container container">
          <Link
            to="/"
            className={[
              "navbar-logo",
              isScrolled || isMobileMenuOpen ? "" : "hidden",
            ].join(" ")}
            onClick={closeMobileMenu}
          >
            <img
              src={logoLinks.black}
              alt="fitzone-logo"
              className="navbar-icon"
            />
          </Link>
          <Link
            to="/"
            className={[
              "navbar-logo",
              isScrolled || isMobileMenuOpen ? "hidden" : "",
            ].join(" ")}
            onClick={closeMobileMenu}
          >
            <img
              src={logoLinks.white}
              alt="fitzone-logo"
              className="navbar-icon"
            />
          </Link>
          <div
            className={isMobileMenuOpen ? "menu-icon active" : "menu-icon"}
            onClick={handleMobileMenuClick}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <ul className={isMobileMenuOpen ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links hover-underline-animation"
                onClick={closeMobileMenu}
              >
                התאמת אופניים
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links hover-underline-animation"
                onClick={closeMobileMenu}
              >
                סנדאת תיקונים
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links hover-underline-animation"
                onClick={closeMobileMenu}
              >
                חוגי רכיבה
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links hover-underline-animation"
                onClick={closeMobileMenu}
              >
                מאמרים וכתבות
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/gallery"
                className="nav-links hover-underline-animation"
                onClick={closeMobileMenu}
              >
                גלריית תמונות
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links hover-underline-animation"
                onClick={closeMobileMenu}
              >
                צרו קשר
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* </IconContext.Provider> */}
    </>
  );
}

export default Navbar;
