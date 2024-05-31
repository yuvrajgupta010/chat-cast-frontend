import Link from "next/link";
import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Button, Card, Dropdown } from "react-bootstrap";
import Picker from "emoji-picker-react";

const MessageBar = forwardRef((props, ref) => {
  const { sendMessage } = props;
  const [inputStr, setInputStr] = useState("");

  const onEmojiClick = (event, emojiObject) => {
    setInputStr((prevInput) => prevInput + event.emoji);
  };

  const onFileInput = async (e) => {
    e.preventDefault();
    sendMessage({
      filePath: "upload/photo.jpg",
      messageContent: "inputStr.pdf",
      messageType: "image",
    });
  };

  const submitMessageHandler = () => {
    const formateValue = inputStr.trim();
    if (!formateValue.length) {
      setInputStr("");
    }
    sendMessage({
      messageContent: formateValue,
      messageType: "text",
    });
    setInputStr("");
  };

  useImperativeHandle(ref, () => ({
    resetInput: () => setInputStr(""),
  }));

  return (
    <Card className="m-0 br-0 shadow-none border-top">
      {" "}
      <Card.Body className="d-flex py-4">
        <input
          className="form-control ms-0"
          placeholder="Type your message here..."
          type="text"
          onKeyDown={(e) => {
            if (!inputStr.trim().length) return;
            if (e.key === "Enter") {
              submitMessageHandler();
            }
          }}
          onChange={(e) => setInputStr(e.target.value)}
          value={inputStr}
        />
        <input
          type="file"
          id="file-input-message"
          className="d-none"
          accept=".jpg,.jpeg,.png,.webp,.pdf,.mpeg,.mp3,.mp4,.webm,.txt"
          onInput={onFileInput}
        />
        <label
          htmlFor="file-input-message"
          style={{ cursor: "pointer" }}
          className="m-0 d-flex align-content-center"
        >
          <span
            className="nav-link fs-5"
            data-bs-toggle="tooltip"
            title="Attach a File"
          >
            <i className="fe fe-paperclip"></i>
          </span>
        </label>

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
        <Button
          className="btn btn-icon btn-primary brround"
          onClick={submitMessageHandler}
          disabled={!inputStr.trim().length}
        >
          <i className="fa fa-paper-plane-o"></i>
        </Button>
      </Card.Body>
    </Card>
  );
});

MessageBar.displayName = "Message Bar";
export default MessageBar;
