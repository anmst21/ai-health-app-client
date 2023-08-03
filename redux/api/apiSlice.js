import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: "/auth" }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (credentials) => ({
        url: "/register",
        method: "POST",
        body: credentials,
      }),
    }),
    newOtp: builder.mutation({
      query: (credentials) => ({
        url: "/resend-otp",
        method: "POST",
        body: credentials,
      }),
    }),
    verifyOTP: builder.mutation({
      query: (otp) => ({
        url: "/verify-register",
        method: "POST",
        body: otp,
      }),
    }),
    changePassword: builder.mutation({
      query: (email) => ({
        url: "/reset-password",
        method: "POST",
        body: email,
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useVerifyOTPMutation,
  useLoginMutation,
  useChangePasswordMutation,
  useNewOtpMutation,
} = apiSlice;
