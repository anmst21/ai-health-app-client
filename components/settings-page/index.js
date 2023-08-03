import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import classNames from "classnames";
import UserFormSettings from "./UserFormSettings";
import SelectComponent from "../registration-flow/preference-search/SelectComponent";
import { optionsPreference, optionsIndifference } from "@/utilities/formFields";
import SettingsLinks from "./SettingsLinks";
import ImgUpload from "../registration-flow/user-info-screen/ImgUpload";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserInfo } from "@/redux/thunks/fetchUserThunk";

import {
  submitUserIndifferences,
  submitUserPreferences,
} from "@/redux/thunks/submitUserThunk";

const SettingsPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openState, setOpenState] = useState({
    one: false,
    two: false,
    three: false,
  });
  const { one, two, three } = openState;

  const submitRef = useRef(null);
  const preferenceRef = useRef(null);
  const indiferenceRef = useRef(null);

  const dispatch = useDispatch();
  const options = useSelector((state) => state.options);
  const valuesPreference = options.preference.map((option) => option.label);
  const valuesIndiference = options.indifference.map((option) => option.label);

  useEffect(() => {
    dispatch(fetchUserInfo());
  }, []);

  const onSettingsSubmit = () => {
    if (submitRef.current) {
      submitRef.current.click();
    }
    if (preferenceRef.current) {
      if (options.preference.length < 5) {
        setFormSubmitted(true);
      } else {
        dispatch(submitUserPreferences(valuesPreference));
      }
    }
    if (indiferenceRef.current) {
      if (options.indifference.length < 5) {
        setFormSubmitted(true);
      } else {
        dispatch(submitUserIndifferences(valuesIndiference));
      }
    }
  };

  return (
    <div className="settings-page">
      <div className="settings-page__header ">
        <div className="main-screen__absolute--header">
          <div className="settings-page__header--text ">
            <h1>Settings</h1>
          </div>
        </div>
        <ImgUpload />
      </div>
      <div className="settings-page__dropdown">
        {(one || two || three) && (
          <button
            type="submit"
            className="add-home-btn settings-page__submit"
            onClick={onSettingsSubmit}
          >
            <Image
              alt="add-post-button"
              src="/save-changes-settings.svg"
              width={40}
              height={40}
              className="add-home-btn__style"
            />
          </button>
        )}

        <div className="settings-page__dropdown--corner">
          <div
            className="settings-page__dropdown--element settings-page__dropdown--element-1"
            onClick={() => {
              setOpenState((prevState) => ({
                ...prevState,
                one: !openState.one,
              }));
            }}
          >
            <h2>Personal Info</h2>
            <Image
              className={classNames({
                "chevron-flipped": one,
              })}
              alt="chevron-down"
              src="/chevron-down.svg"
              width="30"
              height="66"
            />
          </div>
          <hr class="settings-page__dropdown--line" />
          {openState.one && (
            <>
              <div className="settings-page__dropdown--container">
                <UserFormSettings submitRef={submitRef} />
              </div>

              <hr class="settings-page__dropdown--line" />
            </>
          )}

          <div
            className="settings-page__dropdown--element"
            onClick={() => {
              setOpenState((prevState) => ({
                ...prevState,
                two: !openState.two,
              }));
            }}
          >
            <h2>Preferences</h2>
            <Image
              className={classNames({
                "chevron-flipped": two,
              })}
              alt="chevron-down"
              src="/chevron-down.svg"
              width="30"
              height="66"
            />
          </div>
          <hr className="settings-page__dropdown--line" />
          {openState.two && (
            <>
              <div
                ref={preferenceRef}
                className="settings-page__dropdown--pref"
              >
                <div className="setting-width">
                  <SelectComponent
                    blue
                    loadOptions={optionsPreference}
                    submitted={formSubmitted}
                    option={options}
                  />
                </div>
              </div>
              <hr className="settings-page__dropdown--line" />
            </>
          )}

          <div
            className="settings-page__dropdown--element settings-page__dropdown--element-2"
            onClick={() => {
              setOpenState((prevState) => ({
                ...prevState,
                three: !openState.three,
              }));
            }}
          >
            <h2>Indifiriencies</h2>
            <Image
              className={classNames({
                "chevron-flipped": three,
              })}
              alt="chevron-down"
              src="/chevron-down.svg"
              width="30"
              height="66"
            />
          </div>

          {openState.three && (
            <>
              <hr className="settings-page__dropdown--line" />
              <div
                ref={indiferenceRef}
                className="settings-page__dropdown--pref"
              >
                <div className="setting-width">
                  <SelectComponent
                    red
                    loadOptions={optionsIndifference}
                    submitted={formSubmitted}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <SettingsLinks />
    </div>
  );
};

export default SettingsPage;
