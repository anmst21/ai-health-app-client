import { useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import Dropdown from "@/components/misc/dropdown-component";
import {
  addPreferenceOption,
  removePreferenceOption,
  addIndifferenceOption,
  removeIndifferenceOption,
} from "@/redux/store/selectSlice";

const SelectComponent = ({ loadOptions, red, blue, submitted }) => {
  const [selection, setSelection] = useState();
  const dispatch = useDispatch();

  let selectedOptions;
  console.log(selectedOptions);
  if (blue) {
    selectedOptions = useSelector((state) => state.options.preference);
  } else if (red) {
    selectedOptions = useSelector((state) => state.options.indifference);
  }

  const buttonClass = classNames({
    "options-list__container--red": red,
    "options-list__container--blue": blue,
  });

  const handleChange = (option) => {
    if (blue) {
      dispatch(addPreferenceOption(option));
    } else if (red) {
      dispatch(addIndifferenceOption(option));
    }
  };

  const handleRemove = (option) => {
    console.log(option);
    if (blue) {
      dispatch(removePreferenceOption(option));
    } else if (red) {
      dispatch(removeIndifferenceOption(option));
    }
  };

  return (
    <div className="preference-selection">
      <div className="login-form__element margin-0">
        <label htmlFor="select">Search:</label>
        <Dropdown
          heightFix
          options={loadOptions}
          value={selection}
          onChange={handleChange}
        />
        {selectedOptions.length < 5 && submitted && (
          <span className="info-input__error">Add at least 5 options!</span>
        )}
      </div>
      <div className="login-form__element">
        <label htmlFor="async select">Selected Options</label>
        <ul className="options-list">
          {selectedOptions &&
            selectedOptions.map((option, index) => (
              <div className={buttonClass} key={index}>
                <li className="options-list__item">
                  {option.label}
                  <Image
                    alt="remove icon"
                    htmlFor="rm-icon"
                    src="/rm-icon-sm.svg"
                    width={12}
                    height={12}
                    className="options-list__image"
                    onClick={() => handleRemove(option)}
                  />
                </li>
              </div>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectComponent;
