import React from "react";

import "./form-input.styles.scss";

function FormInput({ handleChange, label, ...otherProps }) {
  return (
    <div className="form-group">
      {label ? <label htmlFor={otherProps.name}>{label}</label> : null}
      <input className="form-control" onChange={handleChange} {...otherProps} />
    </div>
  );
}

export default FormInput;
