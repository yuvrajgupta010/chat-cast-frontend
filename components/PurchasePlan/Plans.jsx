import React from "react";
import { Badge, Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import style from "./Plans.module.css";

const Plans = () => {
  return (
    <>
      <Row className="p-0 m-0 justify-content-center ">
        <h4 className="text-center fw-semibold">Choose a plan </h4>
        <span className="landing-title"></span>
        <h2 className="text-center fw-semibold">
          Grab the <span className="text-primary">Plan</span> to unlock for
          exciting feature
        </h2>

        {/* <Card.Title as="h4" className="mt-4">
          Pricing cards 4 colums
        </Card.Title> */}
        {/* <!-- ROW-4 OPEN --> */}
        <Col sm={6} xxl={5} md={6} lg={6} className="primary">
          <Card className={`${style["plan-item"]} border p-1`}>
            <div className="princing-item">
              <div className="pricing-divider text-center pt-5">
                <h2 className="text-primary">Basic</h2>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    enableBackground="new 0 0 24 24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="var(--primary-bg-color)"
                      d="M7.0009766,13c-0.8284302,0-1.5,0.6715698-1.5,1.5s0.6715698,1.5,1.5,1.5c0.828064-0.0009155,1.4991455-0.671936,1.5-1.5C8.5009766,13.6715698,7.8294067,13,7.0009766,13z M7.0009766,15c-0.276123,0-0.5-0.223877-0.5-0.5s0.223877-0.5,0.5-0.5c0.2759399,0.0005493,0.4994507,0.2240601,0.5,0.5C7.5009766,14.776123,7.2771606,15,7.0009766,15z M13.5,14h-3c-0.276123,0-0.5,0.223877-0.5,0.5s0.223877,0.5,0.5,0.5h3c0.276123,0,0.5-0.223877,0.5-0.5S13.776123,14,13.5,14z M20.1950684,10.25177l-1.5505371-4.8230591C18.1824341,3.9794922,16.8345947,2.9967651,15.3135376,3H8.6865234C7.1654053,2.9967041,5.8175659,3.9794312,5.3554688,5.4286499L3.8049316,10.25177C2.7443848,10.7144775,2.0013428,11.7692261,2,13v3c0.0016479,1.4848633,1.083252,2.7087402,2.5,2.9490967V20.5c0,0.0001831,0,0.0003662,0,0.0005493C4.5001831,20.7765503,4.723999,21.0001831,5,21c0.0001831,0,0.0003662,0,0.0006104,0C5.2765503,20.9998169,5.5001831,20.776001,5.5,20.5V19h13v1.5c0,0.0001831,0,0.0003662,0,0.0005493C18.5001831,20.7765503,18.723999,21.0001831,19,21c0.0001831,0,0.0003662,0,0.0006104,0c0.2759399-0.0001831,0.4995728-0.223999,0.4993896-0.5v-1.5509033C20.916748,18.7087402,21.9983521,17.4848633,22,16v-3C21.9986572,11.7692261,21.2556152,10.7144775,20.1950684,10.25177z M6.3066406,5.7353516C6.6368408,4.6999512,7.5997314,3.9978638,8.6864624,4h6.6270142c1.086792-0.0021973,2.0496826,0.6999512,2.3798828,1.7353516L19.0644531,10H19H5H4.9355469L6.3066406,5.7353516z M21,16c-0.0014038,1.1040039-0.8959961,1.9985962-2,2H5c-1.1040039-0.0014038-1.9985962-0.8959961-2-2v-3c0.0014038-1.1040039,0.8959961-1.9985962,2-2h14c1.1040039,0.0014038,1.9985962,0.8959961,2,2V16z M17.0009766,13c-0.8284302,0-1.5,0.6715698-1.5,1.5s0.6715698,1.5,1.5,1.5c0.828064-0.0009155,1.4991455-0.671936,1.5-1.5C18.5009766,13.6715698,17.8294067,13,17.0009766,13z M17.0009766,15c-0.276123,0-0.5-0.223877-0.5-0.5s0.223877-0.5,0.5-0.5c0.2759399,0.0005493,0.4994507,0.2240601,0.5,0.5C17.5009766,14.776123,17.2771606,15,17.0009766,15z"
                    />
                  </svg>
                </span>
                <h4 className="display-5 text-primary fw-bold my-3">
                  <span className="h3">$</span> 120{" "}
                  <span className="h5">/mo</span>
                </h4>
              </div>
              <div className=" br-be-0 br-bs-0 bg-white mt-0">
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <i className="fe fe-check text-primary p-2 fw-bold"></i>
                    <b>10</b> users included for this pack
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <i className="fe fe-check text-primary p-2 fw-bold"></i>
                    <b>2 GB</b> of storage you will get
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <i className="fe fe-check text-primary p-2 fw-bold"></i>
                    <b>Free </b>Email support for every user
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <i className="fe fe-check text-primary p-2 fw-bold"></i>
                    <b> 24/7</b> support{" "}
                  </ListGroup.Item>
                  <ListGroup.Item className="border-bottom-0">
                    <i className="fe fe-check text-primary p-2 fw-bold"></i>
                    <b>Help center access</b>
                  </ListGroup.Item>
                </ListGroup>
                <Card.Footer className="text-center p-5">
                  <Button variant="primary" className="btn-block" disabled>
                    Already Unlocked!
                  </Button>
                </Card.Footer>
              </div>
            </div>
          </Card>
        </Col>
        {/* <!-- COL-END --> */}

        {/* <!-- COL-END --> */}
        <Col sm={6} xxl={5} md={6} lg={6} className="secondary">
          <Card className={`${style["plan-item"]} border border-secondary p-1`}>
            <div className="ribbon-price">
              <Badge bg="secondary" className="text-white">
                25%
              </Badge>
            </div>
            <div className="princing-item">
              <div className="pricing-divider text-center pt-5">
                <h2 className="text-secondary">Premium</h2>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    enableBackground="new 0 0 24 24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#05C3FB"
                      d="M21.6,2.7c0-0.2-0.2-0.3-0.4-0.4c-3.8-1-7.9,0.3-10.4,3.3L9.5,7.1L6.8,6.4C5.7,6,4.6,6.5,4.1,7.5L2,11.2c0,0,0,0.1-0.1,0.1c-0.1,0.3,0.1,0.5,0.4,0.6l3.4,0.7c-0.3,0.9-0.6,1.8-0.7,2.7c0,0.2,0,0.3,0.1,0.4l3,2.9c0.1,0.1,0.2,0.1,0.4,0.1c0,0,0,0,0,0c0.9-0.1,1.9-0.3,2.8-0.6l0.7,3.3c0,0.2,0.3,0.4,0.5,0.4c0.1,0,0.2,0,0.2-0.1l3.7-2.1c0.9-0.5,1.3-1.6,1.1-2.6l-0.7-2.9l1.4-1.3C21.3,10.5,22.6,6.5,21.6,2.7z M3.2,11.1L4.9,8c0.3-0.6,0.9-0.8,1.5-0.6l2.3,0.6L7.7,9.2c-0.6,0.8-1.2,1.6-1.6,2.5L3.2,11.1z M16,19l-3.1,1.8l-0.6-2.9c0.9-0.4,1.7-1,2.5-1.6l1.3-1.2l0.6,2.3C16.7,18,16.5,18.7,16,19z M17.6,12.3l-3.5,3.2c-1.5,1.3-3.4,2.1-5.4,2.3l-2.6-2.6c0.3-2,1.1-3.9,2.4-5.4L10.1,8c0,0,0.1-0.1,0.1-0.1l1.4-1.6c2.2-2.6,5.8-3.8,9.1-3.1C21.4,6.6,20.3,10.1,17.6,12.3z M16.4,5.6c-1.1,0-1.9,0.9-1.9,1.9s0.9,1.9,1.9,1.9c1.1,0,1.9-0.9,1.9-1.9C18.3,6.5,17.5,5.6,16.4,5.6z M16.4,8.5c-0.5,0-0.9-0.4-0.9-0.9c0-0.5,0.4-0.9,0.9-0.9c0.5,0,0.9,0.4,0.9,0.9C17.3,8.1,16.9,8.5,16.4,8.5z"
                    />
                  </svg>
                </span>
                <h4 className="display-5 text-secondary fw-bold my-3">
                  <span className="h3">$</span> 150{" "}
                  <span className="h5">/mo</span>
                </h4>
              </div>
              <div className=" br-be-0 br-bs-0 bg-white mt-0 shadow">
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <i className="fe fe-check text-secondary p-2 fw-bold"></i>
                    <b>10</b> users included for this pack
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <i className="fe fe-check text-secondary p-2 fw-bold"></i>
                    <b>2 GB</b> of storage you will get
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <i className="fe fe-check text-secondary p-2 fw-bold"></i>
                    <b>Free </b>Email support for every user
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <i className="fe fe-check text-secondary p-2 fw-bold"></i>
                    <b> 24/7</b> support
                  </ListGroup.Item>
                  <ListGroup.Item className="border-bottom-0">
                    <i className="fe fe-check text-secondary p-2 fw-bold"></i>
                    <b>Help center access</b>
                  </ListGroup.Item>
                </ListGroup>
                <Card.Footer className="text-center p-5">
                  <Button variant="secondary" className="btn-block">
                    Select
                  </Button>
                </Card.Footer>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Plans;
