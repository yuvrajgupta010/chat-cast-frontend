import React, { useEffect, useState, useRef } from "react";
import ChatHeader from "./ChatHeader";
import ChatContainer from "./ChatContainer";
import MessageBar from "./MessageBar";

import { useDispatch, useSelector } from "react-redux";
import { postUpdateMessageStatus, sendMessage } from "@/store/chatApp/action";
import { toast } from "react-toastify";
import {
  currentChatUserAction,
  makeUsersOnlineOffline,
  updateChatListAction,
} from "@/store/chatApp/reducer";
import { useAuthCtx } from "@/context/AuthCTX";

const ChatBox = () => {
  const { userDetails } = useAuthCtx();
  const { currentChatUser, socket } = useSelector((state) => state.chatApp);
  const dispatch = useDispatch();
  const [chatMessages, setChatMessages] = useState([]);

  const messageBarRef = useRef();

  useEffect(() => {
    if (currentChatUser.chatState === "new") return;

    const lastMessageSenderId = currentChatUser.lastMessage.sender;

    if (
      lastMessageSenderId !== userDetails.id &&
      currentChatUser?.totalUnreadMessages
    ) {
      dispatch(
        postUpdateMessageStatus({
          chatId: currentChatUser._id,
          data: { messageStatus: "read" },
        })
      )
        .unwrap()
        .then((response) => {
          if (response.status === 200) {
            if (socket?.connected) {
              socket.emit("mark-message-read", currentChatUser.user.id);
            }
          }
        });
    }
  }, [currentChatUser?.user?.id, socket, dispatch]);

  const sendNewMessage = async (message) => {
    const formatedMessage = {
      ...message,
      receiverId: currentChatUser.user.id,
    };
    try {
      const response = await dispatch(sendMessage(formatedMessage)).unwrap();

      if (response.status !== 201) {
        throw new Error(response.data.message);
      }

      const responseData = response.data.data;
      console.log(currentChatUser, "currentChatUser");
      // There is three state of message deleted, old and new
      if (responseData?.chatIsNew === true) {
        setChatMessages((prev) => [...prev, responseData.message]);
        const formatedData = {
          ...responseData.chat,
          totalUnreadMessages: 0,
          chatState: "old",
          user: currentChatUser.user,
        };

        const formatSocketData = {
          ...responseData.chat,
          totalUnreadMessages: 1,
          chatState: "old",
          user: {
            id: userDetails.id,
            email: userDetails.email,
            profile: userDetails.profile,
          },
          isReceiverOnline: true,
        };

        socket.emit(
          "join-new-chat",
          currentChatUser.user.id,
          formatSocketData,
          async (socketResponse) => {
            if (socketResponse.status === "success") {
              console.log("socketResponse", socketResponse);
              dispatch(
                makeUsersOnlineOffline({
                  receiverId: currentChatUser.user.id,
                  isReceiverOnline: socketResponse.isReceiverOnline,
                })
              );
            }
          }
        );

        dispatch(
          currentChatUserAction({
            currentChatUser: formatedData,
          })
        );
        dispatch(
          updateChatListAction({ updateType: "new", chatData: formatedData })
        );
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const resetInputField = () => {
    if (messageBarRef.current) {
      messageBarRef.current.resetInput();
    }
  };

  return (
    <div className="col-8 m-0 p-0 d-flex flex-column gap-0 h-100 text-dark border-start">
      <ChatHeader headerData={currentChatUser} />
      <ChatContainer />
      <MessageBar ref={messageBarRef} sendMessage={sendNewMessage} />
    </div>
  );
};

export default ChatBox;
