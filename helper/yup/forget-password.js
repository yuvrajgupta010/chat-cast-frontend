import * as yup from "yup";

const forgetFormValidation = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email("Please enter a valid email")
    .required("Please enter your email"),
});

export default forgetFormValidation;
