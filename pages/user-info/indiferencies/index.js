import IndifferencePage from "@/components/registration-flow/preference-search/IndifferencePage";
import LogoRound from "@/components/misc/logo-round";
import ChevronBack from "@/components/misc/ChevronBack";
import ProgressBar from "@/components/registration-flow/ProgressBar";

export default function Home() {
  return (
    <div className="container">
      <div className="screen-container">
        <LogoRound />

        <ChevronBack linkTo="/user-info/preferences" />

        <IndifferencePage />
        <ProgressBar />
      </div>
    </div>
  );
}
