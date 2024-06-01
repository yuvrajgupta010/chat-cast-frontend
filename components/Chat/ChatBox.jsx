import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import ChatHeader from "./ChatHeader";
import ChatContainer from "./ChatContainer";
import MessageBar from "./MessageBar";
import { postUpdateMessageStatus, sendMessage } from "@/store/chatApp/action";
import {
  currentChatAction,
  makeUsersOnlineOffline,
  updateChatListAction,
} from "@/store/chatApp/reducer";
import {
  addMessageInRoomAction,
  selectChatRoomAndUserAction,
} from "@/store/chat/reducer";
import { getChatMessages } from "@/store/chat/action";
import { useAuthCtx } from "@/context/AuthCTX";

const ChatBox = () => {
  const { chatRoomMessages, isTyping } = useSelector((store) => store.chatRoom);
  const { userDetails } = useAuthCtx();
  const { currentChat, socket } = useSelector((state) => state.chatApp);

  const dispatch = useDispatch();

  const messageBarRef = useRef();

  useEffect(() => {
    resetInputField();
    if (currentChat.chatState === "new") return;

    const lastMessageSenderId = currentChat.lastMessage.sender;
    if (
      lastMessageSenderId !== userDetails.id &&
      currentChat?.totalUnreadMessages
    ) {
      dispatch(
        postUpdateMessageStatus({
          chatId: currentChat._id,
          data: { messageStatus: "read" },
        })
      )
        .unwrap()
        .then((response) => {
          if (response.status === 200) {
            if (socket?.connected) {
              socket.emit(
                "mark-message-read",
                currentChat.receiver.id,
                currentChat._id
              );
            }
          }
        });
      dispatch(
        updateChatListAction({
          updateType: "chat-open",
          chatId: currentChat._id,
        })
      );
    }
  }, [currentChat?.receiver?.id, socket, dispatch]);

  useEffect(() => {
    if (!socket?.connected) return;
    if (!currentChat?.lastMessage?.sender) return;
    if (currentChat?.lastMessage?.sender === userDetails?.id) {
      return;
    }
    dispatch(
      postUpdateMessageStatus({
        chatId: currentChat._id,
        data: { messageStatus: "read" },
      })
    ).unwrap();

    socket.emit("mark-message-read", currentChat.receiver.id, currentChat._id);
  }, [currentChat?.lastMessage, socket]);

  useEffect(() => {
    if (!currentChat?._id) return;
    dispatch(
      selectChatRoomAndUserAction({
        chatRoomId: currentChat?._id,
        receiverId: currentChat.receiver.id,
      })
    );

    dispatch(
      getChatMessages({ chatId: currentChat?._id, offset: 1, limit: 12 })
    );
  }, [currentChat?._id]);

  const sendNewMessage = async (message) => {
    const formatedMessage = {
      ...message,
      receiverId: currentChat.receiver.id,
    };
    try {
      const response = await dispatch(sendMessage(formatedMessage)).unwrap();

      if (response.status !== 201) {
        throw new Error(response.data.message);
      }

      const responseData = response.data.data;
      // There is three state of message deleted, old and new

      if (responseData?.chatIsNew === true) {
        const formatedData = {
          ...responseData.chat,
          totalUnreadMessages: 0,
          isTyping: false,
          chatState: "old",
          receiver: currentChat.receiver,
        };

        const formatSocketData = {
          ...responseData.chat,
          totalUnreadMessages: 1,
          isTyping: false,
          chatState: "old",
          receiver: {
            id: userDetails.id,
            email: userDetails.email,
            profile: userDetails.profile,
          },
          isReceiverOnline: true,
        };

        socket.emit(
          "join-new-chat",
          currentChat.receiver.id,
          responseData.chat._id,
          formatSocketData,
          async (socketResponse) => {
            if (socketResponse.status === "success") {
              dispatch(
                makeUsersOnlineOffline({
                  receiverId: currentChat.receiver.id,
                  isReceiverOnline: socketResponse.isReceiverOnline,
                })
              );
            }
          }
        );
        console.log(currentChat.receiver.id, "currentChat.receiver.id a");

        dispatch(
          currentChatAction({
            currentChat: formatedData,
          })
        );
        dispatch(
          selectChatRoomAndUserAction({
            chatRoomId: formatedData._id,
            receiverId: formatedData.receiver.id,
          })
        );
        dispatch(
          addMessageInRoomAction({
            message: responseData.message,
            chatRoomId: formatedData._id,
          })
        );
        dispatch(
          updateChatListAction({ updateType: "new", chatData: formatedData })
        );
      } else if (
        currentChat.chatState === "old" ||
        currentChat.chatState === "deleted"
      ) {
        dispatch(
          addMessageInRoomAction({
            message: responseData.message,
            chatRoomId: currentChat._id,
          })
        );

        dispatch(
          updateChatListAction({
            updateType: "old",
            chatId: currentChat._id,
            lastMessage: responseData.message,
            sendBySelf: true,
          })
        );
        console.log(currentChat.receiver.id, "currentChat.receiver.id");
        socket.emit(
          "send-message",
          currentChat.receiver.id,
          currentChat._id,
          responseData.message
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
      <ChatHeader headerData={currentChat} />
      <ChatContainer messages={chatRoomMessages} isTyping={isTyping} />
      <MessageBar
        ref={messageBarRef}
        sendMessage={sendNewMessage}
        socket={socket}
        receiverId={currentChat?.receiver?.id}
        chatRoomId={currentChat?._id}
      />
    </div>
  );
};

export default ChatBox;
