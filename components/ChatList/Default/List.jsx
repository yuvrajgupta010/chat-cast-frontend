import Link from "next/link";
import React from "react";
import {
  Button,
  Card,
  Nav,
  OverlayTrigger,
  Tab,
  Tabs,
  Tooltip,
} from "react-bootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import MessageStatus from "../../UI/MessageStatus";

const List = () => {
  return (
    <div
      className="card mb-0 overflow-auto br-0"
      style={{ flex: 1, boxShadow: "none" }}
    >
      <PerfectScrollbar>
        <Card className="mb-0 br-0 h-100">
          <Card.Body className="pt-0">
            <Tab.Container id="left-tabs-example" defaultActiveKey="msg">
              <Nav variant="pills" className="px-0 pb-2">
                <Nav.Item>
                  <Nav.Link eventKey="msg">Messages</Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
                <Nav.Link eventKey="grp">Groups</Nav.Link>
              </Nav.Item> */}
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip>Purchase Plan to enable group chat</Tooltip>
                  }
                >
                  <Nav.Item>
                    <Nav.Link disabled eventKey="grp">
                      Groups
                    </Nav.Link>
                  </Nav.Item>
                </OverlayTrigger>
              </Nav>
              <Tab.Content className="main-chat-list flex-2 h-auto">
                <Tab.Pane eventKey="msg">
                  <ul className="main-chat-list tab-pane h-auto">
                    <li className="media selected new border-top-0 px-2">
                      <div className="main-img-user online">
                        <img
                          alt="user5"
                          src={"../../../assets/images/users/5.jpg"}
                        />
                        <span>3</span>
                      </div>
                      <div className="media-body">
                        <div className="media-contact-name">
                          <span>Raymart Santiago</span> <span>10 min</span>
                        </div>
                        <p className="d-flex align-items-center gap-1">
                          <MessageStatus />
                          <span>
                            Hey! there
                            {` I'm`} available{" "}
                          </span>
                        </p>
                      </div>
                    </li>
                    <li className="media new new-addition">
                      <div className="main-img-user">
                        <img
                          alt="user6"
                          src={"../../../assets/images/users/6.jpg"}
                        />{" "}
                        <span>3</span>
                      </div>
                      <div className="media-body">
                        <div className="media-contact-name">
                          <span>Ariana Monino</span> <span>30 min</span>
                        </div>
                        <p>Good Morning</p>
                      </div>
                    </li>
                    <li className="media selected">
                      <div className="main-img-user online">
                        <img
                          alt="user9"
                          src={"../../../assets/images/users/9.jpg"}
                        />
                      </div>
                      <div className="media-body">
                        <div className="media-contact-name">
                          <span>Reynante Labares</span> <span>9.40 am</span>
                        </div>
                        <p> Nice to meet you </p>
                      </div>
                    </li>
                    <li className="media new">
                      <span className="avatar avatar-md brround bg-danger-transparent text-danger">
                        J
                      </span>
                      <div className="media-body">
                        <div className="media-contact-name">
                          <span>Joyce Chua</span> <span>11.20 am</span>
                        </div>
                        <p> Hi, How are you? </p>
                      </div>
                    </li>
                    <li className="media new">
                      <div className="main-img-user">
                        <img
                          alt="user4"
                          src={"../../../assets/images/users/4.jpg"}
                        />
                      </div>
                      <div className="media-body">
                        <div className="media-contact-name">
                          <span>Rolando Paloso</span> <span>1.38 pm</span>
                        </div>
                        <p> Hey! there {`I'm `}available </p>
                      </div>
                    </li>
                    <li className="media new">
                      <div className="main-img-user">
                        <div className="avatar avatar-md brround bg-primary-transparent text-primary">
                          D
                        </div>
                        <span>1</span>
                      </div>
                      <div className="media-body">
                        <div className="media-contact-name">
                          <span>Dexter dela Cruz</span> <span>4.08 pm</span>
                        </div>
                        <p>Typing...</p>
                      </div>
                    </li>
                    <li className="media new">
                      <div className="main-img-user">
                        <img
                          alt="user21"
                          src={"../../../assets/images/users/21.jpg"}
                        />
                      </div>
                      <div className="media-body">
                        <div className="media-contact-name">
                          <span>Maricel Villalon</span> <span>8.09 pm</span>
                        </div>
                        <p> Hey! there {`I'm `}available </p>
                      </div>
                    </li>
                    <li className="media new">
                      <span className="avatar avatar-md brround bg-success-transparent text-success">
                        M
                      </span>
                      <div className="media-body">
                        <div className="media-contact-name">
                          <span>Maryjane Pechon</span> <span>1 day ago</span>
                        </div>
                        <p>I have some work</p>
                      </div>
                    </li>
                    <li className="media new">
                      <div className="main-img-user">
                        <img
                          alt="user5"
                          src={"../../../assets/images/users/5.jpg"}
                        />
                      </div>
                      <div className="media-body">
                        <div className="media-contact-name">
                          <span>Lovely Dela Cruz</span> <span>3 days ago</span>
                        </div>
                        <p>I have some work</p>
                      </div>
                    </li>
                    <li className="media new">
                      <div className="avatar avatar-md brround bg-secondary-transparent">
                        <i className="fe fe-user text-secondary"></i>
                      </div>
                      <div className="media-body">
                        <div className="media-contact-name">
                          <span>Daniel Padilla</span> <span>5 days ago</span>
                        </div>
                        <p>I have some work</p>
                      </div>
                    </li>
                    <li className="media new">
                      <div className="main-img-user">
                        <img
                          alt="user3"
                          src={"../../../assets/images/users/3.jpg"}
                        />
                      </div>
                      <div className="media-body">
                        <div className="media-contact-name">
                          <span>John Pratts</span> <span>20/06/2021</span>
                        </div>
                        <p>I have some work</p>
                      </div>
                    </li>
                    <li className="media new">
                      <div className="main-img-user">
                        <img
                          alt="user7"
                          src={"../../../assets/images/users/7.jpg"}
                        />
                      </div>
                      <div className="media-body">
                        <div className="media-contact-name">
                          <span>Socrates Itumay</span> <span>18/07/2021</span>
                        </div>
                        <p> Hey! there {`I'm `}available </p>
                      </div>
                    </li>
                    <li className="media new border-bottom-0">
                      <div className="main-img-user">
                        <img
                          alt="user6"
                          src={"../../../assets/images/users/6.jpg"}
                        />
                      </div>
                      <div className="media-body">
                        <div className="media-contact-name">
                          <span>Samuel Lerin</span> <span>29/07/2021</span>
                        </div>
                        <p> Hey! there {`I'm `}available </p>
                      </div>
                    </li>
                  </ul>

                  {/* <!-- main-chat-list --> */}
                </Tab.Pane>
                <Tab.Pane eventKey="grp">
                  <div className="tab-content main-chat-list flex-2 ">
                    <div className="text-center p-5">
                      <button className="btn btn-outline-primary">
                        Comming Soon...
                      </button>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Card.Body>
        </Card>
      </PerfectScrollbar>
      &nbsp;
    </div>
  );
};

export default List;
