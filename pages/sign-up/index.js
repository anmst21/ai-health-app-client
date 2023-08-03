import SignUpScreen from "@/components/registration-flow/sign-up-screen";
import LogoRound from "@/components/misc/logo-round";
import ChevronBack from "@/components/misc/ChevronBack";

export default function Home() {
  return (
    <div className="container">
      <div className="screen-container">
        <LogoRound />

        <ChevronBack linkTo="/auth" />

        <SignUpScreen />
      </div>
    </div>
  );
}
