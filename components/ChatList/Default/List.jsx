import React from "react";
import {
  Card,
  Nav,
  OverlayTrigger,
  Spinner,
  Tab,
  Tooltip,
} from "react-bootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import Image from "next/image";

import MessageStatus from "../../UI/MessageStatus";
import SearchBar from "./SearchBar";
import appConstants from "@/helper/constant";
import { useAuthCtx } from "@/context/AuthCTX";
import { currentChatAction } from "@/store/chatApp/reducer";
import { selectChatRoomAndUserAction } from "@/store/chat/reducer";

const List = () => {
  const dispatch = useDispatch();
  const {
    currentChat,
    chatListOfUser: { chatList },
    loader: { isChatListLoading },
    socket,
  } = useSelector((store) => store.chatApp);

  const { chatRoomId, isTyping } = useSelector((store) => store.chatRoom);

  const { userDetails } = useAuthCtx();

  const selectChatHandler = (chat) => {
    if (chat._id === currentChat?._id) return;
    dispatch(currentChatAction({ currentChat: chat }));
    dispatch(
      selectChatRoomAndUserAction({
        chatRoomId: chat._id,
        receiverId: chat.receiver.id,
      })
    );
  };

  return (
    <>
      {/* <SearchBar placeholder="Search your contact" /> */}
      <div
        className="card mb-0 overflow-auto br-0 pt-5"
        style={{ flex: 1, boxShadow: "none" }}
      >
        {!isChatListLoading ? (
          <PerfectScrollbar>
            <Card className="mb-0 br-0 h-100">
              <Card.Body className="pt-0">
                <Tab.Container id="left-tabs-example" defaultActiveKey="msg">
                  <Nav variant="pills" className="px-0 pb-2">
                    <Nav.Item>
                      <Nav.Link eventKey="msg">Messages</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                <Nav.Link eventKey="grp">Groups</Nav.Link>
              </Nav.Item> */}
                    <OverlayTrigger
                      placement="bottom"
                      overlay={
                        <Tooltip>Purchase Plan to enable group chat</Tooltip>
                      }
                    >
                      <Nav.Item>
                        <Nav.Link disabled eventKey="grp">
                          Groups
                        </Nav.Link>
                      </Nav.Item>
                    </OverlayTrigger>
                  </Nav>
                  <Tab.Content className="main-chat-list flex-2 h-auto">
                    <Tab.Pane eventKey="msg">
                      {chatList.length ? (
                        <ul className="main-chat-list tab-pane h-auto">
                          {chatList.map((chat) => {
                            return (
                              <li
                                className={`media ${
                                  chat._id === currentChat?._id
                                    ? "selected"
                                    : ""
                                } new border-top-0 px-2`}
                                key={chat._id}
                                onClick={selectChatHandler.bind(null, chat)}
                              >
                                {/* <div className="main-img-user online">
                              <img
                                alt="user5"
                                src={"../../../assets/images/users/5.jpg"}
                              />
                              <span>3</span>
                            </div> */}
                                <div className="avatar avatar-md brround cover-image">
                                  <Image
                                    // width={50}
                                    // height={50}
                                    fill
                                    className="brround cover-image"
                                    alt={
                                      chat?.receiver?.profile?.fullName
                                        ? `Profile picture of ${chat?.receiver?.profile?.fullName}`
                                        : "Blank profile avatar"
                                    }
                                    src={
                                      chat?.receiver?.profile?.profileImageURL
                                        ? chat?.receiver?.profile
                                            ?.profileImageURL
                                        : "/assets/images/png/blank-profile-avatar.png"
                                    }
                                  />
                                  {chat.totalUnreadMessages ? (
                                    <span className="badge rounded-pill avatar-badges bg-primary fs-10">
                                      {chat?.totalUnreadMessages}
                                    </span>
                                  ) : null}
                                  <span
                                    className={`avatar-status bg-${
                                      chat?.isReceiverOnline ? "green" : "red"
                                    }`}
                                  ></span>
                                </div>
                                <div className="media-body">
                                  <div className="media-contact-name">
                                    <span>
                                      {chat?.receiver?.profile?.fullName}
                                    </span>{" "}
                                    {/* <span>10 min</span> */}
                                    <span className="">&nbsp;</span>
                                  </div>
                                  <div className="d-flex align-items-center justify-content-between gap-1">
                                    <p className="d-flex align-items-center gap-1">
                                      {chat?.lastMessage?.sender ===
                                      userDetails?.id ? (
                                        <>
                                          <MessageStatus
                                            messageStatus={
                                              chat?.lastMessage?.messageStatus
                                            }
                                          />
                                          <span className="text-wrap">
                                            {chat?.lastMessage?.messageType !==
                                            "text" ? (
                                              <i className="fe fe-paperclip text-black-50 me-1"></i>
                                            ) : null}
                                            {chat?.lastMessage?.messageContent}
                                          </span>
                                        </>
                                      ) : (
                                        <span>
                                          {chat?.lastMessage?.messageType !==
                                          "text" ? (
                                            <i className="fe fe-paperclip text-black-50 me-1"></i>
                                          ) : null}
                                          {chat?.lastMessage?.messageContent}
                                        </span>
                                      )}
                                    </p>
                                    <p className="text-nowrap">
                                      {dayjs(
                                        chat?.lastMessage?.createdAt
                                      ).format("hh:mm A")}
                                    </p>
                                  </div>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      ) : (
                        <p className="mt-2 text-primary fs-6 text-center">
                          Start new chat
                        </p>
                      )}

                      {/* <!-- main-chat-list --> */}
                    </Tab.Pane>
                    <Tab.Pane eventKey="grp">
                      <div className="tab-content main-chat-list flex-2 ">
                        <div className="text-center p-5">
                          <button className="btn btn-outline-primary">
                            Comming Soon...
                          </button>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </Card.Body>
            </Card>
          </PerfectScrollbar>
        ) : (
          <div className="d-flex justify-content-center">
            <Spinner
              animation="border"
              variant="primary"
              className="me-2 h-7 w-7"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default List;
