import {
  AnyAction,
  configureStore,
  Store,
  ThunkDispatch,
} from "@reduxjs/toolkit";
import { apiSlice } from "./api/auth";
import authSlice from "./auth/authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware): any => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
export type AppStore = Omit<Store<RootState, AnyAction>, "dispatch"> & {
  dispatch: AppThunkDispatch;
};
export type AppDispatch = typeof store.dispatch;

export default store;
