import { Current } from "@/shared/data/pages/data-edit-profile";
import Link from "next/link";
import React from "react";
import { Accordion, Card, Form, InputGroup } from "react-bootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

const Profile = () => {
  return (
    <>
      <Card
        className="br-0 overflow-hidden p-0 m-0"
        style={{ boxShadow: "none", flex: 1 }}
      >
        <PerfectScrollbar>
          <Card.Body>
            <div className="text-center chat-image mb-5">
              <div className="avatar avatar-xxl chat-profile mb-3 brround">
                <Link className="" href={`/components/pages/profile/`}>
                  <img
                    alt="avatar"
                    src={"../../../assets/images/users/7.jpg"}
                    className="brround"
                  />
                </Link>
              </div>
            </div>
            <Form.Group>
              <div className="d-flex align-items-center gap-1">
                <Form.Label htmlFor="exampleInputname" className="">
                  Full Name{" "}
                </Form.Label>
                <span style={{ cursor: "pointer" }}>
                  <i className="fe fe-edit-3 text-primary mx-2"></i>
                </span>
              </div>

              <Form.Control type="text" id="fullName" placeholder="Yuvraj G" />
              <div className="text-end py-2">
                <button className="btn btn-primary me-2">Save</button>
                <button className="btn btn-danger ">Cancel</button>
              </div>
              {/* <p className="text-primary fs-6 px-2">Yuvraj Gupta</p> */}
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="exampleInputname" className="">
                Email{" "}
              </Form.Label>

              {/* <Form.Control
              type="text"
              id="email"
              placeholder="yuvraj@gmail.com"
            /> */}
              {/* <div className="text-end py-2">
              <button className="btn btn-primary me-2">Save</button>
              <button className="btn btn-danger ">Cancel</button>
            </div> */}
              <p className="text-primary fs-6 px-2">yuvraj@gmail.com</p>
            </Form.Group>
            <Form.Group>
              <div className="d-flex align-items-center gap-1">
                <Form.Label htmlFor="exampleInputname" className="">
                  About{" "}
                </Form.Label>
                <span style={{ cursor: "pointer" }}>
                  <i className="fe fe-edit-3 text-primary mx-2"></i>
                </span>
              </div>
              {/* <Form.Control
              type="text"
              id="about"
              placeholder="I am chating on Chat Cast"
            /> */}
              {/* <Form.Control
              className="form-control mb-4 is-invalid state-invalid"
              placeholder="Input box (invalid state)"
              required
              type="text"
            /> */}
              <textarea
                className="form-control mb-4 is-invalid state-invalid"
                placeholder="I am chating on Chat Cast"
                // defaultValue="Textarea (invalid state)"
                rows={3}
              ></textarea>
              {/* <p className="text-primary fs-6 px-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              aspernatur cum corporis numquam est et sapiente sequi esse quidem
              quia blanditiis eligendi odit, qui magni, modi impedit architecto
              adipisci explicabo!
            </p> */}
              {/* <div className="text-end py-2">
              <button className="btn btn-primary me-2">Save</button>
              <button className="btn btn-danger ">Cancel</button>
            </div> */}
            </Form.Group>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Update Password</Accordion.Header>
                <Accordion.Body>
                  <Current />
                  <Form.Group>
                    <Form.Label>New Password</Form.Label>
                    <InputGroup
                      className="wrap-input100 validate-input"
                      id="Password-toggle1"
                    >
                      <Link
                        href="#!"
                        className="input-group-text bg-white text-muted"
                      >
                        <i
                          className="zmdi zmdi-eye text-muted"
                          aria-hidden="true"
                        ></i>
                      </Link>
                      <Form.Control
                        className="input100"
                        type="password"
                        placeholder="New Password"
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Confirm Password</Form.Label>
                    <InputGroup
                      className="wrap-input100 validate-input"
                      id="Password-toggle2"
                    >
                      <Link
                        href="#!"
                        className="input-group-text bg-white text-muted"
                      >
                        <i
                          className="zmdi zmdi-eye text-muted"
                          aria-hidden="true"
                        ></i>
                      </Link>
                      <Form.Control
                        className="input100"
                        type="password"
                        placeholder="Confirm Password"
                      />
                    </InputGroup>
                  </Form.Group>
                  <div className="text-end">
                    <button className="btn btn-primary me-2">Update</button>
                    <button className="btn btn-danger ">Cancel</button>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </PerfectScrollbar>
      </Card>
    </>
  );
};

export default Profile;
