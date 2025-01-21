import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ENDPOINT } from "../constants";

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
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = apiSlice;
