import { configureStore } from "@reduxjs/toolkit";
import signupReducers from "./auth/signup/reducer";
import chatAppReducers from "./chatApp/reducer";

export const store = configureStore({
  reducer: {
    signup: signupReducers,
    chatApp: chatAppReducers,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
