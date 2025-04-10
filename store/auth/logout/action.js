import { createAsyncThunk } from "@reduxjs/toolkit";

import { actionTypes } from "../../actionTypes";
import { logoutService } from "@/service/auth/logout";

export const logoutUser = createAsyncThunk(
  actionTypes.LOGOUT_USER,
  async (data, { rejectWithValue }) => {
    try {
      const response = await logoutService(data);
      return response;
    } catch (error) {
      console.error(actionTypes.LOGOUT_USER, error);
      return rejectWithValue(error);
    }
  }
);
