import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import PhotoGalleryPage from "./pages/PhotoGalleryPage/PhotoGalleryPage";
import Home from "./pages/HomePage/Home";
import ContactPage from "./pages/ContactPage/ContactPage";
import LoadingPage from "./pages/LoadingPage/LoadingPage"
import FittingPage from "./pages/FittingPage/FittingPage"
import LessonsPage from "./pages/LessonsPage/LessonsPage";
import RepairingPage from "./pages/RepairingPage/RepairingPage";

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
        <Routes>
          <Route path="/" exact element={<Home></Home>} />
          <Route path="/gallery" element={<PhotoGalleryPage></PhotoGalleryPage>} />
          <Route path="/contact" element={<ContactPage></ContactPage>} />
          <Route path="/fitting" element={<FittingPage></FittingPage>} />
          <Route path="/lessons" element={<LessonsPage></LessonsPage>} />
          <Route path="/repairing" element={<RepairingPage></RepairingPage>} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;