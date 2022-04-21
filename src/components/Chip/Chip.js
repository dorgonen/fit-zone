import React from 'react';
import './Chip.css';

const noop = () => { }

export const Chip = ({
    text,
    icon,
    active,
    onClick = noop,
}) => {

    return (
        <div className={["chip", active ? "chip-active" : ""].join(" ")} onClick={onClick}>
            {text}
            {icon ? <i className={icon} style={{padding: "5px"}}></i> : ''}
        </div>
    );
};

