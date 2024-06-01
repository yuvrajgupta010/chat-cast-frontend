import React, { useEffect, useRef } from "react";
import { Card } from "react-bootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import style from "./Chatcontainer.module.css";
import Link from "next/link";
import MessageStatus from "../UI/MessageStatus";
import { useSelector } from "react-redux";
import { useAuthCtx } from "@/context/AuthCTX";
import Image from "next/image";
import dayjs from "dayjs";
import appConstants from "@/helper/constant";

const ChatContainer = (props) => {
  const { messages, isTyping } = props;
  const { currentChat, socket } = useSelector((state) => state.chatApp);
  const { userDetails } = useAuthCtx();

  const scrollRef = useRef(null);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages.length, currentChat._id]);

  return (
    <div
      className="card mb-0 overflow-auto br-0 bg-transparent"
      style={{ flex: 1, boxShadow: "none" }}
    >
      <Card
        className={`p-0 m-0 h-100 ${style["chat-container"]} bg-transparent`}
      >
        <Card.Body className="p-0 d-flex flex-column justify-content-end h-100">
          <PerfectScrollbar
            className="h-auto"
            containerRef={(ref) => (scrollRef.current = ref)}
          >
            <main className={`${style["msger-chat"]} ps-3 pe-5 `}>
              {messages?.map((message, index) => {
                if (message.sender === userDetails.id) {
                  return (
                    <div
                      className={`${style["msg"]} ${style["right-msg"]}`}
                      key={message?._id}
                    >
                      <div className={`${style["msg-bubble"]}  bg-white`}>
                        <div className={`${style["msg-text"]}`}>
                          {message?.messageContent}
                        </div>
                        <div
                          className={`${style["msg-info"]} m-0 mt-3 justify-content-end gap-2 align-items-center`}
                        >
                          <MessageStatus
                            messageStatus={message.messageStatus}
                          />

                          <div className={`${style["msg-info-time"]}`}>
                            {dayjs(message?.createdAt).format("hh:mm A")}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div
                      className={`${style["msg"]} ${style["left-msg"]}`}
                      key={message._id}
                    >
                      {message.sender !== messages[index + 1]?.sender ? (
                        <div className={`${style["msg-img"]}`}>
                          <Image
                            fill
                            className="brround cover-image"
                            alt={
                              currentChat?.receiver?.profile?.profileImageURL
                                ? `Profile photo of ${currentChat?.receiver?.profile?.fullName}`
                                : "Blank profile avatar"
                            }
                            src={
                              currentChat?.receiver?.profile?.profileImageURL
                                ? `${appConstants.AWS_S3_PUBLIC_BUCKET_URL}/${currentChat?.receiver?.profile?.profileImageURL}`
                                : "/assets/images/png/blank-profile-avatar.png"
                            }
                          />
                        </div>
                      ) : (
                        <div className={`${style["msg-dummy-img"]}`}></div>
                      )}
                      <div className={`${style["msg-bubble"]}`}>
                        <div className={`${style["msg-text"]}`}>
                          {message.messageContent}
                        </div>
                        <div
                          className={`${style["msg-info"]} m-0 mt-3 justify-content-end gap-2 align-items-center`}
                        >
                          {/* <div className={`${style["msg-info-name"]}`}>BOT</div> */}
                          <div className={`${style["msg-info-time"]} text-end`}>
                            {dayjs(message?.createdAt).format("hh:mm A")}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </main>
            <div ref={scrollRef} />
          </PerfectScrollbar>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ChatContainer;
