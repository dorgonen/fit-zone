import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import PhotoGalleryPage from "./pages/PhotoGalleryPage/PhotoGalleryPage";
import Home from "./pages/HomePage/Home";
import ContactPage from "./pages/ContactPage/ContactPage";
import LoadingPage from "./pages/LoadingPage/LoadingPage"

class AppClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isScrolled: false,
            isMobile: false,
            isLoading: true
        };
    }

    handleScroll = () => {
        if (window.pageYOffset === 0) {
            this.setState({ IsScrolled: false });
        } else {
            this.setState({ IsScrolled: true });
        }
    };

    handleResize = () => {
        if (window.innerWidth <= 960) {
            this.setState({ isMobile: true })
        } else {
            this.setState({ isMobile: false })
        }
    };

    componentDidMount = () => {
        this.handleResize();
        window.addEventListener("resize", this.handleResize);
        window.onscroll = this.handleScroll;
        document.ontouchmove = this.handleScroll;
        setTimeout(() => {
            this.setState({ isLoading: false })
        }, 3000)
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
        window.onscroll = null;
        document.body.ontouchmove = null;
    }

    render() {
        return (
            this.state.isLoading ?
                <LoadingPage isMobile={this.state.isMobile} /> :
                <Router>
                    <Navbar isScrolled={this.state.isScrolled} />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/gallery" component={PhotoGalleryPage} />
                        <Route path="/contact" component={ContactPage} />
                    </Switch>
                    <Footer />
                </Router>
        );
    }
}

export default AppClass;