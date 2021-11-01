import React from "react";

import "./custom-button.styles.scss";

function CustomButton({ children, isGoogleSignIn, ...otherProps }) {
  return (
    <button
      className={`sign-in-btn ${isGoogleSignIn ? "google-sign-in" : ""} btn`}
      {...otherProps}
    >
      {children.toUpperCase()}
    </button>
  );
}

export default CustomButton;
