import _ from "lodash";
import { useRouter } from "next/router";
import Button from "../../misc/btn-component";
import LoginField from "@/components/misc/login-field";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { loginFields, loginButtonsComponent } from "@/utilities/formFields";
import { useLoginMutation } from "@/redux/api/apiSlice";

import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "@/utilities/validationSchema";

const LoginScreen = () => {
  const router = useRouter();
  const [registerUser] = useLoginMutation();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
  });

  const handleClick = (type, route) => {
    if (type === "submit") {
      console.log("Form submitted");
    } else {
      router.push(route);
    }
  };
  console.log(errors);

  const formSubmit = async (data) => {
    try {
      const response = await registerUser({
        email: data.Login,
        password: data.Password,
      }).unwrap();
      response.user.userInfo ? router.push("/app") : router.push("/user-info");
    } catch (error) {
      if (error.data) {
        if (error.data.message === "Password incorrect") {
          setError("Password", { message: error.data.message }, "server");
        } else {
          setError("Login", { message: error.data.message }, "server");
        }
      } else {
        setError("Login", { message: "Request failed" }, "server");
      }
    }
  };

  const loginFieldsComponent = () => {
    return _.map(loginFields, ({ label, name, placeholder }) => {
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

  const loginButtons = () => {
    return _.map(
      loginButtonsComponent,
      ({ content, classname, route, type }) => {
        return (
          <Button
            key={content}
            classname={classname}
            click={() => handleClick(type, route)}
            type={type}
          >
            {content}
          </Button>
        );
      }
    );
  };

  return (
    <div className="login-container">
      <div className="text-container">
        <h1>Breakfast, Lunch & Dinner </h1>
        <h4>Worlds first AI powered personal meal planner</h4>
      </div>
      <form className="login-form" onSubmit={handleSubmit(formSubmit)}>
        <div className="login-form__element__mt">
          {loginFieldsComponent()}
          <div className="forgot-link">
            <Link href="/auth/password-reset">Forgot password?</Link>
          </div>
        </div>
        <div className="btn-container">
          <Button classname="blue" type="submit">
            Submit
          </Button>
          {loginButtons()}
        </div>
      </form>
    </div>
  );
};

export default LoginScreen;
