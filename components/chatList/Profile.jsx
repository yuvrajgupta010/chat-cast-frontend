import { Current } from "@/shared/data/pages/data-edit-profile";
import Link from "next/link";
import React from "react";
import { Accordion, Card, Form, InputGroup } from "react-bootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

const Profile = () => {
  return (
    <>
      <Card className="br-0" style={{ boxShadow: "none", flex: 1 }}>
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
                <Accordion.Header>Collapsible Group Item #1</Accordion.Header>
                <Accordion.Body>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Collapsible Group Item #2</Accordion.Header>
                <Accordion.Body>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Collapsible Group Item #3</Accordion.Header>
                <Accordion.Body>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
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
