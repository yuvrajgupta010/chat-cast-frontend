import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Dropdown, Nav, OverlayTrigger, Tooltip } from "react-bootstrap";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MessageIcon from "@mui/icons-material/Message";
import Link from "next/link";
import appConstants from "@/helper/constant";
import { changeChatListPageTypeAction } from "@/store/chatApp/reducer";

const ChatListHeader = () => {
  const dispatch = useDispatch();
  const { chatListPageType } = useSelector((store) => store.chatApp);

  const changeChatListPageHandler = (chatListPageType) => {
    dispatch(changeChatListPageTypeAction({ chatListPageType }));
  };

  return (
    <Card className="m-0 br-0 shadow-none">
      <Card.Header>
        <div className="container-fluid main-container px-0">
          <div className="d-flex justify-content-between align-items-center">
            <span
              onClick={changeChatListPageHandler.bind(
                null,
                appConstants.PROFILE_CHAT_LIST_PAGE
              )}
              style={{ cursor: "pointer" }}
              className="avatar avatar-lg brround bg-info"
            >
              Y.G
            </span>
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
                        className=""
                        onClick={changeChatListPageHandler.bind(
                          null,
                          appConstants.PROFILE_CHAT_LIST_PAGE
                        )}
                      >
                        Profile
                      </Dropdown.Item>
                    ) : null}

                    <Dropdown.Item href="#/action-1">Logout</Dropdown.Item>
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
