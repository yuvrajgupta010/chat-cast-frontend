import React, { useEffect, useRef } from "react";
import { Card } from "react-bootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";

import style from "./Chatcontainer.module.css";
import MessageStatus from "../UI/MessageStatus";
import { useAuthCtx } from "@/context/AuthCTX";
import appConstants from "@/helper/constant";
import { getDownloadFileUrl } from "@/store/chat/action";

const ChatContainer = (props) => {
  const { messages, isTyping } = props;
  const { currentChat, socket } = useSelector((state) => state.chatApp);
  const { userDetails } = useAuthCtx();
  const dispatch = useDispatch();

  const scrollRef = useRef(null);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages.length, currentChat._id, isTyping]);

  // const downloadFile = async (s3Key) => {
  //   try {
  //     const response = await dispatch(
  //       getDownloadFileUrl({ s3_key: s3Key })
  //     ).unwrap();
  //     const signedURL = response?.data?.data?.presignedURL;

  //     const link = document.createElement("a");
  //     link.href = signedURL;
  //     link.target = "_blank"; // Open link in new tab
  //     link.rel = "noopener noreferrer"; // Security measure to prevent window.opener attacks

  //     // link.download = fileName; // Optional: only if you want to specify a filename
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const downloadFile = async (s3Key) => {
    try {
      const response = await dispatch(
        getDownloadFileUrl({ s3_key: s3Key })
      ).unwrap();
      const signedURL = response?.data?.data?.presignedURL;

      // Fetch the file using the signed URL
      const fileResponse = await fetch(signedURL, {
        method: "GET",
        headers: {
          "Content-Type": "application/octet-stream",
        },
      });

      // Check if the fetch request was successful
      if (!fileResponse.ok) {
        throw new Error(`Error fetching file: ${fileResponse.statusText}`);
      }

      const blob = await fileResponse.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = s3Key.split("/").pop(); // Use the file's key as the filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url); // Clean up the URL object
    } catch (error) {
      console.log(error);
    }
  };

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
                        <div
                          className={`${style["msg-text"]} d-flex justify-content-between gap-3`}
                        >
                          <span className="text-wrap">
                            {message?.messageContent}
                          </span>
                          {message.messageType !== "text" ? (
                            <span
                              style={{ cursor: "pointer" }}
                              onClick={downloadFile.bind(
                                null,
                                message.filePath
                              )}
                            >
                              <i className="bi bi-download"></i>
                            </span>
                          ) : null}
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
                        <div
                          className={`${style["msg-text"]} d-flex justify-content-between gap-3`}
                        >
                          <span className="text-wrap">
                            {message?.messageContent}
                          </span>
                          {message.messageType !== "text" ? (
                            <span
                              style={{ cursor: "pointer" }}
                              onClick={downloadFile.bind(
                                null,
                                message.filePath
                              )}
                            >
                              <i className="bi bi-download"></i>
                            </span>
                          ) : null}
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
              {isTyping ? (
                <div className={`${style["typingIndicatorContainer"]} mb-`}>
                  {/* <div className={`${style["msg-dummy-img"]}`}></div> */}
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
                  <div className={style["typingIndicatorBubble"]}>
                    <div className={style["typingIndicatorBubbleDot"]}></div>
                    <div className={style["typingIndicatorBubbleDot"]}></div>
                    <div className={style["typingIndicatorBubbleDot"]}></div>
                  </div>
                </div>
              ) : null}
            </main>
            <div ref={scrollRef} />
          </PerfectScrollbar>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ChatContainer;
