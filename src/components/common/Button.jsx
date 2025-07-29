import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

function Button({ text, variant = 'primary', onClick, to, type = 'button' }) {
  const buttonClasses = `btn btn-${variant}`;
  if (to) {
    return (
      <Link to={to} className={buttonClasses}>
        {text}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={buttonClasses}>
      {text}
    </button>
  );
}

export default Button;