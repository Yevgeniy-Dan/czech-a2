import { createApi } from "@reduxjs/toolkit/query/react";
import { AuthRequest } from "../../models/request/AuthRequest";
import { AuthResponse } from "../../models/response/AuthResponse";
import { baseQueryWithReauth } from "./baseQueryWithReauth";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    checkAuth: builder.mutation<AuthResponse, null>({
      query: () => "users/refresh",
    }),

    register: builder.mutation<AuthResponse, AuthRequest>({
      query: (credentials) => ({
        url: "/users",
        method: "POST",
        body: credentials,
      }),
    }),

    login: builder.mutation<AuthResponse, AuthRequest>({
      query: (credentials) => ({
        url: "/users/login",
        method: "POST",
        body: credentials,
      }),
    }),

    logout: builder.mutation({
      query: () => ({
        url: "/users/logout",
        method: "POST",
      }),
    }),

    getTests: builder.mutation<{ testId: number }, number>({
      query: (testId) => ({
        url: `/admin/test/${testId}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useCheckAuthMutation,
  useGetTestsMutation,
} = apiSlice;
export default apiSlice;
