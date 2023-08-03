import React from "react";
import classNames from "classnames";

const LoginField = ({ label, name, placeholder, register, errors }) => {
  return (
    <div className="login-form__element">
      <label className={classNames({ "error-label": errors[name] })}>
        {label}
      </label>
      <input
        {...register(name)}
        placeholder={placeholder}
        className={classNames("styled-input info-input", {
          "error-border": errors[name],
        })}
        type={name === "Password" || name === "Password2" ? "password" : "text"}
      />
      {errors[name] && (
        <span className="info-input__error">{errors[name]?.message}</span>
      )}
    </div>
  );
};

export default LoginField;
