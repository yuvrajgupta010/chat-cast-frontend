import { createSlice } from "@reduxjs/toolkit";
import { getUserChatList } from "./action";
import appConstants from "@/helper/constant";

const initialState = {
  socket: undefined,
  currentChat: undefined,
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
    currentChat: (state, action) => {
      state.chatListPageType = appConstants.DEFAULT_CHAT_LIST_PAGE;
      state.currentChat = action.payload.currentChat;
    },
    addSocketToState: (state, action) => {
      state.socket = action.payload.socket;
    },
    updateChatList: (state, action) => {
      const { payload } = action;

      if (payload.updateType === "new") {
        state.chatListOfUser.chatList.unshift(payload.chatData);
      }
      if (payload.updateType === "chat-open") {
        const chatList = state.chatListOfUser.chatList;
        const chat = chatList.find((chat) => chat._id === payload.chatId);
        if (chat) {
          chat.totalUnreadMessages = 0;
          chat.chatState = "old";
        }
        state.currentChat = chat;
        state.chatListOfUser.chatList = chatList;
      }
      if (payload.updateType === "old") {
        const chatList = state.chatListOfUser.chatList;
        const indexOfChat = chatList.findIndex(
          (chat) => chat._id === payload.chatId
        );
        if (indexOfChat !== -1) {
          const chat = chatList[indexOfChat];
          if (
            !payload?.sendBySelf &&
            state.currentChat?._id !== payload.chatId
          ) {
            chat.totalUnreadMessages += 1;
          }
          chat.lastMessage = payload.lastMessage;
          const part = chatList.splice(indexOfChat, 1);
          chatList.unshift(part[0]);

          if (state.currentChat?._id === payload.chatId) {
            state.currentChat = chat;
          }
        } else {
          const deletedChatList = state.chatListOfUser.deletedChatList;
          const indexOfChat = deletedChatList.findIndex(
            (chat) => chat._id === payload.chatId
          );
          if (indexOfChat !== -1) {
            const chat = deletedChatList[indexOfChat];
            if (
              !payload?.sendBySelf &&
              state.currentChat?._id !== payload.chatId
            ) {
              chat.totalUnreadMessages += 1;
            }
            chat.chatState = "old";
            chat.lastMessage = payload.lastMessage;
            state.chatListOfUser.chatList.unshift(chat);
            deletedChatList.splice(indexOfChat, 1);
            if (state.currentChat?._id === payload.chatId) {
              state.currentChat = chat;
            }
          }
        }
      }
    },
    makeUsersOnlineOffline: (state, action) => {
      const { receiverId, isReceiverOnline } = action.payload;

      const userDetails = JSON.parse(localStorage.getItem("userDetails"));

      const chatList = state.chatListOfUser.chatList;
      let chat = chatList.find((chat) => chat.receiver.id === receiverId);
      if (chat) {
        chat.isReceiverOnline = isReceiverOnline;
        if (
          chat.lastMessage.sender === userDetails.id &&
          chat.lastMessage.messageStatus === "sent" &&
          isReceiverOnline
        ) {
          chat.lastMessage.messageStatus = "delivered";
        }
        state.chatListOfUser.chatList = chatList;
      } else {
        const chatList = state.chatListOfUser.deletedChatList;
        chat = chatList.find((chat) => chat.receiver.id === receiverId);
        if (chat) {
          chat.isReceiverOnline = isReceiverOnline;
          if (
            chat.lastMessage.sender === userDetails.id &&
            chat.lastMessage.messageStatus === "sent" &&
            isReceiverOnline
          ) {
            chat.lastMessage.messageStatus = "delivered";
          }
          state.chatListOfUser.deletedChatList = chatList;
        }
      }
      if (state?.currentChat) {
        if (state.currentChat?._id === chat?._id) {
          state.currentChat = chat;
        }
      }
    },
    updateChatMessageStatus: (state, action) => {
      const { readerId, messageStatus } = action.payload;
      const userDetails = JSON.parse(localStorage.getItem("userDetails"));

      const chatList = state.chatListOfUser.chatList;
      let chat = chatList.find((chat) => chat.receiver.id === readerId);
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
        chat = chatList.find((chat) => chat.receiver.id === receiverId);
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
    resetChatAppState: (state, action) => {
      state.currentChat = undefined;
      state.chatListOfUser.chatList = [];
      state.chatListOfUser.deletedChatList = [];
      state.chatListPageType = appConstants.DEFAULT_CHAT_LIST_PAGE;
      state.socket = undefined;
      state.loader.isChatListLoading = false;
    },
    isUserTyping: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(getUserChatList.pending, (state, action) => {
      state.loader.isChatListLoading = true;
    });
    builder.addCase(getUserChatList.fulfilled, (state, action) => {
      const { chatList, deletedChatList } = action.payload?.data?.data;
      state.loader.isChatListLoading = false;

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
          chat.receiver = user;
          chat.isReceiverOnline = false;
          chat.totalUnreadMessages = chat?.totalUnreadMessages
            ? chat.totalUnreadMessages
            : 0;
          chat.chatState = chatState;
          chat.isTyping = false;
          return chat;
        });
        return returnData;
      };

      state.chatListOfUser.chatList = formater(chatList, "old");
      state.chatListOfUser.deletedChatList = formater(
        deletedChatList,
        "deleted"
      );
    });
    builder.addCase(getUserChatList.rejected, (state, action) => {
      state.loader.isChatListLoading = false;
    });
  },
});

export const changeChatListPageTypeAction =
  chatAppSlice.actions.changeChatListPageType;
export const currentChatAction = chatAppSlice.actions.currentChat;
export const addSocketToStateAction = chatAppSlice.actions.addSocketToState;
export const updateChatListAction = chatAppSlice.actions.updateChatList;
export const makeUsersOnlineOffline =
  chatAppSlice.actions.makeUsersOnlineOffline;
export const updateChatMessageStatus =
  chatAppSlice.actions.updateChatMessageStatus;
export const resetChatAppStateAction = chatAppSlice.actions.resetChatAppState;

const chatAppReducers = chatAppSlice.reducer;
export default chatAppReducers;
