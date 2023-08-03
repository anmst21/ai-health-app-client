import NewPassword from "@/components/registration-flow/new-password";
import LogoRound from "@/components/misc/logo-round";
import ChevronBack from "@/components/misc/ChevronBack";

export default function Home() {
  return (
    <div className="container">
      <div className="screen-container">
        <LogoRound />

        <ChevronBack linkTo="/auth" />

        <NewPassword />
      </div>
    </div>
  );
}
