import React, { useEffect, useState } from 'react';
import * as  SwitcherData from '../../data/pages/switcher-data/switcher-data';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Dropdown, Modal, Row } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';

// For Light Primary

function changePrimaryColor(input) {

  localStorage.setItem("sashprimaryColor", input);

  const dynamicBackgroundColor = document.querySelectorAll(
    "input.color-primary-light"
  );

  SwitcherData.dynamicTransparentPrimaryColor(
    dynamicBackgroundColor,
    input
  );

  let myonoffswitch = document.getElementById("myonoffswitch1");
  myonoffswitch.checked = true;

  // Adding
  document.querySelector("body").classList.add("light-mode");

  // Removing
  document.querySelector("body").classList.remove("dark-mode");
  document.querySelector("body").classList.remove("transparent-mode");
  document.querySelector("body").classList.remove("bg-img1");
  document.querySelector("body").classList.remove("bg-img2");
  document.querySelector("body").classList.remove("bg-img3");
  document.querySelector("body").classList.remove("bg-img4");

  localStorage.removeItem("sashprimaryHoverColor");
  localStorage.removeItem("sashprimaryBorderColor");
  localStorage.removeItem("sashprimaryTransparent");
  localStorage.removeItem("sashtransparentPrimaryColor");
  localStorage.removeItem("sashtransparentBgColor");
  localStorage.removeItem("sashtransparent-bgImgPrimaryColor");
  localStorage.removeItem("sashBgImage");

  SwitcherData.OpacityValuePrimary();
}

// For Dark Primary

function darkPrimaryColor(input) {

  localStorage.setItem("sashdarkPrimaryColor", input);

  const dynamicBackgroundColor = document.querySelectorAll(
    "input.color-primary-dark"
  );

  SwitcherData.dynamicTransparentPrimaryColor(
    dynamicBackgroundColor,
    input
  );

  let myonoffswitch = document.getElementById("myonoffswitch2");
  myonoffswitch.checked = true;

  // Adding
  document.querySelector("body").classList.add("dark-mode");

  // Removing
  document.querySelector(".app").classList.remove("transparent-mode");
  document.querySelector(".app").classList.remove("light-mode");
  document.querySelector("body").classList.remove("header-light");
  document.querySelector("body").classList.remove("color-header");
  document.querySelector("body").classList.remove("gradient-header");
  document.querySelector("body").classList.remove("light-menu");
  document.querySelector("body").classList.remove("color-menu");
  document.querySelector("body").classList.remove("gradient-menu");

  localStorage.removeItem("sashprimaryColor");
  localStorage.removeItem("sashprimaryHoverColor");
  localStorage.removeItem("sashprimaryBorderColor");
  localStorage.removeItem("sashprimaryTransparent");
  localStorage.removeItem("sashtransparentPrimaryColor");
  localStorage.removeItem("sashtransparentBgColor");
  localStorage.removeItem("sashtransparent-bgImgPrimaryColor");
  localStorage.removeItem("sashBgImage");

  SwitcherData.OpacityValuePrimary();
}

// For Transparent Primary

function transparentPrimaryColor(input) {

  localStorage.setItem("sashtransparentPrimaryColor", input);

  const dynamicBackgroundColor = document.querySelectorAll(
    "input.color-primary-transparent"
  );

  SwitcherData.dynamicTransparentPrimaryColor(
    dynamicBackgroundColor,
    input
  );

  let myonoffswitch = document.getElementById("myonoffswitchTransparent");
  myonoffswitch.checked = true;

  // Adding
  document.querySelector("body").classList.add("transparent-mode");

  // Removing
  document.querySelector("body").classList.remove("light-mode");
  document.querySelector("body").classList.remove("dark-mode");
  document.querySelector("body").classList.remove("bg-img1");
  document.querySelector("body").classList.remove("bg-img2");
  document.querySelector("body").classList.remove("bg-img3");
  document.querySelector("body").classList.remove("bg-img4");

  localStorage.removeItem("sashprimaryColor");
  localStorage.removeItem("sashprimaryHoverColor");
  localStorage.removeItem("sashprimaryBorderColor");
  localStorage.removeItem("sashprimaryTransparent");

  localStorage.removeItem("sashtransparentBgColor");
  localStorage.removeItem("sashtransparent-bgImgPrimaryColor");
  localStorage.removeItem("sashBgImage");

  SwitcherData.OpacityValuePrimary();
}

// For Transparent Background

function TransparentBackground(input) {

  localStorage.setItem("sashtransparentBgColor", input);

  const dynamicBackgroundColor = document.querySelectorAll(
    "input.color-bg-transparent"
  );

  SwitcherData.dynamicBgTransparentBackground(
    dynamicBackgroundColor,
    input
  );

  let myonoffswitch = document.getElementById("myonoffswitchTransparent");
  myonoffswitch.checked = true;

  // Adding
  document.querySelector("body").classList.add("transparent-mode");

  // Removing
  document.querySelector("body").classList.remove("light-mode");
  document.querySelector("body").classList.remove("dark-mode");
  document.querySelector("body").classList.remove("bg-img1");
  document.querySelector("body").classList.remove("bg-img2");
  document.querySelector("body").classList.remove("bg-img3");
  document.querySelector("body").classList.remove("bg-img4");
  document.querySelector("body").classList.remove("light-header");
  document.querySelector("body").classList.remove("color-header");
  document.querySelector("body").classList.remove("dark-header");
  document.querySelector("body").classList.remove("gradient-header");
  document.querySelector("body").classList.remove("light-menu");
  document.querySelector("body").classList.remove("color-menu");
  document.querySelector("body").classList.remove("dark-menu");
  document.querySelector("body").classList.remove("gradient-menu");

  localStorage.removeItem("sashprimaryColor");
  localStorage.removeItem("sashprimaryHoverColor");
  localStorage.removeItem("sashprimaryBorderColor");
  localStorage.removeItem("sashprimaryTransparent");
  localStorage.removeItem("sashdarkPrimaryColor");
  localStorage.removeItem("sashtransparent-bgImgPrimaryColor");
  localStorage.removeItem("sashBgImage");

  SwitcherData.OpacityValuePrimary();
}

// For Transparent Image Primary

function BgImgTransparentPrimaryColor(input) {

  localStorage.setItem("sashtransparent-bgImgPrimaryColor", input);

  const dynamicPrimaryImgTransparent = document.querySelectorAll(
    "input.color-primary-img-transparent"
  );

  SwitcherData.dynamicBgImgTransparentPrimaryColor(
    dynamicPrimaryImgTransparent,
    input
  );

  let myonoffswitchTransparent = document.getElementById("myonoffswitchTransparent");
  myonoffswitchTransparent.checked = true;

  // Adding
  document.querySelector("body").classList.add("transparent-mode");

  // Removing
  document.querySelector("body").classList.remove("light-mode");
  document.querySelector("body").classList.remove("dark-mode");

  localStorage.removeItem("sashprimaryColor");
  localStorage.removeItem("sashprimaryHoverColor");
  localStorage.removeItem("sashprimaryBorderColor");
  localStorage.removeItem("sashprimaryTransparent");
  localStorage.removeItem("sashdarkPrimaryColor");
  localStorage.removeItem("sashtransparentPrimaryColor");
  localStorage.removeItem("sashtransparentBgColor");

  document.querySelector("html").style.removeProperty("--transparent-body");

  if (
    document.querySelector("body").classList.contains("bg-img1") === false &&
    document.querySelector("body").classList.contains("bg-img2") === false &&
    document.querySelector("body").classList.contains("bg-img3") === false &&
    document.querySelector("body").classList.contains("bg-img4") === false
  ) {
    document.querySelector("body").classList.add("bg-img1");
    localStorage.setItem("sashBgImage", "bg-img1");
  }
  SwitcherData.OpacityValuePrimary();
}
const Switcher = () => {

  useEffect(() => {
    SwitcherData.localStorageBackUp();

  },[]);

  const [Basic, setShow1] = useState(false);

  let viewDemoShow = (modal) => {
    switch (modal) {
      case "Basic":
        setShow1(true);
        break;
        default:
    }
  };

  let viewDemoClose = (modal) => {
    switch (modal) {
      case "Basic":
        setShow1(false);
        break;
        default:
    }
  };

  let { basePath } = useRouter();

  return (
    <React.Fragment>

      {/* <!-- Switcher --> */}
      <div className="switcher-wrapper">
        <div className="demo_changer">
          <div className="form_holder sidebar-right1">
            <PerfectScrollbar options={{ suppressScrollX: true, useBothWheelAxes: false }}>
              <Row>
                <div className="predefined_styles">
                <div className="swichermainleft text-center">
                    <div className="p-3 d-grid gap-2">
                      <a href="https://nextjs.spruko.com/sash/" className="btn ripple btn-primary mt-0">View Demo</a>
                      <Link href='#!' onClick={() => viewDemoShow("Basic")} className="btn ripple btn-secondary">Buy Now</Link>

                      {/* <!-- buynow modal --> */}
                      <Modal className='buynow buynow-btn' size='lg' show={Basic}>
                        <Modal.Body className='p-0 overflow-hidden'>
                          <div className="modal-content-demo cover-image py-5" style={{ backgroundImage: `url(../../../assets/switcher/img/16.jpg)` }}>
                            <div className="row justify-content-center py-4 px-0 mx-3  Licenses-img">
                              <h3 className=" text-center mb-4 text-white" style={{ zIndex: 1 }}>Licenses</h3>
                              <button aria-label="Close" onClick={() => viewDemoClose("Basic")} className="btn-close" data-bs-dismiss="modal" type="button"><span aria-hidden="true">&times;</span></button>
                              <div className="col-sm-10 col-md-8 col-xl-5 col-lg-5">
                                <div className="card  border-0 regular-license">
                                  <div className="card-body imag-list cover-image" style={{ backgroundImage: `url(../../../assets/switcher/img/14.jpg)` }}>
                                    <div className="text-white">
                                      <img src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/switcher/img/free.png`} alt="" className="w-55 free-img" />
                                      <div className="text-center">
                                        <div className="tx-26"><span className="font-weight-medium ">Regular</span> Licenses</div>
                                        <p className="fw-semi-bold mb-sm-2 mb-0">You <span className="text-success font-weight-semibold">{`can't`} charge </span> from your <br /><span className="op-8">End Product  End Users</span> </p>
                                        <Dropdown>
                                          <Dropdown.Toggle className='btn w-lg mt-1' variant="info" id="dropdown-basic">Buy Now</Dropdown.Toggle>
                                          <Dropdown.Menu className='py-0' style={{ marginTop: '0px' }}>
                                            <Dropdown.Item className='border-bottom px-3' target="_blank" href="https://1.envato.market/vnGAKL">
                                              <div><p className="tx-14 mb-0 lh-xs font-bold">Buy Now</p><span className="tx-12 op-7 ">6 months support</span></div></Dropdown.Item>
                                            <Dropdown.Item className='px-3' target="_blank" href="https://1.envato.market/KeaQNe">
                                              <div><p className="tx-14 mb-0 lh-xs font-bold">Buy Now</p><span className="tx-12 op-7 ">12 months support</span></div></Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </div>
                                    </div>

                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-10 col-md-8 col-xl-5 col-lg-5">
                                <div className="card border-0 ">
                                  <div className='imag-list card-body cover-image' style={{ backgroundImage: `url(../../../assets/switcher/img/15.jpg)` }}>
                                    <div className="text-white">
                                      <img src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/switcher/img/money-bag.png`} alt="" className="w-55 free-img" />
                                      <div className="text-center">
                                        <div className="tx-26"><span className="font-weight-medium ">Extended</span> Licenses</div>
                                        <p className="fw-semi-bold mb-sm-2 mb-0">You  <span className="text-warning font-weight-semibold">can charge</span> from your  <br /><span className="op-8">End Product  End Users</span></p>
                                        <Dropdown>
                                          <Dropdown.Toggle className='btn w-lg mt-1' variant="info" id="dropdown-basic">Buy Now</Dropdown.Toggle>
                                          <Dropdown.Menu className='py-0' style={{ marginTop: '0px' }}>
                                            <Dropdown.Item className='border-bottom px-3' target="_blank" href="https://1.envato.market/NK1jx1">
                                              <div>
                                                <p className="tx-14 mb-0 lh-xs font-bold">Buy Now</p><span className="tx-12 op-7 ">6 months support</span>
                                              </div>
                                            </Dropdown.Item>
                                            <Dropdown.Item className='px-3' target="_blank" href="https://1.envato.market/mg9QmO">
                                              <div>
                                                <p className="tx-14 mb-0 lh-xs font-bold">Buy Now</p><span className="tx-12 op-7 ">12 months support</span>
                                              </div>
                                            </Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="license-view" style={{ zIndex: 1 }}>
                                <a href="https://spruko.com/licenses" target="_blank" className="modal-title text-center mb-3 tx-14 text-white" rel="noreferrer">View license details</a>
                              </div>
                            </div>
                          </div>
                        </Modal.Body>
                      </Modal>
                      {/* <!-- End buynow modal --> */}
                      <a href="https://themeforest.net/user/spruko/portfolio" className="btn ripple btn-pink">Our Portfolio</a>
                    </div>
                  </div>
                  <div className="swichermainleft">
                    <h4>Navigation Style</h4>
                    <div className="skin-body">
                      <div className="switch_section">
                        <div className="switch-toggle d-flex">
                          <span className="me-auto">Vertical Menu</span>
                          <p className="onoffswitch2"><input type="radio" name="onoffswitch15" id="myonoffswitch34" className="onoffswitch2-checkbox" defaultChecked onClick={() => SwitcherData.VerticalMenu()} />
                            <label htmlFor="myonoffswitch34" className="onoffswitch2-label"></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Horizontal Click Menu</span>
                          <p className="onoffswitch2"><input type="radio" name="onoffswitch15" id="myonoffswitch35" className="onoffswitch2-checkbox" onClick={() => SwitcherData.Horizontal()} />
                            <label htmlFor="myonoffswitch35" className="onoffswitch2-label"></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Horizontal Hover Menu</span>
                          <p className="onoffswitch2"><input type="radio" name="onoffswitch15" id="myonoffswitch111" className="onoffswitch2-checkbox" onClick={() => SwitcherData.HorizontalHoverMenu()} />
                            <label htmlFor="myonoffswitch111" className="onoffswitch2-label"></label>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft">
                    <h4>LTR and RTL VERSIONS</h4>
                    <div className="skin-body">
                      <div className="switch_section">
                        <div className="switch-toggle d-flex">
                          <span className="me-auto">LTR Version</span>
                          <p className="onoffswitch2"><input type="radio" name="onoffswitch7"
                            onClick={() => SwitcherData.RtltoLtr()}
                            id="myonoffswitch23" className="onoffswitch2-checkbox" defaultChecked />
                            <label htmlFor="myonoffswitch23" className="onoffswitch2-label"></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">RTL Version</span>
                          <p className="onoffswitch2"><input type="radio" onClick={() => SwitcherData.LtrtoRtl()} name="onoffswitch7" id="myonoffswitch24" className="onoffswitch2-checkbox" />
                            <label htmlFor="myonoffswitch24" className="onoffswitch2-label"></label>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft">
                    <h4>Light Theme Style</h4>
                    <div className="skin-body">
                      <div className="switch_section">
                        <div className="switch-toggle d-flex">
                          <span className="me-auto">Light Theme</span>
                          <p className="onoffswitch2"><input type="radio" name="onoffswitch1" id="myonoffswitch1" className="onoffswitch2-checkbox" defaultChecked onClick={() => SwitcherData.LightTheme()} />
                            <label htmlFor="myonoffswitch1" className="onoffswitch2-label"></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex">
                          <span className="me-auto">Light Primary</span>
                          <div className="">
                            <input
                              className="w-30p h-30 input-color-picker color-primary-light" onChange={(ele) => { changePrimaryColor(ele.target.value); }} defaultValue="#6c5ffc" id="colorID"
                              type="color" data-id="bg-color" data-id1="bg-hover" data-id2="bg-border" data-id7="transparentcolor" name="lightPrimary"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft">
                    <h4>Dark Theme Style</h4>
                    <div className="skin-body">
                      <div className="switch_section">
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Dark Theme</span>
                          <p className="onoffswitch2"><input type="radio" name="onoffswitch1" id="myonoffswitch2" className="onoffswitch2-checkbox" onClick={() => SwitcherData.dark()} />
                            <label htmlFor="myonoffswitch2" className="onoffswitch2-label"></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Dark Primary</span>
                          <div className="">
                            <input
                              className="w-30p h-30 input-dark-color-picker color-primary-dark" id="darkPrimaryColorID"
                              defaultValue="#6c5ffc"
                              onChange={(ele) => { darkPrimaryColor(ele.target.value); }}
                              type="color" data-id="bg-color" data-id1="bg-hover" data-id2="bg-border" data-id3="primary" data-id8="transparentcolor"
                              name="darkPrimary"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft">
                    <h4>Transparent Theme Style</h4>
                    <div className="skin-body">
                      <div className="switch_section">
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Transparent Theme</span>
                          <p className="onoffswitch2"><input type="radio" name="onoffswitch1" onClick={() => SwitcherData.Transparent()} id="myonoffswitchTransparent" className="onoffswitch2-checkbox" />
                            <label htmlFor="myonoffswitchTransparent" className="onoffswitch2-label"></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Transparent Primary</span>
                          <div className="">
                            <input
                              className="w-30p h-30 input-transparent-color-picker color-primary-transparent"
                              defaultValue="#6c5ffc"
                              id="transparentPrimaryColorID"
                              onChange={(ele) => { transparentPrimaryColor(ele.target.value); }}
                              type="color" data-id="bg-color"
                              data-id1="bg-hover" data-id2="bg-border" data-id3="primary"
                              data-id4="primary" data-id9="transparentcolor" name="tranparentPrimary"
                            />
                          </div>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Transparent Background</span>
                          <div className="">
                            <input
                              className="w-30p h-30 input-transparent-color-picker color-bg-transparent"
                              defaultValue="#6c5ffc"
                              id="transparentBgColorID"
                              onChange={(ele) => { TransparentBackground(ele.target.value); }}
                              type="color"
                              data-id5="body"
                              data-id6="theme"
                              data-id9="transparentcolor"
                              name="transparentBackground"
                            />

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft">
                    <h4>Transparent Bg-Image Style</h4>
                    <div className="skin-body switch_section">
                      <div className="switch-toggle d-flex">
                        <span className="me-auto">Bg-Image Primary</span>
                        <div className="">
                          <input
                            className="w-30p h-30 color-primary-img-transparent" defaultValue="#6c5ffc" id="transparentBgImgPrimaryColorID"
                            onChange={(ele) => { BgImgTransparentPrimaryColor(ele.target.value); }}
                            type="color" data-id="bg-color" data-id1="bg-hover" data-id2="bg-border" data-id3="primary" data-id4="primary" data-id9="transparentcolor" name="tranparentPrimary"
                          />
                        </div>
                      </div>
                      <div className="switch-toggle d-flex mt-2">
                        <Link className="bg-img1" href="#!" onClick={() => SwitcherData.bgimage1()} ><img src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/media/bg-img1.jpg`} alt="Bg-1" id="bgimage1" /></Link>
                        <Link className="bg-img2" href="#!" onClick={() => SwitcherData.bgimage2()}><img src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/media/bg-img2.jpg`} alt="Bg-2" id="bgimage2" /></Link>
                        <Link className="bg-img3" href="#!" onClick={() => SwitcherData.bgimage3()}><img src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/media/bg-img3.jpg`} alt="Bg-3" id="bgimage3" /></Link>
                        <Link className="bg-img4" href="#!" onClick={() => SwitcherData.bgimage4()}><img src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/media/bg-img4.jpg`} alt="Bg-4" id="bgimage4" /></Link>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft MenuStyles">
                    <h4>Menu Styles</h4>
                    <div className="skin-body">
                      <div className="switch_section">
                        <div className="switch-toggle lightMenu d-flex">
                          <span className="me-auto">Light Menu</span>
                          <p className="onoffswitch2"><input type="radio" name="onoffswitch2" id="myonoffswitch3" className="onoffswitch2-checkbox" defaultChecked onClick={() => SwitcherData.LightMenu()} />
                            <label htmlFor="myonoffswitch3" className="onoffswitch2-label"></label>
                          </p>
                        </div>
                        <div className="switch-toggle colorMenu d-flex mt-2">
                          <span className="me-auto">Color Menu</span>
                          <p className="onoffswitch2"><input type="radio" name="onoffswitch2" id="myonoffswitch4" className="onoffswitch2-checkbox" onClick={() => SwitcherData.ColorMenu()} />
                            <label htmlFor="myonoffswitch4" className="onoffswitch2-label"></label>
                          </p>
                        </div>
                        <div className="switch-toggle darkMenu d-flex mt-2">
                          <span className="me-auto">Dark Menu</span>
                          <p className="onoffswitch2"><input type="radio" name="onoffswitch2" id="myonoffswitch5" className="onoffswitch2-checkbox" onClick={() => SwitcherData.DarkMenu()} />
                            <label htmlFor="myonoffswitch5" className="onoffswitch2-label"></label>
                          </p>
                        </div>
                        <div className="switch-toggle gradientMenu d-flex mt-2">
                          <span className="me-auto">Gradient Menu</span>
                          <p className="onoffswitch2"><input type="radio" name="onoffswitch2" id="myonoffswitch19" className="onoffswitch2-checkbox" onClick={() => SwitcherData.GradientMenu()} />
                            <label htmlFor="myonoffswitch19" className="onoffswitch2-label"></label>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft MenuStyles">
                    <h4>Header Styles</h4>
                    <div className="skin-body">
                      <div className="switch_section">
                        <div className="switch-toggle lightHeader d-flex">
                          <span className="me-auto">Light Header</span>
                          <p className="onoffswitch2"><input type="radio" name="onoffswitch3" id="myonoffswitch6" className="onoffswitch2-checkbox" defaultChecked onClick={() => SwitcherData.Lightheader()} />
                            <label htmlFor="myonoffswitch6" className="onoffswitch2-label"></label>
                          </p>
                        </div>
                        <div className="switch-toggle  colorHeader d-flex mt-2">
                          <span className="me-auto">Color Header</span>
                          <p className="onoffswitch2"><input type="radio" name="onoffswitch3" id="myonoffswitch7" className="onoffswitch2-checkbox" onClick={() => SwitcherData.Colorheader()} />
                            <label htmlFor="myonoffswitch7" className="onoffswitch2-label"></label>
                          </p>
                        </div>
                        <div className="switch-toggle darkHeader d-flex mt-2">
                          <span className="me-auto">Dark Header</span>
                          <p className="onoffswitch2"><input type="radio" name="onoffswitch3" id="myonoffswitch8" className="onoffswitch2-checkbox" onClick={() => SwitcherData.Darkheader()} />
                            <label htmlFor="myonoffswitch8" className="onoffswitch2-label"></label>
                          </p>
                        </div>

                        <div className="switch-toggle darkHeader d-flex mt-2">
                          <span className="me-auto">Gradient Header</span>
                          <p className="onoffswitch2"><input type="radio" name="onoffswitch3" id="myonoffswitch20" className="onoffswitch2-checkbox" onClick={() => SwitcherData.gradientheader()} />
                            <label htmlFor="myonoffswitch20" className="onoffswitch2-label"></label>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft">
                    <h4>Layout Width Styles</h4>
                    <div className="skin-body">
                      <div className="switch_section">
                        <div className="switch-toggle d-flex">
                          <span className="me-auto">Full Width</span>
                          <p className="onoffswitch2"><input type="radio" name="onoffswitch4" id="myonoffswitch9" className="onoffswitch2-checkbox" defaultChecked onClick={() => SwitcherData.FullWidth()} />
                            <label htmlFor="myonoffswitch9" className="onoffswitch2-label"></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Boxed</span>
                          <p className="onoffswitch2"><input type="radio" name="onoffswitch4" id="myonoffswitch10" className="onoffswitch2-checkbox" onClick={() => SwitcherData.Boxed()} />
                            <label htmlFor="myonoffswitch10" className="onoffswitch2-label"></label>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft">
                    <h4>Layout Positions</h4>
                    <div className="skin-body">
                      <div className="switch_section">
                        <div className="switch-toggle d-flex">
                          <span className="me-auto">Fixed</span>
                          <p className="onoffswitch2"><input type="radio" name="onoffswitch5" id="myonoffswitch11" className="onoffswitch2-checkbox" defaultChecked onClick={() => SwitcherData.Fixed()} />
                            <label htmlFor="myonoffswitch11" className="onoffswitch2-label"></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Scrollable</span>
                          <p className="onoffswitch2"><input type="radio" name="onoffswitch5" id="myonoffswitch12" className="onoffswitch2-checkbox" onClick={() => SwitcherData.Scrollable()} />
                            <label htmlFor="myonoffswitch12" className="onoffswitch2-label"></label>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft">
                    <h4>Reset All Styles</h4>
                    <div className="skin-body">
                      <div className="switch_section my-4">
                        <button className="btn btn-danger btn-block"
                          onClick={() => {
                            localStorage.clear();
                            let html = document.querySelector('html');
                            html.style = '';
                            SwitcherData.OpacityValuePrimary();
                            SwitcherData.resetData();
                          }}

                          type="button">Reset All
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Row>
            </PerfectScrollbar>
          </div>
        </div>
      </div>

      {/* <!-- End Switcher --> */}

    </React.Fragment>
  );
};

export default Switcher;

