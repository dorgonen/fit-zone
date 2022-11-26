import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './IconButton.css';

export const IconButton = ({
    buttonStyle,
    children,
    onClick,
    icon,
    link,
    route,
    dataAos,
    dataAosDelay
}) => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate(route, { replace: true }), [navigate]);

    const handleButtonClick = (event) => {
        if (link) {
            window.open(`${link}`, '_blank')
        }
        else if (route) {
            handleOnClick()
        }
        else onClick(event);
    }

    return (
        <div data-aos={dataAos}
            data-aos-delay={dataAosDelay}
            className='btn-wrapper'>
            <button
                className={`icon-btn ${buttonStyle} `}
                onClick={handleButtonClick}
            >
                {children}
                <div className={`${buttonStyle} icon-btn-icon-wrapper`}>
                    <i className={icon ? icon : "fa-solid fa-arrow-left"}></i>
                </div>
            </button>
        </div>
    );
};
