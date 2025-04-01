import { createAsyncThunk } from "@reduxjs/toolkit";

import { actionTypes } from "../actionTypes";

import {
  getUserChatListService,
  postSendMessageService,
  postUpdateMessageStatusService,
} from "@/service/chat/chat";

export const getUserChatList = createAsyncThunk(
  actionTypes.GET_USER_CHAT_LIST,
  async (data, { rejectWithValue }) => {
    try {
      const response = await getUserChatListService();
      return response;
    } catch (error) {
      console.error(actionTypes.GET_USER_CHAT_LIST, error);
      return rejectWithValue(error);
    }
  }
);

export const sendMessage = createAsyncThunk(
  actionTypes.SEND_MESSAGE,
  async (data, { rejectWithValue }) => {
    try {
      const response = await postSendMessageService(data);
      return response;
    } catch (error) {
      console.error(actionTypes.SEND_MESSAGE, error);
      return rejectWithValue(error);
    }
  }
);

export const postUpdateMessageStatus = createAsyncThunk(
  actionTypes.UPDATE_MESSAGE_STATUS,
  async (data, { rejectWithValue }) => {
    try {
      const response = await postUpdateMessageStatusService(data);
      return response;
    } catch (error) {
      console.error(actionTypes.UPDATE_MESSAGE_STATUS, error);
      return rejectWithValue(error);
    }
  }
);
