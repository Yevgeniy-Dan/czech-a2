import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import { RootState } from "../store";

type InitialState = {
  isAuth: boolean;
  user: IUser;
  token: string | null;
};

const initialState: InitialState = {
  isAuth: false,
  user: {} as IUser,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setCredentials: (
      state,
      {
        payload: { user, token },
      }: PayloadAction<{ user: IUser; token: string }>
    ) => {
      state.user = user;
      state.token = token;
      state.isAuth = true;
    },
    resetCredentials: (state) => {
      state.isAuth = false;
      state.token = null;
      state.user = {} as IUser;
    },
  },
});

export const { setCredentials, resetCredentials } = authSlice.actions;

export const authSliceActions = authSlice.actions;
export default authSlice;

export const selectCurrentUser = (state: RootState) => state.auth.user;
