import Button from "@/components/misc/btn-component";
import _ from "lodash";
import { newPasswordFields } from "@/utilities/formFields";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { rewriteLogin } from "@/utilities/validationSchema";
import LoginField from "@/components/misc/login-field";
import { useChangePasswordMutation } from "@/redux/api/apiSlice";
import { useRouter } from "next/router";
import { registerEmail } from "@/redux/store/userSlice";
import { useDispatch } from "react-redux";

const SignUpScreen = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(rewriteLogin),
  });

  const router = useRouter();
  const [registerUser] = useChangePasswordMutation();

  const onSubmit = async (data) => {
    console.log("lol");
    try {
      const response = await registerUser({
        email: data.Login,
      }).unwrap();
      console.log(response);
      dispatch(registerEmail(response.email));
      router.push("/auth/password-reset/otp");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  const loginFields = () => {
    return _.map(newPasswordFields, ({ label, name, placeholder }) => {
      return (
        <LoginField
          label={label}
          name={name}
          placeholder={placeholder}
          errors={errors}
          register={register}
          key={name}
        />
      );
    });
  };

  return (
    <div className="login-container">
      <div className="text-container">
        <h1>Forgot your password?</h1>
        <h4>Enter your Email and we will send you one time password</h4>
      </div>
      <form
        className="login-form login-form__element__mb"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="login-form__element__mt">{loginFields()}</div>
        <div className="btn-container">
          <Button classname="white">Next</Button>
        </div>
      </form>
    </div>
  );
};

export default SignUpScreen;
