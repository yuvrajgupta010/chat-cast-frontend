import { createAsyncThunk } from "@reduxjs/toolkit";

import { actionTypes } from "../../actionTypes";
import {
  getNewForgetOtpService,
  postForgetPasswordService,
  putForgetPasswordService,
} from "@/service/auth/forget-password";

export const forgetPassword = createAsyncThunk(
  actionTypes.FORGET_PASSWORD,
  async (data, { rejectWithValue }) => {
    try {
      const response = await postForgetPasswordService(data);
      return response;
    } catch (error) {
      console.error(actionTypes.FORGET_PASSWORD, error);
      return rejectWithValue(error);
    }
  }
);

export const recoverAccount = createAsyncThunk(
  actionTypes.RECOVER_ACCOUNT,
  async (data, { rejectWithValue }) => {
    try {
      const response = await putForgetPasswordService(data);
      return response;
    } catch (error) {
      // rejectWithValue(error);
      console.error(actionTypes.RECOVER_ACCOUNT, error);
      return error;
    }
  }
);

export const getNewForgetOtp = createAsyncThunk(
  actionTypes.GET_NEW_RECOVERY_OTP,
  async (data, { rejectWithValue }) => {
    try {
      const response = await getNewForgetOtpService(data);
      return response;
    } catch (error) {
      // rejectWithValue(error);
      console.error(actionTypes.GET_NEW_RECOVERY_OTP, error);
      return error;
    }
  }
);
