import React from "react";
import "./FormInput.css";

const FormInput = ({ id, labelName,inputType, placeholder, ...rest }) => {
  return (
    <div className="container">
      <label htmlFor={id}>{labelName}</label>
      <input
        type={inputType}
        id={id}
        placeholder={placeholder || "..."}
        {...rest}
      />
    </div>
  );
};

export default FormInput;
