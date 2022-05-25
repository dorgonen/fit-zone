import React from 'react';

import './Map.css'
const Map = ({ headline, description }) => {
    return (
        <div className='map-section'>
            <div className={window.innerWidth > 960 ? 'container' : 'mobile-centered'} >
                <div className='row home__hero-row' style={{
                    flexDirection: window.innerWidth ? 'row' : 'column'
                }} >
                    <div className='col'>
                        <div className='split-section-text'>
                            <h3
                                className='heading dark'
                            >
                                {headline}
                            </h3>
                            <p
                                className={'split-section-subtitle dark'}
                            >
                                {description}
                            </p>
                        </div>
                    </div>
                    <div className='col'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3355.9101109838625!2d35.076454828520916!3d32.741577470416864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151db1835f98729b%3A0xb94fb7015d149b17!2z16TXmdeYLdeW15XXnyDXmdeS15XXqCA6INeU16rXkNee16og15DXldek16DXmdeZ150g157Xp9em15XXoteZ16osINeh15PXoNeqINeq15nXp9eV16DXmdedINeV157Xm9eZ16jXlA!5e0!3m2!1sen!2sil!4v1653390944020!5m2!1sen!2sil" width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Map;