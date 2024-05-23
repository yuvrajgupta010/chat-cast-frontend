import { createAsyncThunk } from "@reduxjs/toolkit";

import { actionTypes } from "../actionTypes";
import { putProfileUpdateService } from "@/service/user/user";

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
