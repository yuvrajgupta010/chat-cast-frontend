import * as yup from "yup";

const verifyOtpFormValidation = yup.object().shape({
  otp: yup
    .string()
    .trim()
    .min(6, "Please provide valid OTP")
    .max(6, "Please provide valid OTP")
    .required("Please enter your OTP"),
  newPassword: yup
    .string()
    .required("Password must be at least 8 characters long")
    .min(8, "Password must be at least 8 characters long"),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("newPassword"), null],
      "Confirm Password does not match new password"
    )
    .required("Confirm Password is required"),
});

export default verifyOtpFormValidation;
