import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

type InitialState = {
  isAuth: boolean;
  user: IUser;
};

const initialState: InitialState = {
  isAuth: false,
  user: {} as IUser,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
});

export const authSliceActions = authSlice.actions;
export default authSlice;
