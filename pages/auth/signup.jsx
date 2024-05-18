import React, { useState } from "react";
import { useFormik } from "formik";
import Link from "next/link";
import Image from "next/image";
import { Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

import Seo from "@/shared/layout-components/seo/seo";
import sigupFormValidation from "@/helper/yup/signup";
import { createAccount } from "@/store/auth/signup/action";

const Register = () => {
  const [isPolicyAccepted, setIsPolicyAccepted] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const dispatch = useDispatch();
  const signupStore = useSelector((store) => store.signup);
  const {
    loader: { isSigningUp },
  } = signupStore;

  const router = useRouter();
  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      validationSchema: sigupFormValidation,
      initialValues: {
        fullName: "",
        email: "",
        password: "",
      },
      onSubmit: async (values) => {
        const response = await dispatch(createAccount(values)).unwrap();
        if (response) {
          if (response.status === 201) {
            localStorage.setItem(
              "verificationEmail",
              response?.data?.data?.user?.email
            );
            await router.push("/auth/verify");
            toast.success(response?.data?.message);
          } else {
            toast.error(response?.data?.message);
          }
        }
      },
    });

  const policyCheckHandler = () => {
    setIsPolicyAccepted((prev) => !prev);
  };

  const passwordShowHandler = () => setIsPasswordShown((prev) => !prev);

  return (
    <div>
      <Seo title="Sign up" />

      {/* <!-- CONTAINER OPEN --> */}
      <Col className="col-login mx-auto mt-7">
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
      <div className="container-login100">
        <div className="wrap-login100 p-6">
          <form className="login100-form validate-form" onSubmit={handleSubmit}>
            <span className="login100-form-title">Sign up</span>
            <div
              className="wrap-input100 validate-input input-group"
              data-bs-validate="Valid email is required: ex@abc.xyz"
            >
              <span
                style={{ cursor: "pointer" }}
                className="input-group-text bg-white text-muted"
              >
                <i className="mdi mdi-account" aria-hidden="true"></i>
              </span>
              <input
                className="input100 border-start-0 ms-0 form-control"
                type="text"
                name="fullName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fullName}
                placeholder="Full name"
              />
            </div>
            {errors.fullName && touched.fullName ? (
              <p className="text-danger">{errors.fullName}</p>
            ) : null}
            <div
              className="wrap-input100 validate-input input-group"
              data-bs-validate="Valid email is required: ex@abc.xyz"
            >
              <span
                style={{ cursor: "pointer" }}
                className="input-group-text bg-white text-muted"
              >
                <i className="zmdi zmdi-email" aria-hidden="true"></i>
              </span>
              <input
                className="input100 border-start-0 ms-0 form-control"
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </div>
            {errors.email && touched.email ? (
              <p className="text-danger">{errors.email}</p>
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
                placeholder="Password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </div>
            {errors.password && touched.password ? (
              <p className="text-danger">{errors.password}</p>
            ) : null}
            <label className="custom-control custom-checkbox mt-4">
              <input
                type="checkbox"
                checked={isPolicyAccepted}
                onChange={policyCheckHandler}
                className="custom-control-input"
              />
              <span className="custom-control-label">
                Agree the <span className="text-primary">terms and policy</span>
              </span>
            </label>
            <div className="container-login100-form-btn">
              <button
                type="submit"
                className="login100-form-btn btn btn-primary"
                disabled={isPolicyAccepted ? isSigningUp : true}
              >
                {isSigningUp ? "Registering..." : "Register"}
              </button>
            </div>
            <div className="text-center pt-3">
              <p className="text-dark mb-0">
                Already have account?
                <Link href={`/auth/login`} className="text-primary ms-1">
                  Log in
                </Link>
              </p>
            </div>
            <label className="login-social-icon">
              <span>Register with Social</span>
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
      {/* <!-- CONTAINER CLOSED --> */}
    </div>
  );
};

Register.layout = "Authenticationlayout";
export default Register;
