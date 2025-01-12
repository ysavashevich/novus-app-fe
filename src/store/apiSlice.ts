import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ENDPOINT } from "../constants";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: API_ENDPOINT }),
  reducerPath: "api",
  endpoints: (build) => ({
    getPlaceholder: build.query<string, void>({
      query: () => ({
        url: `/temp`,
        responseHandler: (response) => response.text(),
      }),
    }),
  }),
});

export const { useGetPlaceholderQuery } = apiSlice;
