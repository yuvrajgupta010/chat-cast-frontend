import * as yup from "yup";

const changePasswordVaildation = yup.object().shape({
  currentPassword: yup
    .string()
    .trim()
    .required("Current password is required")
    .min(8, "Invalid password"),
  newPassword: yup
    .string()
    .trim()
    .required("New password is required")
    .min(8, "Password must be at least 8 characters long"),
  confirmPassword: yup
    .string()
    .trim()
    .oneOf(
      [yup.ref("newPassword"), null],
      "Confirm Password does not match new password"
    )
    .required("Confirm Password is required"),
});

export default changePasswordVaildation;
