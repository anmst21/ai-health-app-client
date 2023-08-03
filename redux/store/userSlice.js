import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    otpExpires: "",
  },
  reducers: {
    registerEmail: (state, action) => {
      state.email = action.payload.email;
      state.otpExpires = action.payload.otpExpires;
    },
  },
});

export const { registerEmail } = userSlice.actions;

export default userSlice.reducer;
