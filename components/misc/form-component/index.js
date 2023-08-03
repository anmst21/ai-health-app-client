import React from "react";

const FormComponent = ({
  input,
  label,
  placeholder,
  meta: { error, touched },
}) => {
  return (
    <div className="login-form__element">
      <label>{label}</label>
      <input
        placeholder={placeholder}
        {...input}
        className="styled-input info-input"
      />
      <div className="">{touched && error}</div>
    </div>
  );
};

export default FormComponent;
