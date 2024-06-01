import { createAsyncThunk } from "@reduxjs/toolkit";

import { actionTypes } from "../actionTypes";

import { getChatMessagesService } from "@/service/chat/chat";

export const getChatMessages = createAsyncThunk(
  actionTypes.GET_CHAT_MESSAGES,
  async (data, { rejectWithValue }) => {
    try {
      const response = await getChatMessagesService(data);
      return response;
    } catch (error) {
      console.error(actionTypes.GET_CHAT_MESSAGES, error);
      return rejectWithValue(error);
    }
  }
);
