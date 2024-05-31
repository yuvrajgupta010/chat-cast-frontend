import React from "react";
import {
  Card,
  Col,
  Container,
  Nav,
  Row,
  Tab,
  NavbarBrand,
  Navbar,
} from "react-bootstrap";
import { Testimonials } from "./datalandingpage";
import Link from "next/link";
import Image from "next/image";

const currentYear = new Date().getFullYear();

const Landingpages = (props) => {
  const { mode } = props;
  const SidSwitcherIcon = () => {
    //leftsidemenu
    if (document.querySelector(".demo_changer")) {
      document.querySelector(".demo_changer").classList.toggle("active");
    }
    let Rightside = document.querySelector(".demo_changer");
    Rightside.style.right = "0px";
  };
  const SidSwitcherIcons = () => {
    //leftsidemenu
    if (document.querySelector(".demo_changer")) {
      document.querySelector(".demo_changer").classList.remove("active");
    }
    let Rightside = document.querySelector(".demo_changer");
    Rightside.style.right = "-270px";
  };
  const sidebarToggled = () => {
    document.querySelector(".app").classList.toggle("sidenav-toggled");
  };
  return (
    <div>
      <div className="page">
        <div className="page-main">
          {/* <!--app-content open--> */}
          <div className="hor-header header">
            <Container className="main-container">
              <div className="d-flex">
                <span
                  style={{ cursor: "pointer" }}
                  aria-label="Hide Sidebar"
                  className="app-sidebar__toggle"
                  data-bs-toggle="sidebar"
                  onClick={() => sidebarToggled()}
                ></span>
                <Link className="logo-horizontal " href={`/`}>
                  <Image
                    src={"/assets/images/brand/logo-white.png"}
                    className="header-brand-img desktop-logo"
                    width={107}
                    height={36}
                    alt="logo"
                    priority
                  />
                  <Image
                    src={"/assets/images/brand/logo-dark.png"}
                    className="header-brand-img light-logo1"
                    width={107}
                    height={36}
                    alt="logo"
                    priority
                  />
                </Link>
                {/* <!-- LOGO --> */}
                <Navbar className="d-flex order-lg-2 ms-auto header-right-icons">
                  <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    className="navbar-toggler navresponsive-toggler d-lg-none ms-auto"
                  >
                    <i className="navbar-toggler-icon fe fe-more-vertical"></i>
                  </Navbar.Toggle>
                  <div className="responsive-navbar p-0" id="basic-navbar-nav">
                    <Navbar.Collapse
                      className=" bg-white px-0"
                      id="navbarSupportedContent-4"
                    >
                      {/* <!-- SEARCH --> */}
                      <div className="header-nav-right p-5">
                        <Link
                          href={`/auth/login`}
                          className="btn ripple btn-min w-sm btn-outline-primary me-2"
                        >
                          Log in
                        </Link>
                        <Link
                          href={`/auth/signup`}
                          className="btn ripple btn-min w-sm btn-primary me-2"
                        >
                          Sign up
                        </Link>
                      </div>
                    </Navbar.Collapse>
                  </div>
                </Navbar>
              </div>
            </Container>
          </div>
          <div className="landing-top-header overflow-hidden">
            <div className="top sticky overflow-hidden">
              {/* <!--APP-SIDEBAR--> */}
              <div
                className="app-sidebar__overlay"
                data-bs-toggle="sidebar"
              ></div>
              <div className="app-sidebar bg-transparent horizontal-main">
                <Container>
                  <Row>
                    <Navbar className="main-sidemenu navbar px-0 justify-content-between">
                      <NavbarBrand
                        className="ps-0 d-none d-lg-block"
                        href={`/`}
                      >
                        <Image
                          alt="logo-3"
                          className="logo-2"
                          width={107}
                          height={36}
                          src={"/assets/images/brand/logo-dark.png"}
                          priority
                        />
                        <Image
                          src={"/assets/images/brand/logo-white.png"}
                          width={107}
                          height={36}
                          className="logo-3"
                          alt="logo"
                          priority
                        />
                      </NavbarBrand>

                      <div className="d-flex" style={{ gap: "2rem" }}>
                        <ul className="side-menu">
                          <li className="slide">
                            <Link
                              className="side-menu__item active"
                              data-bs-toggle="slide"
                              href="/#home"
                            >
                              <span className="side-menu__label">Home</span>
                            </Link>
                          </li>
                          <li className="slide">
                            <Link
                              className="side-menu__item"
                              data-bs-toggle="slide"
                              href="/#Features"
                            >
                              <span className="side-menu__label">Features</span>
                            </Link>
                          </li>
                          <li className="slide">
                            <Link
                              className="side-menu__item"
                              data-bs-toggle="slide"
                              href="/#testimonial"
                            >
                              <span className="side-menu__label">
                                Testimonial
                              </span>
                            </Link>
                          </li>
                          <li className="slide">
                            <Link
                              className="side-menu__item"
                              data-bs-toggle="slide"
                              href="/"
                            >
                              <span className="side-menu__label">
                                Term and Privacy
                              </span>
                            </Link>
                          </li>
                        </ul>
                        <div className="header-nav-right d-lg-flex d-md-flex d-none">
                          <Link
                            href={`/auth/login`}
                            className="btn ripple btn-min w-sm btn-primary me-2 my-auto d-md-none d-lg-block d-xl-block d-block"
                          >
                            Log in
                          </Link>
                          <Link
                            href={`/auth/signup`}
                            className="btn ripple btn-min w-sm btn-outline-primary me-2 my-auto d-md-none d-lg-block d-xl-block d-block\"
                          >
                            Sign up
                          </Link>
                        </div>
                      </div>
                    </Navbar>
                  </Row>
                </Container>
              </div>
              {/* <!--/APP-SIDEBAR--> */}
            </div>
            <div
              className="demo-screen-headline main-demo main-demo-1 spacing-top overflow-hidden"
              id="home"
              onClick={() => SidSwitcherIcons()}
            >
              <Container className="px-sm-0">
                <Row>
                  <Col
                    xl={6}
                    lg={6}
                    className="mb-5 pb-5 animation-zidex pos-relative"
                  >
                    <h4 className="fw-semibold mt-7">From Chats to Files</h4>
                    <h1 className="text-start fw-bold">
                      Experience Seamless Communication and File Sharing with{" "}
                      <span className="text-primary">Privacy</span>
                    </h1>
                    <h6 className="pb-3">
                      Chat Cast offers a secure and seamless platform for
                      private conversations and file sharing. With robust
                      encryption and user-friendly features, connect confidently
                      with peers while exchanging PDFs, images, and videos.
                      Elevate collaboration and communication while ensuring the
                      privacy and security of your valuable data.
                    </h6>
                    <Link
                      href="#!"
                      className="btn ripple btn-min w-lg mb-3 me-2 btn-primary"
                    >
                      <i className="fe fe-play mx-2"></i> Get Started
                    </Link>
                    <Link
                      href="#features"
                      className="btn ripple btn-min w-lg btn-outline-primary mb-3 me-2"
                    >
                      <i className="fe fe-eye mx-2"></i>Discover More
                    </Link>
                  </Col>
                  <Col
                    xl={6}
                    lg={6}
                    className="my-auto"
                    style={{ position: "relative" }}
                  >
                    <Image
                      src="/assets/images/landing/brand_image.png"
                      alt="Girl chating on phone with smile on her face"
                      width={500}
                      height={500}
                      className="w-auto h-auto"
                    />
                  </Col>
                </Row>
              </Container>
            </div>
          </div>

          <div
            className="main-content mt-0"
            id="features"
            onClick={() => SidSwitcherIcons()}
          >
            <div className="side-app">
              {/* <!-- CONTAINER --> */}
              <div className="main-container">
                <div className="">
                  {/* <!-- ROW-2 OPEN --> */}
                  <div className="sptb section bg-white" id="Features">
                    <Container>
                      <Row>
                        <h4 className="text-center fw-semibold">Features</h4>
                        <span className="landing-title"></span>
                        <h2 className="fw-semibold text-center">
                          Chat Cast Main Features
                        </h2>
                        <p className="text-default mb-5 text-center">
                          Chat Cast - Secure your chats, seamless file sharing,
                          your privacy prioritized.
                        </p>
                        <Row className="mt-7">
                          <Col lg={6} md={12}>
                            <Card
                              className="features main-features main-features-1 wow fadeInUp"
                              data-wow-delay="0.1s"
                            >
                              <div className="bg-img mb-2 text-left mt-0 pt-0">
                                <i
                                  className="bi bi-shield-lock"
                                  style={{ fontSize: 27, color: "#42A3DB" }}
                                ></i>
                              </div>
                              <div className="text-left">
                                <h4 className="fw-bold">Secure Group Chats</h4>
                                <p className="mb-0">
                                  Chat Cast allows you to create encrypted group
                                  chats, ensuring that your conversations remain
                                  private and secure, whether you&apos;re
                                  discussing work projects or planning a social
                                  event.
                                </p>
                              </div>
                            </Card>
                          </Col>
                          <Col lg={6} md={12}>
                            <Card
                              className="features main-features main-features-2 wow fadeInUp"
                              data-wow-delay="0.1s"
                            >
                              <div className="bg-img mb-2 text-left">
                                <i
                                  className="bi bi-lock"
                                  style={{ fontSize: 27, color: "#FFCD0A" }}
                                ></i>
                              </div>
                              <div className="text-left">
                                <h4 className="fw-bold">
                                  Private One-on-One Messaging
                                </h4>
                                <p className="mb-0">
                                  Enjoy confidential conversations with friends,
                                  family, or colleagues with Chat Cast&apos;s
                                  private chat feature. Your messages are
                                  end-to-end encrypted, keeping them safe from
                                  prying eyes.
                                </p>
                              </div>
                            </Card>
                          </Col>
                          <Col lg={6} md={12}>
                            <Card
                              className="features main-features main-features-11 wow fadeInUp"
                              data-wow-delay="0.1s"
                            >
                              <div className="bg-img mb-2 text-left">
                                <i
                                  className="bi bi-share"
                                  style={{ fontSize: 27, color: "#bed530" }}
                                ></i>
                              </div>
                              <div className="text-left">
                                <h4 className="fw-bold">
                                  Effortless File Sharing
                                </h4>
                                <p className="mb-0">
                                  Share files effortlessly on Chat Cast, whether
                                  it&abos;s documents, images, or videos. With
                                  our secure platform, you can exchange files
                                  with peace of mind, knowing your data is
                                  protected.
                                </p>
                              </div>
                            </Card>
                          </Col>
                          <Col lg={6} md={12}>
                            <Card
                              className="features main-features main-features-10 wow fadeInUp"
                              data-wow-delay="0.1s"
                            >
                              <div className="bg-img mb-2 text-left">
                                <i
                                  className="bi bi-key"
                                  style={{ fontSize: 27, color: "#58e1ef" }}
                                ></i>
                              </div>
                              <div className="text-left">
                                <h4 className="fw-bold">
                                  Encrypted Cloud Storage
                                </h4>
                                <p className="mb-0">
                                  Store your files securely in Chat Cast&apos;s
                                  encrypted cloud storage. Access your important
                                  documents, photos, and videos from anywhere,
                                  knowing that they&apos;re protected by
                                  top-notch encryption
                                </p>
                              </div>
                            </Card>
                          </Col>
                        </Row>
                      </Row>
                    </Container>
                  </div>

                  {/* <!-- ROW-6 OPEN --> */}
                  <div className="bg-landing section bg-image-style">
                    <Container>
                      <Row>
                        <h4 className="text-center fw-semibold">
                          Choose a plan{" "}
                        </h4>
                        <span className="landing-title"></span>
                        <h2 className="text-center fw-semibold">
                          Find the{" "}
                          <span className="text-primary">Perfect Plan</span> for
                          your Business.
                        </h2>
                        <Tab.Container
                          id="left-tabs-example"
                          defaultActiveKey="Yearly"
                        >
                          <Nav className="nav-price">
                            <Nav.Item>
                              <Nav.Link eventKey="Month">Monthly</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="Yearly">Annual</Nav.Link>
                            </Nav.Item>
                          </Nav>
                          <Tab.Content>
                            <Tab.Pane eventKey="Month">
                              <Row className="d-flex align-items-center justify-content-center">
                                <Col
                                  lg={4}
                                  xl={4}
                                  md={8}
                                  sm={12}
                                  className="col-lg-4 col-xl-4 col-md-8 col-sm-12"
                                >
                                  <Card className="p-3 pricing-card">
                                    <Card.Header className="d-block text-justified pt-2">
                                      <p className="fs-18 fw-semibold mb-1">
                                        Free
                                      </p>
                                      <p className="text-justify fw-semibold mb-1">
                                        {" "}
                                        <span className="fs-30 me-2">
                                          &#8377;
                                        </span>
                                        <span className="fs-30 me-1">0</span>
                                        <span className="fs-25">
                                          <span className="op-0-5 text-muted text-20">
                                            /
                                          </span>{" "}
                                          month
                                        </span>
                                      </p>
                                      <p className="fs-13 mb-1">
                                        Secure messaging and file sharing,
                                        completely free forever.
                                      </p>
                                    </Card.Header>
                                    <Card.Body className="pt-2">
                                      <ul className="text-justify pricing-body ps-0">
                                        <li>
                                          <i className="mdi mdi-checkbox-marked-circle-outline p-2 fs-16 text-secondary"></i>
                                          <strong>Messaging</strong>
                                        </li>
                                        <li>
                                          <i className="mdi mdi-checkbox-marked-circle-outline p-2 fs-16 text-secondary"></i>{" "}
                                          <strong>Images sharing</strong>
                                        </li>
                                        <li className="text-muted">
                                          <i className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i>
                                          <strong>
                                            Share pdf, video files
                                          </strong>
                                        </li>
                                        <li className="text-muted">
                                          <i className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i>
                                          <strong>Add profile picture</strong>
                                        </li>
                                        <li className="text-muted">
                                          <i className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i>
                                          <strong>Add and update status</strong>
                                        </li>
                                        <li className="text-muted">
                                          <i className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i>
                                          <strong>24/7</strong> support
                                        </li>
                                      </ul>
                                    </Card.Body>
                                  </Card>
                                </Col>
                                <Col lg={4} xl={4} md={8} sm={12}>
                                  <Card className="p-3 border-primary pricing-card advanced">
                                    <Card.Header className="d-block text-justified pt-2">
                                      <p className="fs-18 fw-semibold mb-1 px-0">
                                        Advanced
                                        <span className="tag bg-primary text-white float-end">
                                          Limited Deal
                                        </span>
                                      </p>
                                      <p className="text-justify fw-semibold mb-1">
                                        {" "}
                                        <span className="fs-30 me-2">
                                          &#8377;
                                        </span>
                                        <span className="fs-30 me-1">99</span>
                                        <span className="fs-25">
                                          <span className="op-0-5 text-muted text-20">
                                            /
                                          </span>{" "}
                                          month
                                        </span>
                                      </p>
                                      <p className="fs-13 mb-2">
                                        Use the full power of{" "}
                                        <strong>Chat Cast</strong> with advance
                                        pack
                                      </p>
                                      <p className="fs-13 mb-1 text-primary">
                                        Billed monthly on regular basis!
                                      </p>
                                    </Card.Header>
                                    <Card.Body className="pt-2">
                                      <ul className="text-justify pricing-body ps-0">
                                        <li>
                                          <i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i>{" "}
                                          <strong>Messaging</strong>
                                        </li>
                                        <li>
                                          <i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i>
                                          <strong>Images sharing</strong>
                                        </li>
                                        <li>
                                          <i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i>
                                          <strong>
                                            Share pdf, video files
                                          </strong>
                                        </li>
                                        <li>
                                          <i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i>
                                          <strong>Add profile picture</strong>
                                        </li>
                                        <li>
                                          <i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i>
                                          <strong>Add and update status</strong>
                                        </li>
                                        <li className="mb-6">
                                          <i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i>
                                          <strong>24/7 support</strong>
                                        </li>
                                      </ul>
                                    </Card.Body>
                                    <Card.Footer className="text-center border-top-0 pt-1">
                                      <button className="btn btn-lg btn-primary-gradient text-white btn-block">
                                        <span className="ms-4 me-4">
                                          Select
                                        </span>
                                      </button>
                                    </Card.Footer>
                                  </Card>
                                </Col>
                              </Row>
                            </Tab.Pane>

                            <Tab.Pane eventKey="Yearly">
                              <div className="row d-flex align-items-center justify-content-center">
                                <div className="col-lg-4 col-xl-4 col-md-8 col-sm-12">
                                  <div className="card p-3 pricing-card">
                                    <div className="card-header d-block text-justified pt-2">
                                      <p className="fs-18 fw-semibold mb-1">
                                        Free
                                      </p>
                                      <p className="text-justify fw-semibold mb-1">
                                        {" "}
                                        <span className="fs-30 me-2">
                                          &#8377;
                                        </span>
                                        <span className="fs-30 me-1">0</span>
                                        <span className="fs-25">
                                          <span className="op-0-5 text-muted text-20">
                                            /
                                          </span>{" "}
                                          year
                                        </span>
                                      </p>
                                      <p className="fs-13 mb-1">
                                        Secure messaging and file sharing,
                                        completely free forever.
                                      </p>
                                    </div>
                                    <div className="card-body pt-2">
                                      <ul className="text-justify pricing-body ps-0">
                                        <li>
                                          <i className="mdi mdi-checkbox-marked-circle-outline p-2 fs-16 text-secondary"></i>
                                          <strong>Messaging</strong>
                                        </li>
                                        <li>
                                          <i className="mdi mdi-checkbox-marked-circle-outline p-2 fs-16 text-secondary"></i>{" "}
                                          <strong>Images sharing</strong>
                                        </li>
                                        <li className="text-muted">
                                          <i className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i>
                                          <strong>
                                            Share pdf, video files
                                          </strong>
                                        </li>
                                        <li className="text-muted">
                                          <i className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i>
                                          <strong>Add profile picture</strong>
                                        </li>
                                        <li className="text-muted">
                                          <i className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i>
                                          <strong>Add and update status</strong>
                                        </li>
                                        <li className="text-muted">
                                          <i className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i>
                                          <strong>24/7</strong> support
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-4 col-xl-4 col-md-8 col-sm-12">
                                  <div className="card p-3 border-primary pricing-card advanced ">
                                    <div className="card-header d-block text-justified pt-2">
                                      <p className="fs-18 fw-semibold mb-1 px-0">
                                        Advanced
                                        <span className="tag bg-primary text-white float-end">
                                          Limited Deal
                                        </span>
                                      </p>
                                      <p className="text-justify fw-semibold mb-1">
                                        <span className="fs-30 me-2">
                                          &#8377;
                                        </span>
                                        <span className="fs-30 me-1">1000</span>
                                        <span className="fs-25">
                                          <span className="op-0-5 text-muted text-20">
                                            /
                                          </span>{" "}
                                          year
                                        </span>
                                      </p>
                                      <p className="fs-13 mb-2">
                                        Use the full power of{" "}
                                        <strong>Chat Cast</strong> with advance
                                        and save <strong>&#8377;200</strong>
                                      </p>
                                      <p className="fs-13 mb-1 text-primary">
                                        Billed yearly!
                                      </p>
                                    </div>
                                    <div className="card-body pt-2">
                                      <ul className="text-justify pricing-body ps-0">
                                        <li>
                                          <i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i>{" "}
                                          <strong>Messaging</strong>
                                        </li>
                                        <li>
                                          <i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i>
                                          <strong>Images sharing</strong>
                                        </li>
                                        <li>
                                          <i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i>
                                          <strong>
                                            Share pdf, video files
                                          </strong>
                                        </li>
                                        <li>
                                          <i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i>
                                          <strong>Add profile picture</strong>
                                        </li>
                                        <li>
                                          <i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i>
                                          <strong>Add and update status</strong>
                                        </li>
                                        <li className="mb-6">
                                          <i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i>
                                          <strong>24/7 support</strong>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="card-footer text-center border-top-0 pt-1">
                                      <button className="btn btn-lg btn-primary-gradient text-white btn-block">
                                        <span className="ms-4 me-4">
                                          Select
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Tab.Pane>
                          </Tab.Content>
                        </Tab.Container>
                      </Row>
                    </Container>
                  </div>
                  {/* <!-- ROW-6 CLOSED --> */}

                  {/* <!-- ROW-7 OPEN --> */}

                  {/* <!-- ROW-7 CLOSED --> */}

                  {/* <!-- ROW-8 OPEN --> */}

                  {/* <!-- ROW-8 CLOSED --> */}

                  {/* <!-- ROW-9 OPEN --> */}
                  <div
                    className="testimonial-owl-landing section pb-0"
                    id="testimonial"
                  >
                    <Container>
                      <Row>
                        <Col md={12}>
                          <Card className="bg-transparent">
                            <Card.Body className="pt-5">
                              <h4 className="text-center fw-semibold text-white-80">
                                Testimonials{" "}
                              </h4>
                              <span className="landing-title"></span>
                              <h2 className="text-center fw-semibold text-white mb-7">
                                What People Are Saying About Chat Cast
                              </h2>
                              <Testimonials />
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                  {/* <!-- ROW-9 CLOSED --> */}

                  {/* <!-- ROW-10 OPEN --> */}

                  {/* <!-- ROW-10 CLOSED --> */}

                  {/* <!-- ROW-11 OPEN --> */}
                  <div className="">
                    <Container>
                      <div className="testimonial-owl-landing buynow-landing">
                        <Row className="pt-6">
                          <Col md={12}>
                            <Card className="bg-transparent">
                              <Card.Body className="pt-5 px-7">
                                <Row>
                                  <Col lg={9}>
                                    <h1 className="fw-semibold text-white">
                                      Experience Seamless Communication and File
                                      Sharing.
                                    </h1>
                                    <p className="text-white">
                                      Chat Cast offers a secure and seamless
                                      platform for private conversations and
                                      file sharing. With robust encryption and
                                      user-friendly features, connect
                                      confidently with peers while exchanging
                                      PDFs, images, and videos.
                                    </p>
                                  </Col>
                                  <Col lg={9} className="text-end my-auto">
                                    <Link
                                      href="https://themeforest.net/item/sash-nextjs-admin-dashboard-template/43443261"
                                      className="btn btn-pink w-lg pt-2 pb-2"
                                    >
                                      Sign up
                                    </Link>
                                  </Col>
                                </Row>
                              </Card.Body>
                            </Card>
                          </Col>
                        </Row>
                      </div>
                    </Container>
                  </div>
                  {/* <!-- ROW-11 CLOSED --> */}
                </div>
              </div>
              {/* <!-- CONTAINER CLOSED--> */}
            </div>
          </div>

          {/* <!--app-content closed--> */}
        </div>

        {/* <!-- FOOTER OPEN --> */}
        <div className="demo-footer">
          <Container>
            <Row>
              <Col>
                <Card>
                  <Card.Body>
                    <div className="top-footer">
                      <Row className="justify-content-between">
                        <Col lg={4} sm={12}>
                          <h6>About</h6>
                          <p>
                            Chat Cast offers a secure and seamless platform for
                            private conversations and file sharing. With robust
                            encryption and user-friendly features, connect
                            confidently with peers while exchanging PDFs,
                            images, and videos.
                          </p>
                          <p className="mb-5 mb-lg-2">
                            Elevate collaboration and communication while
                            ensuring the privacy and security of your valuable
                            data.
                          </p>
                        </Col>

                        <Col lg={2} sm={6} md={4} className="">
                          <h6>Information</h6>
                          <ul className="list-unstyled mb-5 mb-lg-0">
                            <li>
                              <Link href={`/#!`}>About</Link>
                            </li>
                            <li>
                              <Link href={`/#!`}>Terms and Privacy</Link>
                            </li>
                          </ul>
                        </Col>
                        <Col lg={4} sm={12} md={4}>
                          <h6>Location and Contact</h6>
                          <ul className="list-unstyled mb-4">
                            <li>
                              <Link href="#!">
                                Address: C-43 2nd Floor, DB Housing, Gwailor,
                                MP-474899
                              </Link>
                            </li>
                            <li>
                              <Link href="#!">Phone: +91 8247581835</Link>
                            </li>
                            <li>
                              <Link href="#!">
                                Mail: chat-cast-support@yuvrajgupta.in
                              </Link>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </div>
                    <footer className="main-footer ps-0 pe-0">
                      <Row>
                        <Col xl={8} lg={12} md={12} className="footer1">
                          Copyright © <span id="year">{currentYear}</span>{" "}
                          <span className="text-primary">Chat Cast</span>
                        </Col>
                        <Col
                          xl={4}
                          lg={12}
                          md={12}
                          className="ms-auto text-end"
                        >
                          <ul className="footer-social-list ">
                            <li>
                              <Link href="#!">
                                <i className="fa fa-facebook"></i>
                              </Link>
                            </li>
                            {/* <li>
                              <Link href="mailto:yuvrajgmail036@gmail.com">
                                <i className="fa fa-google"></i>
                              </Link>
                            </li> */}
                            <li>
                              <Link href="#!">
                                <i className="fa fa-twitter"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="https://www.linkedin.com/in/yuvrajgupta036/">
                                <i className="fa fa-linkedin"></i>
                              </Link>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </footer>
                  </Card.Body>
                </Card>
              </Col>
              {/* <!-- COL-END --> */}
            </Row>
          </Container>
        </div>
        {/* <!-- FOOTER CLOSED --> */}
      </div>
    </div>
  );
};

export default Landingpages;
