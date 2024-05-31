import appConstants from "@/helper/constant";
import Image from "next/image";
import React from "react";
import { Card, Dropdown, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";

const ChatHeader = (props) => {
  const { headerData } = props;

  return (
    <Card className="m-0 br-0 shadow-none">
      <Card.Header>
        <div className="container-fluid main-container px-0">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <div
                style={{ cursor: "pointer" }}
                className="avatar avatar-lg brround cover-image bg-transparent"
              >
                <Image
                  fill
                  className="brround cover-image"
                  alt={
                    headerData?.user?.profile?.profileImageURL
                      ? `Your photo as ${headerData?.user?.profile?.fullName}`
                      : "Blank profile avatar"
                  }
                  src={
                    headerData?.user?.profile?.profileImageURL
                      ? `${appConstants.AWS_S3_PUBLIC_BUCKET_URL}/${headerData?.user?.profile?.profileImageURL}`
                      : "/assets/images/png/blank-profile-avatar.png"
                  }
                />
              </div>
              <div className="main-chat-msg-name mt-2 text-dark">
                <h6>{headerData?.user?.profile?.fullName}</h6>
                {headerData?.isReceiverOnline !== undefined ? (
                  headerData?.isReceiverOnline ? (
                    <>
                      <span className="dot-label bg-success"></span>
                      <small className="me-3">online</small>
                    </>
                  ) : (
                    <>
                      <span className="dot-label bg-danger"></span>
                      <small className="me-3">offline</small>
                    </>
                  )
                ) : null}
              </div>
            </div>
            <Nav>
              <Dropdown>
                <Dropdown.Toggle className="text-muted fs-20 no-caret" as="a">
                  <i className="fe fe-more-horizontal mx-3"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-end">
                  {headerData?.chatState === "old" ? (
                    <Dropdown.Item as={"span"}>Delete</Dropdown.Item>
                  ) : null}
                  <Dropdown.Item as={"span"}>Block</Dropdown.Item>
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
