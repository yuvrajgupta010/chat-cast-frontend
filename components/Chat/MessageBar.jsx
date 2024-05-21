import Link from "next/link";
import React, { useState } from "react";
import {
  Button,
  Card,
  Dropdown,
  Nav,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import Picker from "emoji-picker-react";

const MessageBar = () => {
  const [inputStr, setInputStr] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (event, emojiObject) => {
    console.log(event);
    setInputStr((prevInput) => prevInput + event.emoji);
    setShowPicker(false);
  };

  return (
    <Card className="m-0 br-0 shadow-none border-top">
      {" "}
      <Card.Body className="d-flex py-4">
        <input
          className="form-control ms-0"
          placeholder="Type your message here..."
          type="text"
          onChange={(e) => setInputStr(e.target.value)}
          value={inputStr}
        />
        <span
          className="nav-link fs-5"
          data-bs-toggle="tooltip"
          title="Attach a File"
        >
          <i className="fe fe-paperclip"></i>
        </span>

        <Dropdown>
          <Dropdown.Toggle
            className="text-muted fs-5 no-caret nav-link ps-1"
            as="a"
          >
            <i className="bi bi-emoji-smile"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu-end p-0">
            <Picker pickerStyle={{ width: "5%" }} onEmojiClick={onEmojiClick} />
          </Dropdown.Menu>
        </Dropdown>
        <Button className="btn btn-icon  btn-primary brround">
          <i className="fa fa-paper-plane-o"></i>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MessageBar;
