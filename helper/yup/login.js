import * as yup from "yup";

const loginFormValidation = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  password: yup
    .string()
    .trim()
    .min(8, "Password must be at least 8 characters long")
    .required("Please enter your password"),
});

export default loginFormValidation;
