import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import apiSlice from "./auth";
import { Mutex } from "async-mutex";
import { RootState } from "../store";
import { setCredentials } from "../auth/authSlice";

const mutex = new Mutex();
const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8080/api",
  prepareHeaders(headers, { getState }) {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
  credentials: "include",
});
export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const refreshResult: any = await baseQuery(
          "/users/refresh",
          api,
          extraOptions
        );
        if (refreshResult.data.accessToken) {
          const user: any = api.getState();

          localStorage.setItem("token", refreshResult.data.accessToken);
          api.dispatch(
            setCredentials({
              user: user.auth.user,
              token: refreshResult.data.accessToken,
            })
          );

          result = await baseQuery(args, api, extraOptions);
        } else {
          api.dispatch(apiSlice.endpoints.logout.initiate(null));
        }
      } finally {
        release();
      }
    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};
