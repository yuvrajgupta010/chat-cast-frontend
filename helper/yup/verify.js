import * as yup from "yup";

const verifyFormValidation = yup.object().shape({
  otp: yup
    .string()
    .trim()
    .min(6, "Please provide valid OTP")
    .max(6, "Please provide valid OTP")
    .required("Please enter your OTP"),
});

export default verifyFormValidation;
