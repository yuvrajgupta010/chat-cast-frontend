import { configureStore } from "@reduxjs/toolkit";
import signupReducers from "./auth/signup/reducer";

export const store = configureStore({
  reducer: {
    signup: signupReducers,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
