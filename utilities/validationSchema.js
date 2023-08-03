import * as Yup from "yup";

export const schema = Yup.object().shape({
  Login: Yup.string().required().email(),
  Password: Yup.string()
    .required()
    .min(8)
    .matches(
      /^(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter and one number"
    ),
  Password2: Yup.string()
    .required()
    .oneOf([Yup.ref("Password"), null], "Passwords must match"),
});
export const schemaLogin = Yup.object().shape({
  Login: Yup.string().required().email(),
  Password: Yup.string()
    .required()
    .min(8)
    .matches(
      /^(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter and one number"
    ),
});
export const rewriteLogin = Yup.object().shape({
  Login: Yup.string().required().email(),
});
