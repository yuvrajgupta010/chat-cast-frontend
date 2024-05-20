import React from "react";
import { Card } from "react-bootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import style from "./chatcontainer.module.css";
import Link from "next/link";

const ChatContainer = () => {
  return (
    <div
      className="card mb-0 overflow-auto br-0 bg-transparent"
      style={{ flex: 1, boxShadow: "none" }}
    >
      <Card
        className={`p-0 m-0 h-100 ${style["chat-container"]} bg-transparent`}
      >
        <PerfectScrollbar>
          <Card.Body></Card.Body>
        </PerfectScrollbar>
      </Card>
    </div>
  );
};

export default ChatContainer;
