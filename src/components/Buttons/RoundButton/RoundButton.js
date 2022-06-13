import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './RoundButton.css'

function RoundButton({
    size,
    active,
    onClick = () => { },
    children,
    link,
    route,
    tel
}) {
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate(route, { replace: true }), [navigate]);

    const handleButtonClick = (event) => {
        if (link) {
            window.open(`${link}`, '_blank')
        }
        else if (route) {
            handleOnClick()
        }
        else if (tel) {
            document.location.href = `tel:${tel}`;
        }
        else onClick(event);
    }

    return (
        <button className={`round-button ${size} ${active ? 'btn-active' : ''}`} onClick={handleButtonClick}>
            {children}
        </button>
    );
}

export default RoundButton;