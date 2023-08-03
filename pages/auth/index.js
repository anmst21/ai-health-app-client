import LogoRound from "@/components/misc/logo-round";

import LoginScreen from "@/components/registration-flow/login-screen";

export default function Home() {
  return (
    <div className="container">
      <div className="screen-container">
        <LogoRound />

        <div>
          <LoginScreen />
        </div>
      </div>
    </div>
  );
}
