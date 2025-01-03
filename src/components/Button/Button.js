import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const Button = ({ onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      Done
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired, // Function to handle button click
};

export default Button;
