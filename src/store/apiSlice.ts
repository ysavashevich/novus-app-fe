import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ENDPOINT } from "../constants";
import { setUser } from "./userSlice";

export type User = {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
  userType: string;
};

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: API_ENDPOINT }),
  reducerPath: "api",
  endpoints: (build) => ({
    register: build.mutation<any, User>({
      query: (user) => ({
        url: `/auth/register`,
        method: "POST",
        body: user,
      }),
    }),
    login: build.mutation<any, { email: string; password: string }>({
      query: (user) => ({
        url: `/auth/login`,
        method: "POST",
        body: user,
      }),
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
          dispatch(setUser({ token: data.access_token, user: data.user }));
        } catch (error) {
          console.log(error, "error");
        }
      },
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = apiSlice;
