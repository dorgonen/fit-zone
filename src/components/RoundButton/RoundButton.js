import React from 'react';
import './RoundButton.css'
function RoundButton({
    children,
}) {

    return (
        <button className='round-button'>
            {children}
        </button>
    );
}

export default RoundButton;