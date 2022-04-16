import React from 'react';

import './Card.css'
const Card = ({ img, title, text }) => {
    return (
        <div className="card-container">
            <div className="card-img-container" style={{ backgroundImage: `url(${img})` }}>
            </div>
            <h2 className='card-title'>{title}</h2>
            <p>{text}</p>
        </div>
    );
};

export default Card;