import React, { useContext, useState } from "react";
import Link from "next/link";
import { Col } from "react-bootstrap";
import Seo from "@/shared/layout-components/seo/seo";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { useRouter } from "next/router";

import forgetFormValidation from "@/helper/yup/forget-password";
import { forgetPassword } from "@/store/auth/forget-password/action";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      validationSchema: forgetFormValidation,
      initialValues: {
        email: "",
      },
      onSubmit: async (values) => {
        setIsSubmitting(true);

        try {
          const response = await dispatch(forgetPassword(values)).unwrap();
          if (response) {
            if (response.status === 201) {
              const forgetToken = response?.data?.data?.forgetToken;
              localStorage.setItem("forgetToken", forgetToken);
              router.push("/auth/verify-otp");
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

  return (
    <div>
      <Seo title="Forgot Password" />

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
            <span className="login100-form-title pb-5">Forgot Password</span>
            <p className="text-muted">
              Enter the email address registered on your account
            </p>
            <div
              className="wrap-input100 validate-input input-group"
              data-bs-validate="Valid email is required: ex@abc.xyz"
            >
              <span className="input-group-text bg-white text-muted">
                <i className="zmdi zmdi-email" aria-hidden="true"></i>
              </span>
              <input
                className="input100 border-start-0 ms-0 form-control"
                type="email"
                placeholder="yuvraj@gmail.com"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {errors.email && touched.email ? (
              <p className="text-danger">{errors.email}</p>
            ) : null}
            <div className="submit">
              <button type="submit" className="btn btn-primary w-100">
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
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
              <Link href="#!">
                <div className="social-login me-4 text-center">
                  <i className="fa fa-google"></i>
                </div>
              </Link>
              <Link href="#!">
                <div className="social-login me-4 text-center">
                  <i className="fa fa-facebook"></i>
                </div>
              </Link>
              <Link href="#!">
                <div className="social-login text-center">
                  <i className="fa fa-twitter"></i>
                </div>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
ForgotPassword.layout = "Authenticationlayout";
export default ForgotPassword;
