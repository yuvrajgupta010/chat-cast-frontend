import { createAsyncThunk } from "@reduxjs/toolkit";

import { actionTypes } from "../actionTypes";

import {
  getChatMessagesService,
  getDownloadFileUrlService,
  getUploadFileUrlService,
} from "@/service/chat/chat";

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

export const getUploadFileUrl = createAsyncThunk(
  actionTypes.GET_UPLOAD_FILE_URL,
  async (data, { rejectWithValue }) => {
    try {
      const response = await getUploadFileUrlService(data);
      return response;
    } catch (error) {
      console.error(actionTypes.GET_UPLOAD_FILE_URL, error);
      return rejectWithValue(error);
    }
  }
);

export const getDownloadFileUrl = createAsyncThunk(
  actionTypes.GET_DOWNLOAD_FILE_URL,
  async (data, { rejectWithValue }) => {
    try {
      const response = await getDownloadFileUrlService(data);
      return response;
    } catch (error) {
      console.error(actionTypes.GET_DOWNLOAD_FILE_URL, error);
      return rejectWithValue(error);
    }
  }
);
