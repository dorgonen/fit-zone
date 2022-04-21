import React from 'react';
import './IconButton.css';

export const IconButton = ({
    buttonStyle,
    children,
    onClick,
    icon
}) => {
    return (
        <div className='btn-wrapper'>
            <button
                className={`icon-btn ${buttonStyle} `}
                onClick={onClick}
            >
                {children}
                <div className={`${buttonStyle} icon-btn-icon-wrapper`}>
                    <i className={icon ? icon : "fa-solid fa-arrow-left"}></i>
                </div>
            </button>
        </div>
    );
};
