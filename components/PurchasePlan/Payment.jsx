import React from "react";
import { Button, Card, Col, Form, ListGroup, Row } from "react-bootstrap";
import Select from "react-select";

const DOMdata = [
  { value: "January", label: "January" },
  { value: "Febuary", label: "Febuary" },
  { value: "March", label: "March" },
  { value: "April", label: "April" },
  { value: "May", label: "May" },
  { value: "June", label: "June" },
  { value: "July", label: "July" },
  { value: "August", label: "August" },
  { value: "September", label: "September" },
  { value: "October", label: "October" },
  { value: "November", label: "November" },
  { value: "December", label: "December" },
];

const DOYdata = [
  { value: "2022", label: "2022" },
  { value: "2021", label: "2021" },
  { value: "2020", label: "2020" },
  { value: "2019", label: "2019" },
  { value: "2018", label: "2018" },
  { value: "2017", label: "2017" },
  { value: "2016", label: "2016" },
  { value: "2015", label: "2015" },
  { value: "2014", label: "2014" },
  { value: "2013", label: "2013" },
  { value: "2012", label: "2012" },
  { value: "2011", label: "2011" },
  { value: "2010", label: "2010" },
  { value: "2009", label: "2009" },
  { value: "2008", label: "2008" },
  { value: "2007", label: "2007" },
  { value: "2006", label: "2006" },
  { value: "2005", label: "2005" },
  { value: "2004", label: "2004" },
  { value: "2003", label: "2003" },
  { value: "2002", label: "2002" },
  { value: "2001", label: "2001" },
  { value: "2000", label: "2000" },
  { value: "1999", label: "1999" },
  { value: "1998", label: "1998" },
  { value: "1997", label: "1997" },
  { value: "1996", label: "1996" },
  { value: "1995", label: "1995" },
  { value: "1994", label: "1994" },
  { value: "1993", label: "1993" },
  { value: "1992", label: "1992" },
  { value: "1991", label: "1991" },
  { value: "1990", label: "1990" },
  { value: "1989", label: "1989" },
  { value: "1988", label: "1988" },
];

const Payment = () => {
  return (
    <Row className="m-0 p-0">
      <Card className="m-0 p-0 border">
        <Card.Header className="d-flex justify-content-center flex-column">
          {/* <Card.Title as="h3"> */}
          {/* <h4 className="text-center fw-semibold">Your selected Plan</h4>
          <span className="landing-title"></span> */}
          <h2 className="text-center fw-semibold">
            Your <span className="text-primary">Selected</span> Plan
          </h2>
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
              <span className="h3">$</span> 150 <span className="h5">/mo</span>
            </h4>
          </div>
          {/* </Card.Title> */}
        </Card.Header>
        <Card.Body className="pt-3">
          <p className="m-0 fs-6 fw-medium">
            Please provide your card information here
          </p>
          <Form>
            <Form.Group>
              <Form.Group>
                <Form.Label>CardHolder Name</Form.Label>
                <Form.Control
                  type="text"
                  id="name11"
                  placeholder="First Name"
                />
              </Form.Group>
            </Form.Group>
          </Form>
          <div className="form-row">
            <Form.Group className="col-md-9 mb-0">
              <Form.Group>
                <Form.Label>Credit card Number</Form.Label>
                <Form.Control type="number" id="number" placeholder="number" />
              </Form.Group>
            </Form.Group>
            <Form.Group className="col-md-3 mb-0">
              <Form.Group>
                <Form.Label>CVV Number</Form.Label>
                <Form.Control type="number" id="region1" placeholder="675" />
              </Form.Group>
            </Form.Group>
          </div>
          <Form.Group className="m-0">
            <Form.Label>Expiration Date</Form.Label>
            <Row>
              <div className="col-6">
                <Select
                  classNamePrefix="Select"
                  options={DOMdata}
                  placeholder="Date"
                />
              </div>
              <div className="col-6">
                <Select
                  classNamePrefix="Select"
                  options={DOYdata}
                  placeholder="Year"
                />
              </div>
            </Row>
          </Form.Group>
          <div className="mt-4 mb-0 text-dark">
            Your Credit card information is encrypted
          </div>
          <div className="form-footer mt-2">
            <Button variant="primary">Make Payment</Button>
          </div>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default Payment;
