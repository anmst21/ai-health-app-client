import Button from "@/components/misc/btn-component";
import _ from "lodash";
import { registerEmail } from "@/redux/store/userSlice";
import LoginField from "@/components/misc/login-field";

import { useDispatch } from "react-redux";

import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import { signUpFields } from "@/utilities/formFields";

import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "@/utilities/validationSchema";
import { useRegisterMutation } from "@/redux/api/apiSlice";

const SignUpScreen = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();

  const [registerUser] = useRegisterMutation();
  //Aaaaaaaaaa2;
  const router = useRouter();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    console.log(data);

    try {
      const response = await registerUser({
        email: data.Login,
        password: data.Password,
      }).unwrap();
      dispatch(registerEmail(response));
      console.log(response);

      router.push("/sign-up/otp");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  const loginFields = () => {
    return _.map(signUpFields, ({ label, name, placeholder }) => {
      return (
        <LoginField
          label={label}
          name={name}
          placeholder={placeholder}
          errors={errors}
          register={register}
        />
      );
    });
  };

  return (
    <div className="login-container">
      <div className="text-container">
        <h1>Login Information</h1>
        <h4>Enter your login information then we will send you an E-Mail</h4>
      </div>
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="login-form__element__mt">{loginFields()}</div>
        <div className="btn-container">
          <Button classname="blue" type="submit">
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUpScreen;
