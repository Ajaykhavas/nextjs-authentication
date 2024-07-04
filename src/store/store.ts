import { createLogger } from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import userAuthModalSlice from "./user-auth-modal-slice";

type InitialStateTypes = {
  isShowLoginPopup: boolean;
};

const initialState: InitialStateTypes = {
  isShowLoginPopup: false,
};

const loggerMiddleware = createLogger({
  level: "info",
  collapsed: true,
  predicate: () => true,
});

export const store = configureStore({
  reducer: {
    userAuth: userAuthModalSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
