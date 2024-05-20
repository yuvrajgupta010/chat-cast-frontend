import Link from "next/link";
import React from "react";
import { Button, Card, OverlayTrigger, Tooltip } from "react-bootstrap";

const MessageBar = () => {
  return (
    <Card className="m-0 br-0 shadow-none">
      {" "}
      <Card.Body className="d-flex py-4">
        <input
          className="form-control ms-0"
          placeholder="Type your message here..."
          type="text"
        />
        <span
          className="nav-link"
          data-bs-toggle="tooltip"
          title="Attach a File"
        >
          <i className="fe fe-paperclip"></i>
        </span>
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip className="">Coming soon...</Tooltip>}
        >
          <span
            className="nav-link ps-1"
            data-bs-toggle="tooltip"
            title="Emoji"
          >
            <i className="bi bi-emoji-smile"></i>
          </span>
        </OverlayTrigger>

        <Button className="btn btn-icon  btn-primary brround">
          <i className="fa fa-paper-plane-o"></i>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MessageBar;
