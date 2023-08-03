import OtpField from "./OtpField";

const SignUpScreen = () => {
  return (
    <div className="login-container">
      <div className="text-container">
        <h1>Verification</h1>
        <h4>Enter your code from E-Mail</h4>
      </div>

      <OtpField />
    </div>
  );
};

export default SignUpScreen;
