import Image from "next/image";
import { useRouter } from "next/router";

import axios from "axios";
const AllDone = () => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // define your request payload if any

    try {
      // send request
      await axios.post("/api/userInfoDone", { userInfo: true });

      // on success, navigate to /app
      router.push("/app");
    } catch (error) {
      // handle error
      console.error(error);
    }
  };

  return (
    <div className="login-container login-fix">
      <div className="green-logo-container">
        <Image
          alt="logo-green-lg"
          src="/logo-lg-green.svg"
          width={247}
          height={239}
        />
      </div>
      <div className="text-container">
        <h1>You are all set!</h1>
      </div>
      <div className="btn-container">
        <button className="btn btn__green" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default AllDone;
