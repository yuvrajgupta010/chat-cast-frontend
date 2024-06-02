import React, { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { Col } from "react-bootstrap";
import Image from "next/image";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

import Seo from "@/shared/layout-components/seo/seo";
import ResendOtp from "@/components/UI/otpTimer";
import { useAuthCtx } from "@/context/AuthCTX";
import verifyOtpFormValidation from "@/helper/yup/verify-otp";
import {
  getNewForgetOtp,
  recoverAccount,
} from "@/store/auth/forget-password/action";

const VerifyOtp = () => {
  const [isOtpShown, setIsOtpShown] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  const { _authenticate } = useAuthCtx();

  const router = useRouter();
  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      validationSchema: verifyOtpFormValidation,
      initialValues: {
        otp: "",
        newPassword: "",
        confirmPassword: "",
      },
      onSubmit: async (values) => {
        setIsSubmitting(true);
        const formatedOtp = +values.otp;
        try {
          if (!formatedOtp) {
            throw new Error("OTP must only be Numeric");
          }
          const forgetToken = localStorage.getItem("forgetToken");

          if (!forgetToken) {
            router.push("/auth/forget-password");
            throw new Error("Something went wrong! Please try again");
          }

          const data = {
            forgetToken,
            otp: formatedOtp,
            newPassword: values.newPassword,
            confirmPassword: values.confirmPassword,
          };

          const response = await dispatch(recoverAccount(data)).unwrap();
          if (response.status === 200) {
            localStorage.removeItem("forgetToken");
            _authenticate({
              userDetails: response?.data?.data?.user,
              accessToken: response.data?.data?.jwtToken,
            });
            // router.push("/chat");
            // console.log(response, "Successfully verified");
            // TODO: Start profile logic here after setting up Context and local storage
            toast.success(response?.data?.message);
          }
        } catch (error) {
          toast.error(error.data.message);
        } finally {
          setIsSubmitting(false);
        }
      },
    });

  useEffect(() => {
    const haveForgetToken = localStorage.getItem("forgetToken");
    if (!haveForgetToken) {
      router.push("/");
    }
  }, [router]);

  const resendOTPHandler = useCallback(async () => {
    try {
      const forgetToken = localStorage.getItem("forgetToken");
      if (!forgetToken) {
        // TODO: handle forgetToken on refresh
        router.push("/auth/forget-password");
        throw new Error("Something went wrong!");
      }
      const response = await dispatch(
        getNewForgetOtp({ forgetToken })
      ).unwrap();
      if (response) {
        if (response.status === 201) {
          localStorage.setItem("forgetToken", response.data.data.forgetToken);
          toast.success(response?.data?.message);
        } else {
          throw new Error(response?.data?.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  }, [dispatch, router]);

  const otpShowHandler = () => setIsOtpShown((prev) => !prev);
  const passwordShowHandler = () => setIsPasswordShown((prev) => !prev);

  return (
    <div>
      <Seo title="Foget Password" />

      {/* <!-- CONTAINER OPEN --> */}
      <Col className="col-login mx-auto">
        <div className="text-center">
          <Link href={"/"}>
            <Image
              src={"/assets/images/brand/logo-white.png"}
              className="header-brand-img"
              width={107}
              height={36}
              alt="logo"
              priority
            />
          </Link>
        </div>
      </Col>

      {/* <!-- CONTAINER OPEN --> */}
      <div className="container-login100">
        <div className="wrap-login100 p-6">
          <form className="login100-form validate-form" onSubmit={handleSubmit}>
            <span className="login100-form-title pb-5">Change Password</span>
            <p className="text-muted">
              Enter the OTP send to your email address (OTP valid for 5 min)
              along with new password and confirm password.
            </p>
            <div
              className="wrap-input100 validate-input input-group"
              data-bs-validate="Valid email is required: ex@abc.xyz"
            >
              <span
                style={{ cursor: "pointer" }}
                className="input-group-text bg-white text-muted"
                onClick={otpShowHandler}
              >
                <i
                  className={`zmdi ${
                    isOtpShown ? "zmdi-eye" : "zmdi-eye-off"
                  } text-muted`}
                  aria-hidden="true"
                ></i>
              </span>
              <input
                className="input100 border-start-0 ms-0 form-control"
                type={isOtpShown ? "text" : "password"}
                placeholder="OTP"
                name="otp"
                maxLength={6}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.otp}
              />
            </div>
            {errors.otp && touched.otp ? (
              <p className="text-danger">{errors.otp}</p>
            ) : null}
            <div
              className="wrap-input100 validate-input input-group"
              data-bs-validate="Password have to be at least 8 characters long"
            >
              <span
                style={{ cursor: "pointer" }}
                className="input-group-text bg-white text-muted"
                onClick={passwordShowHandler}
              >
                <i
                  className={`zmdi ${
                    isPasswordShown ? "zmdi-eye" : "zmdi-eye-off"
                  } text-muted`}
                  aria-hidden="true"
                ></i>
              </span>
              <input
                className="input100 border-start-0 ms-0 form-control"
                type={isPasswordShown ? "text" : "password"}
                placeholder="New Password"
                name="newPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </div>
            {errors.newPassword && touched.newPassword ? (
              <p className="text-danger">{errors.newPassword}</p>
            ) : null}
            <div
              className="wrap-input100 validate-input input-group"
              data-bs-validate="Password have to be at least 8 characters long"
            >
              <span
                style={{ cursor: "pointer" }}
                className="input-group-text bg-white text-muted"
                onClick={passwordShowHandler}
              >
                <i
                  className={`zmdi ${
                    isPasswordShown ? "zmdi-eye" : "zmdi-eye-off"
                  } text-muted`}
                  aria-hidden="true"
                ></i>
              </span>
              <input
                className="input100 border-start-0 ms-0 form-control"
                type={isPasswordShown ? "text" : "password"}
                placeholder="Confirm Password"
                name="confirmPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
            </div>
            {errors.confirmPassword && touched.confirmPassword ? (
              <p className="text-danger">{errors.confirmPassword}</p>
            ) : null}
            <div className="submit">
              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
            <ResendOtp resendClickHandler={resendOTPHandler} />
            <div className="text-center mt-4">
              <p className="text-dark mb-0 mx-2">
                Forgot It?
                <Link className="text-primary ms-1" href={`/auth/login`}>
                  Send me Back
                </Link>
              </p>
            </div>
            <label className="login-social-icon">
              <span>OR</span>
            </label>
            <div className="d-flex justify-content-center">
              <span className="text-primary">
                <div className="social-login me-4 text-center">
                  <i className="fa fa-google"></i>
                </div>
              </span>
              <span className="text-primary">
                <div className="social-login me-4 text-center">
                  <i className="fa fa-facebook"></i>
                </div>
              </span>
              <span className="text-primary">
                <div className="social-login text-center">
                  <i className="fa fa-twitter"></i>
                </div>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
VerifyOtp.layout = "Authenticationlayout";
export default VerifyOtp;
