import { createSlice } from "@reduxjs/toolkit";
import { getChatMessages } from "./action";
import appConstants from "@/helper/constant";

const initialState = {
  chatRoomId: undefined,
  receiverId: undefined,
  chatRoomMessages: [],
  hasMoreMessages: false,
  isTyping: false,
  loader: {
    isMessageLoading: false,
  },
};

const chatRoom = createSlice({
  name: "chatRoom",
  initialState,
  reducers: {
    selectChatRoomAndUser: (state, action) => {
      const { chatRoomId, receiverId } = action.payload;
      if (receiverId === state.receiverId && chatRoomId === state.chatRoomId)
        return;
      state.chatRoomId = chatRoomId;
      state.receiverId = receiverId;
      state.chatRoomMessages = [];
      state.isTyping = false;
    },
    roomTypingHandler: (state, action) => {
      console.log("typing happing...", action.payload);
      const { receiverId, isTyping } = action.payload;
      if (receiverId !== state.receiverId) return;
      state.isTyping = isTyping;
    },
    addMessageInRoom: (state, action) => {
      const { chatRoomId } = action.payload;
      if (chatRoomId !== state.chatRoomId) return;
      state.chatRoomMessages.push(action.payload.message);
    },
    updateChatRoomMessageStatus: (state, action) => {
      const { status, receiverId } = action.payload;
      if (receiverId !== state.receiverId) return;
      state.chatRoomMessages = state.chatRoomMessages.map((message) => {
        const presentMessageStatus = message.messageStatus;
        if (status === "delivered") {
          if (presentMessageStatus === "sent") {
            message.messageStatus = "delivered";
          }
        } else if (status === "read") {
          if (presentMessageStatus === "delivered") {
            message.messageStatus = "read";
          }
        }
        return message;
      });
    },
    resetChatRoomSlice: (state, action) => {
      state.chatRoomId = undefined;
      state.receiverId = undefined;
      state.chatRoomMessages = [];
      state.hasMoreMessages = false;
      state.isTyping = false;
      state.loader.isMessageLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getChatMessages.pending, (state, action) => {
      state.loader.isMessageLoading = true;
    });
    builder.addCase(getChatMessages.fulfilled, (state, action) => {
      const responseData = action.payload?.data?.data;
      state.chatRoomMessages = [
        ...responseData?.messages.reverse(),
        ...state.chatRoomMessages,
      ];
      state.hasMoreMessages = responseData?.hasMoreMessages;
      state.loader.isMessageLoading = false;
    });
    builder.addCase(getChatMessages.rejected, (state, action) => {
      state.loader.isMessageLoading = false;
    });
  },
});

export const roomTypingHandlerAction = chatRoom.actions.roomTypingHandler;
export const selectChatRoomAndUserAction =
  chatRoom.actions.selectChatRoomAndUser;
export const addMessageInRoomAction = chatRoom.actions.addMessageInRoom;
export const updateChatRoomMessageStatusAction =
  chatRoom.actions.updateChatRoomMessageStatus;
export const resetChatRoomSliceAction = chatRoom.actions.resetChatRoomSlice;

const chatRoomReducers = chatRoom.reducer;
export default chatRoomReducers;
