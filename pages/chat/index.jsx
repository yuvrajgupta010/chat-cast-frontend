import React, { useCallback, useEffect, useState } from "react";
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

  const onConnect = useCallback(
    (socket) => {
      dispatch(addSocketToStateAction({ socket }));
    },
    [dispatch]
  );

  const onNewChat = useCallback(
    (socket, chatData) => {
      dispatch(updateChatListAction({ updateType: "new", chatData }));
      socket.emit("join-a-room", chatData._id);
    },
    [dispatch]
  );

  const onOnlineUsers = useCallback(
    (data) => {
      const { onlineUsers } = data;
      onlineUsers.forEach((status) => {
        dispatch(makeUsersOnlineOffline(status));
      });
    },
    [dispatch]
  );

  const onNewMessage = useCallback(
    (data) => {
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
    },
    [dispatch]
  );

  const onUserOnlineStatus = useCallback(
    (data) => {
      dispatch(makeUsersOnlineOffline(data));
      if (data?.isReceiverOnline) {
        dispatch(
          updateChatRoomMessageStatusAction({
            status: "delivered",
            receiverId: data?.receiverId,
          })
        );
      }
    },
    [dispatch]
  );

  const onTypingStart = useCallback(
    (data) => {
      dispatch(
        roomTypingHandlerAction({ receiverId: data.typerId, isTyping: true })
      );
    },
    [dispatch]
  );

  const onMarkMessageRead = useCallback(
    (data) => {
      const { readerId } = data;
      dispatch(updateChatMessageStatus({ readerId, messageStatus: "read" }));
      dispatch(
        updateChatRoomMessageStatusAction({
          status: "read",
          receiverId: readerId,
        })
      );
    },
    [dispatch]
  );

  const onTypingStop = useCallback(
    (data) => {
      dispatch(
        roomTypingHandlerAction({ receiverId: data.typerId, isTyping: false })
      );
    },
    [dispatch]
  );

  const onConnectError = useCallback(
    (error) => {
      toast.error(`Couldn't connect to server: ${error.message}`);
      dispatch(addSocketToStateAction({ socket: undefined }));
    },
    [dispatch]
  );

  const onDisconnect = useCallback(() => {
    dispatch(addSocketToStateAction({ socket: undefined }));
  }, [dispatch]);

  useEffect(() => {
    if (!isAuthenticated) return;

    const socket = io(BASE_URL, {
      // Pass any additional configurations here
      transports: ["websocket"],
      withCredentials: true,
    });

    socket.on("connect", onConnect.bind(null, socket));

    socket.on("new-chat", onNewChat.bind(null, socket));

    socket.on("online-users", onOnlineUsers);

    socket.on("new-message", onNewMessage);

    socket.on("user-online-status", onUserOnlineStatus);

    socket.on("mark-message-read", onMarkMessageRead);

    socket.on("typing:start", onTypingStart);

    socket.on("typing:stop", onTypingStop);

    socket.on("connect_error", onConnectError);

    socket.on("disconnect", onDisconnect);

    return () => {
      // Clean up when component unmounts
      socket.disconnect();
      socket.off("connect", onConnect);
      socket.off("new-chat", onNewChat);
      socket.off("online-users", onOnlineUsers);
      socket.off("new-message", onNewMessage);
      socket.off("user-online-status", onUserOnlineStatus);
      socket.off("mark-message-read", onMarkMessageRead);
      socket.off("typing:start", onTypingStart);
      socket.off("typing:stop", onTypingStop);
      socket.off("connect_error", onConnectError);
      socket.off("disconnect", onDisconnect);
    };
  }, [
    isAuthenticated,
    dispatch,
    onConnect,
    onNewChat,
    onOnlineUsers,
    onNewMessage,
    onUserOnlineStatus,
    onMarkMessageRead,
    onTypingStart,
    onTypingStop,
    onConnectError,
    onDisconnect,
  ]);

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
