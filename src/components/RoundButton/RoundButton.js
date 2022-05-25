import React from 'react';
import './RoundButton.css'
function RoundButton({
    size,
    active,
    onClick,
    children,
}) {

    return (
        <button className={`round-button ${size} ${active ? 'btn-active' : ''}`} onClick={onClick}>
            {children}
        </button>
    );
}

export default RoundButton;