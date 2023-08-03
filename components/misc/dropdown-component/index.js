import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import classNames from "classnames";

function Dropdown({ heightFix, options, value, onChange, scrollFix }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  const optionsClasses = classNames({
    "dropdown__options--container": true,
    "scroll-fix": scrollFix,
    "height-fix": heightFix,
  });

  useEffect(() => {
    const handler = (event) => {
      if (divEl.current && !divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions =
    options &&
    options.map((option) => {
      return (
        <div
          className="dropdown__options--item styled-input"
          onClick={() => handleOptionClick(option)}
          key={option.value}
        >
          {option.label}
        </div>
      );
    });

  return (
    <div ref={divEl} className="dropdown" tabIndex="0">
      <div
        className="dropdown__input info-input styled-input"
        onClick={handleClick}
      >
        <span className="dropdown__input--text">
          {value?.label || "Select..."}
        </span>

        <div
          className={classNames({
            "dropdown__input--chevron": true,
            "dropdown__input--chevron__flipped": isOpen,
          })}
        >
          <Image
            alt="chevron-down"
            src="/chevron-down.svg"
            width="10"
            height="22"
          />
        </div>
      </div>
      {isOpen && <div className={optionsClasses}>{renderedOptions}</div>}
    </div>
  );
}

export default Dropdown;
