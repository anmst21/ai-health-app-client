import { useRouter } from "next/router";

const ProgressBar = () => {
  const router = useRouter();

  return (
    <div className="progress-bar">
      <input
        className="progress-icon"
        type="radio"
        value={1}
        checked={router.pathname === "/user-info"}
        readOnly
      />
      <input
        className="progress-icon"
        type="radio"
        value={2}
        checked={router.pathname === "/user-info/preferences"}
        readOnly
      />
      <input
        className="progress-icon"
        type="radio"
        value={3}
        checked={router.pathname === "/user-info/indiferencies"}
        readOnly
      />
    </div>
  );
};

export default ProgressBar;
