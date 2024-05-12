import React from "react";
import Link from "next/link";
import { Col } from "react-bootstrap";
import { Password } from "@/shared/data/authenticatepage/data-authentication";
import Seo from "@/shared/layout-components/seo/seo";
import Image from "next/image";

const Register = () => {
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
          <form className="login100-form validate-form">
            <span className="login100-form-title">Registration</span>
            <div
              className="wrap-input100 validate-input input-group"
              data-bs-validate="Valid email is required: ex@abc.xyz"
            >
              <Link href="#!" className="input-group-text bg-white text-muted">
                <i className="mdi mdi-account" aria-hidden="true"></i>
              </Link>
              <input
                className="input100 border-start-0 ms-0 form-control"
                type="text"
                placeholder="Full name"
              />
            </div>
            <div
              className="wrap-input100 validate-input input-group"
              data-bs-validate="Valid email is required: ex@abc.xyz"
            >
              <Link href="#!" className="input-group-text bg-white text-muted">
                <i className="zmdi zmdi-email" aria-hidden="true"></i>
              </Link>
              <input
                className="input100 border-start-0 ms-0 form-control"
                type="email"
                placeholder="Email"
              />
            </div>
            <Password />
            <label className="custom-control custom-checkbox mt-4">
              <input type="checkbox" className="custom-control-input" />
              <span className="custom-control-label">
                Agree the <span className="text-primary">terms and policy</span>
              </span>
            </label>
            <div className="container-login100-form-btn">
              <Link
                href={`/components/dashboard/dashboard/`}
                className="login100-form-btn btn-primary"
              >
                Register
              </Link>
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
      {/* <!-- CONTAINER CLOSED --> */}
    </div>
  );
};

Register.layout = "Authenticationlayout";
export default Register;
