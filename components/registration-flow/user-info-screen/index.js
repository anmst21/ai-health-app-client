import UserInfoField from "./UserInfoField";
import { fetchUserInfo } from "@/redux/thunks/fetchUserThunk";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const UserInfo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserInfo());
  }, []);
  return (
    <div className="login-container">
      <div className="text-container">
        <h1>Let's Start!</h1>
        <h4>Introduce yourself</h4>
      </div>
      <div className="otp-field">
        <UserInfoField />
      </div>
    </div>
  );
};

export default UserInfo;
