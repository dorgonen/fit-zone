import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline', 'btn--rounded'];
const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide'];
const COLOR = ['primary', 'blue', 'red', 'green', 'white'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor,
  link,
  route,
  tel
}) => {

  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;

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
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
      onClick={handleButtonClick}
      type={type}
    >
      {children}
    </button>
  );
};
