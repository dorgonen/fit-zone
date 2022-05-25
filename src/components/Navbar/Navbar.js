import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../Button/Button";

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
              <NavLink
                to="/fitting"
                className={(link) => link.isActive && window.innerWidth > 960 ? "nav-links underline-active" : "nav-links hover-underline-animation"}
                onClick={closeMobileMenu}
              >
                התאמת אופניים
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/repairing"
                className={(link) => link.isActive && window.innerWidth > 960 ? "nav-links underline-active" : "nav-links hover-underline-animation"}
                onClick={closeMobileMenu}
              >
                סנדאת תיקונים
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/lessons"
                className={(link) => link.isActive && window.innerWidth > 960 ? "nav-links underline-active" : "nav-links hover-underline-animation"}
                onClick={closeMobileMenu}
              >
                חוגי רכיבה
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                to="/products"
                className={(link) => link.isActive && window.innerWidth > 960 ? "nav-links underline-active" : "nav-links hover-underline-animation"}
                onClick={closeMobileMenu}
              >
                מאמרים וכתבות
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink
                to="/gallery"
                className={(link) => link.isActive && window.innerWidth > 960 ? "nav-links underline-active" : "nav-links hover-underline-animation"}
                onClick={closeMobileMenu}
              >
                גלריית תמונות
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={(link) => link.isActive && window.innerWidth > 960 ? "nav-links underline-active" : "nav-links hover-underline-animation"}
                onClick={closeMobileMenu}
              >
                צרו קשר
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
