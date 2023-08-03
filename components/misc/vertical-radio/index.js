import React, { useState } from "react";
const VerticalRadio = ({ data, value, setValue }) => {
  const handleChange = (event) => {
    setValue(Number(event.target.value));
  };

  return (
    <form action="">
      <div className="vertical-radio">
        {data.map((item, index) => (
          <input
            key={index}
            className="progress-icon progress-icon__opaque"
            type="radio"
            value={index}
            checked={value === index}
            onChange={handleChange}
          />
        ))}
      </div>
    </form>
  );
};

export default VerticalRadio;
