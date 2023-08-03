import { useState, useEffect } from "react";
import ImgUpload from "./ImgUpload";
import Dropdown from "../../misc/dropdown-component";
import { userDropdown } from "@/utilities/formFields";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import classNames from "classnames";
import { registerUserInfo } from "@/redux/store/userInfoSlice";
import { submitUserInfo } from "@/redux/thunks/submitUserThunk";

import { useRouter } from "next/router";

const UserInfoField = () => {
  const userInfo = useSelector((state) => state.userInfo);

  const [selectedOption, setSelectedOption] = useState(userInfo.time);
  const [selection, setSelection] = useState({ label: userInfo.activity });
  console.log("user info", selectedOption);
  const dispatch = useDispatch();

  const router = useRouter();

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

  const onValueChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSelect = (option) => {
    setSelection(option);
  };

  const onSubmit = (data) => {
    const userInfo = {
      activity: selection.label,
      time: selectedOption,
      name: data.firstName,
      dob: data.dob,
      feet: data.heightFeet,
      inch: data.heightInch,
    };

    dispatch(submitUserInfo({ details: userInfo }));
    dispatch(registerUserInfo(userInfo));

    router.push("/user-info/preferences");
  };

  return (
    <div>
      <form
        className="login-form mt-user-info"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <ImgUpload />
        </div>
        <div className="user-form-container">
          <div className="login-form__element flex1">
            <label className={classNames({ "error-label": errors.firstName })}>
              Your Name:
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
                placeholder='6"'
                {...register("heightFeet", { required: true })}
              />
              <input
                className={classNames(
                  "styled-input info-input height-input height-input__2",
                  { "error-border__inch": errors.heightInch }
                )}
                type="number"
                name="heightInch"
                placeholder="2'"
                {...register("heightInch", { required: true })}
              />
            </div>
          </div>
          <div className="login-form__element flex1">
            <label>Activity:</label>
            <Dropdown
              options={userDropdown}
              value={selection}
              onChange={handleSelect}
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
                  onChange={onValueChange}
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
                  onChange={onValueChange}
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
                  onChange={onValueChange}
                  readOnly
                />
                More
              </label>
            </div>
          </div>
        </div>
        <div className="btn-container">
          <button className="btn btn__blue" type="submit">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserInfoField;
