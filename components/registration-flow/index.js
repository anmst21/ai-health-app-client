import LoginScreen from "./login-screen";
import SignUpScreen from "./sign-up-screen";
import OtpScreen from "./otp-screen";
import { useState } from "react";

import UserInfo from "./user-info-screen";
import ProgressBar from "./ProgressBar";
import PreferencePage from "./preference-search/PreferencePage";
import IndifferencePage from "./preference-search/IndifferencePage";
import AllDone from "./all-done-screen";
import ChevronBack from "../misc/ChevronBack";
import LogoRound from "../misc/logo-round";

const RegistrationFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleRadioChange = (event) => {
    setCurrentStep(Number(event.target.value));
  };

  return (
    <div className="screen-container">
      {currentStep < 7 && <LogoRound />}
      {currentStep > 1 && currentStep < 7 && (
        <ChevronBack handleBack={handleBack} />
      )}
      <div>
        {currentStep === 1 && <LoginScreen handleNext={handleNext} />}
        {currentStep === 2 && <SignUpScreen handleNext={handleNext} />}
        {currentStep === 3 && <OtpScreen handleNext={handleNext} />}
        {currentStep === 4 && <UserInfo handleNext={handleNext} />}
        {currentStep === 5 && <PreferencePage handleNext={handleNext} />}
        {currentStep === 6 && <IndifferencePage handleNext={handleNext} />}
        {currentStep === 7 && <AllDone handleNext={handleNext} />}
      </div>

      {currentStep > 3 && currentStep < 7 && (
        <ProgressBar
          handleRadioChange={handleRadioChange}
          currentStep={currentStep}
        />
      )}
    </div>
  );
};

export default RegistrationFlow;
