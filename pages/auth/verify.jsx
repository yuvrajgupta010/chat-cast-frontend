import React, { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { Col } from "react-bootstrap";
import Image from "next/image";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";

import Seo from "@/shared/layout-components/seo/seo";
import verifyFormValidation from "@/helper/yup/verify";
import ResendOtp from "@/components/UI/otpTimer";
import {
  resendVerificationOtp,
  verifyAccount,
} from "@/store/auth/verify/action";
import { useAuthCtx } from "@/context/AuthCTX";

const VerifyOtp = () => {
  const [isOtpShown, setIsOtpShown] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  const signupStore = useSelector((store) => store.signup);
  const { receivedData } = signupStore;
  const { _authenticate } = useAuthCtx();

  const router = useRouter();
  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      validationSchema: verifyFormValidation,
      initialValues: {
        otp: "",
      },
      onSubmit: async (values) => {
        setIsSubmitting(true);
        const formatedOtp = +values.otp;
        try {
          if (!formatedOtp) {
            throw new Error("OTP must only be Numeric");
          }
          const userEmail = localStorage.getItem("verificationEmail");
          if (!userEmail) {
            // TODO: handle email on refresh
            throw new Error("Something went wrong!");
          }

          const data = {
            email: userEmail,
            otp: formatedOtp,
          };

          const response = await dispatch(verifyAccount(data)).unwrap();
          if (response) {
            if (response.status === 200) {
              localStorage.removeItem("verificationEmail");
              _authenticate({
                userDetails: response?.data?.data?.user,
                accessToken: response.data?.data?.jwtToken,
              });
              router.push("/chat");
              // console.log(response, "Successfully verified");
              // TODO: Start profile logic here after setting up Context and local storage
              toast.success(response?.data?.message);
            } else {
              throw new Error(response?.data?.message);
            }
          }
        } catch (error) {
          toast.error(error.message);
        } finally {
          setIsSubmitting(false);
        }
      },
    });

  useEffect(() => {
    const haveVerificationEmail = localStorage.getItem("verificationEmail");
    if (!haveVerificationEmail) {
      router.push("/");
    }
  }, [router]);

  const resendOTPHandler = useCallback(async () => {
    try {
      const userEmail = localStorage.getItem("verificationEmail");
      if (!userEmail) {
        // TODO: handle email on refresh
        router.push("/");
        throw new Error("Something went wrong!");
      }
      const response = await dispatch(
        resendVerificationOtp({ email: userEmail })
      ).unwrap();
      if (response) {
        if (response.status === 201) {
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

  return (
    <div>
      <Seo title="Account Verification" />

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
            <span className="login100-form-title pb-5">Verify Account</span>
            <p className="text-muted">
              Enter the OTP send to your email address for account verification.
              (OTP valid for 5 min)
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
                  Send me Backff
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
VerifyOtp.layout = "Authenticationlayout";
export default VerifyOtp;
