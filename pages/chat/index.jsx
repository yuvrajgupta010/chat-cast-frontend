import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import io from "socket.io-client";

import Seo from "@/shared/layout-components/seo/seo";
import Empty from "@/components/Empty";
import ChatBox from "@/components/Chat/ChatBox";
import PurchasePlan from "@/components/PurchasePlan/PurchasePlan";
import ChatList from "@/components/ChatList/ChatList";
import { useAuthCtx } from "@/context/AuthCTX";
import { getUserChatList } from "@/store/chatApp/action";
import { BASE_URL } from "@/service/restfulUrls";
import {
  addSocketToStateAction,
  makeUsersOnlineOffline,
  updateChatListAction,
  updateChatMessageStatus,
} from "@/store/chatApp/reducer";
import {
  addMessageInRoomAction,
  roomTypingHandlerAction,
  updateChatRoomMessageStatusAction,
} from "@/store/chat/reducer";

const Chat = () => {
  const { currentChat } = useSelector((store) => store.chatApp);
  const { isAuthenticated } = useAuthCtx();
  const dispatch = useDispatch();
  const [getUserChatListOnce, setGetUserChatListOnce] = useState(false);

  useEffect(() => {
    document
      .querySelector("body")
      .classList.add(
        "app",
        "sidebar-mini",
        "ltr",
        "light-mode",
        "overflow-hidden"
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

  useEffect(() => {
    if (!isAuthenticated) return;

    const accessToken = JSON.parse(localStorage.getItem("accessToken"));

    const socket = io(BASE_URL, {
      // Pass any additional configurations here
      auth: {
        accessToken: accessToken, // Send your authentication token here
      },
    });

    socket.on("connect", () => {
      dispatch(addSocketToStateAction({ socket }));
    });

    socket.on("new-chat", (chatData) => {
      dispatch(updateChatListAction({ updateType: "new", chatData }));
      socket.emit("join-a-room", chatData._id);
    });

    socket.on("online-users", (data) => {
      const { onlineUsers } = data;
      onlineUsers.forEach((status) => {
        dispatch(makeUsersOnlineOffline(status));
      });
    });

    socket.on("new-message", (data) => {
      console.log("new message", "good to see you", data);
      dispatch(
        updateChatListAction({
          updateType: "old",
          chatId: data.chat,
          lastMessage: data,
          sendBySelf: false,
        })
      );
      dispatch(
        addMessageInRoomAction({
          message: data,
          chatRoomId: data.chat,
        })
      );
    });

    socket.on("user-online-status", (data) => {
      console.log(data, "user online status");
      dispatch(makeUsersOnlineOffline(data));
      if (data?.isReceiverOnline) {
        dispatch(
          updateChatRoomMessageStatusAction({
            status: "delivered",
            receiverId: data?.receiverId,
          })
        );
      }
    });

    socket.on("mark-message-read", (data) => {
      const { readerId } = data;
      dispatch(updateChatMessageStatus({ readerId, messageStatus: "read" }));
      dispatch(
        updateChatRoomMessageStatusAction({
          status: "read",
          receiverId: readerId,
        })
      );
    });

    socket.on("typing:start", (data) => {
      dispatch(
        roomTypingHandlerAction({ receiverId: data.typerId, isTyping: true })
      );
    });

    socket.on("typing:stop", (data) => {
      dispatch(
        roomTypingHandlerAction({ receiverId: data.typerId, isTyping: false })
      );
    });

    socket.on("connect_error", (error) => {
      toast.error(`Couldn't connect to server: ${error.message}`);
      dispatch(addSocketToStateAction({ socket: undefined }));
    });

    socket.on("disconnect", () => {
      dispatch(addSocketToStateAction({ socket: undefined }));
    });

    return () => {
      // Clean up when component unmounts
      socket.disconnect();
    };
  }, [isAuthenticated, dispatch]);

  useEffect(() => {
    if (!isAuthenticated) return;
    if (!getUserChatListOnce) {
      setGetUserChatListOnce(true);
      dispatch(getUserChatList());
    }
  }, [isAuthenticated, dispatch, getUserChatListOnce]);

  return (
    <>
      <Seo title="Chat" />
      <ToastContainer />
      {!isAuthenticated ? (
        <div
          className="row m-0 p-0 align-items-center justify-content-center"
          style={{ height: "100vh", minWidth: "1000px" }}
        >
          <div className="dimmer active">
            <div className="spinner2">
              <div className="cube1"></div>
              <div className="cube2"></div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="row m-0 p-0"
          style={{ height: "100vh", minWidth: "1000px" }}
        >
          <ChatList />
          {/* <PurchasePlan /> */}
          {currentChat ? <ChatBox /> : <Empty />}
        </div>
      )}
    </>
  );
};

export default Chat;
