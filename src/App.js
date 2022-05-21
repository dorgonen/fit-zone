import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import PhotoGalleryPage from "./pages/PhotoGalleryPage/PhotoGalleryPage";
import Home from "./pages/HomePage/Home";
import Contact from "./pages/Contact/Contact";
import LoadingPage from "./pages/LoadingPage/LoadingPage"

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleScroll = () => {
    if (window.pageYOffset === 0) {
      setIsScrolled(false);
    } else {
      setIsScrolled(true);
    }
  };

  const handleResize = () => {
    if (window.innerWidth <= 960) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    window.onscroll = handleScroll;
    document.ontouchmove = handleScroll;
    return () => {
      window.onscroll = null;
      document.body.ontouchmove = null;
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000)
  }, []);

  return (
    isLoading ?
      <LoadingPage isMobile={isMobile} /> :
      <Router>
        <Navbar isScrolled={isScrolled} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/gallery" component={PhotoGalleryPage} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
  );
}

export default App;
