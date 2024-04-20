import React, { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import { MENUITEMS } from './sidemenu';
import PerfectScrollbar from 'react-perfect-scrollbar';

const Onhover = () => {
  if (document.querySelector(".app")?.classList.contains("sidenav-toggled"))
    document.querySelector(".app").classList.add("sidenav-toggled-open");

};
const Outhover = () => {
  document.querySelector(".app")?.classList.remove("sidenav-toggled-open");
};
let history = [];

const Sidebar = () => {

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
    if (localStorage.sashhorizontal) {
          document.querySelector("body")?.classList.add("horizontal");
          document.querySelector(".main-container")?.classList.add("container");
          document.querySelector(".main-sidemenu")?.classList.add("container");
          document.querySelector(".main-content")?.classList.add("hor-content");
          document.querySelector(".app-sidebar")?.classList.add("horizontal-main");
          document.querySelector(".header")?.classList.add("hor-header");
          document.querySelector(".side-app")?.classList.add("container");
          document.querySelector(".app")?.classList.remove("sidebar-mini");
          document.querySelector(".header")?.classList.remove("app-header");
          document.querySelector(".main-content")?.classList.remove("app-content");
          document.querySelector(".main-container")?.classList.remove("container-fluid");
          document.querySelector(".app")?.classList.remove("sidenav-toggled");
          document.querySelector(".app")?.classList.remove("horizontal-hover");
          document.querySelector(".horizontal .side-menu")?.classList.add("flex-nowrap");
    }
    if (localStorage.sashhorizontalHover) {
          document.querySelector("body")?.classList.add("horizontal-hover");
          document.querySelector(".app")?.classList.add("horizontal-hover");
          document.querySelector(".app")?.classList.add("horizontal");
          document.querySelector(".main-content")?.classList.add("hor-content");
          document.querySelector(".main-container")?.classList.add("container");
          document.querySelector(".header")?.classList.add("hor-header");
          document.querySelector(".app-sidebar")?.classList.add("horizontal-main");
          document.querySelector(".main-sidemenu")?.classList.add("container");
          document.querySelector(".side-app")?.classList.add("container");
  
          document.querySelector("#slide-left")?.classList.remove("d-none");
          document.querySelector("#slide-right")?.classList.remove("d-none");
          document.querySelector(".main-content")?.classList.remove("app-content");
          document.querySelector(".main-container")?.classList.remove("container-fluid");
          document.querySelector(".header")?.classList.remove("app-header");
          document.querySelector(".app")?.classList.remove("sidebar-mini");
          document.querySelector(".app")?.classList.remove("sidenav-toggled");
  
          document.querySelector(".horizontal .side-menu")?.classList.add("nowrap");
  }
  }, []);

  let { basePath } = useRouter();

  let location = useRouter();
  const [menuitems, setMenuitems] = useState(MENUITEMS);
  useEffect(() => {

    history.push(location.pathname);  // add  history to history  stack for current location.pathname to prevent multiple history calls innerWidth  and innerWidth calls from  multiple users. This is important because the history stack is not always empty when the user clicks  the history       
    if (history.length > 2) {
      history.shift();
    }
    if (history[0] !== history[1]) {
      setSidemenu();
    }
    let mainContent = document.querySelector('.main-content');

    //when we click on the body to remove

    //eslint
    mainContent.addEventListener('click', mainContentClickFn);
    return () => {
      mainContent.removeEventListener('click', mainContentClickFn);
    };

  }, [location]);// eslint-disable-line react-hooks/exhaustive-deps

  // location
  useEffect(() => {

    if (document.body.classList.contains('horizontal') && window.innerWidth >= 992) {
      clearMenuActive();
    }
  }, []);

  //  In Horizontal When we click the body it should we Closed using in useEfffect Refer line No:16
  //eslint
  function mainContentClickFn() {
    if (document.body.classList.contains('horizontal') && window.innerWidth >= 992) {
      // clearMenuActive();
    }
  }

  function clearMenuActive() {
    MENUITEMS.map(mainlevel => {
      if (mainlevel.Items) {
        mainlevel.Items.map(sublevel => {
          sublevel.active = false;
          if (sublevel.children) {
            sublevel.children.map(sublevel1 => {
              sublevel1.active = false;
              if (sublevel1.children) {
                sublevel1.children.map(sublevel2 => {
                  sublevel2.active = false;
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

    });

    setMenuitems(arr => [...arr]);
  }

  function setSidemenu() {

    if (menuitems) {
      menuitems.map(mainlevel => {
        if (mainlevel.Items) {
          mainlevel.Items.map((items) => {
            items.active = false;
            items.selected = false;
            if (
              location.pathname === "/sash/preview/" ||
              location.pathname === "/sash/preview") {
              location.pathname = "/sash/preview/Dashboard/";
            }

            if (location.pathname === items.path) {
              items.active = true;
              items.selected = true;
            }
            if (items.children) {
              items.children.map(submenu => {
                submenu.active = false;
                // console.log(submenu.active = false);
                submenu.selected = false;
                if (location.pathname === submenu.path) {
                  items.active = true;
                  items.selected = true;
                  submenu.active = true;
                  submenu.selected = true;
                }
                if (submenu.children) {
                  submenu.children.map(submenu1 => {
                    submenu1.active = false;
                    submenu1.selected = false;
                    if (location.pathname === submenu1.path) {
                      items.active = true;
                      items.selected = true;
                      submenu.active = true;
                      submenu.selected = true;
                      submenu1.active = true;
                      submenu1.selected = true;
                    }
                    return submenu1;
                  });
                }
                return submenu;
              });
            }
            return items;
          });
        }
        setMenuitems(arr => [...arr]);
        return mainlevel;
      });
    }
  }

  function toggleSidemenu(item) {
    if (!document.body.classList.contains('horizontal-hover') || window.innerWidth < 992
    ) {
      // To show/hide the menu
      if (!item.active) {
        menuitems.map(mainlevel => {
          if (mainlevel.Items) {
            mainlevel.Items.map(sublevel => {
              sublevel.active = false;
              if (item === sublevel) {
                sublevel.active = true;
              }
              if (sublevel.children) {
                sublevel.children.map(sublevel1 => {
                  sublevel1.active = false;
                  if (item === sublevel1) {
                    sublevel.active = true;
                    sublevel1.active = true;
                  }
                  if (sublevel1.children) {
                    sublevel1.children.map(sublevel2 => {
                      sublevel2.active = false;
                      if (item === sublevel2) {
                        sublevel.active = true;
                        sublevel1.active = true;
                        sublevel2.active = true;
                      }
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
        });
      }
      else {
        item.active = !item.active;
      }
    }

    setMenuitems(arr => [...arr]);
  }
  return (
    <Fragment>
      <div className="app-sidebar" onMouseOver={() => Onhover()}
        onMouseOut={() => Outhover()}>
        <PerfectScrollbar options={{ suppressScrollX: true, useBothWheelAxes: false }}>
          <div className="side-header">
            <Link className="header-brand1" href={`/components/dashboard/dashboard/`}>
              <img src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/brand/logo-white.png`} className="header-brand-img desktop-logo" alt="logo1" />
              <img src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/brand/icon-white.png`} className="header-brand-img toggle-logo" alt="logo-2" />
              <img src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/brand/icon-dark.png`} className="header-brand-img light-logo" alt="logo-3" />
              <img src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/brand/logo-dark.png`} className="header-brand-img light-logo1" alt="logo-4" />
            </Link>
          </div>
          <div className="main-sidemenu">
            <div className="slide-left disabled" id="slide-left"><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#7b8191"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" />
            </svg></div>
            {/* first level */}
            <ul className="side-menu" style={{ marginLeft: "0px" }}>
              {menuitems.map((Item, i) => (
                <Fragment key={i + Math.random() * 100}>
                  <li className="sub-category"><h3>{Item.menutitle}</h3></li>
                  {Item.Items.map((menuItem, i) => (
                    <li className={`slide ${menuItem.selected ? 'is-expanded' : ''}`} key={i}>
                      {menuItem.type === "sub" ? (
                        <Link
                          href="#!"
                          className={`side-menu__item ${menuItem.selected ? 'active' : ''}`}
                          onClick={(event) => {
                            event.preventDefault();
                            toggleSidemenu(menuItem);
                          }}
                        >

                          <i className={`${menuItem.icon} side-menu__icon`}></i>
                          <span className="side-menu__label">
                            {menuItem.title}{menuItem.active}
                          </span>
                          {menuItem.badge ? (
                            <span className={menuItem.badge}>
                              {menuItem.badgetxt}
                            </span>
                          ) : (
                            ""
                          )}
                          {domLoaded && (
                            menuItem.active ?
                             document.body.classList.contains('horizontal') ?
                              <i className="angle fe fe-chevron-up"></i> : 
                              <i className="angle fe fe-chevron-down"></i> : 
                              document.body.classList.contains('horizontal') ? 
                              <i className="angle fe fe-chevron-down"></i> : 
                              <i className="angle fe fe-chevron-right"></i>
                          )}
                        </Link>
                      ) : (
                        ""
                      )}

                      {menuItem.type === "link" ?
                        <Link href={menuItem.path} className={`side-menu__item ${menuItem.selected ? "active" : ""}`} onClick={() => toggleSidemenu(menuItem)}
                        >

                          <i className={`${menuItem.icon} side-menu__icon`}></i>
                          <span className="side-menu__label">
                            {menuItem.title}
                          </span>
                          {menuItem.badge ?
                            <span className={menuItem.badge}>
                              {menuItem.badgetxt}
                            </span>
                            :
                            ""
                          }
                        </Link>
                        :
                        ""
                      }
                      {/* Second Level */}
                      {menuItem.children ? (
                        <ul
                          className={`slide-menu ${menuItem.Names} ${menuItem.active ? "open" : ""}`}
                          style={
                            menuItem.active
                              ? { opacity: 1, transition: 'opacity 500ms ease-in', display: 'block' }
                              : { display: "none" }
                          }
                        >
                          <div className={`${menuItem.Name}`}>
                            {menuItem.children.map((childrenItem, index) => {
                              return (

                                <li key={index} className={`sub-slide ${childrenItem.selected ? "is-expanded" : ""}`} >
                                  {childrenItem.type === "sub" ?
                                    <Link
                                      href="#!"
                                      className={`sub-side-menu__item ${childrenItem.selected ? "active" : ""}`}
                                      onClick={(event) => { event.preventDefault(); toggleSidemenu(childrenItem); }}>
                                      <span className="sub-side-menu__label">{childrenItem.title}{childrenItem.active}</span>
                                      {childrenItem.active ?
                                        <i className="sub-angle fa fa-angle-down"></i> : <i className="sub-angle fa fa-angle-right"></i>
                                      }
                                    </Link>
                                    :
                                    ""
                                  }

                                  {childrenItem.type === "link" ?
                                    <Link
                                      href={childrenItem.path}
                                      className={`slide-item ${location.pathname == childrenItem.path ? " active" : "" }`}
                                    >
                                      {childrenItem.title}
                                    </Link>
                                    :
                                    ""
                                  }
                                  {/* third lavel */}
                                  {childrenItem.children ? (
                                    <ul
                                      className="sub-slide-menu"
                                      style={
                                        childrenItem.active
                                          ? { display: "block" }
                                          : { display: "none" }
                                      }
                                    >
                                      {childrenItem.children.map(
                                        (childrenSubItem, key) => (
                                          <li className={`${childrenSubItem.selected ? " is-expanded" : ""}`} key={key}>
                                            {childrenSubItem.type === "link" ?
                                              <Link
                                                href={childrenSubItem.path}
                                                className={`sub-slide-item ${location.pathname == childrenSubItem.path ? " active" : "" }`}
                                              >
                                                {childrenSubItem.title}
                                              </Link>
                                              :
                                              ""
                                            }

                                            {childrenSubItem.type === "sub" ?
                                              <Link
                                                href="#!"
                                                className={`"sub-slide-item" ${childrenSubItem.selected ? " is-expanded" : ""}`}
                                                onClick={(event) => {
                                                  event.preventDefault();
                                                  toggleSidemenu(childrenSubItem);
                                                }}
                                              >
                                                <span className="sub-side-menu__label">
                                                  {childrenSubItem.title}
                                                </span>
                                                {childrenSubItem.active ?
                                                  <i className="sub-angle fa fa-angle-down"></i> : <i className="sub-angle fa fa-angle-right"></i>}
                                              </Link>
                                              :
                                              ""
                                            }
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  ) : (
                                    ""
                                  )}
                                </li>

                              );
                            })}
                          </div>
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                  ))}
                </Fragment>
              ))}
            </ul>
            <div className="slide-right" id="slide-right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#7b8191"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
              </svg>
            </div>

          </div>
        </PerfectScrollbar>
      </div>
    </Fragment>
  );
};

export default Sidebar;
