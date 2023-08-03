import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const imageSlice = createApi({
  reducerPath: "imageSlice",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    submitUserInfoImage: builder.mutation({
      query: (imageData) => ({
        url: "/submitUserInfo/image",
        method: "POST",
        body: imageData,
      }),
    }),
    fetchUserInfoImage: builder.query({
      query: () => "/submitUserInfo/image",
    }),
    submitPostInfoImage: builder.mutation({
      query: (imageData) => ({
        url: "/submitPostInfo/image",
        method: "POST",
        body: imageData,
      }),
    }),
    fetchPostInfoImage: builder.query({
      query: () => "/submitPostInfo/imagee",
    }),
  }),
});

export const {
  useSubmitUserInfoImageMutation,
  useFetchUserInfoImageQuery,
  useSubmitPostInfoImageMutation,
  useFetchPostInfoImageQuery,
} = imageSlice;
