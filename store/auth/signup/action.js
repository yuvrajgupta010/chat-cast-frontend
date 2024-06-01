import { createAsyncThunk } from "@reduxjs/toolkit";

import { actionTypes } from "../../actionTypes";
import { postSignupService } from "@/service/auth/signup";

export const createAccount = createAsyncThunk(
  actionTypes.CREATE_ACCOUNT,
  async (data, { rejectWithValue }) => {
    try {
      const response = await postSignupService(data);
      return response;
    } catch (error) {
      console.error(actionTypes.CREATE_ACCOUNT, error);
      return rejectWithValue(error);
    }
  }
);
