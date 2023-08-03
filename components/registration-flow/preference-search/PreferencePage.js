import React, { useState, useEffect } from "react";
import SelectComponent from "./SelectComponent";
import { useRouter } from "next/router";
import { fetchUserInfo } from "@/redux/thunks/fetchUserThunk";

import { optionsPreference } from "@/utilities/formFields";
import {
  submitUserInfo,
  submitUserPreferences,
} from "@/redux/thunks/submitUserThunk";
import { useDispatch, useSelector } from "react-redux";

const PreferencePage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const selectedOptions = useSelector((state) => state.options.preference);
  const valuesArray = selectedOptions.map((option) => option.label);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserInfo());
  }, []);

  const router = useRouter();

  const handleClick = () => {
    if (selectedOptions.length < 5) {
      setFormSubmitted(true);
    } else {
      dispatch(submitUserPreferences(valuesArray));
      console.log(valuesArray);
      router.push("/user-info/indiferencies");
    }
  };
  return (
    <div className="login-container">
      <div className="text-container">
        <h1>Tell us your preferences!</h1>
        <h4>Create a list of products you like the most:</h4>
      </div>
      <div className="preference-container ">
        <SelectComponent
          blue
          loadOptions={optionsPreference}
          submitted={formSubmitted}
        />
        <div className="btn-container">
          <button onClick={handleClick} className="btn btn__blue" type="submit">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreferencePage;
