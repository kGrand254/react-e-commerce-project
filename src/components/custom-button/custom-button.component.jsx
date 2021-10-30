import React from "react";

import "./custom-button.styles.scss";

function CustomButton({ children, ...otherProps }) {
  return (
    <button className="sign-in-btn btn" {...otherProps}>
      {children.toUpperCase()}
    </button>
  );
}

export default CustomButton;
