import ChatList from "@/components/chatList/ChatList";
import Link from "next/link";
import React, { useEffect } from "react";
import { Col, Dropdown, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

import Seo from "@/shared/layout-components/seo/seo";

const Chat = () => {
  const { currentChatUser } = useSelector((store) => store.chatApp);

  useEffect(() => {
    document.querySelector("body").classList.add(
      "app",
      "sidebar-mini",
      "ltr",
      "light-mode"
      // "overflow-hidden"
    );
    document
      .querySelector("body")
      .classList.remove("login-img", "landing-page", "horizontal");

    if (
      localStorage.getItem("sashhorizontal") ||
      localStorage.getItem("sashhorizontalHover")
    ) {
      document.body.classList.remove("sidebar-mini");
      document.body.classList.add("horizontal");
    }
  }, []);

  return (
    <>
      <Seo title="Chat" />
      <div
        className="row m-0 p-0"
        style={{ height: "100vh", minWidth: "1000px" }}
      >
        <ChatList />

        {currentChatUser ? (
          <div className="col-8 bg-red m-0 p-0">Messages</div>
        ) : (
          <div className="col-8 bg-red m-0 p-0">Empty</div>
        )}
      </div>
    </>
  );
};

export default Chat;