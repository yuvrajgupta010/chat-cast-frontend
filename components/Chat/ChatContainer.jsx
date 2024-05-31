import React from "react";
import { Card } from "react-bootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import style from "./Chatcontainer.module.css";
import Link from "next/link";
import MessageStatus from "../UI/MessageStatus";

const ChatContainer = () => {
  return (
    <div
      className="card mb-0 overflow-auto br-0 bg-transparent "
      style={{ flex: 1, boxShadow: "none" }}
    >
      <Card
        className={`p-0 m-0 h-100 ${style["chat-container"]} bg-transparent`}
      >
        <PerfectScrollbar>
          <Card.Body>
            <main className={`${style["msger-chat"]}`}>
              <div className={`${style["msg"]} ${style["left-msg"]}`}>
                <div className={`${style["msg-img"]}`}></div>
                <div className={`${style["msg-bubble"]}`}>
                  <div className={`${style["msg-text"]}`}>
                    Hi, welcome to SimpleChat! Go ahead and send me a message.
                    😄
                  </div>
                  <div
                    className={`${style["msg-info"]} m-0 mt-3 justify-content-end gap-2 align-items-center`}
                  >
                    {/* <div className={`${style["msg-info-name"]}`}>BOT</div> */}
                    <div className={`${style["msg-info-time"]} text-end`}>
                      12:45
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${style["msg"]} ${style["right-msg"]}`}>
                <div
                  className={`${style["msg-img"]}`}
                  // style="background-image: url(https://image.flaticon.com/icons/svg/145/145867.svg)"
                ></div>

                <div className={`${style["msg-bubble"]}  bg-white`}>
                  <div className={`${style["msg-text"]}`}>
                    You can change your name in JS section!
                  </div>
                  <div
                    className={`${style["msg-info"]} m-0 mt-3 justify-content-end gap-2 align-items-center`}
                  >
                    <MessageStatus messageStatus="read" />

                    <div className={`${style["msg-info-time"]}`}>12:46</div>
                  </div>
                </div>
              </div>
              <div className={`${style["msg"]} ${style["left-msg"]}`}>
                <div className={`${style["msg-img"]}`}></div>
                <div className={`${style["msg-bubble"]}`}>
                  <div className={`${style["msg-text"]}`}>
                    Hi, welcome to SimpleChat! Go ahead and send me a message.
                    😄
                  </div>
                  <div
                    className={`${style["msg-info"]} m-0 mt-3 justify-content-end gap-2 align-items-center`}
                  >
                    {/* <div className={`${style["msg-info-name"]}`}>BOT</div> */}
                    <div className={`${style["msg-info-time"]} text-end`}>
                      12:45
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${style["msg"]} ${style["right-msg"]}`}>
                <div
                  className={`${style["msg-img"]}`}
                  // style="background-image: url(https://image.flaticon.com/icons/svg/145/145867.svg)"
                ></div>

                <div className={`${style["msg-bubble"]}  bg-white`}>
                  <div className={`${style["msg-text"]}`}>
                    You can change your name in JS section!
                  </div>
                  <div
                    className={`${style["msg-info"]} m-0 mt-3 justify-content-end gap-2 align-items-center`}
                  >
                    <MessageStatus messageStatus="read" />

                    <div className={`${style["msg-info-time"]}`}>12:46</div>
                  </div>
                </div>
              </div>
              <div className={`${style["msg"]} ${style["left-msg"]}`}>
                <div className={`${style["msg-img"]}`}></div>
                <div className={`${style["msg-bubble"]}`}>
                  <div className={`${style["msg-text"]}`}>
                    Hi, welcome to SimpleChat! Go ahead and send me a message.
                    😄
                  </div>
                  <div
                    className={`${style["msg-info"]} m-0 mt-3 justify-content-end gap-2 align-items-center`}
                  >
                    {/* <div className={`${style["msg-info-name"]}`}>BOT</div> */}
                    <div className={`${style["msg-info-time"]} text-end`}>
                      12:45
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${style["msg"]} ${style["right-msg"]}`}>
                <div
                  className={`${style["msg-img"]}`}
                  // style="background-image: url(https://image.flaticon.com/icons/svg/145/145867.svg)"
                ></div>

                <div className={`${style["msg-bubble"]}  bg-white`}>
                  <div className={`${style["msg-text"]}`}>
                    You can change your name in JS section!
                  </div>
                  <div
                    className={`${style["msg-info"]} m-0 mt-3 justify-content-end gap-2 align-items-center`}
                  >
                    <MessageStatus messageStatus="read" />

                    <div className={`${style["msg-info-time"]}`}>12:46</div>
                  </div>
                </div>
              </div>
              <div className={`${style["msg"]} ${style["left-msg"]}`}>
                <div className={`${style["msg-img"]}`}></div>
                <div className={`${style["msg-bubble"]}`}>
                  <div className={`${style["msg-text"]}`}>
                    Hi, welcome to SimpleChat! Go ahead and send me a message.
                    😄
                  </div>
                  <div
                    className={`${style["msg-info"]} m-0 mt-3 justify-content-end gap-2 align-items-center`}
                  >
                    {/* <div className={`${style["msg-info-name"]}`}>BOT</div> */}
                    <div className={`${style["msg-info-time"]} text-end`}>
                      12:45
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${style["msg"]} ${style["right-msg"]}`}>
                <div
                  className={`${style["msg-img"]}`}
                  // style="background-image: url(https://image.flaticon.com/icons/svg/145/145867.svg)"
                ></div>

                <div className={`${style["msg-bubble"]}  bg-white`}>
                  <div className={`${style["msg-text"]}`}>
                    You can change your name in JS section!
                  </div>
                  <div
                    className={`${style["msg-info"]} m-0 mt-3 justify-content-end gap-2 align-items-center`}
                  >
                    <MessageStatus messageStatus="read" />

                    <div className={`${style["msg-info-time"]}`}>12:46</div>
                  </div>
                </div>
              </div>
            </main>
          </Card.Body>
        </PerfectScrollbar>
      </Card>
    </div>
  );
};

export default ChatContainer;
