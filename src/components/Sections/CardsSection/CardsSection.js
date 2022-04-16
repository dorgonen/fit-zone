import React from 'react';
import Card from '../../Card/Card';

import './CardsSection.css'

const CardsSection = ({ items, lightBg }) => {
    return (
        <div
            className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
        >
            <div className='container'>
                <div
                    className='row home__hero-row'
                    style={{
                        display: 'flex',
                    }}
                >
                    <div className='cards-col'>
                        {items.map((card, index) =>
                            <div key={index} className='card-wrapper'>
                                <Card title={card.title} text={card.text} img={card.img}></Card>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardsSection;