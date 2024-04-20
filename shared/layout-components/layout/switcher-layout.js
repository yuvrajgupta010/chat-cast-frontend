import React, { useEffect } from "react";
const Sidebar = dynamic(() => import("../sidebar/sidebar"), { ssr: false });
import dynamic from "next/dynamic";
import Footer from "../footer/footer";
import BacktoTop from "../backtotop/backtotop";
import { Provider } from "react-redux";
import store from "../../redux/store";
import Rightside from "../rightside/rightside";

const Header2 = dynamic(() => import("../header/header2"), { ssr: false });
import SSRProvider from "react-bootstrap/SSRProvider";

const Switcherlayout = ({ children }) => {
  useEffect(() => {
    // document.body.classList.add("ltr", "main-body", "leftmenu")
    document
      .querySelector("body")
      .classList.add("app", "sidebar-mini", "ltr", "light-mode");
    document
      .querySelector("body")
      .classList.remove("login-img", "landing-page", "horizontal");

    if (localStorage.getItem("Spruhahorizontal")) {
      document.querySelector("body").classList.add("horizontalmenu");
      document.querySelector(".main-content").classList.add("hor-content");
      if (document.querySelector("main-container-1") != null) {
        document.querySelector(".main-container-1").classList.add("container");
        document
          .querySelector(".main-menu")
          .classList.add("main-navbar", "hor-menu");
        document
          .querySelector(".main-container-1")
          .classList.remove("main-sidebar-header");
        document
          .querySelector(".main-menu")
          .classList.remove("main-sidebar", "main-sidebar-sticky", "side-menu");
        document
          .querySelector(".main-body-1")
          .classList.remove("main-sidebar-body");
      }
      document
        .querySelectorAll(".main-container")
        .forEach((e) => e.classList.add("container"));
      document
        .querySelectorAll(".menu-icon")
        .forEach((e) => e.classList.add("hor-icon"));
      document
        .querySelector("body")
        .classList.remove(
          "horizontalmenu-hover",
          "leftmenu",
          "main-body",
          "default-menu"
        );
      document.querySelector(".main-content").classList.remove("side-content");
      document
        .querySelectorAll(".main-container")
        .forEach((e) => e.classList.remove("container-fluid"));
      document
        .querySelectorAll(".menu-icon")
        .forEach((e) => e.classList.remove("sidemenu-icon"));
    }

    if (localStorage.getItem("Spruhahorizontalhover")) {
      document
        .querySelector("body")
        .classList.add("horizontalmenu", "horizontalmenu-hover");
      document.querySelector(".main-content").classList.add("hor-content");
      if (document.querySelector(".main-menu") != null) {
        document
          .querySelector(".main-menu")
          .classList.add("main-navbar", "hor-menu");
        document.querySelector(".main-container-1").classList.add("container");
        document
          .querySelector(".main-menu")
          .classList.remove("main-sidebar", "main-sidebar-sticky", "side-menu");
        document
          .querySelector(".main-container-1")
          .classList.remove("main-sidebar-header");
        document
          .querySelector(".main-body-1")
          .classList.remove("main-sidebar-body");
      }
      document
        .querySelectorAll(".main-container")
        .forEach((e) => e.classList.add("container"));
      document
        .querySelectorAll(".menu-icon")
        .forEach((e) => e.classList.add("hor-icon"));
      document.querySelector("body").classList.remove("leftmenu", "main-body");
      // document.querySelector('.main-header').classList.remove('sticky');
      document.querySelector(".main-content").classList.remove("side-content");
      document.querySelector("body").classList.remove("default-menu");
      document
        .querySelectorAll(".main-container")
        .forEach((e) => e.classList.remove("container-fluid"));
      document
        .querySelectorAll(".menu-icon")
        .forEach((e) => e.classList.remove("sidemenu-icon"));
      //
    }
  });

  return (
    <SSRProvider>
      <div className="horizontalMenucontainer">
        <div className="page">
          <div className="page-main">
            <Header2 />
            <div className="jumps-prevent" style={{ paddingTop: "74px" }}></div>
            <Sidebar />
            <div className="main-content app-content mt-0">
              <div className="side-app">
                <div className="main-container container-fluid">{children}</div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
        <Rightside />
        <BacktoTop />
        {/* <Switcher /> */}
      </div>
    </SSRProvider>
  );
};

export default Switcherlayout;
