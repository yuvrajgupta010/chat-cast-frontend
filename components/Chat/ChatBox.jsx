import React from "react";
import ChatHeader from "./ChatHeader";
import ChatContainer from "./ChatContainer";
import MessageBar from "./MessageBar";
import {
  Button,
  Card,
  Dropdown,
  FormControl,
  InputGroup,
  Nav,
} from "react-bootstrap";
import Link from "next/link";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

const ChatBox = () => {
  return (
    <div className="col-8 m-0 p-0 d-flex flex-column gap-0 h-100 text-dark border-start">
      <ChatHeader />
      <ChatContainer />
      <MessageBar />
    </div>
  );
};

export default ChatBox;
