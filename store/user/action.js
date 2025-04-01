import { createAsyncThunk } from "@reduxjs/toolkit";

import { actionTypes } from "../actionTypes";
import {
  getProfilePictureUploadUrlService,
  putProfileUpdateService,
  searchUsersService,
} from "@/service/user/user";

export const profileUpdate = createAsyncThunk(
  actionTypes.PROFILE_UPDATE,
  async (data, { rejectWithValue }) => {
    try {
      const response = await putProfileUpdateService(data);
      return response;
    } catch (error) {
      // rejectWithValue(error);
      console.error(actionTypes.PROFILE_UPDATE, error);
      return error;
    }
  }
);

export const getProfilePictureUploadUrl = createAsyncThunk(
  actionTypes.GET_S3_PROFILE_UPLOAD_URL,
  async (data, { rejectWithValue }) => {
    try {
      const response = await getProfilePictureUploadUrlService(data);
      return response;
    } catch (error) {
      // rejectWithValue(error);
      console.error(actionTypes.GET_S3_PROFILE_UPLOAD_URL, error);
      return error;
    }
  }
);

export const searchUsers = createAsyncThunk(
  actionTypes.SEARCH_USERS,
  async (query, { rejectWithValue }) => {
    try {
      const response = await searchUsersService(query);
      return response;
    } catch (error) {
      // rejectWithValue(error);
      console.error(actionTypes.SEARCH_USERS, error);
      return error;
    }
  }
);
