import Link from "next/link";
import React from "react";
import {
  Button,
  Card,
  Dropdown,
  FormControl,
  InputGroup,
  Nav,
} from "react-bootstrap";

const ChatHeader = () => {
  return (
    <Card className="m-0 br-0 shadow-none">
      <Card.Header>
        <div className="container-fluid main-container px-0">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <span
                style={{ cursor: "pointer" }}
                className="avatar avatar-lg brround bg-info"
              >
                Y.G
              </span>
              <div className="main-chat-msg-name mt-2 text-dark">
                <h6>Saul Goodmate</h6>
                <span className="dot-label bg-success"></span>
                <small className="me-3">online</small>
              </div>
            </div>
            <Nav>
              <Dropdown>
                <Dropdown.Toggle className="text-muted fs-20 no-caret" as="a">
                  <i className="fe fe-more-horizontal mx-3"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-end">
                  <Dropdown.Item href="#!">Block</Dropdown.Item>
                  <Dropdown.Item href="#!">Delete</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </div>
        </div>
      </Card.Header>
    </Card>
  );
};

export default ChatHeader;
