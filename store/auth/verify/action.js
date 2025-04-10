import { createAsyncThunk } from "@reduxjs/toolkit";

import { actionTypes } from "../../actionTypes";
import {
  authStatusService,
  resendAccountVerificationOtpService,
  verifyAccountService,
} from "@/service/auth/verify";

export const verifyAccount = createAsyncThunk(
  actionTypes.VERIFY_ACCOUNT,
  async (data, { rejectWithValue }) => {
    try {
      const response = await verifyAccountService(data);
      return response;
    } catch (error) {
      // rejectWithValue(error);
      console.error(actionTypes.VERIFY_ACCOUNT, error);
      return error;
    }
  }
);

export const resendVerificationOtp = createAsyncThunk(
  actionTypes.RESEND_ACCOUNT_VERIFICATION_OTP,
  async (data, { rejectWithValue }) => {
    try {
      const response = await resendAccountVerificationOtpService(data);
      return response;
    } catch (error) {
      // rejectWithValue(error);
      console.error(actionTypes.RESEND_ACCOUNT_VERIFICATION_OTP, error);
      return error;
    }
  }
);

export const authStatus = createAsyncThunk(
  actionTypes.AUTH_STATUS,
  async (data, { rejectWithValue }) => {
    try {
      const response = await authStatusService();
      return response;
    } catch (error) {
      console.error(actionTypes.AUTH_STATUS, error);
      return rejectWithValue(error);
    }
  }
);
