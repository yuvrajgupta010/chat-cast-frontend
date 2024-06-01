import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { Col } from "react-bootstrap";
import { toast } from "react-toastify";

import Seo from "@/shared/layout-components/seo/seo";
import loginFormValidation from "@/helper/yup/login";
import { loginUser } from "@/store/auth/login/action";
import { AuthCTX, useAuthCtx } from "@/context/AuthCTX";

const Login = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const { _authenticate } = useAuthCtx();

  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      validationSchema: loginFormValidation,
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: async (values) => {
        setIsSubmitting(true);

        try {
          const response = await dispatch(loginUser(values)).unwrap();
          if (response.status === 200) {
            _authenticate({
              userDetails: response?.data?.data?.user,
              accessToken: response.data?.data?.jwtToken,
            });
            router.push("/chat");
          }
        } catch (error) {
          toast.error(error.data.message);
        } finally {
          setIsSubmitting(false);
        }
      },
    });

  const Log = () => {
    let Rightside = document.querySelector(".mobile-num");
    Rightside.style.display = "none";
    let Rightsides = document.querySelector(".login-otp");
    Rightsides.style.display = "flex";
  };

  const passwordShowHandler = () => setIsPasswordShown((prev) => !prev);

  return (
    <div>
      <Seo title="Login" />
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
            <span className="login100-form-title pb-5">Login</span>

            <div className="panel panel-primary">
              <div className="tab-menu-heading border-0">
                <div className="tabs-menu1">
                  {/* <!-- Tabs --> */}
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
                  <div className="text-end pt-4">
                    <p className="mb-0 fs-13">
                      <Link
                        href={`/auth/forget-password`}
                        className="text-primary ms-1"
                      >
                        Forgot Password?
                      </Link>
                    </p>
                  </div>
                  <div className="container-login100-form-btn">
                    <button
                      type="submit"
                      className="login100-form-btn btn btn-primary"
                    >
                      {isSubmitting ? "Logging in..." : "Login"}
                    </button>
                  </div>
                  <div className="text-center pt-3">
                    <p className="text-dark mb-0 fs-13 mx-3">
                      Not a member?
                      <Link href={`/auth/signup`} className="text-primary ms-1">
                        Sign up
                      </Link>
                    </p>
                  </div>
                  <label className="login-social-icon">
                    <span>Login with Social</span>
                  </label>
                  <div className="d-flex justify-content-center">
                    {/* <Link href="#!"> */}
                    <div className="social-login me-4 text-center">
                      <i className="fa fa-google"></i>
                    </div>
                    {/* </Link> */}
                    {/* <Link href="#!"> */}
                    <div className="social-login me-4 text-center">
                      <i className="fa fa-facebook"></i>
                    </div>
                    {/* </Link> */}
                    {/* <Link href="#!"> */}
                    <div className="social-login text-center mb-5">
                      <i className="fa fa-twitter"></i>
                    </div>
                    {/* </Link> */}
                  </div>
                  {/* <Tabs
                    defaultActiveKey="Email"
                    id="uncontrolled-tab-example"
                    className="tab-content"
                  >
                    <Tab eventKey="Email" title="Email" className="p-0 pt-5">
                      <div
                        className="wrap-input100 validate-input input-group"
                        data-bs-validate="Valid email is required: ex@abc.xyz"
                      >
                        <Link
                          href="#!"
                          className="input-group-text bg-white text-muted"
                        >
                          <i
                            className="zmdi zmdi-email text-muted"
                            aria-hidden="true"
                          ></i>
                        </Link>
                        <input
                          className="input100 border-start-0 form-control ms-0"
                          type="email"
                          placeholder="Email"
                        />
                      </div>
                      <Password />
                      <div className="text-end pt-4">
                        <p className="mb-0 fs-13">
                          <Link
                            href={`/auth/forgot-password`}
                            className="text-primary ms-1"
                          >
                            Forgot Password?
                          </Link>
                        </p>
                      </div>
                      <div className="container-login100-form-btn">
                        <Link
                          href={`/components/dashboard/dashboard/`}
                          className="login100-form-btn btn-primary"
                        >
                          Login
                        </Link>
                      </div>
                      <div className="text-center pt-3">
                        <p className="text-dark mb-0 fs-13 mx-3">
                          Not a member?
                          <Link
                            href={`/auth/signup`}
                            className="text-primary ms-1"
                          >
                            Sign up
                          </Link>
                        </p>
                      </div>
                      <label className="login-social-icon">
                        <span>Login with Social</span>
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
                          <div className="social-login text-center mb-5">
                            <i className="fa fa-twitter"></i>
                          </div>
                        </Link>
                      </div>
                    </Tab>
                    <Tab eventKey="Mobile" title="Mobile">
                      <div className="tab-pane pt-5" id="tab6">
                        <div
                          id="mobile-num"
                          className="wrap-input100 mobile-num validate-input input-group mb-4"
                        >
                          <Link
                            href="#!"
                            className="input-group-text bg-white text-muted"
                          >
                            <span>+91</span>
                          </Link>
                          <Form.Control
                            className="input100 border-start-0 ms-0"
                            type="number"
                          />
                        </div>
                        <div
                          id="login-otp"
                          className="justify-content-around login-otp mt-5 mb-5"
                        >
                          <Form.Control
                            className="text-center w-15"
                            id="txt1"
                            maxLength={1}
                          />
                          <Form.Control
                            className="text-center w-15"
                            id="txt2"
                            maxLength={1}
                          />
                          <Form.Control
                            className="text-center w-15"
                            id="txt3"
                            maxLength={1}
                          />
                          <Form.Control
                            className="text-center w-15"
                            id="txt4"
                            maxLength={1}
                          />
                        </div>
                        <span className="fw-normal fs-13">
                          Note : Login with registered mobile number to generate
                          OTP.
                        </span>
                        <div className="container-login100-form-btn ">
                          <Link
                            href="#!"
                            className="login100-form-btn btn-primary"
                            id="generate-otp"
                            onClick={() => Log()}
                          >
                            Proceed
                          </Link>
                        </div>
                      </div>
                    </Tab>
                  </Tabs> */}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* // <!-- CONTAINER CLOSED --> */}
    </div>
  );
};

Login.layout = "Authenticationlayout";
export default Login;
