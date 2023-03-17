import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../../models/IUser";
import { AuthRequest } from "../../models/request/AuthRequest";
import { AuthResponse } from "../../models/response/AuthResponse";
import { authSliceActions } from "../auth/authSlice";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    credentials: "include",
  }),
  endpoints: (builder) => ({
    register: builder.query<AuthResponse, AuthRequest>({
      query: (userData) => ({
        url: "/users",
        method: "POST",
        body: userData,
      }),
      async onQueryStarted(userData, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          localStorage.setItem("token", data.accessToken);
          dispatch(authSliceActions.setAuth(true));
          dispatch(authSliceActions.setUser(data.user));
        } catch (error) {
          console.log("register failed", error);
        }
      },
    }),

    login: builder.query<AuthResponse, AuthRequest>({
      query: (userData) => ({
        url: "/users/login",
        method: "POST",
        body: userData,
      }),
      async onQueryStarted(userData, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          localStorage.setItem("token", data.accessToken);
          dispatch(authSliceActions.setAuth(true));
          dispatch(authSliceActions.setUser(data.user));
        } catch (error) {
          console.log("login failed", error);
        }
      },
    }),

    logout: builder.query({
      query: () => ({
        url: "/users/logout",
        method: "POST",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          localStorage.removeItem("token");
          dispatch(authSliceActions.setAuth(false));
          dispatch(authSliceActions.setUser({} as IUser));
        } catch (error) {}
      },
    }),
  }),
});

export const { useRegisterQuery, useLoginQuery, useLogoutQuery } = apiSlice;
export default apiSlice;
