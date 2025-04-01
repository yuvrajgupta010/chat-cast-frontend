import { configureStore } from "@reduxjs/toolkit";
import signupReducers from "./auth/signup/reducer";
import chatAppReducers from "./chatApp/reducer";
import chatRoomReducers from "./chat/reducer";

export const store = configureStore({
  reducer: {
    signup: signupReducers,
    chatApp: chatAppReducers,
    chatRoom: chatRoomReducers,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
