import React from "react";
import Image from "next/image";
import { Card, Dropdown, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";

import appConstants from "@/helper/constant";
import { useAuthCtx } from "@/context/AuthCTX";

const ChatHeader = (props) => {
  const { headerData } = props;
  const { userDetails } = useAuthCtx();

  const profileImageURL = headerData?.receiver?.profile?.profileImageURL;

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
                    profileImageURL
                      ? `Profle photo of ${headerData?.receiver?.profile?.fullName}`
                      : "Blank profile avatar"
                  }
                  src={
                    profileImageURL
                      ? userDetails?.accountAuthType === "google"
                        ? profileImageURL
                        : `${appConstants.AWS_S3_PUBLIC_BUCKET_URL}/${profileImageURL}`
                      : "/assets/images/png/blank-profile-avatar.png"
                  }
                />
              </div>
              <div className="main-chat-msg-name mt-2 text-dark">
                <h6>{headerData?.receiver?.profile?.fullName}</h6>
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
