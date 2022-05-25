import React, { useState } from 'react';
import RoundButton from '../RoundButton/RoundButton';

import './Card.css'
const Card = ({ img, title, text }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    return (
        <div className="card-container">
            <div className="card-img-container" style={{ backgroundImage: `url(${img})` }}></div>
            <div className='card-content'>
                <h3 className='card-title'>{title}</h3>
                <p>{text}</p>
                <div className='card-actions'>
                    <RoundButton size='small' active={isExpanded} onClick={() =>setIsExpanded(value => !value)}>
                        <i className={isExpanded ? 'fa-solid fa-angle-down icon-expanded' : 'fa-solid fa-angle-down'} ></i>
                    </RoundButton>
                </div>
                <div className={isExpanded ? "card-collapsible-data expanded" : "card-collapsible-data"}>
                    akakaka ukukukuku akakaka ukukukuku akakaka ukukukuku akakaka ukukukuku akakaka
                </div>
            </div>
        </div>
    );
};

export default Card;