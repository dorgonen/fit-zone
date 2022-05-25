import React, { useEffect } from 'react';
import './LoadingPage.css'
const LoadingPage = ({ isMobile }) => {

    useEffect(() => {
        document.body.classList.add('background-primary');
        return () => {
            document.body.classList.remove('background-primary');
        }
    }, [])
    return (
        <div className="loading-page-container">
            <div className={isMobile ? "loading-img-container-mobile" : "loading-img-container"}>
                <img src="images/bicycle-wheel-white.png" className='spinning-wheel'></img>
            </div>
        </div>
    );
};

export default LoadingPage;