import React, { useState, useEffect, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import LoadingPage from "./pages/LoadingPage/LoadingPage"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"
import { lazyLoading } from "./utils";


const Home = lazyLoading("./pages/HomePage/Home", 1000);
const PhotoGalleryPage = lazyLoading("./pages/PhotoGalleryPage/PhotoGalleryPage", 800);
const FittingPage = lazyLoading("./pages/FittingPage/FittingPage", 800);
const LessonsPage = lazyLoading("./pages/LessonsPage/LessonsPage", 800);
const RepairingPage = lazyLoading("./pages/RepairingPage/RepairingPage", 800);
const ContactPage = lazyLoading("./pages/ContactPage/ContactPage", 800);

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <Suspense fallback={<LoadingPage isMobile={isMobile} />}>
      <Router>
        <Navbar isScrolled={isScrolled} />
        <ScrollToTop>
          <Routes>
            <Route path="/" exact element={<Home isMobile={isMobile}></Home>} />
            <Route path="/gallery" element={<PhotoGalleryPage></PhotoGalleryPage>} />
            <Route path="/contact" element={<ContactPage></ContactPage>} />
            <Route path="/fitting" element={<FittingPage></FittingPage>} />
            <Route path="/lessons" element={<LessonsPage></LessonsPage>} />
            <Route path="/repairing" element={<RepairingPage></RepairingPage>} />
          </Routes>
        </ScrollToTop>
        <Footer />
        <a
          href="https://api.whatsapp.com/send?phone=9720502618403"
          className="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-whatsapp whatsapp-icon"></i>
        </a>
      </Router>
    </Suspense>

  );
}

export default App;