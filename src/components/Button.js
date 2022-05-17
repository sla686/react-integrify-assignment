import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ color, text, type = 'button', onClick }) => {
  return (
    <button
      className="btn"
      style={{ backgroundColor: color }}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
export default Button;
