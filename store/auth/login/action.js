import { createAsyncThunk } from "@reduxjs/toolkit";

import { actionTypes } from "../../actionTypes";
import { postLoginService } from "@/service/auth/login";

export const loginUser = createAsyncThunk(
  actionTypes.LOGIN_USER,
  async (data, { rejectWithValue }) => {
    try {
      const response = await postLoginService(data);
      return response;
    } catch (error) {
      console.error(actionTypes.LOGIN_USER, error);
      return rejectWithValue(error);
    }
  }
);
