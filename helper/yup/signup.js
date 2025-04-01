import * as yup from "yup";

const sigupFormValidation = yup.object().shape({
  fullName: yup.string().trim().required("Please enter your full name"),
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

export default sigupFormValidation;
