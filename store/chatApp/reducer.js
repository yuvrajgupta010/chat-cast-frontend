import { createSlice } from "@reduxjs/toolkit";
import { createAccount } from "./action";
import appConstants from "@/helper/constant";

const initialState = {
  currentChatUser: undefined,
  chatListPageType: appConstants.DEFAULT_CHAT_LIST_PAGE,
};

const chatAppSlice = createSlice({
  name: "chatApp",
  initialState,
  reducers: {
    changeChatListPageType: (state, action) => {
      state.chatListPageType = action.payload.chatListPageType;
    },
  },
  extraReducers: (builder) => {},
});

export const changeChatListPageTypeAction =
  chatAppSlice.actions.changeChatListPageType;

const chatAppReducers = chatAppSlice.reducer;
export default chatAppReducers;
