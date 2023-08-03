import { useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { createPost } from "@/redux/thunks/createPostThunk";
import router from "next/router";

import { useForm } from "react-hook-form";

import Dropdown from "@/components/misc/dropdown-component";
import BgUpload from "./BgUpload";
import ToggleSwitch from "./ToggleSwitch";
import { dietOptions, weightOptions } from "@/utilities/formFields";

const ScheduleCreate = () => {
  const [selectionOne, setSelectionOne] = useState("");
  const [selectionTwo, setSelectionTwo] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [isVegan, setIsVegan] = useState(false);
  console.log(imageFile);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSwitchChange = (newState) => {
    setIsVegan(newState);
  };

  const handleSelectOne = (option) => {
    setSelectionOne(option);
  };
  const handleSelectTwo = (option) => {
    setSelectionTwo(option);
  };

  const onFileSubmit = (file) => {
    setImageFile(file);
  };

  const dispatch = useDispatch();

  const formSubmit = (data) => {
    const formData = new FormData();

    // Append the relevant fields to the formData object
    formData.append("vegan", isVegan);
    formData.append("style", selectionOne.label);
    formData.append("goal", selectionTwo.label);
    formData.append("planName", data.planName);
    formData.append("planDesc", data.planDesc);
    formData.append("profileImage", imageFile);

    // Send the post request with the formData object
    dispatch(createPost(formData));

    // Navigate away after the post request
    router.push("/app");
  };

  return (
    <div className="schedule-form-container ">
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="login-form schedule-form-container__margin"
      >
        <BgUpload onChange={onFileSubmit} register={register} errors={errors} />

        <div className="bg-text-container text-container z-index-infini text-invet-color">
          <h1 className="text-invet-color__item ">Your schedule</h1>
          <h4 className="text-invet-color__item ">
            AI will build you a schedule according to your preferences and a
            title information you provide below
          </h4>
        </div>
        <div className="btn-right-container">
          <div className="login-form">
            <div className="login-form__element login-form__element--margin-fix">
              <label className={classNames({ "error-label": errors.planName })}>
                Plan Name:
              </label>
              <input
                className={classNames("info-input styled-input", {
                  "error-border": errors.planDesc,
                })}
                type="input"
                name="name"
                placeholder="My Sports Plan"
                {...register("planName", { required: true })}
              />
            </div>
            <div className="user-form-container ">
              <div className="login-form__element flex1">
                <label>Style:</label>
                <Dropdown
                  options={dietOptions}
                  value={selectionOne}
                  onChange={handleSelectOne}
                />
              </div>
              <div className="login-form__element flex1">
                <label>Goal:</label>
                <Dropdown
                  options={weightOptions}
                  value={selectionTwo}
                  onChange={handleSelectTwo}
                  scrollFix
                />
              </div>
            </div>
            <div className="login-form__element login-form__element--margin-fix">
              <label className={classNames({ "error-label": errors.planName })}>
                Plan Description:
              </label>
              <textarea
                className={classNames(
                  "info-input styled-input styled-input--heigth-fix",
                  {
                    "error-border": errors.planDesc,
                  }
                )}
                type="email"
                name="name"
                placeholder="Write everything you like here"
                {...register("planDesc", { required: true })}
              />
            </div>
            <ToggleSwitch onChange={handleSwitchChange} />
          </div>
          <button className="btn-flipped">
            <Image
              className="btn-flipped__img"
              alt="arrow-btn"
              htmlFor="photo-upload"
              src="/arrow-btn.svg"
              width={53}
              height={45}
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ScheduleCreate;
