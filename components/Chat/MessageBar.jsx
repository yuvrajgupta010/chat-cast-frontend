import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
  useRef,
} from "react";
import { Button, Card, Dropdown } from "react-bootstrap";
import Picker from "emoji-picker-react";

const MessageBar = forwardRef((props, ref) => {
  const { sendMessage, socket, receiverId, chatRoomId } = props;
  const [inputStr, setInputStr] = useState("");
  const [typing, setTyping] = useState(false);
  const lastTypingTimeRef = useRef(null);
  const typingTimeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, []);

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

  const typingHandler = (e) => {
    setInputStr(e.target.value);

    if (!socket || !socket.connected) return;

    if (!typing) {
      setTyping(true);
      if (!chatRoomId || !receiverId) return;
      socket.emit("typing:start", receiverId, chatRoomId);
    }

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    lastTypingTimeRef.current = new Date().getTime();

    typingTimeoutRef.current = setTimeout(() => {
      const timeNow = new Date().getTime();
      const timeDiff = timeNow - lastTypingTimeRef.current;
      if (timeDiff >= 3000 && typing) {
        if (!chatRoomId || !receiverId) return;
        socket.emit("typing:stop", receiverId, chatRoomId);
        setTyping(false);
      }
    }, 3000);
  };

  const submitMessageHandler = () => {
    const formattedValue = inputStr.trim();
    if (!formattedValue.length) {
      setInputStr("");
      return;
    }
    sendMessage({
      messageContent: formattedValue,
      messageType: "text",
    });
    setInputStr("");
    if (typing) {
      if (!chatRoomId || !receiverId) return;
      socket.emit("typing:stop", receiverId, chatRoomId);
      setTyping(false);
    }
  };

  useImperativeHandle(ref, () => ({
    resetInput: () => setInputStr(""),
  }));

  return (
    <Card className="m-0 br-0 shadow-none border-top">
      <Card.Body className="d-flex py-4">
        <input
          className="form-control ms-0"
          placeholder="Type your message here..."
          type="text"
          onKeyDown={(e) => {
            if (e.key === "Enter" && inputStr.trim().length) {
              submitMessageHandler();
            }
          }}
          onChange={typingHandler}
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

MessageBar.displayName = "MessageBar";
export default MessageBar;
