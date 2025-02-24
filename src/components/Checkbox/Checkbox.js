import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const Checkbox = ({ label, isChecked, onToggle, labelClass }) => {
  return (
    <label className={`checkbox-label ${labelClass || ""}`} onClick={onToggle}>
      {label}
      <span className={`checkbox ${isChecked ? "checked" : ""}`}>
        <svg
          width="14"
          height="10"
          viewBox="0 0 14 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 1L9.22857 4.77143L5.45714 8.54286L1 4.42857"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </span>
    </label>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  labelClass: PropTypes.string,
};

Checkbox.defaultProps = {
  labelClass: "",
};

export default Checkbox;
