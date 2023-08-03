import React, { useState, useRef } from "react";
import Dropdown from "../misc/dropdown-component";
import { userDropdown } from "@/utilities/formFields";
import classNames from "classnames";
import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { registerUserInfo } from "@/redux/store/userInfoSlice";
import { submitUserInfo } from "@/redux/thunks/submitUserThunk";

const UserFormSettings = ({ submitRef }) => {
  const userInfo = useSelector((state) => state.userInfo);
  const [value, setValue] = useState({ label: userInfo.activity });
  const [selectedOption, setSelectedOption] = useState(userInfo.time);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: userInfo.name,
      dob: userInfo.dob,
      heightFeet: userInfo.feet,
      heightInch: userInfo.inch,
    },
  });

  const dispatch = useDispatch();

  const onFormSubmit = (data) => {
    const userInfo = {
      activity: value.label,

      time: selectedOption,
      name: data.firstName,
      dob: data.dob,
      feet: data.heightFeet,
      inch: data.heightInch,
    };
    dispatch(submitUserInfo({ details: userInfo }));
    dispatch(registerUserInfo(userInfo));
  };

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className="login-form setting-width"
    >
      <button ref={submitRef} type="submit" className="invisible-btn" />
      <div className="user-form-container">
        <div className="login-form__element flex1">
          <label className={classNames({ "error-label": errors.firstName })}>
            Name:
          </label>
          <input
            className={classNames("styled-input info-input", {
              "error-border": errors.firstName,
            })}
            type="name"
            name="firstName"
            placeholder="Anthony"
            {...register("firstName", { required: true })}
          />
        </div>
        <div className="login-form__element flex1">
          <label
            className={classNames({
              "error-label": errors.dob,
            })}
          >
            DOB:
          </label>
          <input
            className={classNames("styled-input info-input", {
              "error-border": errors.dob,
            })}
            type="date"
            name="dob"
            placeholder="12/18/2000"
            {...register("dob", { required: true })}
          />
        </div>
      </div>
      <div className="user-form-container ">
        <div className="login-form__element flex1">
          <label className={classNames({ "error-label": errors.heightFeet })}>
            Height:
          </label>
          <div className="user-form-container height-container">
            <input
              className={classNames(
                "styled-input info-input height-input height-input__1",
                { "error-border": errors.heightFeet }
              )}
              type="number"
              name="heightFeet"
              placeholder="6"
              {...register("heightFeet", { required: true, min: 1, max: 9 })}
            />
            <input
              className={classNames(
                "styled-input info-input height-input height-input__2",
                { "error-border__inch": errors.heightInch }
              )}
              type="number"
              name="heightInch"
              placeholder="2'"
              {...register("heightInch", { required: true, min: 0, max: 11 })}
            />
          </div>
        </div>
        <div className="login-form__element flex1">
          <label>Activity:</label>
          <Dropdown
            options={userDropdown}
            value={value}
            onChange={(data) => {
              setValue(data);
            }}
          />
        </div>
      </div>
      <div className="radio-element">
        <span className="label-text text-center label-baldness-fix">
          How much time are you usually spend in the kitchen?
        </span>
        <div className="radio-container">
          <div className="radio">
            <label className="radio__label ">
              <input
                type="radio"
                value="Less"
                checked={selectedOption === "Less"}
                onChange={(e) => setSelectedOption(e.target.value)}
                readOnly
              />
              Less
            </label>
          </div>
          <div className="radio">
            <label className="radio__label">
              <input
                type="radio"
                value="Average"
                checked={selectedOption === "Average"}
                onChange={(e) => setSelectedOption(e.target.value)}
                readOnly
              />
              Average
            </label>
          </div>
          <div className="radio">
            <label className="radio__label">
              <input
                type="radio"
                value="More"
                checked={selectedOption === "More"}
                onChange={(e) => setSelectedOption(e.target.value)}
                readOnly
              />
              More
            </label>
          </div>
        </div>
      </div>
    </form>
  );
};

export default UserFormSettings;
