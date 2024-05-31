import { createSlice } from "@reduxjs/toolkit";
import { getUserChatList } from "./action";
import appConstants from "@/helper/constant";

const initialState = {
  socket: undefined,
  currentChatUser: undefined,
  chatListPageType: appConstants.DEFAULT_CHAT_LIST_PAGE,
  chatListOfUser: { chatList: [], deletedChatList: [] },
  loader: {
    isChatListLoading: false,
  },
};

const chatAppSlice = createSlice({
  name: "chatApp",
  initialState,
  reducers: {
    changeChatListPageType: (state, action) => {
      state.chatListPageType = action.payload.chatListPageType;
    },
    currentChatUser: (state, action) => {
      state.chatListPageType = appConstants.DEFAULT_CHAT_LIST_PAGE;
      state.currentChatUser = action.payload.currentChatUser;
    },
    addSocketToState: (state, action) => {
      state.socket = action.payload.socket;
    },
    updateChatList: (state, action) => {
      const { payload } = action;
      console.log(payload, "updateChatList");
      if (payload.updateType === "new") {
        state.chatListOfUser.chatList.unshift(payload.chatData);
      }
    },
    makeUsersOnlineOffline: (state, action) => {
      const { receiverId, isReceiverOnline } = action.payload;

      const userDetails = JSON.parse(localStorage.getItem("userDetails"));

      const chatList = state.chatListOfUser.chatList;
      let chat = chatList.find((chat) => chat.user.id === receiverId);
      if (chat) {
        chat.isReceiverOnline = isReceiverOnline;
        if (
          chat.lastMessage.sender === userDetails.id &&
          chat.lastMessage.messageStatus === "sent"
        ) {
          chat.lastMessage.messageStatus = "delivered";
        }
        state.chatListOfUser.chatList = chatList;
      } else {
        const chatList = state.chatListOfUser.deletedChatList;
        chat = chatList.find((chat) => chat.user.id === receiverId);
        if (chat) {
          chat.isReceiverOnline = isReceiverOnline;
          if (
            chat.lastMessage.sender === userDetails.id &&
            chat.lastMessage.messageStatus === "sent"
          ) {
            chat.lastMessage.messageStatus = "delivered";
          }
          state.chatListOfUser.deletedChatList = chatList;
        }
      }
      if (state?.currentChatUser)
        if (state.currentChatUser?._id === chat._id) {
          state.currentChatUser = chat;
        }
    },
    updateChatMessageStatus: (state, action) => {
      const { readerId, messageStatus } = action.payload;
      console.log(action);
      const userDetails = JSON.parse(localStorage.getItem("userDetails"));

      const chatList = state.chatListOfUser.chatList;
      let chat = chatList.find((chat) => chat.user.id === readerId);
      if (chat) {
        if (
          chat.lastMessage.sender === userDetails.id &&
          chat.lastMessage.messageStatus !== messageStatus
        ) {
          chat.lastMessage.messageStatus = messageStatus;
        }
        state.chatListOfUser.chatList = chatList;
      } else {
        const chatList = state.chatListOfUser.deletedChatList;
        chat = chatList.find((chat) => chat.user.id === receiverId);
        if (chat) {
          if (
            chat.lastMessage.sender === userDetails.id &&
            chat.lastMessage.messageStatus !== messageStatus
          ) {
            chat.lastMessage.messageStatus = messageStatus;
          }
          state.chatListOfUser.deletedChatList = chatList;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserChatList.pending, (state, action) => {
      state.loader.isChatListLoading = true;
    });
    builder.addCase(getUserChatList.fulfilled, (state, action) => {
      const { chatList, deletedChatList } = action.payload?.data?.data;

      //TODO: remove this on testing after development
      if (
        state.chatListOfUser.chatList.length ||
        state.chatListOfUser.deletedChatList.length
      ) {
        return;
      }
      ////////////////////////////////

      const userDetails = JSON.parse(localStorage.getItem("userDetails"));

      const formater = (data, chatState) => {
        const returnData = data.map((chat) => {
          const { users } = chat;
          const user = users.find((user) => user._id !== userDetails.id);
          user.id = user._id;
          delete user._id;
          chat.user = user;
          chat.isReceiverOnline = false;
          chat.totalUnreadMessages = chat?.totalUnreadMessages
            ? chat.totalUnreadMessages
            : 0;
          chat.chatState = chatState;
          return chat;
        });
        return returnData;
      };

      state.chatListOfUser.chatList = formater(chatList, "old");
      state.chatListOfUser.deletedChatList = formater(
        deletedChatList,
        "deleted"
      );
      state.loader.isChatListLoading = false;
    });
    builder.addCase(getUserChatList.rejected, (state, action) => {
      state.loader.isChatListLoading = false;
    });
  },
});

export const changeChatListPageTypeAction =
  chatAppSlice.actions.changeChatListPageType;
export const currentChatUserAction = chatAppSlice.actions.currentChatUser;
export const addSocketToStateAction = chatAppSlice.actions.addSocketToState;
export const updateChatListAction = chatAppSlice.actions.updateChatList;
export const makeUsersOnlineOffline =
  chatAppSlice.actions.makeUsersOnlineOffline;
export const updateChatMessageStatus =
  chatAppSlice.actions.updateChatMessageStatus;

const chatAppReducers = chatAppSlice.reducer;
export default chatAppReducers;
