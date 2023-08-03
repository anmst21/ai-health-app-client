import React from "react";

const ToggleSwitch = ({ onChange }) => {
  return (
    <div className="cccontainer">
      <div className="login-form__element login-form__element-end">
        <label>Vegan:</label>
        <div className="cds-toggle-wrapper">
          <input
            id="toggle-0"
            type="checkbox"
            className="cds-toggle-button"
            onChange={(e) => onChange(e.target.checked)}
          />
          <label htmlFor="toggle-0" className="cds-toggle-label"></label>
        </div>
      </div>
    </div>
  );
};

export default ToggleSwitch;
