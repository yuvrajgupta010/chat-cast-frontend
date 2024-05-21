import React from "react";
import ChatListHeader from "./ChatListHeader";
import SearchBar from "./Default/SearchBar";
import List from "./Default/List";
import AddNewContact from "./AddNewContact/AddNewContact";
import Profile from "./Profile/Profile";
import { Dropdown } from "react-bootstrap";
import Link from "next/link";
import AddNewGroup from "./AddNewGroup";
import { useDispatch, useSelector } from "react-redux";
import appConstants from "@/helper/constant";

const ChatList = () => {
  const dispatch = useDispatch();
  const { chatListPageType } = useSelector((store) => store.chatApp);

  const pageType = "default";

  return (
    <div className="col-4 m-0 p-0 d-flex flex-column gap-0 h-100 border-end">
      <ChatListHeader />
      {chatListPageType === appConstants.DEFAULT_CHAT_LIST_PAGE ? (
        <>
          <SearchBar />
          <List />
        </>
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
