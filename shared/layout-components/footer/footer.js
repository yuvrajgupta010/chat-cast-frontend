import React, { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';
import Link from 'next/link';

const Footer = () => {

  return (

  <Fragment >
    <footer className="footer mt-3  ">
      <div className="container">
        <Row className="align-items-center flex-row-reverse">
          <Col md={12} sm={12} className="text-center">
            Copyright © 2023 <Link href="#!">Sash</Link>. Designed with <span className="fa fa-heart text-danger"></span> by <Link href="#!"> Spruko </Link> All rights reserved.
          </Col>
        </Row>
      </div>
    </footer>
    {/* <!-- FOOTER CLOSED --> */}
  </Fragment>
);
  };

export default Footer;
