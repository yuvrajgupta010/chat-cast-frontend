import { createSlice } from "@reduxjs/toolkit";
import { createAccount } from "./action";

const initialState = {
  loader: {
    isSigningUp: false,
  },
  receivedData: {},
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createAccount.pending, (state) => {
      state.loader.isSigningUp = true;
    });
    builder.addCase(createAccount.fulfilled, (state, action) => {
      state.loader.isSigningUp = false;
      state.receivedData = action.payload?.data?.data;
    });
    builder.addCase(createAccount.rejected, (state) => {
      state.loader.isSigningUp = false;
    });
  },
});

const signupReducers = signupSlice.reducer;
export default signupReducers;
