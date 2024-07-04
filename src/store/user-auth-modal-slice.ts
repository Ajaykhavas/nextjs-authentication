import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialStateTypes = {
  isShowLoginPopup: boolean;
  isLoggedIn: boolean;
};

const initialState: InitialStateTypes = {
  isShowLoginPopup: false,
  isLoggedIn: false,
};

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    setIsShowLoginPopup: (state, action: PayloadAction<boolean>) => {
      state.isShowLoginPopup = action.payload;
    },
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setIsShowLoginPopup, setIsLoggedIn } = userAuthSlice.actions;

export default userAuthSlice.reducer;
