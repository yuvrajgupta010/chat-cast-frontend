import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Dropdown, Nav, OverlayTrigger, Tooltip } from "react-bootstrap";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MessageIcon from "@mui/icons-material/Message";
import Link from "next/link";
import appConstants from "@/helper/constant";
import {
  changeChatListPageTypeAction,
  resetChatAppStateAction,
} from "@/store/chatApp/reducer";
import { useAuthCtx } from "@/context/AuthCTX";
import Image from "next/image";
import { resetChatRoomSliceAction } from "@/store/chat/reducer";
//TODO: reset funtion for all redux reset

const ChatListHeader = () => {
  const { userDetails, _logout } = useAuthCtx();
  const dispatch = useDispatch();
  const { chatListPageType } = useSelector((store) => store.chatApp);

  const changeChatListPageHandler = (chatListPageType) => {
    dispatch(changeChatListPageTypeAction({ chatListPageType }));
  };
  const logoutHandler = () => {
    logoutHandler();
    dispatch(resetChatAppStateAction());
    dispatch(resetChatRoomSliceAction());
  };
  return (
    <Card className="m-0 br-0 shadow-none">
      <Card.Header>
        <div className="container-fluid main-container px-0">
          <div className="d-flex justify-content-between align-items-center">
            <div
              onClick={changeChatListPageHandler.bind(
                null,
                appConstants.PROFILE_CHAT_LIST_PAGE
              )}
              style={{ cursor: "pointer" }}
              className="avatar avatar-lg brround cover-image bg-transparent"
            >
              <Image
                fill
                className="brround cover-image"
                alt={
                  userDetails?.profile?.profileImageURL
                    ? `Your photo as ${userDetails?.profile?.fullName}`
                    : "Blank profile avatar"
                }
                src={
                  userDetails?.profile?.profileImageURL
                    ? `${appConstants.AWS_S3_PUBLIC_BUCKET_URL}/${userDetails?.profile?.profileImageURL}`
                    : "/assets/images/png/blank-profile-avatar.png"
                }
              />
            </div>

            <nav className="d-flex gap-4 text-primary fs-5">
              {chatListPageType !== appConstants.DEFAULT_CHAT_LIST_PAGE ? (
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip className="tooltip-primary">Messages</Tooltip>
                  }
                >
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={changeChatListPageHandler.bind(
                      null,
                      appConstants.DEFAULT_CHAT_LIST_PAGE
                    )}
                  >
                    <MessageIcon />
                  </span>
                </OverlayTrigger>
              ) : null}
              {chatListPageType !== appConstants.ADD_CONTACT_CHAT_LIST_PAGE ? (
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip className="tooltip-primary">
                      Search and Add new user
                    </Tooltip>
                  }
                >
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={changeChatListPageHandler.bind(
                      null,
                      appConstants.ADD_CONTACT_CHAT_LIST_PAGE
                    )}
                  >
                    <PersonAddAlt1Icon />
                  </span>
                </OverlayTrigger>
              ) : null}
              {/* {chatListPageType !== appConstants.ADD_GROUP_CHAT_LIST_PAGE ? (
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip className="tooltip-primary">
                      Create new group
                    </Tooltip>
                  }
                >
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={changeChatListPageHandler.bind(
                      null,
                      appConstants.ADD_GROUP_CHAT_LIST_PAGE
                    )}
                  >
                    <GroupAddIcon />
                  </span>
                </OverlayTrigger>
              ) : null} */}
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Purchase plan to create group</Tooltip>}
              >
                <span
                  className="text-muted"
                  style={{ cursor: "pointer" }}
                  onClick={changeChatListPageHandler.bind(
                    null,
                    appConstants.ADD_GROUP_CHAT_LIST_PAGE
                  )}
                >
                  <GroupAddIcon />
                </span>
              </OverlayTrigger>
              <span style={{ cursor: "pointer", paddingTop: 5 }}>
                <Dropdown className="profile-1">
                  <Dropdown.Toggle
                    variant=""
                    className="nav-link leading-none d-flex no-caret m-0 p-0"
                  >
                    <MoreVertIcon />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {chatListPageType !==
                    appConstants.PROFILE_CHAT_LIST_PAGE ? (
                      <Dropdown.Item
                        as={"p"}
                        className="px-5 py-2 mb-0"
                        onClick={changeChatListPageHandler.bind(
                          null,
                          appConstants.PROFILE_CHAT_LIST_PAGE
                        )}
                      >
                        Profile
                      </Dropdown.Item>
                    ) : null}
                    <Dropdown.Item as={"p"} className="px-5 py-2 mb-0">
                      Purchase Plan
                    </Dropdown.Item>

                    <Dropdown.Item
                      as={"p"}
                      className="px-5 py-2 mb-0"
                      onClick={logoutHandler}
                    >
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </span>
            </nav>
          </div>
        </div>
      </Card.Header>
    </Card>
  );
};

export default ChatListHeader;
