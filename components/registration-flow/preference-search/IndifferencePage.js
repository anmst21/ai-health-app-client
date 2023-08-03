import { useState, useEffect } from "react";
import SelectComponent from "./SelectComponent";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { optionsIndifference } from "@/utilities/formFields";
import { submitUserIndifferences } from "@/redux/thunks/submitUserThunk";
import { fetchUserInfo } from "@/redux/thunks/fetchUserThunk";

const IndifferencePage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const selectedOptions = useSelector((state) => state.options.indifference);
  const valuesArray = selectedOptions.map((option) => option.label);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleClick = () => {
    if (selectedOptions.length < 5) {
      setFormSubmitted(true);
    } else {
      router.push("/user-info/done");
      dispatch(submitUserIndifferences(valuesArray));
      console.log(valuesArray);
    }
  };
  useEffect(() => {
    dispatch(fetchUserInfo());
  }, []);

  //submitUserIndifferences

  return (
    <div className="login-container">
      <div className="text-container">
        <h1>Tell us things you don’t like</h1>
        <h4>Share us products that you don't like, so you won't see them!</h4>
      </div>
      <div className="preference-container ">
        <SelectComponent
          submitted={formSubmitted}
          red
          loadOptions={optionsIndifference}
        />
      </div>

      <div className="btn-container">
        <button onClick={handleClick} className="btn btn__red" type="submit">
          Next
        </button>
      </div>
    </div>
  );
};

export default IndifferencePage;
