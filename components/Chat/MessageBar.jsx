import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
  useRef,
} from "react";
import { Button, Card, Dropdown } from "react-bootstrap";
import Picker from "emoji-picker-react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import axios from "axios";

import { getUploadFileUrl } from "@/store/chat/action";

const MessageBar = forwardRef((props, ref) => {
  const dispatch = useDispatch();
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

    const MAX_FILE_SIZE = 4 * 1024 * 1024; // 4MB in bytes
    const target = e.target;
    const files = target.files || [];
    const selectedFile = files[0];

    if (selectedFile) {
      if (selectedFile.size > MAX_FILE_SIZE) {
        toast.error("File size should be less than 4MB");
        return;
      }
      if (
        selectedFile.type === "image/png" ||
        selectedFile.type === "image/jpeg" ||
        selectedFile.type === "image/jpg" ||
        selectedFile.type === "image/webp" ||
        selectedFile.type === "application/pdf" ||
        selectedFile.type === "audio/mpeg" ||
        selectedFile.type === "video/mp4" ||
        selectedFile.type === "video/mpeg" ||
        selectedFile.type === "video/webm" ||
        selectedFile.type === "text/plain"
      ) {
        try {
          const data = {
            fileName: selectedFile.name,
            contentType: selectedFile.type,
          };

          const uploadUrlResponse = await dispatch(
            getUploadFileUrl(data)
          ).unwrap();

          if (!uploadUrlResponse) {
            throw new Error("Something went wrong");
          }

          if (uploadUrlResponse.status !== 200) {
            throw new Error(uploadUrlResponse?.data?.message);
          }

          const signedURL = uploadUrlResponse?.data?.data?.presignedURL;
          const uploadPath = uploadUrlResponse?.data?.data?.uploadPath;

          await axios.put(signedURL, selectedFile, {
            headers: {
              "Content-Type": selectedFile.type,
            },
          });

          sendMessage({
            filePath: uploadPath,
            messageContent: selectedFile.name,
            messageType: "image", // TODO: need to work with messageType
          });
        } catch (error) {
          console.log(error);
          toast.error(`Failed to  upload file. Please try again!`);
        } finally {
        }
        // console.log(fileUploadReponse);
      } else {
        toast.error(`We don't support ${selectedFile.type} file type`);
        return;
      }
    }
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
