import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ChatListHeader from "./ChatListHeader";
import SearchBar from "./Default/SearchBar";
import List from "./Default/List";
import AddNewContact from "./AddNewContact/AddNewContact";
import Profile from "./Profile/Profile";
import AddNewGroup from "./AddNewGroup";
import appConstants from "@/helper/constant";

const ChatList = () => {
  const dispatch = useDispatch();
  const {
    chatListPageType,
    socket,
    chatListOfUser: { chatList },
  } = useSelector((store) => store.chatApp);
  const [onceRoomJoined, setOnceRoomJoined] = useState(false);

  useEffect(() => {
    if (!socket?.connected) return;
    // if (!chatList.length) return;
    // if (onceRoomJoined) return;
    const rooms = chatList.map((chat) => ({
      chatId: chat._id,
      receiverId: chat.receiver.id,
    }));
    socket.emit("join-rooms-and-show-online", { rooms: rooms });
    // setOnceRoomJoined(true);
  }, [chatList.length, onceRoomJoined, socket]);

  const pageType = "default";

  return (
    <div className="col-4 m-0 p-0 d-flex flex-column gap-0 h-100 border-end">
      <ChatListHeader />
      {chatListPageType === appConstants.DEFAULT_CHAT_LIST_PAGE ? (
        <List />
      ) : null}
      {chatListPageType === appConstants.ADD_CONTACT_CHAT_LIST_PAGE ? (
        <AddNewContact />
      ) : null}
      {chatListPageType === appConstants.ADD_GROUP_CHAT_LIST_PAGE ? (
        <AddNewGroup />
      ) : null}
      {chatListPageType === appConstants.PROFILE_CHAT_LIST_PAGE ? (
        <Profile />
      ) : null}
    </div>
  );
};

export default ChatList;
