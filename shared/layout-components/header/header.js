import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FormControl, Nav, Modal, Row, Col, Dropdown, Badge, Navbar, InputGroup } from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { MENUITEMS } from '../sidebar/sidemenu';
import { connect } from "react-redux";  
import { shopingData } from '../../data/data-ecommerce/datashoppingcart';
import { AddToCart } from '../../redux/action';
import { useRouter } from 'next/router';

//leftsidemenu
const SideMenuIcon = () => {
  document.querySelector(".app").classList.toggle("sidenav-toggled");
};

// Darkmode
const DarkMode = () => {
  if(document.querySelector(".app").classList.contains('dark-mode')){
    document.querySelector(".app").classList.remove('dark-mode');
    let DarkMenu1 = document.querySelector("#myonoffswitch1");
    DarkMenu1.checked = true;
  }
  else{
    document.querySelector(".app").classList.add('dark-mode');
    let DarkMenu1 = document.querySelector("#myonoffswitch2");
    DarkMenu1.checked = true;
  }
};

// FullScreen
var i = true;
const Fullscreen = (vale) => {
  // var elem = document.documentElement;
  switch (vale) {
    case true:
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) { /* Safari */
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) { /* IE11 */
        document.documentElement.msRequestFullscreen();
      }
      i = false;
      break;
    case false:
      document.exitFullscreen();
      i = true;
      break;
    default:
      break;
  }
};

// SwitcherMenu

const SidSwitcherIcon = () => {

  //leftsidemenu
  document.querySelector(".demo_changer").classList.toggle("active");
  let Rightside = document.querySelector(".demo_changer");
  Rightside.style.right = "0px";

};

const RightSideBar = () => {

  //rightsidebar
  document.querySelector(".sidebar-right").classList.toggle("sidebar-open");
  //swichermainright
};

const Header = ({ localVaraiable }) => {

  let { basePath } = useRouter();

  // For CountrySelector Modal
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [InputValue, setInputValue] = useState("");
  const [searchval, setsearchval] = useState("Type something");
  const [searchcolor, setsearchcolor] = useState("text-dark");
  const [NavData, setNavData] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // let navigate = useNavigate();
  let myfunction = (inputvalue) => {
    document.querySelector(".search-result").classList.remove("d-none");
    // console.log('ok');

    let i = [];
    let allElement2 = [];

    MENUITEMS.map(mainlevel => {
      if (mainlevel.Items) {
        mainlevel.Items.map(sublevel => {
          // console.log("sublevel --- ", sublevel)
          if (sublevel.children) {
            sublevel.children.map(sublevel1 => {
              // console.log("sublevel1 --- ", sublevel1)
              i.push(sublevel1);
              if (sublevel1.children) {
                sublevel1.children.map(sublevel2 => {
                  // console.log("sublevel2 --- ", sublevel2)
                  i.push(sublevel2);
                  return sublevel2;
                });
              }
              return sublevel1;
            });
          }
          return sublevel;
        });
      }
      return mainlevel;

    }
    );
    for (let allElement of i) {
      if (allElement.title.toLowerCase().includes(inputvalue.toLowerCase())) {
        if (allElement.title.toLowerCase().startsWith(inputvalue.toLowerCase())) {
          setShow2(true);
          allElement2.push(allElement);
        }
      }
    }
    if (!allElement2.length || inputvalue === "") {
      if (inputvalue === "") {
        setShow2(false);
        setsearchval("Type something");
        setsearchcolor('text-dark');
      }
      if (!allElement2.length) {
        setShow2(false);
        setsearchcolor('text-danger');
        setsearchval("There is no component with this name");
      }
    }
    setNavData(allElement2);

  };

  // let location = useLocation();

  const [FiltershopingData, sethopingData] = useState([]);
	const [Price, setPrice] = useState(0);

	useEffect(() => {
    document.querySelector('.main-content')?.addEventListener('click', () => {
      document.querySelector(".search-result")?.classList.add("d-none");
    });
		if (localVaraiable == undefined) {
			sethopingData(shopingData);
			shopingData.filter((ele) => {
				setPrice(Number(ele.newprice) + Price);
			});
		}
		else if (localVaraiable.length == 0) {
			sethopingData(shopingData);
			shopingData.filter((ele) => {
				setPrice(Number(ele.newprice) + Price);
			});
		}
		else {
			sethopingData(localVaraiable);
			localVaraiable.filter((ele) => {
				setPrice(Number(ele.newprice) + Price);
			});
		}

	},[Price, localVaraiable]);

  return (

    <div>

      <div className='header sticky app-header header1'>
        <div className="container-fluid main-container">
          <div className="d-flex">
            <Link aria-label="Hide Sidebar" className="app-sidebar__toggle" data-bs-toggle="sidebar" href="#!" onClick={() => SideMenuIcon()} />
            <Link className="logo-horizontal " href={`/components/dashboard/dashboard/`}>
              <img src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/brand/logo-white.png`} className="header-brand-img desktop-logo" alt="logo" />
              <img src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/brand/logo-dark.png`} className="header-brand-img light-logo1" alt="logo" />
            </Link>
            <div className="main-header-center ms-3 d-none d-lg-block">
              <FormControl onChange={(ele => { myfunction(ele.target.value); setInputValue(ele.target.value); })} onClick={() => { setShow1(true); }} placeholder="Search for results..." type="search" />
              <button className='btn px-0 pt-2'><i className="fe fe-search" aria-hidden="false"></i></button>
              {show1 ?
                <div className="card search-result p-absolute w-100 card border mt-1">
                  <div className="card-header">
                    <h4 className="card-title me-2 text-break">Search result of {`${InputValue}`}</h4>
                  </div>
                  <ul className='card-body list-group'>
                    {show2 ?
                      NavData.map((e) =>
                        <li key={Math.random()}>
                          <Link className='list-group-item' href={`${e.path}/`}>{e.title}</Link>
                        </li>
                      )
                      : <b className={`${searchcolor} errortextHilight list-group-item`}>{searchval}</b>}
                  </ul>

                </div>
                : ""}
            </div>

            <Navbar className="d-flex order-lg-2 ms-auto header-right-icons">
              <Dropdown className="dropdown d-none" >
                <Link href="#!" className="nav-link icon " >
                  <i className="fe fe-search"></i>
                </Link>
                <Dropdown.Menu className="header-search dropdown-menu-start ">
                  <InputGroup className="input-group w-100 p-2">
                    <FormControl type="text" placeholder="Search...." />
                    <InputGroup.Text className="btn btn-primary">
                      <i className="fe fe-search" aria-hidden="true"></i>
                    </InputGroup.Text>
                  </InputGroup>
                </Dropdown.Menu>
              </Dropdown>
              <Navbar.Toggle className="d-lg-none ms-auto header2 navbar-toggler navresponsive-toggler" >
                <span className="navbar-toggler-icon fe fe-more-vertical"></span>
              </Navbar.Toggle>

              <div className="responsive-navbar navbar p-0">

                <Navbar.Collapse className="" id="navbarSupportedContent-4">
                  <div className="d-flex order-lg-2">
                    <Dropdown className="d-lg-none d-flex" >
                      <Dropdown.Toggle href="#!" className="nav-link icon no-caret" >
                        <i className="fe fe-search"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="header-search dropdown-menu-start">
                        <InputGroup className="w-100 p-2">
                          <FormControl type="text" placeholder="Search...." />
                          <InputGroup.Text>
                            <i className="fa fa-search" aria-hidden="true" ></i>
                          </InputGroup.Text>
                        </InputGroup>
                      </Dropdown.Menu>
                    </Dropdown>

                    {/* Country Select Modal */}

                    <div className="country">
                      <Link href='#!' onClick={handleShow} className="nav-link icon text-center"><i className="fe fe-globe"></i><span className="fs-16 ms-2 d-none d-xl-block">English</span></Link>
                      <Modal className='modal fade' show={show} onHide={handleClose} centered>
                        <Modal.Header>
                          <Modal.Title as='h6'>Choose Country</Modal.Title>
                          <span className="d-flex ms-auto" onClick={handleClose}><i className='fe fe-x ms-auto' ></i></span>
                        </Modal.Header>
                        <Modal.Body>
                          <Row as='ul' className="p-3">
                            <Col lg={6} as='li' className="mb-2">
                              <Link href="#!" className="btn btn-country btn-lg btn-block active">
                                <span className="country-selector"><img alt="" src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/flags-img/us_flag.jpg`}
                                  className="me-3 language" /></span>USA
                              </Link>
                            </Col>
                            <Col lg={6} as='li' className="mb-2">
                              <Link href="#!" className="btn btn-country btn-lg btn-block">
                                <span className="country-selector"><img alt=""
                                  src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/flags-img/italy_flag.jpg`}
                                  className="me-3 language" /></span>Italy
                              </Link>
                            </Col>
                            <Col lg={6} as='li' className="mb-2">
                              <Link href="#!" className="btn btn-country btn-lg btn-block">
                                <span className="country-selector"><img alt=""
                                  src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/flags-img/spain_flag.jpg`}
                                  className="me-3 language" /></span>Spain
                              </Link>
                            </Col>
                            <Col lg={6} as='li' className="mb-2">
                              <Link href="#!" className="btn btn-country btn-lg btn-block">
                                <span className="country-selector"><img alt=""
                                  src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/flags-img/india_flag.jpg`}
                                  className="me-3 language" /></span>India
                              </Link>
                            </Col>
                            <Col lg={6} as='li' className="mb-2">
                              <Link href="#!" className="btn btn-country btn-lg btn-block">
                                <span className="country-selector"><img alt=""
                                  src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/flags-img/french_flag.jpg`}
                                  className="me-3 language" /></span>French
                              </Link>
                            </Col>
                            <Col lg={6} as='li' className="mb-2">
                              <Link href="#!" className="btn btn-country btn-lg btn-block">
                                <span className="country-selector"><img alt=""
                                  src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/flags-img/russia_flag.jpg`}
                                  className="me-3 language" /></span>Russia
                              </Link>
                            </Col>
                            <Col lg={6} as='li' className="mb-2">
                              <Link href="#!" className="btn btn-country btn-lg btn-block">
                                <span className="country-selector"><img alt=""
                                  src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/flags-img/germany_flag.jpg`}
                                  className="me-3 language" /></span>Germany
                              </Link>
                            </Col>
                            <Col lg={6} as='li' className="mb-2">
                              <Link href="#!" className="btn btn-country btn-lg btn-block">
                                <span className="country-selector"><img alt=""
                                  src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/flags-img/argentina.jpg`}
                                  className="me-3 language" /></span>Argentina
                              </Link>
                            </Col>
                            <Col lg={6} as='li' className="mb-2">
                              <Link href="#!" className="btn btn-country btn-lg btn-block">
                                <span className="country-selector"><img alt="" src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/flags-img/malaysia.jpg`}
                                  className="me-3 language" /></span>Malaysia
                              </Link>
                            </Col>
                            <Col lg={6} as='li' className="mb-2">
                              <Link href="#!" className="btn btn-country btn-lg btn-block">
                                <span className="country-selector"><img alt="" src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/flags-img/turkey.jpg`}
                                  className="me-3 language" /></span>Turkey
                              </Link>
                            </Col>
                          </Row>
                        </Modal.Body>
                      </Modal>

                    </div>

                    {/* Dark Mode */}

                    <div className="dropdown">
                      <Nav.Link className="nav-link icon theme-layout nav-link-bg layout-setting"  onClick={() => DarkMode()}>
                        <span className="dark-layout"><i className="fe fe-moon"></i></span>
                        <span className="light-layout"><i className="fe fe-sun"></i></span>
                      </Nav.Link>
                    </div>

                    {/* <!-- Shopping-Cart Theme-Layout --> */}

                    <Dropdown className="shopping-cart">
                      <Dropdown.Toggle variant='' className="nav-link icon text-center no-caret"> <i className="fe fe-shopping-cart"></i><span className="badge bg-secondary header-badge">4</span></Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu-end dropdown-menu-arrow">
                        <div className="drop-heading border-bottom">
                          <div className="d-flex">
                            <h6 className="mt-1 mb-0 fs-16 fw-semibold text-dark"> My Shopping Cart</h6>
                            <div className="ms-auto">
                              <Badge bg='danger-transparent' className="header-badge text-danger fs-14">Hurry Up!</Badge>
                            </div>
                          </div>
                        </div>

                        <PerfectScrollbar style={{ height: "300px"  }} className="header-dropdown-list message-menu">
                          {FiltershopingData !== "" ? shopingData.map((idx) => (
                            <Link href={`/components/e-commerce/shopping-cart/`} className="d-flex p-4 dropdown-item" key={Math.random()}>
                              <img className="avatar avatar-xl br-5 me-3 align-self-center cover-image" src={`${process.env.NODE_ENV === 'production'? basePath : ''}${idx.preview}`} alt='pngs-4' />
                              <div className="wd-50p">
                                <h5 className="mb-1">{idx.heading}</h5>
                                <span>Status: <span className={`text-success`}>In Stock</span></span>
                                <p className="fs-13 text-muted mb-0">Quantity: {idx.quantity}</p>
                              </div>
                              <div className="ms-auto text-end d-flex fs-16">
                                <span className="fs-16 text-dark d-none d-sm-block px-4">
                                  {idx.price1}
                                </span>
                                <span className="fs-16 btn p-0 cart-trash">
                                  <i className="fe fe-trash-2 border text-danger brround d-block p-2"></i>
                                </span>
                              </div>
                            </Link>
                          )): <p className='text-danger'>{`"There is no pr`}oduct available in the {`Cart"`}</p>}
                        </PerfectScrollbar>
                        <Dropdown.Divider className="m-0" />
                        <div className="dropdown-footer">
                          <Link className="btn btn-primary btn-pill w-sm btn-sm py-2" href={`/components/e-commerce/checkout/`}><i className="fe fe-check-circle"></i> Checkout</Link>
                          <span className="float-end p-2 fs-17 fw-semibold">Total:$6789</span>
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>

                    {/* FullScreen button */}

                    <div className="dropdown">
                      <Nav.Link className="nav-link icon full-screen-link nav-link-bg" onClick={() => Fullscreen(i)}>
                        <i className="fe fe-minimize fullscreen-button"></i>
                      </Nav.Link>
                    </div>

                    {/* Notification */}

                    <Dropdown className="notifications">
                      <Dropdown.Toggle variant='' className="nav-link icon no-caret"><i className="fe fe-bell"></i><span className=" pulse"></span></Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu-end dropdown-menu-arrow">
                        <div className="drop-heading border-bottom">
                          <div className="d-flex">
                            <h6 className="mt-1 mb-0 fs-16 fw-semibold text-dark">Notifications
                            </h6>
                          </div>
                        </div>
                        <div className="notifications-menu">
                          <Link className="d-flex dropdown-item" href={`/components/pages/notifications-list`}>
                            <div
                              className="me-3 notifyimg  bg-primary brround box-shadow-primary">
                              <i className="fe fe-mail"></i>
                            </div>
                            <div className="mt-1">
                              <h5 className="notification-label mb-1">New Application received
                              </h5>
                              <span className="notification-subtext">3 days ago</span>
                            </div>
                          </Link>
                          <Link className="d-flex dropdown-item" href={`/components/pages/notifications-list`}>
                            <div
                              className="me-3 notifyimg  bg-secondary brround box-shadow-secondary">
                              <i className="fe fe-check-circle"></i>
                            </div>
                            <div className="mt-1">
                              <h5 className="notification-label mb-1">Project has been
                                approved</h5>
                              <span className="notification-subtext">2 hours ago</span>
                            </div>
                          </Link>
                          <Link className="d-flex dropdown-item" href={`/components/pages/notifications-list`}>
                            <div
                              className="me-3 notifyimg  bg-success brround box-shadow-success">
                              <i className="fe fe-shopping-cart"></i>
                            </div>
                            <div className="mt-1">
                              <h5 className="notification-label mb-1">Your Product Delivered
                              </h5>
                              <span className="notification-subtext">30 min ago</span>
                            </div>
                          </Link>
                          <Link className="d-flex dropdown-item" href={`/components/pages/notifications-list`}>
                            <div className="me-3 notifyimg bg-pink brround box-shadow-pink">
                              <i className="fe fe-user-plus"></i>
                            </div>
                            <div className="mt-1">
                              <h5 className="notification-label mb-1">Friend Requests</h5>
                              <span className="notification-subtext">1 day ago</span>
                            </div>
                          </Link>
                        </div>
                        <div className="dropdown-divider m-0"></div>
                        <Link href={`/components/pages/notifications-list`} className="dropdown-item text-center p-3 text-muted">
                            View all Notification
                        </Link>
                      </Dropdown.Menu>
                    </Dropdown>

                    {/* Messages */}

                    <Dropdown className="message">
                      <Dropdown.Toggle variant='' className="nav-link icon text-center no-caret">
                        <i className="fe fe-message-square"></i><span className="pulse-danger"></span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu-end dropdown-menu-arrow">
                        <div className="drop-heading border-bottom">
                          <div className="d-flex">
                            <h6 className="mt-1 mb-0 fs-16 fw-semibold text-dark">You have 5
                              Messages</h6>
                            <div className="ms-auto">
                              <Link href="#!" className="text-muted p-0 fs-12">make all unread</Link>
                            </div>
                          </div>
                        </div>
                        <div className="message-menu">
                          <Link className="d-flex dropdown-item" href={`/components/apps/chat/`}>
                            <img
                              className="avatar avatar-md brround me-3 align-self-center cover-image" alt='user-1'
                              src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/users/1.jpg`}/>
                            <div className="wd-90p">
                              <div className="d-flex">
                                <h5 className="mb-1">Peter Theil</h5>
                                <small className="text-muted ms-auto text-end">
                                  6:45 am
                                </small>
                              </div>
                              <span>Commented on file Guest list....</span>
                            </div>
                          </Link>
                          <Link className="d-flex dropdown-item" href={`/components/apps/chat/`}>
                            <img
                              className="avatar avatar-md brround me-3 align-self-center cover-image" alt='user-15'
                              src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/users/15.jpg`}/>
                            <div className="wd-90p">
                              <div className="d-flex">
                                <h5 className="mb-1">Abagael Luth</h5>
                                <small className="text-muted ms-auto text-end">
                                  10:35 am
                                </small>
                              </div>
                              <span>New Meetup Started......</span>
                            </div>
                          </Link>
                          <Link className="d-flex dropdown-item" href={`/components/apps/chat/`}>
                            <img
                              className="avatar avatar-md brround me-3 align-self-center cover-image" alt='user-12'
                              src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/users/12.jpg`}/>
                            <div className="wd-90p">
                              <div className="d-flex">
                                <h5 className="mb-1">Brizid Dawson</h5>
                                <small className="text-muted ms-auto text-end">
                                  2:17 pm
                                </small>
                              </div>
                              <span>Brizid is in the Warehouse...</span>
                            </div>
                          </Link>
                          <Link className="d-flex dropdown-item" href={`/components/apps/chat/`}>
                            <img
                              className="avatar avatar-md brround me-3 align-self-center cover-image" alt='user-4'
                              src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/users/4.jpg`}/>
                            <div className="wd-90p">
                              <div className="d-flex">
                                <h5 className="mb-1">Shannon Shaw</h5>
                                <small className="text-muted ms-auto text-end">
                                  7:55 pm
                                </small>
                              </div>
                              <span>New Product Realease......</span>
                            </div>
                          </Link>

                        </div>
                        <div className="dropdown-divider m-0"></div>
                        <Link href="#!" className="text-center p-3 text-muted dropdown-item">
                          See all
                          Messages
                        </Link>
                      </Dropdown.Menu>
                    </Dropdown>

                    {/* Right Side-bar */}

                    <div className="dropdown header-settings" onClick={() => RightSideBar()}>
                      <Link href="#!" className="nav-link icon"
                        data-bs-toggle="sidebar-right" data-target=".sidebar-right">
                        <i className="fe fe-align-right"></i>
                      </Link>
                    </div>

                    {/* Profile  */}

                    <Dropdown className="profile-1">
                      <Dropdown.Toggle variant='' className="nav-link leading-none d-flex no-caret">
                        <img src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/users/21.jpg`}alt="profile-user"
                          className="avatar  profile-user brround cover-image" />
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu-end dropdown-menu-arrow">
                        <div className="drop-heading">
                          <div className="text-center">
                            <h5 className="text-dark mb-0 fs-14 fw-semibold">Percy Kewshun</h5>
                            <small className="text-muted">Senior Admin</small>
                          </div>
                        </div>
                        <div className="dropdown-divider m-0"></div>
                        <Link className="dropdown-item" href={`/components/pages/profile/`}>
                          <i className="dropdown-icon fe fe-user"></i> Profile
                        </Link>
                        <Link className="dropdown-item" href={`/components/pages/mail-index/`}>
                          <i className="dropdown-icon fe fe-mail"></i> Inbox
                          <span className="badge bg-danger rounded-pill float-end">5</span>
                        </Link>
                        <Link className="dropdown-item" href={`/components/authentication/lockscreen/`}>
                          <i className="dropdown-icon fe fe-lock"></i> Lockscreen
                        </Link>
                        <Link className="dropdown-item" href={`/`}>
                          <i className="dropdown-icon fe fe-alert-circle"></i> Sign out
                        </Link>
                      </Dropdown.Menu>
                    </Dropdown>

                  </div>
                </Navbar.Collapse>
              </div>

              {/* Switcher  */}

              <div className="demo-icon nav-link icon" onClick={() => SidSwitcherIcon()}>
                <i className="fe fe-settings fa-spin  text_primary"></i>
              </div>

            </Navbar>
          </div>
        </div>
      </div>
    </div>
  );

};
const mapStateToProps = (state) => ({
  localVaraiable: state,
});
export default connect(mapStateToProps, {AddToCart})(Header);
