import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useVerifyOTPMutation } from "@/redux/api/apiSlice";
import { useRouter } from "next/router";
import Countdown from "react-countdown";
import { useNewOtpMutation } from "@/redux/api/apiSlice";
import { registerEmail } from "@/redux/store/userSlice";

let currentOtpIndex = 0;

const OTPField = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [activeOtpIndex, setActiveOtpIndex] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [verifyOTP] = useVerifyOTPMutation();
  const inputRef = useRef();

  const data = useSelector((state) => state.user);
  const date = new Date(data.otpExpires);

  const [newOtp] = useNewOtpMutation();
  const router = useRouter();

  const onSubmit = async (event) => {
    event.preventDefault();

    if (otp.every((input) => input !== "")) {
      console.log("All inputs are populated, submit the form");
      try {
        const response = await verifyOTP({
          email: data.email,
          otp: otp.join(""),
        }).unwrap();
        console.log(response);

        router.push("/auth");
      } catch (error) {
        console.error("OTP failed:", error);
      }
    } else {
      console.log("Not all inputs are populated, show an error");
      setFormSubmitted(true);
    }
  };

  const handleResendOTP = async () => {
    try {
      const response = await newOtp({ email: data.email }).unwrap();

      // After a successful action, you can do something with the response
      console.log("A new OTP has been sent:", response);
    } catch (error) {
      console.error("Failed to resend OTP:", error);
    }
  };

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed || (!seconds && !minutes)) {
      // Render a button to resend the OTP
      return (
        <button
          type="button"
          className="otp-field__timer--button"
          onClick={handleResendOTP}
        >
          <p className="otp-field__timer">Resend Code</p>
        </button>
      );
    } else {
      // Render the countdown timer
      return (
        <p className="otp-field__timer">
          Time remaining
          <span className="otp-field__timer--time">
            {minutes}
            {":" + seconds.toString().padStart(2, "0")}
          </span>
        </p>
      );
    }
  };

  const handleOnChange = (e) => {
    const value = e.target.value;
    const newOTP = [...otp];
    newOTP[currentOtpIndex] = value.substring(value.length - 1);

    if (!value) setActiveOtpIndex(currentOtpIndex - 1);
    else setActiveOtpIndex(currentOtpIndex + 1);

    setOtp(newOTP);
  };

  const handleOnKeyDown = (e, index) => {
    currentOtpIndex = index;
    if (e.key === "Backspace") setActiveOtpIndex(currentOtpIndex - 1);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [activeOtpIndex]);

  return (
    <form onSubmit={onSubmit}>
      <div className="otp-field">
        <div className="otp-container ">
          <label htmlFor="otp-input">Verificaition Code:</label>
          <div className="cell-container">
            {otp.map((_, index) => {
              return (
                <div key={index}>
                  <input
                    onKeyDown={(e) => handleOnKeyDown(e, index)}
                    value={otp[index]}
                    ref={index === activeOtpIndex ? inputRef : null}
                    onChange={handleOnChange}
                    type="number"
                    className="otp-input label-text"
                  />
                </div>
              );
            })}
            {!otp.every((input) => input !== "") && formSubmitted && (
              <span className="info-input__error">
                Fill out all the fields!
              </span>
            )}
          </div>
        </div>
        <div className="nocode-link">
          <Countdown date={date} renderer={renderer} />
        </div>
      </div>
      <div className="btn-container">
        <button className="btn btn__white" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default OTPField;
