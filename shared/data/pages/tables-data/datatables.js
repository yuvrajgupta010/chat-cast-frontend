import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { BasicDataTable, ResponsiveDataTable, DataTabless, ExportCSV } from './table-data';

const Datatables = () => {
  return (
    <div>
        {/* <!-- Row --> */}
    <Row className="row-sm">
      <Col lg={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Basic Datatable</Card.Title>
          </Card.Header>
          <Card.Body>
            <BasicDataTable />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row className="row-sm">
      <Col lg={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Responsive DataTable</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="table-responsive">
              <ResponsiveDataTable />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row className="row-sm">
      <Col lg={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Deleted Row DataTable</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="table-responsive table-page">
              <DataTabless/>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row className="row-sm">
      <Col lg={12}>
        <Card className={"overflow-hidden"}>
          <Card.Header>
            <Card.Title as='h3'>Exported DataTable</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="table-responsive table-page Export-datatable">
            <ExportCSV/>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </div>
  );
};

export default Datatables;
